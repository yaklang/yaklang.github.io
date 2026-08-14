import React, {createContext, useContext, type ReactNode} from 'react';

type DocsLayoutContextValue = {
  hasSidebar: boolean;
  sidebarCollapsed: boolean;
  toggleSidebar: () => void;
};

const DocsLayoutContext = createContext<DocsLayoutContextValue>({
  hasSidebar: false,
  sidebarCollapsed: false,
  toggleSidebar: () => undefined,
});

export function DocsLayoutProvider({
  value,
  children,
}: {
  value: DocsLayoutContextValue;
  children: ReactNode;
}): ReactNode {
  return (
    <DocsLayoutContext.Provider value={value}>
      {children}
    </DocsLayoutContext.Provider>
  );
}

export function useDocsLayout(): DocsLayoutContextValue {
  return useContext(DocsLayoutContext);
}
