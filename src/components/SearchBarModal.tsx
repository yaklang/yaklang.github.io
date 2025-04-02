
import React, { FC, useEffect, useRef} from 'react';

import { Modal, Input, Spin, Empty, Tooltip } from 'antd';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import {  useRequest, useSafeState, useUpdateEffect } from 'ahooks';
import apiClient from '../utils/request';

interface TSearchBarModalProps {
    isOpen: boolean;
    reviseModalStatusMemoizedFn: () => void;
}

const getSearchPower = (searchValue) => apiClient.get(`/ai/search?keywords=${searchValue}`, { withCredentials: true })


export const SearchBarModal: FC<TSearchBarModalProps> = ({ isOpen, reviseModalStatusMemoizedFn }) => { 
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const searchRef = useRef<Input | null>(null);

    const [iframeUrl, setIframeUrl] = useSafeState<string | null>(null);
    const [searchValue, setSearchValue] = useSafeState("")
    const [dataList, setDataList] = useSafeState<Array<any>>([])

    const { loading, runAsync, refresh } = useRequest(getSearchPower, {
        manual: true,
        onSuccess: (values: string) => {
            const searchListFlat = JSON.parse(values).flat(Infinity)
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
            const resultList = fliterList.map(item =>
                item?.result?.chunkList ?
                    item.result.chunkList :
                    item.result?.records?.chunkList
            ).flat(Infinity)

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
        },
        onError: (error: any) => {
            const responseErrorText = error?.response?.request?.responseText;
            const matchUrl = responseErrorText?.match(/href='(.*?)'/);
            const targetHerfUrl = matchUrl ? `${matchUrl[1]}` : undefined;

            if (targetHerfUrl) {
                // window.location.href = targetHerfUrl; // 直接跳转到新的 URL
                setTimeout(() => {
                    setIframeUrl(targetHerfUrl); // 让 React 处理 iframe 渲染
                }, 300)
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
                                    { dataList?.map((item) => (<ModalContent key={item.documentName} item={item} />)) }
                                </div>:
                                <Empty style={{margin: "24px 0"}} description="暂无数据" />
                        }
                    </Spin>
                </div>
            )}
        </Modal>
    )
}


const ModalContent: FC<{item: any}> = ({item}) => {
    // const [expand, setExpand] = React.useState(true);

    // const handExpand = () => {
    //     setExpand(!expand);
    // }
    return (
        <div className='search-bar-content-box' id="captchaIframe">
            <div className='search-bar-content' style={{ WebkitLineClamp: 4, }} onClick={
                    () => window.location.href = (`/${item.documentName}`)
                }
            >
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