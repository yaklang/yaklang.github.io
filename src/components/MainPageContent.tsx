// @ts-ignore
import React from "react";
import {Col, Layout, Row, Image} from "antd";

export interface MainPageContentProp {

}

export const MainPageContent: React.FC<MainPageContentProp> = (props) => {
    return <div>
        <Layout style={{backgroundColor: "#fff", margin: 24}}>
            <Row gutter={24}>
                <Col span={8}>
                    Content1
                </Col>
                <Col span={16}>
                    Content2
                </Col>
            </Row>
        </Layout>
    </div>
};