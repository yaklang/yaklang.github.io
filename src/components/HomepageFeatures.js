import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import TypeIt from "typeit-react";

const FeatureList = [
    {
        title: '简洁稳定的语法',
        Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                <strong>强类型</strong>+动态类型
                <br/>
                语法基于 Golang，但是更宽松
                <br/>
                反射机制实现的嵌入式语言
                <br/>
                熟悉的 <code>go</code> 关键字启动 <code>goroutine</code>
            </>
        ),
    },
    {
        title: '优质稳定的工具包',
        Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                Yak 把各种安全常用的模块集成在语言层面，极大释放大家的想象力。
                <br/>
                <code>synscan</code> SYN 端口扫描
                <br/>
                <code>servicescan</code> 端口指纹扫描
                <br/>
                <code>mitm</code> 中间人劫持
                <br/>
                <code>crawler</code> 爬虫
                <br/>
                不断更新，推陈出新

            </>
        ),
    },
    {
        title: '独一无二的 Web Fuzz 可编程',
        Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                如果说前面的功能让你提不起兴趣，那么我相信 yak 独一无二的针对 Web 安全领域的 <code>fuzz</code> 模块一定能让你感受出他的与众不同
                <br/>
                <br/>
                <a href="/docs/语言内置功能库/8模糊测试：Fuzz#fuzz-http-请求">可能是北半球最好用的 web 安全 fuzz 模块</a>
            </>
        ),
    },
    {
        title: '企业级落地经验',
        Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
            </>
        ),
    },
    {
        title: 'AAA',
        Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} alt={title}/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
