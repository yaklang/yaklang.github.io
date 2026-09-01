import React from "react";
import { COOPERATIVE_PARTNERS } from "../CooperativePartner";
import { useLoadWhenHomeSlide } from "./useLoadWhenHomeSlide";

// Keep every optimized path as a literal so prepare-oss-assets can replace it
// with its content-addressed OSS URL. Runtime path manipulation bypasses that
// build step and can accidentally combine an old asset hash with a new suffix.
// width/height 是各 webp 的原始像素尺寸（sips 实测）：img 上显式声明可让浏览器
// 在图片加载前预留宽度（h 固定 28px、w 随纵横比伸缩），消除 logo 陆续加载时
// 的横向布局位移（2026-09-01 审计 [Medium] 首页 CLS）。替换图片时需同步更新。
type PartnerAsset = { src: string; width: number; height: number };
const OPTIMIZED_PARTNER_BY_NAME: Record<string, PartnerAsset> = {
  亚信安全: { src: "/img/home-optimized/partners/asiainfo-sec.webp", width: 276, height: 74 },
  奇安信: { src: "/img/home-optimized/partners/logo.webp", width: 280, height: 51 },
  HackingClub: { src: "/img/home-optimized/partners/hacking.webp", width: 280, height: 46 },
  米斯特安全: { src: "/img/home-optimized/partners/acmesec.webp", width: 280, height: 78 },
  云众可信: { src: "/img/home-optimized/partners/sec-in.webp", width: 269, height: 80 },
  "58": { src: "/img/home-optimized/partners/security58.webp", width: 280, height: 50 },
  CTstack: { src: "/img/home-optimized/partners/CTstack.webp", width: 186, height: 54 },
  E安全: { src: "/img/home-optimized/partners/E安全.webp", width: 250, height: 80 },
  嘶吼: { src: "/img/home-optimized/partners/4hou.webp", width: 280, height: 76 },
  四叶草安全: { src: "/img/home-optimized/partners/seclover.webp", width: 231, height: 80 },
  安全脉搏: { src: "/img/home-optimized/partners/secpulse.webp", width: 273, height: 80 },
  智联SRC: { src: "/img/home-optimized/partners/zhaopin.webp", width: 280, height: 38 },
  度小满: { src: "/img/home-optimized/partners/duxiaoman.webp", width: 280, height: 53 },
  贝壳: { src: "/img/home-optimized/partners/beike.webp", width: 280, height: 49 },
  快手: { src: "/img/home-optimized/partners/kuaishou.webp", width: 280, height: 49 },
  小米: { src: "/img/home-optimized/partners/xiaomi.webp", width: 280, height: 75 },
  无糖信息: { src: "/img/home-optimized/partners/wutang.webp", width: 280, height: 50 },
  三叶草: { src: "/img/home-optimized/partners/sycsec.webp", width: 79, height: 80 },
  c4安全团队: { src: "/img/home-optimized/partners/c4.webp", width: 253, height: 80 },
};

const HomePartnerMarquee: React.FC = () => {
  const partners = COOPERATIVE_PARTNERS.map((partner) => {
    const asset = OPTIMIZED_PARTNER_BY_NAME[partner.name];
    if (!asset) {
      throw new Error(`Missing optimized homepage partner asset: ${partner.name}`);
    }
    return { ...partner, asset };
  });
  const shouldLoadImages = useLoadWhenHomeSlide(1);
  if (!partners.length) return null;

  const track = [...partners, ...partners];
  /** 按数量拉长时长，避免 logo 过多时滚动过快 */
  const durationSec = Math.max(40, partners.length * 3.2);

  return (
    <div
      className="w-full shrink-0 py-[12px] opacity-30 sm:py-[20px]"
      aria-label="合作伙伴"
    >
      <style>{`
        @keyframes home-partner-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .home-partner-marquee-track {
          animation: home-partner-marquee ${durationSec}s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .home-partner-marquee-track {
            animation: none;
          }
        }
      `}</style>
      <div className="w-full overflow-hidden">
        <div className="home-partner-marquee-track flex w-max items-center gap-[40px] sm:gap-[56px]">
          {track.map((item, index) => (
            <a
              key={`${item.name}-${index}`}
              href={item.links}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[28px] shrink-0 items-center !no-underline"
              aria-label={item.name}
            >
              <img
                src={shouldLoadImages ? item.asset.src : undefined}
                alt={item.name}
                width={item.asset.width}
                height={item.asset.height}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                style={item.scale ? { scale: item.scale } : undefined}
                className="h-[28px] w-auto max-w-[140px] object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePartnerMarquee;
