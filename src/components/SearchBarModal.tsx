
import React, { FC, useEffect, useRef} from 'react';

import { Modal, Input, Spin, Empty, Tooltip } from 'antd';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import {  useRequest, useSafeState, useUpdateEffect } from 'ahooks';
import apiClient from '../utils/request';

interface TSearchBarModalProps {
    isOpen: boolean;
    reviseModalStatusMemoizedFn: () => void;
}

const getSearchPower = (searchValue) => apiClient.get(`https://yaklang.com/api/ai/search?keywords=${searchValue}`, { withCredentials: true })
// const getSearchPower = (searchValue) => apiClient.get(`/api/ai/search?keywords=${searchValue}`, { withCredentials: true })


export const SearchBarModal: FC<TSearchBarModalProps> = ({ isOpen, reviseModalStatusMemoizedFn }) => { 
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const searchRef = useRef<Input | null>(null);

    const [iframeUrl, setIframeUrl] = useSafeState<string | null>(null);
    const [searchValue, setSearchValue] = useSafeState("")
    const [dataList, setDataList] = useSafeState<Array<any>>([])
    const [searchTag, setSearchTag] = useSafeState<string>("")

    const { loading, runAsync, refresh } = useRequest(getSearchPower, {
        manual: true,
        onSuccess: (values: string) => {
            try {
                const jsonValues = JSON.parse(values)
                if (Array.isArray(jsonValues)) {
                    const searchListFlat = jsonValues.flat(Infinity)
                    const parsedData = searchListFlat.map(s => JSON.parse(s));
                    const mapList = parsedData.map(item => {
                        try {
                            // 检查 result 是否是一个字符串，并尝试解析
                            const parsed = JSON.parse(item.result);
                            return typeof parsed === 'object' ? { result: parsed } : item;
                        } catch {
                            // 解析失败，说明不是 JSON，直接返回原对象
                            return item;
                        }
                    })
                    const fliterList = mapList.filter(items => typeof (items.result) === "object")

                    const filterTag = Array.from(
                        new Map(
                            mapList
                            .filter(item => typeof item.result === "string")
                            .map(item => [item.result, item]) // 用 result 做 key
                        ).values()
                    ).map((item: any) => item.result).join(" ");
                    setSearchTag(filterTag)

                    const resultList = fliterList.map(item =>
                        item?.result?.chunkList ?
                            item.result.chunkList :
                            item.result?.records?.chunkList
                    )?.flat(Infinity)

                    const uniqueData = resultList.filter((item, index, self) =>
                        self.findIndex(i => i.documentName === item.documentName) === index
                    ).map(items => {
                        const match = items?.content?.match(/【正文】:(.*)/s); // `s` 让 `.` 匹配换行
                        const content = match ? match[1].trim() : "";
                        return {
                            ...items,
                            content
                        }
                    });
                    setDataList(uniqueData)
                } else {
                    return 
                }
            } catch (error) {
                console.error(error, 'error')
            }
        },
        onError: (error: any) => {
            const responseErrorText = error?.response?.request?.responseText;
            const matchUrl = responseErrorText?.match(/href='(.*?)'/);
            const targetHerfUrl = matchUrl ? `${matchUrl[1]}` : undefined;

            if (targetHerfUrl) {
                // window.location.href = targetHerfUrl; // 直接跳转到新的 URL
                setTimeout(() => {
                    setIframeUrl("https://yaklang.com" + targetHerfUrl); // 让 React 处理 iframe 渲染
                }, 300)
            } else {
                console.error(error, 'error')
            }
        },
        debounceWait: 500,
    })

    const handSearchChange = async() => {
        searchValue && searchValue.length > 0 && await runAsync(searchValue)
    }


    // 清空 iframe
    const clearIframe = () => {
        setIframeUrl(null)
        iframeRef.current = null
    }

    const handleMessage = (event: MessageEvent) => {
        const source = event.source as any
        if (
            event &&
            source.location &&
            source.location.pathname &&
            source.location.pathname?.length > 1) {
                if (event.data.status === "success") {
                    clearIframe()
                     refresh()
                }
            }
    };

    useEffect(() => {
        window.addEventListener("message", handleMessage);
        return () => {
            window.removeEventListener("message", handleMessage);
        };
    })

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                searchRef.current?.focus();
            }, 0);
        }
    }, [isOpen])
    
    return (
        <Modal
            visible={isOpen}
            footer={null}
            width={800}
            keyboard={true}
            closeIcon={null}
            onCancel={reviseModalStatusMemoizedFn}
            className='search-bar-modal'
            closable={false}
            destroyOnClose
            afterClose={() => {
                clearIframe()
                setSearchValue("")
                setDataList([])
            }}
        >
            {iframeUrl ? (
                <iframe
                    ref={iframeRef}
                    src={iframeUrl}
                    width="100%"
                    height="600px"
                    style={{ border: "none" }}
                />
            ) : (
                <div className='modal-container'>
                    <Input.Search
                        value={searchValue}
                        ref={searchRef}
                        enterButton
                        onChange={e => setSearchValue(e.target.value)}
                        onSearch={handSearchChange}
                        placeholder="Search docs"
                        size="large"
                        prefix={<SearchOutlined />}
                        className='custom-search'
                    />
                    <Spin spinning={loading}>
                        {
                            Array.isArray(dataList) && dataList.length > 0 ?
                                <div className='context-box'>
                                        <div className='search-bar-tag'>
                                            {searchTag}
                                            <span className='search-bar-tag-cursor' />
                                        </div>
                                    { dataList?.map((item) => (<ModalContent key={item.documentName} item={item} />)) }
                                </div>:
                                    <Empty
                                        style={{ margin: "24px 0" }}
                                        description={
                                            <span>暂无数据
                                                <span
                                                    onClick={() => {
                                                        searchValue && searchValue.length > 0 &&
                                                        runAsync(searchValue)
                                                    }}
                                                    style={{ color: "rgba(174, 141, 216)", cursor: "pointer" }}
                                                >
                                                    &nbsp;请重试
                                                </span>
                                            </span>
                                        }
                                    />
                        }
                    </Spin>
                </div>
            )}
        </Modal>
    )
}


