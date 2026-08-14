import React, {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDocsSidebar} from '@docusaurus/plugin-content-docs/client';
import {useLocation} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import BackToTopButton from '@theme/BackToTopButton';
import DocSidebarItems from '@theme/DocSidebarItems';
import type {Props} from '@theme/DocRoot/Layout';

import {DocsLayoutProvider} from './docsLayoutContext';
import styles from './styles.module.css';

type SidebarItems = React.ComponentProps<typeof DocSidebarItems>['items'];

function addCategoryCounts(items: SidebarItems): SidebarItems {
  return items.map((item) => {
    if (item.type !== 'category') {
      return item;
    }
    const childItems = addCategoryCounts(item.items);
    return {
      ...item,
      items: childItems,
      className: clsx(
        item.className,
        `docs-sidebar-category-count-${childItems.length}`,
      ),
    };
  });
}

function SidebarNavigation({
  items,
  activePath,
  mobile = false,
  onNavigate,
}: {
  items: React.ComponentProps<typeof DocSidebarItems>['items'];
  activePath: string;
  mobile?: boolean;
  onNavigate?: () => void;
}): ReactNode {
  const itemsWithCounts = useMemo(() => addCategoryCounts(items), [items]);

  return (
    <nav
      aria-label="Docs sidebar"
      className="menu thin-scrollbar docs-sidebar-nav"
      onClick={(event) => {
        const link =
          event.target instanceof Element
            ? event.target.closest<HTMLAnchorElement>('a.menu__link')
            : null;
        const isCategoryToggle =
          link?.getAttribute('role') === 'button' ||
          (link?.classList.contains('menu__link--sublist') &&
            link.getAttribute('aria-current') === 'page');

        if (mobile && link && !isCategoryToggle) {
          onNavigate?.();
        }
      }}
    >
      <ul
        className={clsx(
          ThemeClassNames.docs.docSidebarMenu,
          'menu__list',
        )}
      >
        <DocSidebarItems
          items={itemsWithCounts}
          activePath={activePath}
          level={1}
        />
      </ul>
    </nav>
  );
}

export default function DocRootLayout({children}: Props): ReactNode {
  const sidebar = useDocsSidebar();
  const {pathname} = useLocation();
  const logoSrc = useBaseUrl('img/logo.png');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const closeMobileSidebar = useCallback(() => {
    setMobileSidebarOpen(false);
  }, []);

  const toggleSidebar = useCallback(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setMobileSidebarOpen((value) => !value);
      return;
    }
    setSidebarCollapsed((value) => !value);
  }, []);

  useEffect(() => {
    closeMobileSidebar();
  }, [pathname, closeMobileSidebar]);

  useEffect(() => {
    if (!mobileSidebarOpen) {
      return undefined;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMobileSidebar();
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [mobileSidebarOpen, closeMobileSidebar]);

  const contextValue = useMemo(
    () => ({
      hasSidebar: Boolean(sidebar),
      sidebarCollapsed,
      toggleSidebar,
    }),
    [sidebar, sidebarCollapsed, toggleSidebar],
  );

  return (
    <DocsLayoutProvider value={contextValue}>
      <div
        className={clsx(
          styles.docsWrapper,
          'docs-layout-shell mx-auto flex w-full max-w-[1440px] flex-1',
          sidebarCollapsed && 'docs-layout-shell--collapsed',
        )}
      >
        <BackToTopButton />
        <div className="flex min-w-0 w-full items-stretch">
          {sidebar && (
            <aside
              className={clsx(
                ThemeClassNames.docs.docSidebarContainer,
                styles.desktopSidebar,
                'docs-desktop-sidebar',
              )}
            >
              <SidebarNavigation
                items={sidebar.items}
                activePath={pathname}
              />
            </aside>
          )}
          <main className="docs-main min-w-0 flex-1">{children}</main>
        </div>
      </div>

      {sidebar && mobileSidebarOpen && (
        <div
          className="docs-drawer-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeMobileSidebar();
            }
          }}
        >
          <aside
            aria-label="文档目录"
            aria-modal="true"
            className="docs-drawer"
            role="dialog"
          >
            <div className="docs-drawer__header">
              <img alt="YAK" className="docs-drawer__logo" src={logoSrc} />
            </div>
            <SidebarNavigation
              items={sidebar.items}
              activePath={pathname}
              mobile
              onNavigate={closeMobileSidebar}
            />
          </aside>
        </div>
      )}
    </DocsLayoutProvider>
  );
}
