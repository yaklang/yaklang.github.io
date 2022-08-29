import React from "react";
import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const SelectedSvg = () => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <title>具备</title>
        <g id="Yak-官网" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="官网商业互作版设计备份-3" transform="translate(-1070.000000, -1482.000000)">
                <g id="Yakit-模块" transform="translate(384.000000, 1246.000000)">
                    <g id="文案" transform="translate(686.000000, 70.000000)">
                        <g id="编组-4备份-6" transform="translate(0.000000, 160.000000)">
                            <g id="icon/操作编辑类/正确" transform="translate(0.000000, 6.000000)">
                                <path
                                    d="M12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 Z M12,4.5 C7.85786438,4.5 4.5,7.85786438 4.5,12 C4.5,16.1421356 7.85786438,19.5 12,19.5 C16.1421356,19.5 19.5,16.1421356 19.5,12 C19.5,7.85786438 16.1421356,4.5 12,4.5 Z M16.2959415,9.18198052 L17.3566017,10.2426407 L10.9926407,16.6066017 L6.75,12.363961 L7.81066017,11.3033009 L10.992,14.48475 L16.2959415,9.18198052 Z"
                                    id="形状"
                                    fill="#36D3A6"
                                ></path>
                                <rect id="矩形-copy-68" x="0" y="0" width="24" height="24"></rect>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
);
export const SelectedSvgIcon = (props: Partial<CustomIconComponentProps>) => {
    return <Icon component={SelectedSvg} {...props} />;
};
