/**
 * Swizzled from @docusaurus/theme-classic BlogSidebar/Desktop.
 *
 * 改动点：英文站（locale === 'en'）侧栏只渲染标题为英文（已翻译）的文章，
 * 过滤掉约 190 篇仍为中文标题的未翻译文章，避免给英文访客 / AI 爬虫
 * 呈现大量中文标题。
 */

import React, {memo} from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import {
  useVisibleBlogSidebarItems,
  BlogSidebarItemList,
} from '@docusaurus/plugin-content-blog/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BlogSidebarContent from '@theme/BlogSidebar/Content';
import type {Props as BlogSidebarContentProps} from '@theme/BlogSidebar/Content';
import type {Props} from '@theme/BlogSidebar/Desktop';

import styles from './styles.module.css';

// 标题含 CJK 即视为未翻译（中文标题）
const CJK_IN_TITLE = /[一-鿿㐀-䶿]/;

const ListComponent: BlogSidebarContentProps['ListComponent'] = ({items}) => {
  return (
    <BlogSidebarItemList
      items={items}
      ulClassName={clsx(styles.sidebarItemList, 'clean-list')}
      liClassName={styles.sidebarItem}
      linkClassName={styles.sidebarItemLink}
      linkActiveClassName={styles.sidebarItemLinkActive}
    />
  );
};

function BlogSidebarDesktop({sidebar}: Props) {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();
  const isEn = currentLocale === 'en';
  const sourceItems = isEn
    ? sidebar.items.filter((item) => !CJK_IN_TITLE.test(item.title ?? ''))
    : sidebar.items;
  const items = useVisibleBlogSidebarItems(sourceItems);
  return (
    <aside className="col col--3">
      <nav
        className={clsx(styles.sidebar, 'thin-scrollbar')}
        aria-label={translate({
          id: 'theme.blog.sidebar.navAriaLabel',
          message: 'Blog recent posts navigation',
          description: 'The ARIA label for recent posts in the blog sidebar',
        })}>
        <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
          {sidebar.title}
        </div>
        <BlogSidebarContent
          items={items}
          ListComponent={ListComponent}
          yearGroupHeadingClassName={styles.yearGroupHeading}
        />
      </nav>
    </aside>
  );
}

export default memo(BlogSidebarDesktop);
