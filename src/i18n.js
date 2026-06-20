import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import zh from './locales/zh.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      zh: { translation: zh },
    },
    fallbackLng: 'zh-CN',
    // 关闭 debug 以消除构建/部署日志里大量 i18next init 与 missingKey 噪声
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
