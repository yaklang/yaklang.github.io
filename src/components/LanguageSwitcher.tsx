import React from 'react';
import { Dropdown, Menu, Space } from 'antd';
import { LanguageIcon } from "./HomeIcon";
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.scss';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    if (i18n.changeLanguage) {
      i18n.changeLanguage(lng);
    }
    localStorage.setItem('i18nextLng', lng);
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={() => changeLanguage('zh')}>简体中文</Menu.Item>
      <Menu.Item onClick={() => changeLanguage('en')}>English</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomRight" className="languageSwitcher" overlayClassName="languageSwitcherMenu">
      <a onClick={e => e.preventDefault()}>
        <Space>
          {LanguageIcon}
        </Space>
      </a>
    </Dropdown>
  )
};

export default LanguageSwitcher;
