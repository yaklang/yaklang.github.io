import React, { useEffect, useState } from 'react';
import { useMemoizedFn } from "ahooks";
import { EnglishIcon, ChineseIcon } from "./HomeIcon";
import i18n from 'i18next';
import "../i18n";
import './LanguageSwitcher.scss';

const LanguageSwitcher: React.FC = () => {
  const [currentLng, setCurrentLng] = useState<string>("zh");
  
  // 初始化记住原来所选语言
  useEffect(() => {
    const lng:string = localStorage.getItem('i18nextLng') || "zh";
    setCurrentLng(lng);
    i18n.changeLanguage(lng, (err, t) => {
      if (err) {
        console.error('Error changing language:', err);
        return;
      }
    });
  }, []);

  const changeLanguage = useMemoizedFn((lng: string) => {
    i18n.changeLanguage(lng);
    setCurrentLng(lng);
    localStorage.setItem('i18nextLng', lng);
  });

  return (
    <div className="languageSwitcher" onClick={() => changeLanguage(currentLng === 'en' ? 'zh' : 'en')}>
      {
        currentLng === 'en' ? EnglishIcon : ChineseIcon
      }
    </div>
  )
};

export default LanguageSwitcher;
