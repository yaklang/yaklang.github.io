import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

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
                <a href="/docs/语言内置功能库/lib_fuzz">可能是北半球最好用的 web 安全 fuzz 模块</a>
            </>
        ),
    },
    {
        title: '企业级落地经验',
        Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                源于企业内部项目 <br/>
                作者同时具有安全行业甲方乙方从业经验 <br/>
                丰富的甲方自研安全产品落地经验 <br/>
                丰富的乙方商业安全产品研发经验
            </>
        ),
    },
    {
        title: '高质量代码与强健生态',
        Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                Golang 作为语言基石 <br/>
                性能强于 Python 不止一星半点 <br/>
                主动集成网络空间搜索引擎 <br/>
                主动集成优秀的安全工具调用 <br/>
            </>
        ),
    },
    {
        title: '极速编写 PoC 与漏洞验证',
        Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                强大易用的内置基础库让编写 PoC/Exp 的成本 <br/>
                <h3>一降再降</h3>
                独一无二的 Fuzz 功能库，让漏洞自动化检测变得 <br/>
                <h3>非常简单</h3>
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
