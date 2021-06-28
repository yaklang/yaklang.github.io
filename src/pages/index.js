import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import TypeIt from 'typeit-react'
import Tilt from 'react-parallax-tilt';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    // 设置 BG
    const [bg, setBg] = useState();

    useEffect(() => {
        var m = require("../particles-bg")
        setBg(m)
    }, [])

    return (
        <Tilt tiltEnable={true} tiltReverse={false} tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                {bg && (new bg.default({type: "circle", bg: true})).render()}
                <div className="container" style={{}}>
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className="button button--secondary button--lg"
                            to="/docs/intro">
                            <TypeIt>
                                Yak 会成为
                                <del style={{color: "red"}}> 北半球最</del>
                                优秀的 Web 安全研发脚本语言
                            </TypeIt>
                        </Link>
                        <br/>
                    </div>
                </div>
            </header>
        </Tilt>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <>
            <Layout
                title={`Yak Language ${siteConfig.title}`}
                description="立志成为Web安全能力研发最强语言">
                <HomepageHeader/>
                <main>
                    <HomepageFeatures/>
                </main>
            </Layout>
        </>

    );
}
