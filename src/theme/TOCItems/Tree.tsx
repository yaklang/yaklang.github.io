/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import type {Props} from '@theme/TOCItems/Tree';
import {decodeHTML} from 'entities';

const TITLE_LINK_CLASS_NAME = 'toc-highlight';

function getLinkTitle(value: string): string {
  return decodeHTML(value.replace(/<[^>]*>/g, ''));
}

// Recursive component rendering the toc tree
function TOCItemTree({
  toc,
  className,
  linkClassName,
  isChild,
}: Props): ReactNode {
  if (!toc.length) {
    return null;
  }

  const showTitle = linkClassName
    ?.split(/\s+/)
    .includes(TITLE_LINK_CLASS_NAME);

  return (
    <ul className={isChild ? undefined : className}>
      {toc.map((heading) => (
        <li key={heading.id}>
          <Link
            title={showTitle ? getLinkTitle(heading.value) : undefined}
            to={`#${heading.id}`}
            className={linkClassName ?? undefined}
            // Developer provided the HTML, so assume it's safe.
            dangerouslySetInnerHTML={{__html: heading.value}}
          />
          <TOCItemTree
            isChild
            toc={heading.children}
            className={className}
            linkClassName={linkClassName}
          />
        </li>
      ))}
    </ul>
  );
}

// Memo only the tree root is enough
export default React.memo(TOCItemTree);
