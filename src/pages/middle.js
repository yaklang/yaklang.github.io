import { notification } from "antd";
import React, { useEffect, useRef } from "react";

const queryURLParams = (url) => {
    var urls = url.split("?")[1];
    const urlSearchParams = new URLSearchParams(urls);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params;
};

const failed = (msg) => {
    notification["error"]({ message: msg, placement: "topRight" });
};

export default function Middle() {
    const timeRef = useRef(0);

    useEffect(() => {
        const url = window.location.href;
        const params = queryURLParams(url);
        const source = params.source;
        const code = params.code;

        const time = setInterval(() => {
            if (timeRef.current >= 60) {
                clearInterval(time);
                failed("请求超时，请重新请求");
            }
            timeRef.current = timeRef.current + 1;
        }, 1000);

        if (source === "wechatlogin" || source === "wechatauth") {
            window.parent.postMessage({ source, code }, "*");
        }
    });

    return (
        <main>
            <div className="login-middle-body">
                <div className="middle-loading-body">
                    <div className="multi-spinner-container">
                        <div className="multi-spinner">
                            <div className="multi-spinner">
                                <div className="multi-spinner">
                                    <div className="multi-spinner">
                                        <div className="multi-spinner">
                                            <div className="multi-spinner"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="loading-body-title">正在登录验证中，请稍等片刻......</div>
                </div>
            </div>
        </main>
    );
}
