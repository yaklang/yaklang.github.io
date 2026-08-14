import React, {type ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useDocsLayout} from '../../DocRoot/Layout/docsLayoutContext';

export default function SidebarControl(): ReactNode {
  const {hasSidebar, sidebarCollapsed, toggleSidebar} = useDocsLayout();
  const closeIcon = useBaseUrl('img/docs/docs-close.svg');
  const openIcon = useBaseUrl('img/docs/docs-open.svg');
  if (!hasSidebar) {
    return null;
  }

  return (
    <button
      aria-label={
        sidebarCollapsed ? '展开文档目录' : '收起文档目录'
      }
      className="docs-sidebar-control"
      onClick={toggleSidebar}
      title={sidebarCollapsed ? '展开目录' : '收起目录'}
      type="button"
    >
      <span className="docs-sidebar-control__desktop">
        <img
          alt=""
          aria-hidden
          src={sidebarCollapsed ? openIcon : closeIcon}
        />
      </span>
      <span aria-hidden className="docs-sidebar-control__mobile" />
      <span className="docs-sidebar-control__label">目录</span>
    </button>
  );
}
