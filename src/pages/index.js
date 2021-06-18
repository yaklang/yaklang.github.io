import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import TypeIt from 'typeit-react'

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro">
                        <TypeIt>
                            Yak 立志成为<del style={{color: "red"}}> 北半球最 </del>
                            优秀的 Web 安全研发脚本语言

                            <br/>
                            欢迎来到 Yak
                        </TypeIt>
                    </Link>
                    <br/>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Yak Language ${siteConfig.title}`}
            description="立志成为Web安全能力研发最强语言">
            <!-- Hotjar Tracking Code for yaklang.github.io -->
            <script>
                (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:2460188,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            </script>
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
