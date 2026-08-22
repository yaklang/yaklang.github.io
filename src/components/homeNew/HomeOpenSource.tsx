import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import { resolveOpenSourceProjects } from "@site/src/components/OpenSource";
import {
  HOME_CONTAINER_CLASS,
  HOME_SECTION_CENTER_CLASS,
} from "./homeSectionLayout";

// =========================================================
// 图标
// =========================================================
const SearchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowUpRightIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M4.66675 11.3333L11.3334 4.66663M11.3334 4.66663H4.66675M11.3334 4.66663V11.3333"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// =========================================================
// 数据模型
// =========================================================
type ProjectItem = {
  id: string;
  title: string;
  desc: string;
  docUrl: string;
  accent: string;
  bg: string;
  border: string;
};

const DESKTOP_MQ = "(min-width: 1280px)";
const TABLET_MQ = "(min-width: 756px)";

/** 每页 2 排；< 756px → 1 列（竖排），756–1279px → 2 列，≥ 1280px → 3 列 */
function useColumns() {
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    const desktopMq = window.matchMedia(DESKTOP_MQ);
    const tabletMq = window.matchMedia(TABLET_MQ);
    const update = () => {
      if (desktopMq.matches) setColumns(3);
      else if (tabletMq.matches) setColumns(2);
      else setColumns(1);
    };
    update();
    desktopMq.addEventListener("change", update);
    tabletMq.addEventListener("change", update);
    return () => {
      desktopMq.removeEventListener("change", update);
      tabletMq.removeEventListener("change", update);
    };
  }, []);

  return columns;
}

const PROJECTS = (t: (key: string) => string): ProjectItem[] =>
  resolveOpenSourceProjects(t).map((project) => ({
    id: project.id,
    title: project.name,
    desc: project.description,
    docUrl: project.url,
    accent: project.accent,
    bg: project.bg,
    border: project.border,
  }));

