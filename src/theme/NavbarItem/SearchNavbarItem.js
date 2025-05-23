/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import SearchBar from '@theme/SearchBar';
export default function SearchNavbarItem({mobile}) {
  if (mobile) {
    return null;
  }

  return <SearchBar />;
}
