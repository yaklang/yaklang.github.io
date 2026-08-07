import React from "react";
import { COOPERATIVE_PARTNERS } from "../CooperativePartner";

const HomePartnerMarquee: React.FC = () => {
  const partners = COOPERATIVE_PARTNERS;
  if (!partners.length) return null;

  const track = [...partners, ...partners];
  /** 按数量拉长时长，避免 logo 过多时滚动过快 */
  const durationSec = Math.max(40, partners.length * 3.2);

  return (
    <div
      className="w-full shrink-0 py-[12px] sm:py-[20px]"
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
      <div className="mx-auto w-full max-w-[1400px] overflow-hidden px-[18px] lg:px-[80px]">
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
                src={item.img}
                alt={item.name}
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