const ModalContent: FC<{item: any}> = ({item}) => {
    const url = `${window.location.protocol}//${window.location.hostname}${item.documentName}`
    // const [expand, setExpand] = React.useState(true);

    // const handExpand = () => {
    //     setExpand(!expand);
    // }
    return (
        <div
            className='search-bar-content-box'
            id="captchaIframe"
            onClick={
                () => window.location.href = (`/${item.documentName}`)
            }
        >
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start"}}>
                <div
                    style={{ color: "rgba(174, 141, 216)", display: "flex", alignItems: "flex-start"}}
                >
                    <div
                        style={{ maxWidth: "450px", cursor: "pointer"}}
                    >
                        <span style={{ fontWeight: 600 }}>URL：</span>
                        <span
                            style={{
                            display: "inline",
                            wordBreak: "break-all",
                            }}
                        >
                            {url}
                        </span>
                    </div>
                    <div style={{
                        marginLeft: "8px",
                        background: "rgba(174, 141, 216)",
                        color: "#fff",
                        borderRadius: "12px",
                        padding: "2px 8px",
                    }}>
                        关联度：{Math.round(item.score * 100) / 100}
                    </div>
                </div>
                {/* <div
                    style={{
                        marginLeft: "8px",
                        backgroundColor: "#aae3f6",
                        color: "#fff",
                        borderRadius: "12px",
                        padding: "2px 8px",
                    }}
                >
                    JSON
                </div> */}
            </div>
            <div style={{lineHeight: '36px'}}>来源文档： {item.documentName}</div>
            <div className='search-bar-content' style={{ WebkitLineClamp: 4, }}>
                {item.content}
            </div>
            {/* <div className='expand-icon' onClick={handExpand}>
                <DownOutlined
                    style={{
                        color: '#1890ff',
                        zIndex: 9,
                        width: '100%',
                        textAlign: 'center',
                        transform: `rotate(${expand ? 0 : 180}deg)`,
                        transition: 'all 0.3s ease',
                    }}
                />
            </div> */}
        </div>
    )
}

//  `${expand ? 4 : "none"}`