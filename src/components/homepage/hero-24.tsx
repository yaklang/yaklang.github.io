import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { useEffect, useState } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Watercolor from "../react-bits/watercolor";

// ─── dark mode 检测 ────────────────────────────────────
function useIsDark() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const read = () => {
      const classes = document.documentElement.classList;
      if (classes.contains("dark")) return true;
      if (classes.contains("light")) return false;
      return query.matches;
    };
    const update = () => setIsDark(read());
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    query.addEventListener("change", update);
    return () => {
      observer.disconnect();
      query.removeEventListener("change", update);
    };
  }, []);

  return isDark;
}

// ─── 动画变体 ──────────────────────────────────────────
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const headline: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Watercolor 背景包装（SSR 安全） ──────────────────
function WatercolorHeroField({ isDark }: { isDark: boolean }) {
  const reduceMotion = useReducedMotion();
  // 主体色为同色系橙色，避免 color1/color2 跨度过大产生灰/脏分层
  const palette = isDark
    ? {
        color1: "#ff5e00",
        color2: "#ff9a4d",
        opacity: 0.75,
      }
    : {
        color1: "#ff7d23",
        color2: "#ffb380",
        opacity: 0.85,
      };

  return (
    <BrowserOnly fallback={<div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #faf6ef, #fff0e6)" }} />}>
      {() => (
        <Watercolor
          key={isDark ? "dark" : "light"}
          width="100%"
          height="100%"
          speed={reduceMotion ? 0 : 0.68}
          scale={3.2}
          octaves={7}
          persistence={0.55}
          lacunarity={3.4}
          driftSpeed={0.08}
          warpSpeed={0.2}
          color1={palette.color1}
          color2={palette.color2}
          colorGain={1.2}
          saturation={0.3}
          brightness={0.12}
          opacity={palette.opacity}
          cursorInteraction={false}
          className="absolute inset-0 h-full w-full"
        />
      )}
    </BrowserOnly>
  );
}

export function Hero24() {
  const isDark = useIsDark();

  return (
    <section
      className="relative flex w-full flex-col overflow-hidden px-4 sm:px-6 lg:px-8"
      style={{
        background: isDark ? "#0a0503" : "var(--hp-paper, #faf6ef)",
        marginTop: 60,
        minHeight: "calc(100vh - 60px)",
        height: "calc(100vh - 60px)",
      }}
    >
      {/* 全屏 Watercolor WebGL 背景 —— 流动水彩科技纹理 */}
      <div className="absolute inset-0 z-0">
        <WatercolorHeroField isDark={isDark} />
      </div>

      {/* 左侧渐变蒙层：左边更淡透出 Watercolor，右边保留清晰纹理 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: isDark
            ? "linear-gradient(to right, rgba(10,5,3,0.82) 0%, rgba(10,5,3,0.45) 35%, rgba(10,5,3,0.10) 65%, rgba(10,5,3,0) 100%)"
            : "linear-gradient(to right, rgba(250,246,239,0.78) 0%, rgba(250,246,239,0.35) 35%, rgba(250,246,239,0.08) 65%, rgba(250,246,239,0) 100%)",
        }}
      />

      {/* 底部渐变蒙层：让 banner 区域与背景平滑过渡 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[140px]"
        style={{
          background: isDark
            ? "linear-gradient(to bottom, rgba(10,5,3,0) 0%, rgba(10,5,3,0.85) 60%, rgba(10,5,3,0.95) 100%)"
            : "linear-gradient(to bottom, rgba(250,246,239,0) 0%, rgba(250,246,239,0.85) 60%, rgba(250,246,239,0.95) 100%)",
        }}
      />

      {/* 内容层 —— 左对齐，垂直居中，最大宽度 1400px 居中 */}
      <div
        className="relative z-10 mx-auto flex w-full flex-1 items-center"
        style={{ maxWidth: 1400 }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-start text-left"
          style={{ maxWidth: 640 }}
        >
          {/* 状态芯片 */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium backdrop-blur-md"
            style={{
              border: isDark
                ? "1px solid rgba(255,255,255,0.1)"
                : "1px solid rgba(33,26,18,0.12)",
              background: isDark
                ? "rgba(255,255,255,0.05)"
                : "rgba(255,253,249,0.7)",
              color: isDark ? "rgba(255,255,255,0.85)" : "var(--hp-ink-70, rgba(33,26,18,0.7))",
              boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
            }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70"
                style={{ background: "var(--hp-orange, #f45a0c)" }}
              />
              <span
                className="relative inline-flex h-2 w-2 rounded-full"
                style={{ background: "var(--hp-orange, #f45a0c)" }}
              />
            </span>
            Yak Project — Open Source Security Infrastructure
          </motion.div>

          {/* 主标题 */}
          <motion.h1
            variants={headline}
            className="hp-display mt-7 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl xl:text-7xl"
            style={{
              color: isDark ? "#faf6ef" : "var(--hp-ink, #211a12)",
            }}
          >
            Yak Project
            <br />
            <span style={{ color: "var(--hp-orange, #f45a0c)" }}>
              广泛使用的开源
            </span>
            <br />
            <span style={{ color: "var(--hp-orange, #f45a0c)" }}>
              网络安全基础设施
            </span>
          </motion.h1>

          {/* 副标题 */}
          <motion.p
            variants={item}
            className="hp-display mt-6 text-lg leading-relaxed sm:text-xl lg:text-2xl"
            style={{
              color: isDark ? "rgba(250,246,239,0.65)" : "var(--hp-ink-55, rgba(33,26,18,0.55))",
              maxWidth: 520,
            }}
          >
            Powered by{" "}
            <span style={{ color: "var(--hp-orange, #f45a0c)", fontWeight: 600 }}>
              CDSL-YAK
            </span>
            {" — "}
            为网络安全而生的编程语言
          </motion.p>

          {/* CTA 按钮组 */}
          <motion.div
            variants={item}
            className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap"
          >
            <a
              href="#downloads"
              className="hp-btn-orange inline-flex w-full cursor-pointer items-center justify-center sm:w-auto sm:px-8 sm:py-3.5 sm:text-base"
              style={{ textDecoration: "none" }}
            >
              安装 Yakit 与 Yak 语言
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#products"
              className="hp-btn-line inline-flex w-full cursor-pointer items-center justify-center sm:w-auto sm:px-8 sm:py-3.5 sm:text-base"
              style={{ textDecoration: "none" }}
            >
              Yak Project 产品矩阵
            </a>
            <a
              href="https://github.com/yaklang"
              target="_blank"
              rel="noreferrer"
              className="hp-btn-line inline-flex w-full cursor-pointer items-center justify-center sm:w-auto sm:px-8 sm:py-3.5 sm:text-base"
              style={{ textDecoration: "none" }}
            >
              GitHub 组织 ↗
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* 底部 banner —— 关键词条（紧凑、间距相等、整体靠左） */}
      <div className="relative z-10 w-full pb-8 pt-4 sm:pb-10">
        <div
          className="mx-auto flex items-center justify-start"
          style={{ maxWidth: 1400 }}
        >
          {[
            "深耕开源",
            "可信赖",
            "用户至上",
            "安全基础设施",
            "难而正确",
          ].map((kw, i, arr) => (
            <span key={kw} className="inline-flex items-center">
              <motion.span
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.6 + i * 0.08,
                }}
                className="hp-mono text-xs sm:text-sm"
                style={{
                  color: isDark
                    ? "rgba(250,246,239,0.55)"
                    : "var(--hp-ink-55, rgba(33,26,18,0.55))",
                }}
              >
                {kw}
              </motion.span>
              {i < arr.length - 1 && (
                <span
                  className="hp-mono mx-4 text-xs sm:text-sm"
                  style={{
                    color: isDark
                      ? "rgba(250,246,239,0.3)"
                      : "var(--hp-ink-35, rgba(33,26,18,0.35))",
                  }}
                >
                  /
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero24;