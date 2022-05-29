import React from "react";
import { Button, Card, Divider, Popover } from "antd";
import { GithubOutlined, HomeFilled } from "@ant-design/icons";
import { LocationSvgIcon } from "./icons";

export interface HomeProps {}

export const Home: React.FC<HomeProps> = (props) => {
    return (
        <div className="home-container">
            <div className="guide-body">
                <img src="../../static//img/home/homeHeadBg.png" />
                <div className="guide-words-body">
                    <div>网络安全领域的 DSL 最佳实践</div>
                    <div>
                        不管你是企业用户，还是白帽子，还是普通的安全从业人员，我们希望，Yak
                        会是你工作的好伙伴
                    </div>
                    <div>
                        <Button>213</Button>
                        <Button>123</Button>
                    </div>
                </div>
            </div>

            <div></div>

            <div></div>

            <div></div>
        </div>
    );
};