// =========================================================
// 辅助函数
// =========================================================
const chunk = <T,>(arr: T[], size: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const Card: React.FC<ProjectItem> = ({
  title,
  desc,
  docUrl,
  accent,
  bg,
  border,
}) => {
  const { t } = useTranslation();
  return (
    <a
      href={docUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-[200px] cursor-pointer flex-col justify-between gap-[16px] overflow-hidden rounded-[8px] border border-solid p-[20px] !text-[color:var(--Colors-Use-Neutral-Text-1-Title)] !no-underline transition-colors duration-200 hover:!text-[color:var(--Colors-Use-Neutral-Text-1-Title)] xl:h-[225px]"
      style={{ backgroundColor: bg, borderColor: border }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = border;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = bg;
      }}
    >
      <div className="flex min-h-0 flex-col gap-[12px] overflow-hidden">
        <div className="m-0 min-h-0 shrink-0 text-left font-['Crimson_Text'] text-[22px] leading-[28px] !text-[color:var(--Colors-Use-Neutral-Text-1-Title)] sm:text-[26px] sm:leading-[32px] xl:text-[28px] xl:leading-[34px] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
          {title}
        </div>
        <p className="m-0 min-h-0 text-left font-['PingFang_SC'] text-[13px] leading-[20px] tracking-[0.15px] !text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)] sm:text-[14px] sm:leading-[22px] xl:text-[15px] xl:leading-[24px] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
          {desc}
        </p>
      </div>
      <span className="mt-auto inline-flex items-center gap-[4px] font-['PingFang_SC'] text-[13px] leading-[18px] tracking-[0.15px] !text-[color:var(--Colors-Use-Neutral-Text-4-Help-text)] transition-colors duration-200 group-hover:!text-[color:var(--Colors-Use-Main---web-Primary)]">
        {t("HomeOpenSource.viewDocs")}
        <span className="inline-flex">{ArrowUpRightIcon}</span>
      </span>
    </a>
  );
};

// =========================================================
// 组件
// =========================================================
const HomeOpenSource: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language?.startsWith("en");
  const columns = useColumns();
  // 宽屏 4×2=8；中屏 3×2=6；窄屏 3
  const pageSize = columns >= 2 ? columns * 2 : 3;
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);

  const projects = useMemo(() => PROJECTS(t), [t]);

  const filteredProjects = useMemo(() => {
    if (!query.trim()) return projects;
    const q = query.toLowerCase();
    return projects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q),
    );
  }, [query, projects]);

  const pages = useMemo(
    () => chunk(filteredProjects, pageSize),
    [filteredProjects, pageSize],
  );

  useEffect(() => {
    setActiveIndex(0);
    swiperRef?.slideTo(0);
  }, [pageSize, query, swiperRef]);

  useEffect(() => {
    if (!swiperRef) return;
    const onResize = () => {
      swiperRef.update();
    };
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, [swiperRef, pageSize]);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <section className="box-border flex h-full w-full flex-col overflow-hidden bg-[var(--Colors-Use-Main---Gold-Bg)]">
      <div
        className={`mx-auto w-full overflow-hidden ${HOME_CONTAINER_CLASS} ${HOME_SECTION_CENTER_CLASS}`}
      >
        <div className="flex max-h-full min-h-0 w-full flex-col overflow-hidden">
          {/* 标题区 */}
          <div className="mb-[40px] flex shrink-0 flex-col items-center gap-[12px] sm:gap-[16px]">
            <div className="flex flex-col items-center gap-[8px] text-center sm:gap-[12px]">
              <div
                className={`${isEn ? "font-['Crimson_Text'] text-[40px] sm:text-[56px]" : "font-['Noto_Serif_SC_Home'] text-[32px] sm:text-[48px]"} font-medium leading-[40px] text-[color:var(--Colors-Neutral-100)] sm:leading-[64px]`}
              >
                {t("HomeOpenSource.title")}
              </div>
              <div className="font-['PingFang_SC'] text-[14px] leading-[20px] text-[color:var(--Colors-Use-Neutral-Text-2-Primary)] sm:text-[20px] sm:leading-[28px]">
                {t("HomeOpenSource.subtitle")}
              </div>
            </div>

            {/* 搜索框 */}
            <div className="flex w-full max-w-[320px] items-center rounded-[9999px] border border-solid border-[var(--Colors-Use-Main---Gold-Focus)] bg-[var(--Colors-Use-Main---Gold-Bg-Hover)] px-[4px] py-[4px] transition-colors duration-200 focus-within:border-[var(--Colors-Use-Main---Gold-Border)]">
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  swiperRef?.slideTo(0);
                }}
                placeholder={t("HomeOpenSource.placeholder")}
                className="min-w-0 flex-1 border-0 bg-transparent px-[12px] py-[6px] font-['PingFang_SC'] text-[16px] leading-[22px] text-[color:var(--Colors-Use-Neutral-Text-1-Title)] outline-none placeholder:text-[color:var(--Colors-Use-Neutral-Text-4-Help-text)] sm:text-[14px] sm:leading-[20px]"
              />
              <span className="group inline-flex h-[32px] w-[32px] shrink-0 cursor-pointer items-center justify-center rounded-full bg-[color:var(--Colors-Neutral-100)] text-[color:var(--Colors-Use-Neutral-Bg)] transition-colors duration-200 hover:bg-[color:var(--Colors-Use-Main---web-Primary)] hover:text-[color:var(--Colors-Use-Main---web-On-Primary)]">
                <span className="inline-flex text-[color:var(--Colors-Use-Neutral-Bg)] transition-colors duration-200 group-hover:text-[color:var(--Colors-Use-Main---web-On-Primary)]">
                  {SearchIcon}
                </span>
              </span>
            </div>
          </div>

          {/* 轮播卡片 */}
          {pages.length > 0 ? (
            <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden">
              <Swiper
                key={pageSize}
                onSwiper={setSwiperRef}
                onSlideChange={handleSlideChange}
                slidesPerView={1}
                spaceBetween={0}
                observer
                observeParents
                allowTouchMove={true}
                touchStartPreventDefault={false}
                className="home-open-source-swiper !flex min-h-0 !h-full !w-full flex-1 [&>.swiper-wrapper]:h-full"
              >
                {pages.map((page, pageIdx) => (
                  <SwiperSlide
                    key={pageIdx}
                    className="!flex !h-full !w-full flex-col justify-start sm:justify-center"
                  >
                    <div
                      className="grid h-full w-full auto-rows-fr content-start gap-[12px] sm:content-center xl:gap-[16px]"
                      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
                    >
                      {page.map((item) => (
                        <Card key={`${pageIdx}-${item.id}`} {...item} />
                      ))}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* 分页指示器：进度条 + 圆点，点击第几个圆点跳到第几页 */}
              {pages.length > 1 && (
                <div
                  className="mt-[12px] flex shrink-0 items-center justify-center gap-[8px] sm:mt-[16px]"
                  aria-label={t("HomeOpenSource.aria.pagination")}
                >
                  {/* 进度条 */}
                  <button
                    type="button"
                    className="relative h-[12px] w-[56px] cursor-pointer overflow-hidden rounded-full border border-solid border-[var(--Colors-Use-Main---Gold-Border)] bg-transparent p-0"
                    role="progressbar"
                    aria-valuemin={1}
                    aria-valuemax={pages.length}
                    aria-valuenow={activeIndex + 1}
                    aria-label={t("HomeOpenSource.aria.pageInfo", {
                      current: activeIndex + 1,
                      total: pages.length,
                    })}
                    title={t("HomeOpenSource.aria.pageInfo", {
                      current: 1,
                      total: pages.length,
                    })}
                    onClick={() => swiperRef?.slideTo(0)}
                  >
                    <span
                      className="pointer-events-none absolute bottom-0 left-0 top-0 rounded-full bg-[var(--Colors-Use-Main---Gold-Border)] transition-[width] duration-300 ease-out"
                      style={{
                        width: `${((activeIndex + 1) / pages.length) * 100}%`,
                      }}
                    />
                  </button>

                  {/* 圆点：每个代表一页，点击跳到对应页 */}
                  {Array.from({ length: pages.length }).map((_, idx) => {
                    const isActive = activeIndex === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        aria-label={t("HomeOpenSource.aria.pageInfo", {
                          current: idx + 1,
                          total: pages.length,
                        })}
                        aria-current={isActive ? "true" : undefined}
                        title={t("HomeOpenSource.aria.pageInfo", {
                          current: idx + 1,
                          total: pages.length,
                        })}
                        onClick={() => swiperRef?.slideTo(idx)}
                        className={`box-border h-[12px] w-[12px] cursor-pointer rounded-full border border-solid border-[var(--Colors-Use-Main---Gold-Border)] p-0 transition-colors duration-200 hover:bg-[color:var(--Colors-Use-Main---Gold-Focus)] ${
                          isActive
                            ? "bg-[var(--Colors-Use-Main---Gold-Border)]"
                            : "bg-transparent"
                        }`}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <div className="py-[40px] pt-[80px] text-center font-['PingFang_SC'] text-[14px] leading-[20px] text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)]">
              {t("HomeOpenSource.empty", { query })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeOpenSource;
