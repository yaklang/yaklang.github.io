import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import ContentVisibility from '@theme/ContentVisibility';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import DocItemContent from '@theme/DocItem/Content';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocVersionBanner from '@theme/DocVersionBanner';
import type {Props} from '@theme/DocItem/Layout';

import SidebarControl from './SidebarControl';
import styles from './styles.module.css';

export default function DocItemLayout({children}: Props): ReactNode {
  const {frontMatter, metadata, toc} = useDoc();
  const canRenderToc =
    !frontMatter.hide_table_of_contents &&
    toc.length > 0;

  return (
    <div
      className={clsx(
        styles.docItemRow,
        canRenderToc && styles.withToc,
        'docs-item-row',
      )}
    >
      <div className={clsx(styles.docItemColumn, 'docs-item-column')}>
        <ContentVisibility metadata={metadata} />
        <DocVersionBanner />
        <div className={clsx(styles.docItemContainer, 'docs-item-container')}>
          <article>
            <div className="docs-article-toolbar">
              <SidebarControl />
              <div className="docs-article-breadcrumbs">
                <DocBreadcrumbs />
              </div>
            </div>
            <DocVersionBadge />
            {!frontMatter.hide_table_of_contents && toc.length > 0 && (
              <DocItemTOCMobile />
            )}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
        </div>
      </div>
      {canRenderToc && (
        <aside className={clsx(styles.docTocColumn, 'docs-toc-column')}>
          <DocItemTOCDesktop />
        </aside>
      )}
    </div>
  );
}
