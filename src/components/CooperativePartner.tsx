import React, { ReactNode, useEffect, useRef, useState } from "react";

import "./cooperativePartnerPage.scss";

export interface CooperativePartnerInfoProps {
  img: string;
  name: string;
  links: string;
  scale?: string;
}

interface CooperativePartnerRenderProps {
  info: CooperativePartnerInfoProps;
}
const CooperativePartnerRender: React.FC<CooperativePartnerRenderProps> = (
  props
) => {
  const { img, name, links, scale } = props.info;
  return (
    <div className="cooperative-partner-item">
      <a
        className="cooperative-partner-item-link"
        href={links}
        target={"_blank"}
      >
        <div className="img-box">
            <img
          style={scale ? { scale } : {}}
          className="cooperative-partner-item-img"
          src={img}
          alt={name}
        />
        </div>
        
        {/* <div className="cooperative-partner-item-title">{name}</div> */}
      </a>
    </div>
  );
};

export interface CooperativePartnerPageProps {}

export const CooperativePartnerPage: React.FC<
  CooperativePartnerPageProps
> = () => {
  const CooperativePartnerInfo: CooperativePartnerInfoProps[] = [
    {
      img: "/img/partner/logo.png",
      name: "奇安信",
      links: "https://hunter.qianxin.com",
    },
    {
      img: "/img/partner/hacking.png",
      name: "HackingClub",
      links: "https://hacking.club",
    },
    {
      img: "/img/partner/acmesec.png",
      name: "米斯特安全",
      links: "http://www.acmesec.cn/",
      scale:"0.9"
    },
    {
      img: "/img/partner/sec-in.png",
      name: "云众可信",
      links: "https://sec-in.com",
      scale:"0.8"
    },
    {
      img: "/img/partner/security58.png",
      name: "58",
      links: "https://security.58.com/",
    },
    {
      img: "/img/partner/CTstack.png",
      name: "CTstack",
      links: "https://stack.chaitin.com/tool/detail?id=1",
      scale:"0.7"
    },
  
    {
      img: "/img/partner/E安全.png",
      name: "E安全",
      links: "https://mp.weixin.qq.com/s/9ajQFu3Kjs3KovAcF8qkug",
      scale:"0.9"
    },

    {
      img: "/img/partner/4hou.png",
      name: "嘶吼",
      links: "https://www.4hou.com/",
    },

    {
      img: "/img/partner/seclover.png",
      name: "四叶草安全",
      links: "https://www.seclover.com/",
    },

    {
      img: "/img/partner/secpulse.png",
      name: "安全脉搏",
      links: "https://www.secpulse.com/",
      scale:"1.3"
    },

    {
      img: "/img/partner/zhaopin.png",
      name: "智联SRC",
      links: "https://src.zhaopin.com/",
      scale:"1.1"
    },
    {
      img: "/img/partner/duxiaoman.png",
      name: "度小满",
      links: "https://security.duxiaoman.com",
      scale:"1.1"
    },

    {
      img: "/img/partner/beike.png",
      name: "贝壳",
      links: "https://security.ke.com",
    },
    {
      img: "/img/partner/kuaishou.png",
      name: "快手",
      links: "https://security.kuaishou.com/",
    },
    // {
    //   img: "/img/partner/butian.png",
    //   name: "补天",
    //   links: "https://www.butian.net/",
    // },
    {
      img: "/img/partner/xiaomi.png",
      name: "小米",
      links: "https://sec.xiaomi.com",
    },
    
    {
      img: "/img/partner/wutang.png",
      name: "无糖信息",
      links: "https://www.nosugartech.com/#/",
      scale:"0.85"
    },
    {
      img: "/img/partner/sycsec.png",
      name: "三叶草",
      links: "https://www.sycsec.com/",
    },
  ];

  return (
    <div className="cooperative-partner-page">
      <div className="cooperative-partner-page-header-title">合作伙伴</div>
      <div className="cooperative-partner-page-header-second-title">感谢各位合作伙伴的支持，以下合作伙伴排序不分先后</div>
      <div className="cooperative-partner-page-wrapper">
        <div className="cooperative-partner-flex-wrapper">
          {CooperativePartnerInfo.map((item) => (
            <CooperativePartnerRender key={item.name} info={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
