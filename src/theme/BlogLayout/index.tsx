import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';
import type {Props} from '@theme/BlogLayout';

export default function BlogLayout(props: Props): ReactNode {
  const {sidebar, toc, children, ...layoutProps} = props;
  const hasSidebar = Boolean(sidebar?.items.length);

  return (
    <Layout {...layoutProps}>
      <div
        className={clsx(
          'blog-layout-shell',
          hasSidebar && 'blog-layout-shell--with-sidebar',
          toc && 'blog-layout-shell--with-toc',
        )}
      >
        <div className="blog-layout-row">
          <BlogSidebar sidebar={sidebar} />
          <main className="blog-main">{children}</main>
          {toc && <aside className="blog-toc-column">{toc}</aside>}
        </div>
      </div>
    </Layout>
  );
}
