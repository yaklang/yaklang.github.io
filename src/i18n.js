import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import zh from './locales/zh.json';

// 优先使用 localStorage 中上次选择的语言，无缓存则回退到中文
const getStoredLng = () => {
  if (typeof window === 'undefined') return null;
  try {
    return window.localStorage.getItem('i18nextLng');
  } catch {
    return null;
  }
};

const storedLng = getStoredLng();
const initialLng = storedLng === 'en' || storedLng === 'zh' ? storedLng : 'zh';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      zh: { translation: zh },
    },
    fallbackLng: 'zh',
    lng: initialLng,
    // 关闭 debug 以消除构建/部署日志里大量 i18next init 与 missingKey 噪声
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
