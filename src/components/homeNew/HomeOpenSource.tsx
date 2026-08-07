import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import { resolveOpenSourceProjects } from "@site/src/components/OpenSource";
import { HOME_SECTION_CENTER_CLASS } from "./homeSectionLayout";

// =========================================================
// 图标
// =========================================================
const SearchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 17.5L13.875 13.875"
      stroke="currentColor"
      strokeWidth="1.5"
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
const PAGE_SIZE_DESKTOP = 6;
const PAGE_SIZE_MOBILE = 3;

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

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_MQ);
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

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
      className="group flex h-[200px] cursor-pointer flex-col justify-between gap-[16px] overflow-hidden rounded-[8px] border border-solid p-[20px] !text-[color:var(--Colors-Use-Neutral-Text-1-Title)] !no-underline transition-colors duration-200 hover:!text-[color:var(--Colors-Use-Neutral-Text-1-Title)] xl:h-[230px]"
      style={{ backgroundColor: bg, borderColor: border }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = border;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = bg;
      }}
    >
      <div className="flex min-h-0 flex-col gap-[12px] overflow-hidden">
        <h3 className="m-0 min-h-0 shrink-0 text-left font-['Crimson_Text'] text-[22px] font-bold leading-[28px] !text-[color:var(--Colors-Use-Neutral-Text-1-Title)] sm:text-[26px] sm:leading-[32px] xl:text-[28px] xl:leading-[34px] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
          {title}
        </h3>
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
  const { t } = useTranslation();
  const isDesktop = useIsDesktop();
  const pageSize = isDesktop ? PAGE_SIZE_DESKTOP : PAGE_SIZE_MOBILE;
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
    <section className="box-border flex h-full w-full flex-col overflow-hidden bg-[var(--Colors-Use-Main---Gold-Bg)] px-[16px] lg:px-[40px]">
      <div
        className={`mx-auto w-full max-w-[1024px] overflow-hidden ${HOME_SECTION_CENTER_CLASS}`}
      >
        <div className="flex max-h-full min-h-0 w-full flex-col overflow-hidden">
          {/* 标题区 */}
          <div className="mb-[12px] flex shrink-0 flex-col items-center gap-[12px] sm:mb-[16px] sm:gap-[16px]">
            <div className="flex flex-col items-center gap-[8px] text-center sm:gap-[12px]">
              <div className="font-['Noto_Serif_SC'] text-[32px] font-medium leading-[40px] text-[color:var(--Colors-Neutral-100)] sm:text-[48px] sm:leading-[64px]">
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
                className="min-w-0 flex-1 border-0 bg-transparent px-[12px] py-[6px] font-['PingFang_SC'] text-[14px] leading-[20px] text-[color:var(--Colors-Use-Neutral-Text-1-Title)] outline-none placeholder:text-[color:var(--Colors-Use-Neutral-Text-4-Help-text)]"
              />
              <span className="inline-flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[var(--Colors-Use-Neutral-Text-1-Title)] text-[color:var(--Colors-Use-Neutral-Bg)]">
                {SearchIcon}
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
                    className="!flex !h-full !w-full flex-col justify-center"
                  >
                    <div className="grid h-full w-full auto-rows-fr grid-cols-1 content-center gap-[12px] xl:grid-cols-3 xl:gap-[16px]">
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
            <div className="py-[40px] text-center font-['PingFang_SC'] text-[14px] leading-[20px] text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)]">
              {t("HomeOpenSource.empty", { query })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeOpenSource;
