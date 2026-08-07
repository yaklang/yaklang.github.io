import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

// =========================================================
// 图标
// =========================================================
const ArrowUpRightSmIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden
  >
    <path
      d="M3.5 10.5L10.5 3.5M10.5 3.5H3.5M10.5 3.5V10.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowDownRightLgIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    aria-hidden
    className="h-[40px] w-[40px] sm:h-[56px] sm:w-[56px] xl:h-[72px] xl:w-[72px]"
  >
    <path
      d="M21 21L51 51M51 51V21M51 51H21"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronDoubleRightIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden
  >
    <path
      d="M10.8333 4.16669L16.6666 10L10.8333 15.8334M4.99998 4.16669L10.8333 10L4.99998 15.8334"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// =========================================================
// 数据
// =========================================================
type MilestoneItem = {
  year: string;
  title: string;
  impact: string;
  href: string;
  dateLabel: string;
  image?: string;
};

type MilestoneBase = Omit<MilestoneItem, "title" | "impact" | "dateLabel"> & {
  titleKey: string;
  impactKey: string;
  dateLabelKey: string;
};

const getMilestonesBase = (t: (key: string) => string): MilestoneItem[] =>
  [
    {
      year: "2021",
      titleKey: "HomeMilestones.items.m2021_xcon.title",
      impactKey: "HomeMilestones.items.m2021_xcon.impact",
      dateLabelKey: "HomeMilestones.items.m2021_xcon.dateLabel",
      href: "https://www.sohu.com/a/567305083_120846244",
      image: "img/newHome/2021-xcon-yak-yakit-release.jpeg",
    },
    {
      year: "2023",
      titleKey: "HomeMilestones.items.m2023_open_source_launch.title",
      impactKey: "HomeMilestones.items.m2023_open_source_launch.impact",
      dateLabelKey: "HomeMilestones.items.m2023_open_source_launch.dateLabel",
      href: "https://www.cnblogs.com/yaklang/articles/17461795.html",
      image: "img/newHome/2023-yaklang-open-source-launch.jpg",
    },
    {
      year: "2023",
      titleKey: "HomeMilestones.items.m2023_yakit_v2_list.title",
      impactKey: "HomeMilestones.items.m2023_yakit_v2_list.impact",
      dateLabelKey: "HomeMilestones.items.m2023_yakit_v2_list.dateLabel",
      href: "https://kw.beijing.gov.cn/zwfw/bsjg/202307/P020240909007888758167.pdf",
      image: "img/newHome/20260803-174557.jpg",
    },
    {
      year: "2024",
      titleKey: "HomeMilestones.items.m2024_yakit_v2_test.title",
      impactKey: "HomeMilestones.items.m2024_yakit_v2_test.impact",
      dateLabelKey: "HomeMilestones.items.m2024_yakit_v2_test.dateLabel",
      href: "https://mp.weixin.qq.com/s?__biz=MzIwMzI1MDg2Mg==&mid=2649944674&idx=1&sn=bb61768ac951be7656caf3d6f58794dd",
      image: "",
    },
    {
      year: "2024",
      titleKey: "HomeMilestones.items.m2024_cicc_top10.title",
      impactKey: "HomeMilestones.items.m2024_cicc_top10.impact",
      dateLabelKey: "HomeMilestones.items.m2024_cicc_top10.dateLabel",
      href: "https://www.china-cic.cn/Detail/24/60/6085",
      image: "img/newHome/2024-cicc-conference.jpg",
    },
    {
      year: "2025",
      titleKey: "HomeMilestones.items.m2025_irify_release.title",
      impactKey: "HomeMilestones.items.m2025_irify_release.impact",
      dateLabelKey: "HomeMilestones.items.m2025_irify_release.dateLabel",
      href: "https://yaklang.com/en/blog/sql-injection-detection-with-irify/",
      image: "img/newHome/0718bf2f426b3b8a.png",
    },
    {
      year: "2025",
      titleKey: "HomeMilestones.items.m2025_cic_first_prize.title",
      impactKey: "HomeMilestones.items.m2025_cic_first_prize.impact",
      dateLabelKey: "HomeMilestones.items.m2025_cic_first_prize.dateLabel",
      href: "https://www.china-cic.cn/Detail/24/6900/6900",
      image: "",
    },
    {
      year: "2025",
      titleKey: "HomeMilestones.items.m2025_maker_china.title",
      impactKey: "HomeMilestones.items.m2025_maker_china.impact",
      dateLabelKey: "HomeMilestones.items.m2025_maker_china.dateLabel",
      href: "https://www.miitxxzx.org.cn/module/download/downfile.jsp?classid=0&filename=4920ee41e78c447ca39295aeae07e019.pdf&showname=%E7%AC%AC%E5%8D%81%E5%B1%8A%E2%80%9C%E5%88%9B%E5%AE%A2%E4%B8%AD%E5%9B%BD%E2%80%9D%E4%B8%AD%E5%B0%8F%E4%BC%81%E4%B8%9A%E5%88%9B%E6%96%B0%E5%88%9B%E4%B8%9A%E5%A4%A7%E8%B5%9B%E5%85%A8%E5%9B%BD%E6%80%BB%E5%86%B3%E8%B5%9B%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95.pdf",
      image: "",
    },
    {
      year: "2026",
      titleKey: "HomeMilestones.items.m2026_memfit_release.title",
      impactKey: "HomeMilestones.items.m2026_memfit_release.impact",
      dateLabelKey: "HomeMilestones.items.m2026_memfit_release.dateLabel",
      href: "https://www.yaklang.com/en/blog/memfit-autonomous-pentest-agent-architecture/",
      image: "img/newHome/3cac0ba124b1bebc.png",
    },
  ].map((m) => ({
    ...m,
    title: t(m.titleKey),
    impact: t(m.impactKey),
    dateLabel: t(m.dateLabelKey),
  }));

