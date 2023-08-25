import React, { useEffect } from 'react';
import { Dropdown, Menu, Space } from 'antd';
import { useMemoizedFn } from "ahooks";
import { LanguageIcon } from "./HomeIcon";
import i18n from 'i18next';
import "../i18n";
import './LanguageSwitcher.scss';

const LanguageSwitcher: React.FC = () => {

  // 初始化记住原来所选语言
  useEffect(() => {
    const lng:string = localStorage.getItem('i18nextLng') || "";
    i18n.changeLanguage(lng, (err, t) => {
      if (err) {
        console.error('Error changing language:', err);
        return;
      }
    });
  }, []);

  const changeLanguage = useMemoizedFn((lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  });

  const menu = (
    <Menu>
      <Menu.Item onClick={() => changeLanguage('zh')}>简体中文</Menu.Item>
      <Menu.Item onClick={() => changeLanguage('en')}>English</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} destroyPopupOnHide={true} placement="bottomRight" className="languageSwitcher" overlayClassName="languageSwitcherMenu">
      <a onClick={e => e.preventDefault()}>
        <Space>
          {LanguageIcon}
        </Space>
      </a>
    </Dropdown>
  )
};

export default LanguageSwitcher;
