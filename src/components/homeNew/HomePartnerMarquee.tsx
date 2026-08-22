import React from "react";
import { COOPERATIVE_PARTNERS } from "../CooperativePartner";
import { useLoadWhenHomeSlide } from "./useLoadWhenHomeSlide";

// Keep every optimized path as a literal so prepare-oss-assets can replace it
// with its content-addressed OSS URL. Runtime path manipulation bypasses that
// build step and can accidentally combine an old asset hash with a new suffix.
const OPTIMIZED_PARTNER_BY_NAME: Record<string, string> = {
  亚信安全: "/img/home-optimized/partners/asiainfo-sec.webp",
  奇安信: "/img/home-optimized/partners/logo.webp",
  HackingClub: "/img/home-optimized/partners/hacking.webp",
  米斯特安全: "/img/home-optimized/partners/acmesec.webp",
  云众可信: "/img/home-optimized/partners/sec-in.webp",
  "58": "/img/home-optimized/partners/security58.webp",
  CTstack: "/img/home-optimized/partners/CTstack.webp",
  E安全: "/img/home-optimized/partners/E安全.webp",
  嘶吼: "/img/home-optimized/partners/4hou.webp",
  四叶草安全: "/img/home-optimized/partners/seclover.webp",
  安全脉搏: "/img/home-optimized/partners/secpulse.webp",
  智联SRC: "/img/home-optimized/partners/zhaopin.webp",
  度小满: "/img/home-optimized/partners/duxiaoman.webp",
  贝壳: "/img/home-optimized/partners/beike.webp",
  快手: "/img/home-optimized/partners/kuaishou.webp",
  小米: "/img/home-optimized/partners/xiaomi.webp",
  无糖信息: "/img/home-optimized/partners/wutang.webp",
  三叶草: "/img/home-optimized/partners/sycsec.webp",
  c4安全团队: "/img/home-optimized/partners/c4.webp",
};

const HomePartnerMarquee: React.FC = () => {
  const partners = COOPERATIVE_PARTNERS.map((partner) => {
    const optimizedImg = OPTIMIZED_PARTNER_BY_NAME[partner.name];
    if (!optimizedImg) {
      throw new Error(`Missing optimized homepage partner asset: ${partner.name}`);
    }
    return { ...partner, optimizedImg };
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
                src={shouldLoadImages ? item.optimizedImg : undefined}
                alt={item.name}
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
