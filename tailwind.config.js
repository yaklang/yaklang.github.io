/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
    './docs/**/*.{md,mdx}',
    './products/**/*.{md,mdx}',
    './Yaklab/**/*.{md,mdx}',
    './blog/**/*.{md,mdx}',
    './i18n/**/*.{js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      tablet: '744px',
      md: '768px',
      lg: '1024px',
      desktop: '1024px',
      smallScreen: '1441px',
      xl: '1280px',
      '2xl': '1920px',
      '3xl': '2560px',
    },
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          'sans-serif',
        ],
      },
      colors: {
        brand: {
          DEFAULT: '#3399dd',
          dark: '#238cd2',
          darker: '#2184c6',
          darkest: '#1b6da3',
          light: '#4aa5e1',
          lighter: '#56aae3',
          lightest: '#79bce9',
        },
        accent: '#ff7d23',
      },
      maxWidth: {
        content: '1280px',
        wide: '1600px',
      },
      keyframes: {
        slideUpFadeIn: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'slide-up-fade': 'slideUpFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