const padIndex = (n: number) => String(n).padStart(2, "0");

const FULL_HISTORY_URL =
  "https://github.com/yaklang/yaklang.github.io/blob/master/materials/project-credibility/full-history.md";

const ViewFullDataLink: React.FC<{ label: string; className?: string }> = ({
  label,
  className = "",
}) => (
  <a
    href={FULL_HISTORY_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-[4px] font-['PingFang_SC'] text-[14px] leading-[20px] text-[color:var(--Colors-Use-Neutral-Text-4-Help-text)] !no-underline transition-colors duration-200 hover:text-[color:var(--Colors-Use-Main---web-Primary)] ${className}`}
  >
    {label}
    {ArrowUpRightSmIcon}
  </a>
);

const ROW_H = 112;
/** 视口高度 >= 该值时显示 5 行，否则 4 行 */
const TALL_VIEWPORT_MQ = "(min-height: 800px)";

const SCROLLBAR_HIDE =
  "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden [overflow-anchor:none]";

type YearGroup = {
  year: string;
  items: { item: MilestoneItem; index: number }[];
};

const DotPattern: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div
    className={`pointer-events-none absolute inset-0 ${className}`}
    style={{
      backgroundImage:
        "radial-gradient(circle, var(--Colors-Use-Main---Gold-Focus) 1px, transparent 1.2px)",
      backgroundSize: "4px 4px",
    }}
    aria-hidden
  />
);

const buildYearGroups = (list: MilestoneItem[]): YearGroup[] => {
  const map = new Map<string, YearGroup>();
  list.forEach((item, index) => {
    const g = map.get(item.year);
    if (g) g.items.push({ item, index });
    else map.set(item.year, { year: item.year, items: [{ item, index }] });
  });
  return Array.from(map.values());
};

const useVisibleRows = () => {
  const [rows, setRows] = useState(5);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia(TALL_VIEWPORT_MQ);
    const sync = () => setRows(mq.matches ? 5 : 4);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return rows;
};

/**
 * 进入本屏后先冻结事件列表，避免切屏惯性/锚定把列表顶上去；
 * 切屏冷却结束后直接解锁，用户无需额外交互即可滚动。
 */
const useMilestonesScrollGate = (
  sectionRef: React.RefObject<HTMLElement | null>,
) => {
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof window === "undefined") return;

    let ready = false;
    let armTimer: number | null = null;

    const scrollers = () =>
      Array.from(
        section.querySelectorAll<HTMLElement>("[data-milestones-scroll]"),
      );

    const freeze = () => {
      ready = false;
      scrollers().forEach((el) => {
        delete el.dataset.milestonesReady;
        el.style.overflowY = "hidden";
      });
      requestAnimationFrame(() => {
        scrollers().forEach((el) => {
          el.scrollTop = 0;
        });
      });
    };

    const unlock = () => {
      ready = true;
      scrollers().forEach((el) => {
        el.dataset.milestonesReady = "true";
        el.style.overflowY = "auto";
      });
      requestAnimationFrame(() => {
        scrollers().forEach((el) => {
          el.scrollTop = 0;
        });
      });
    };

    const scheduleUnlock = () => {
      if (armTimer != null) window.clearTimeout(armTimer);
      armTimer = window.setTimeout(() => {
        armTimer = null;
        if (!ready) unlock();
      }, 520);
    };

    const onScroll = (event: Event) => {
      if (ready) return;
      const el = event.target as HTMLElement;
      if (Math.abs(el.scrollTop) > 1) {
        requestAnimationFrame(() => {
          if (!ready && el.scrollTop !== 0) el.scrollTop = 0;
        });
      }
    };

    const bind = () => {
      scrollers().forEach((el) => {
        el.addEventListener("scroll", onScroll, { passive: true });
      });
    };

    const unbind = () => {
      scrollers().forEach((el) => {
        el.removeEventListener("scroll", onScroll);
        el.style.overflowY = "";
        delete el.dataset.milestonesReady;
      });
    };

    bind();
    freeze();

    let wasVisible = false;
    const scrollerRoot =
      (section.closest(".home-page-swiper") as HTMLElement | null) ||
      (section.closest(".home-new-scroller") as HTMLElement | null);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        const visible = entry.isIntersecting && entry.intersectionRatio >= 0.4;
        if (visible && !wasVisible) {
          wasVisible = true;
          freeze();
          scheduleUnlock();
        } else if (!visible && wasVisible) {
          wasVisible = false;
          if (armTimer != null) {
            window.clearTimeout(armTimer);
            armTimer = null;
          }
          freeze();
        }
      },
      {
        root: scrollerRoot,
        threshold: [0, 0.15, 0.4, 0.7, 1],
      },
    );
    io.observe(section);

    return () => {
      if (armTimer != null) window.clearTimeout(armTimer);
      io.disconnect();
      unbind();
    };
  }, [sectionRef]);
};

// =========================================================
// 组件
// =========================================================
const HomeMilestones: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const MILESTONES = useMemo(() => getMilestonesBase(t), [t]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileHoveredIndex, setMobileHoveredIndex] = useState<number | null>(
    null,
  );
  const visibleRows = useVisibleRows();
  const bodyH = ROW_H * visibleRows;
  useMilestonesScrollGate(sectionRef);

  const yearGroups = useMemo(() => buildYearGroups(MILESTONES), [MILESTONES]);

  const rangeStart = MILESTONES[0]?.year ?? "2021";
  const rangeEnd = MILESTONES[MILESTONES.length - 1]?.year ?? "2026";

  return (
    <section
      ref={sectionRef}
      className="box-border flex h-full w-full flex-col overflow-hidden bg-[var(--Colors-Use-Main---Gold-Bg)]"
    >
      <div className="flex min-h-0 w-full flex-1 flex-col justify-start overflow-hidden py-[16px] sm:py-[20px] lg:justify-center lg:py-[24px] xl:py-[40px]">
        {/* 标题区 */}
        <div className="mb-[12px] flex shrink-0 flex-col gap-[8px] px-[16px] sm:mb-[16px] sm:flex-row sm:items-end sm:justify-between sm:gap-[16px] md:px-[32px] xl:mb-[40px] xl:gap-[24px] xl:px-[80px]">
          <div className="flex flex-col gap-[6px] sm:gap-[8px]">
            <div className="flex flex-wrap items-baseline gap-x-[12px] gap-y-[4px]">
              <h2 className="m-0 font-['Noto_Serif_SC'] text-[28px] font-medium leading-[36px] text-[color:var(--Colors-Neutral-100)] sm:text-[32px] sm:leading-[40px] xl:text-[48px] xl:leading-[64px]">
                {t("HomeMilestones.title")}
              </h2>
              <a
                href={FULL_HISTORY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[4px] font-['PingFang_SC'] text-[13px] leading-[18px] text-[color:var(--Colors-Use-Neutral-Text-4-Help-text)] !no-underline transition-colors duration-200 hover:text-[color:var(--Colors-Use-Main---web-Primary)] sm:hidden"
              >
                {t("HomeMilestones.viewFullData")}
                {ArrowUpRightSmIcon}
              </a>
            </div>
            <a
              href={FULL_HISTORY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-[4px] font-['PingFang_SC'] text-[14px] leading-[20px] text-[color:var(--Colors-Use-Neutral-Text-4-Help-text)] !no-underline transition-colors duration-200 hover:text-[color:var(--Colors-Use-Main---web-Primary)] sm:inline-flex"
            >
              {t("HomeMilestones.viewFullData")}
              {ArrowUpRightSmIcon}
            </a>
            <div className="flex items-end gap-[8px] font-['Noto_Serif_SC'] text-[40px] font-medium leading-[40px] text-[color:var(--Colors-Neutral-100,)] sm:hidden">
              <span>
                {rangeStart}——{rangeEnd}
              </span>
              <span className="inline-flex translate-y-[4px] text-[color:var(--Colors-Use-Neutral-Text-1-Title)]">
                {ArrowDownRightLgIcon}
              </span>
            </div>
          </div>

          <div className="hidden items-end gap-[8px] font-['Noto_Serif_SC'] text-[36px] font-medium leading-[36px] text-[color:var(--Colors-Neutral-100,)] sm:flex xl:text-[96px] xl:leading-[112px]">
            <span>
              {rangeStart}——{rangeEnd}
            </span>
            <span className="inline-flex translate-y-[15px] xl:translate-y-[12px]">
              <span className="scale-75 xl:scale-100">{ArrowDownRightLgIcon}</span>
            </span>
          </div>
        </div>

        {/* ========== 小屏：竖向卡片列表 ========== */}
        <div className="min-h-0 flex-1 overflow-y-auto sm:hidden">
          <div className="flex flex-col border-0 border-t border-solid border-[var(--Colors-Use-Main---Gold-Focus)]">
            {MILESTONES.map((item, index) => {
              const active = mobileHoveredIndex === index;
              return (
                <a
                  key={`${item.year}-${item.title}`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setMobileHoveredIndex(index)}
                  onMouseLeave={() => setMobileHoveredIndex(null)}
                  onFocus={() => setMobileHoveredIndex(index)}
                  onBlur={() => setMobileHoveredIndex(null)}
                  className={`group flex flex-col gap-[8px] border-0 border-b border-solid border-[var(--Colors-Use-Main---Gold-Focus)] px-[12px] pt-[16px] pb-[30px] !no-underline transition-colors duration-200 ${
                    active
                      ? "bg-[var(--Colors-Use-Main---Gold-Focus)]"
                      : "bg-transparent"
                  }`}
                >
                  <div className="flex items-start justify-between gap-[12px]">
                    <span
                      className={`font-['Noto_Serif_SC'] text-[24px] font-medium leading-[28px] transition-colors duration-200 ${
                        active
                          ? "text-[color:var(--Colors-Use-Neutral-Text-1-Title)]"
                          : "text-[color:var(--Colors-Use-Neutral-Disable)]"
                      }`}
                    >
                      {padIndex(index + 1)}.
                    </span>
                    <span
                      className={`inline-flex shrink-0 transition-colors duration-200 ${
                        active
                          ? "text-[color:var(--Colors-Use-Main---web-Primary)]"
                          : "text-[color:var(--Colors-Use-Neutral-Text-4-Help-text)]"
                      }`}
                    >
                      {ChevronDoubleRightIcon}
                    </span>
                  </div>
                  <span
                    className={`font-['PingFang_SC'] text-[14px] leading-[20px] transition-colors duration-200 ${
                      active
                        ? "text-[color:var(--Colors-Use-Neutral-Text-1-Title)]"
                        : "text-[color:var(--Colors-Use-Neutral-Text-2-Primary)]"
                    }`}
                  >
                    {item.dateLabel}
                  </span>
                  <h3 className="mb-[0px] font-['Noto_Serif_SC'] text-[20px] font-semibold leading-[28px] !text-[color:var(--Colors-Use-Neutral-Text-1-Title)]">
                    {item.title}
                  </h3>
                  <p
                    className={`m-0 font-['PingFang_SC'] text-[16px] leading-[24px] transition-colors duration-200 ${
                      active
                        ? "!text-[color:var(--Colors-Use-Neutral-Text-1-Title)]"
                        : "!text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)]"
                    }`}
                  >
                    {item.impact}
                  </p>
                </a>
              );
            })}
            <div className="flex items-center border-0 border-b border-solid border-[var(--Colors-Use-Main---Gold-Focus)] px-[12px] py-[20px]">
              <ViewFullDataLink label={t("HomeMilestones.viewFullData")} />
            </div>
          </div>
        </div>

        {/* ========== 中屏：年 | 序号+事件（可视约 5 行，手动滚动） ========== */}
        <div className="hidden shrink-0 border-0 border-t border-b border-solid border-[var(--Colors-Use-Main---Gold-Focus)] sm:block lg:hidden">
          <div
            data-milestones-scroll
            className={`overflow-y-auto overscroll-contain [contain:strict] ${SCROLLBAR_HIDE}`}
            style={{ height: bodyH }}
          >
            {yearGroups.map((group, groupIndex) => (
              <div
                key={group.year}
                className={`grid grid-cols-[88px_minmax(0,1fr)] border-0 border-solid border-[var(--Colors-Use-Main---Gold-Focus)] md:grid-cols-[100px_minmax(0,1fr)] ${
                  groupIndex === yearGroups.length - 1 ? "" : "border-b"
                }`}
              >
                <div className="relative min-w-0 self-stretch border-0 border-r border-solid border-[var(--Colors-Use-Main---Gold-Focus)] bg-[var(--Colors-Use-Main---Gold-Bg)]">
                  <div className="sticky top-0 z-[2] bg-[var(--Colors-Use-Main---Gold-Bg)] px-[10px] py-[10px] md:px-[14px] md:py-[12px]">
                    <span className="block truncate font-['Noto_Serif_SC'] text-[22px] font-medium leading-[28px] text-[color:var(--Colors-Use-Neutral-Text-1-Title)] md:text-[26px] md:leading-[32px]">
                      {group.year}
                    </span>
                  </div>
                </div>
                <div className="flex min-w-0 flex-col">
                  {group.items.map(({ item, index }) => {
                    const active = hoveredIndex === index;
                    return (
                      <a
                        key={`m-row-${index}`}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onFocus={() => setHoveredIndex(index)}
                        onBlur={() => setHoveredIndex(null)}
                        className={`group grid grid-cols-[48px_minmax(0,1fr)_36px_24px] min-h-[112px] border-0 border-b border-solid border-[var(--Colors-Use-Main---Gold-Focus)] !no-underline last:border-b-0 transition-colors duration-200 md:grid-cols-[56px_minmax(0,1fr)_40px_32px] ${
                          active
                            ? "bg-[var(--Colors-Use-Main---Gold-Focus)] shadow-[inset_1px_0_0_var(--Colors-Use-Main---Gold-Bg)]"
                            : "bg-transparent"
                        }`}
                      >
                        <div
                          className={`flex h-full items-start overflow-hidden border-0 border-r border-solid px-[8px] pt-[10px] pb-[8px] ${
                            active
                              ? "border-[var(--Colors-Use-Main---Gold-Bg)]"
                              : "border-[var(--Colors-Use-Main---Gold-Focus)]"
                          }`}
                        >
                          <span
                            className={`font-['Noto_Serif_SC'] text-[24px] font-medium leading-[24px] transition-colors duration-200 ${
                              active
                                ? "text-[color:var(--Colors-Use-Neutral-Text-1-Title)]"
                                : "text-[color:var(--Colors-Use-Neutral-Disable)]"
                            }`}
                          >
                            {padIndex(index + 1)}.
                          </span>
                        </div>
                        <div className="flex h-full min-w-0 flex-col justify-start overflow-hidden py-[14px] pl-[12px] pr-[8px]">
                          <div
                            className={`mb-[4px] truncate font-['PingFang_SC'] text-[13px] leading-[18px] transition-colors duration-200 lg:hidden ${
                              active
                                ? "text-[color:var(--Colors-Use-Neutral-Text-1-Title)]"
                                : "text-[color:var(--Colors-Use-Neutral-Text-2-Primary)]"
                            }`}
                          >
                            {item.dateLabel}
                          </div>
                          <h3 className="m-0 mb-[20px] line-clamp-3 font-['Noto_Serif_SC'] text-[16px] font-semibold leading-[22px] !text-[color:var(--Colors-Use-Neutral-Text-1-Title)]">
                            {item.title}
                          </h3>
                          <p
                            className={`m-0 line-clamp-1 font-['PingFang_SC'] text-[13px] leading-[18px] transition-colors duration-200 ${
                              active
                                ? "!text-[color:var(--Colors-Use-Neutral-Text-1-Title)]"
                                : "!text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)]"
                            }`}
                          >
                            {item.impact}
                          </p>
                        </div>
                        <span
                          className={`inline-flex h-full items-center justify-center border-0 border-r border-solid transition-colors duration-200 ${
                            active
                              ? "border-[var(--Colors-Use-Main---Gold-Bg)] text-[color:var(--Colors-Use-Main---web-Primary)]"
                              : "border-[var(--Colors-Use-Main---Gold-Focus)] text-[color:var(--Colors-Use-Neutral-Text-4-Help-text)]"
                          }`}
                        >
                          {ChevronDoubleRightIcon}
                        </span>
                        <div aria-hidden className="h-full" />
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
            <div className="grid grid-cols-[88px_minmax(0,1fr)] border-0 border-t border-solid border-[var(--Colors-Use-Main---Gold-Focus)] md:grid-cols-[100px_minmax(0,1fr)]">
              <div
                className="border-0 border-r border-solid border-[var(--Colors-Use-Main---Gold-Focus)]"
                aria-hidden
              />
              <div className="grid grid-cols-[minmax(0,1fr)_36px_24px] md:grid-cols-[minmax(0,1fr)_40px_32px]">
                <div className="flex items-center px-[10px] py-[14px] md:px-[12px]">
                  <ViewFullDataLink label={t("HomeMilestones.viewFullData")} />
                </div>
                <div
                  className="border-0 border-r border-solid border-[var(--Colors-Use-Main---Gold-Focus)]"
                  aria-hidden
                />
                <div aria-hidden />
              </div>
            </div>
          </div>
        </div>

        {/* ========== 大屏：年 | 图+事件（可视约 5 行，手动滚动） ========== */}
        <div className="hidden shrink-0 border-0 border-t border-b border-solid border-[var(--Colors-Use-Main---Gold-Focus)] lg:block">
          <div
            data-milestones-scroll
            className={`overflow-x-hidden overflow-y-auto overscroll-contain [contain:strict] ${SCROLLBAR_HIDE}`}
            style={{ height: bodyH }}
          >
            {yearGroups.map((group, groupIndex) => (
              <div
                key={group.year}
                className={`grid grid-cols-[96px_minmax(0,1fr)] border-0 border-solid border-[var(--Colors-Use-Main---Gold-Focus)] xl:grid-cols-[140px_minmax(0,1fr)] 2xl:grid-cols-[160px_minmax(0,1fr)] ${
                  groupIndex === yearGroups.length - 1 ? "" : "border-b"
                }`}
              >
                <div className="relative min-w-0 self-stretch border-0 border-r border-solid border-[var(--Colors-Use-Main---Gold-Focus)] bg-[var(--Colors-Use-Main---Gold-Bg)]">
                  <div className="sticky top-0 z-[2] bg-[var(--Colors-Use-Main---Gold-Bg)] px-[12px] py-[12px] xl:px-[20px] xl:py-[18px] 2xl:px-[24px]">
                    <span className="block truncate font-['Noto_Serif_SC'] text-[24px] font-medium leading-[32px] text-[color:var(--Colors-Use-Neutral-Text-1-Title)] xl:text-[32px] xl:leading-[40px] 2xl:text-[36px] 2xl:leading-[44px]">
                      {group.year}
                    </span>
                  </div>
                </div>

                <div className="relative flex min-w-0 flex-col">
                  {group.items.map(({ item, index }) => {
                    const active = hoveredIndex === index;
                    const hasImage = Boolean(item.image);
                    return (
                      <a
                        key={`row-${index}`}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onFocus={() => setHoveredIndex(index)}
                        onBlur={() => setHoveredIndex(null)}
                        className={`group relative z-[1] grid min-w-0 grid-cols-[100px_40px_200px_minmax(0,1fr)_40px_16px] border-0 border-b border-solid border-[var(--Colors-Use-Main---Gold-Focus)] !no-underline last:border-b-0 transition-colors duration-200 xl:grid-cols-[180px_56px_200px_minmax(0,1fr)_48px_96px] 2xl:grid-cols-[200px_64px_200px_minmax(0,1fr)_52px_120px] ${
                          active
                            ? "bg-[var(--Colors-Use-Main---Gold-Focus)] shadow-[inset_1px_0_0_var(--Colors-Use-Main---Gold-Bg)]"
                            : "bg-transparent"
                        }`}
                        style={{ minHeight: ROW_H }}
                      >
                        <div
                          className={`relative h-full min-w-0 overflow-hidden border-0 border-r border-solid ${
                            active
                              ? "border-[var(--Colors-Use-Main---Gold-Bg)]"
                              : "border-[var(--Colors-Use-Main---Gold-Focus)]"
                          }`}
                        >
                          {hasImage ? (
                            <>
                              <DotPattern
                                className={`transition-opacity duration-200 ${
                                  active ? "opacity-0" : "opacity-100"
                                }`}
                              />
                              <img
                                src={item.image}
                                alt=""
                                className={`absolute inset-0 block h-full w-full object-cover transition-opacity duration-200 ${
                                  active ? "opacity-100" : "opacity-0"
                                }`}
                              />
                            </>
                          ) : (
                            <DotPattern />
                          )}
                        </div>
                        <div
                          className={`flex h-full items-start px-[8px] pt-[10px] xl:px-[12px] xl:pt-[14px]`}
                        >
                          <span
                            className={`font-['Noto_Serif_SC'] text-[24px] font-medium leading-[22px] transition-colors duration-200 ${
                              active
                                ? "text-[color:var(--Colors-Use-Neutral-Text-1-Title)]"
                                : "text-[color:var(--Colors-Use-Neutral-Disable)]"
                            }`}
                          >
                            {padIndex(index + 1)}.
                          </span>
                        </div>
                        <div
                          className={`flex h-full items-start border-0 border-r border-solid px-[10px] pt-[10px] xl:px-[16px] xl:pt-[14px] ${
                            active
                              ? "border-[var(--Colors-Use-Main---Gold-Bg)]"
                              : "border-[var(--Colors-Use-Main---Gold-Focus)]"
                          }`}
                        >
                          <span
                            className={`truncate font-['PingFang_SC'] text-[13px] leading-[22px] transition-colors duration-200 xl:text-[14px] xl:leading-[28px] ${
                              active
                                ? "text-[color:var(--Colors-Use-Neutral-Text-1-Title)]"
                                : "text-[color:var(--Colors-Use-Neutral-Text-2-Primary)]"
                            }`}
                          >
                            {item.dateLabel}
                          </span>
                        </div>
                        <div className="flex min-h-0 min-w-0 flex-1 flex-col items-start justify-center overflow-hidden py-[22px] pl-[14px] pr-[10px] xl:pl-[24px] xl:pr-[12px]">
                          <h3 className="m-0 mb-[20px] line-clamp-3 font-['Noto_Serif_SC'] text-[16px] font-semibold leading-[22px] !text-[color:var(--Colors-Use-Neutral-Text-1-Title)] xl:text-[18px] xl:leading-[26px]">
                            {item.title}
                          </h3>
                          <p
                            className={`m-0 line-clamp-1 font-['PingFang_SC'] text-[13px] leading-[18px] transition-colors duration-200 xl:line-clamp-2 xl:text-[15px] xl:leading-[22px] ${
                              active
                                ? "!text-[color:var(--Colors-Use-Neutral-Text-1-Title)]"
                                : "!text-[color:var(--Colors-Use-Neutral-Text-3-Secondary)]"
                            }`}
                          >
                            {item.impact}
                          </p>
                        </div>
                        <span
                          className={`inline-flex h-full items-center justify-center border-0 border-r border-solid transition-colors duration-200 ${
                            active
                              ? "border-[var(--Colors-Use-Main---Gold-Bg)] text-[color:var(--Colors-Use-Main---web-Primary)]"
                              : "border-[var(--Colors-Use-Main---Gold-Focus)] text-[color:var(--Colors-Use-Neutral-Text-4-Help-text)]"
                          }`}
                        >
                          {ChevronDoubleRightIcon}
                        </span>
                        <div aria-hidden className="h-full" />
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
            <div className="grid grid-cols-[96px_minmax(0,1fr)] border-0 border-t border-solid border-[var(--Colors-Use-Main---Gold-Focus)] xl:grid-cols-[140px_minmax(0,1fr)] 2xl:grid-cols-[160px_minmax(0,1fr)]">
              <div
                className="border-0 border-r border-solid border-[var(--Colors-Use-Main---Gold-Focus)]"
                aria-hidden
              />
              <div className="grid grid-cols-[100px_minmax(0,1fr)_40px_16px] xl:grid-cols-[180px_minmax(0,1fr)_48px_96px] 2xl:grid-cols-[200px_minmax(0,1fr)_52px_120px]">
                <div
                  className="relative overflow-hidden border-0 border-r border-solid border-[var(--Colors-Use-Main---Gold-Focus)]"
                  aria-hidden
                >
                  <DotPattern />
                </div>
                <div className="flex w-full items-center px-[10px] py-[14px] xl:px-[12px] xl:py-[20px]">
                  <ViewFullDataLink label={t("HomeMilestones.viewFullData")} />
                </div>
                <div
                  className="border-0 border-r border-solid border-[var(--Colors-Use-Main---Gold-Focus)]"
                  aria-hidden
                />
                <div aria-hidden />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMilestones;
