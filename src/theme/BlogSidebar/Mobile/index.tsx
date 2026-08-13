/**
 * Swizzled from @docusaurus/theme-classic BlogSidebar/Mobile.
 *
 * 改动点：与 Desktop 一致——英文站（locale === 'en'）只渲染已翻译
 * （英文标题）的文章，过滤掉中文标题的未翻译文章。
 */

import React, {memo, type ReactNode} from 'react';
import {
  useVisibleBlogSidebarItems,
  BlogSidebarItemList,
} from '@docusaurus/plugin-content-blog/client';
import {NavbarSecondaryMenuFiller} from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BlogSidebarContent from '@theme/BlogSidebar/Content';
import type {Props} from '@theme/BlogSidebar/Mobile';
import type {Props as BlogSidebarContentProps} from '@theme/BlogSidebar/Content';

import styles from './styles.module.css';

// 标题含 CJK 即视为未翻译（中文标题）
const CJK_IN_TITLE = /[一-鿿㐀-䶿]/;

const ListComponent: BlogSidebarContentProps['ListComponent'] = ({items}) => {
  return (
    <BlogSidebarItemList
      items={items}
      ulClassName="menu__list"
      liClassName="menu__list-item"
      linkClassName="menu__link"
      linkActiveClassName="menu__link--active"
    />
  );
};

function BlogSidebarMobileSecondaryMenu({sidebar}: Props): ReactNode {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();
  const isEn = currentLocale === 'en';
  const sourceItems = isEn
    ? sidebar.items.filter((item) => !CJK_IN_TITLE.test(item.title ?? ''))
    : sidebar.items;
  const items = useVisibleBlogSidebarItems(sourceItems);
  return (
    <BlogSidebarContent
      items={items}
      ListComponent={ListComponent}
      yearGroupHeadingClassName={styles.yearGroupHeading}
    />
  );
}

function BlogSidebarMobile(props: Props): ReactNode {
  return (
    <NavbarSecondaryMenuFiller
      component={BlogSidebarMobileSecondaryMenu}
      props={props}
    />
  );
}

export default memo(BlogSidebarMobile);
