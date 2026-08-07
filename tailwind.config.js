/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./docs/**/*.{md,mdx}",
    "./products/**/*.{md,mdx}",
    "./Yaklab/**/*.{md,mdx}",
    "./blog/**/*.{md,mdx}",
    "./i18n/**/*.{js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px", // 手机横屏/小平板竖屏
      md: "834px",
      lg: "1024px", // 平板横屏/小笔记本
      xl: "1280px", // 标准笔记本/桌面
      "2xl": "1920px", // 大屏桌面/2K 显示器
      "3xl": "2560px", // 4K / 超宽屏特殊优化
    },
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "PingFang SC",
          "Hiragino Sans GB",
          "Microsoft YaHei",
          "sans-serif",
        ],
        crimson: ["Crimson Text", "Georgia", "Times New Roman", "serif"],
        "noto-serif-sc": [
          "Noto Serif SC",
          "Songti SC",
          "SimSun",
          "serif",
        ],
      },
      colors: {
        brand: {
          DEFAULT: "#3399dd",
          dark: "#238cd2",
          darker: "#2184c6",
          darkest: "#1b6da3",
          light: "#4aa5e1",
          lighter: "#56aae3",
          lightest: "#79bce9",
        },
        accent: "#ff7d23",
      },
      screens: {
        yaklang: "834px", // 用于平板向桌面过渡，触发 800px 宽度限制
      },
      container: {
        center: true,
        screens: {
          yaklang: "800px", // ≥834px 时最大宽度 800px
          xl: "1280px", // ≥1280px 时内容最大 1280px
          "2xl": "1760px", // ≥1920px 时内容最大 1760px
        },
      },
      maxWidth: {
        content: "1280px",
        wide: "1600px",
      },
      keyframes: {
        slideUpFadeIn: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "slide-up-fade":
          "slideUpFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
