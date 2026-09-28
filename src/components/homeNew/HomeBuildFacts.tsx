import React, { createContext, useContext, useEffect, useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

type RepoFacts = { stars?: number; forks?: number | null } | null;
type HomeBuildFacts = {
  yakitVersion?: string | null;
  yakit?: RepoFacts;
  yaklang?: RepoFacts;
  assetSizes?: Record<string, number> | null;
};
type FactsContextValue = { facts: HomeBuildFacts; ready: boolean };
type RepoResponse = { stargazers_count?: number; forks_count?: number };

const FactsContext = createContext<FactsContextValue | null>(null);

async function fetchJson(url: string): Promise<RepoResponse | null> {
  try {
    const response = await fetch(url, {
      cache: "no-store",
      headers: { Accept: "application/vnd.github+json" },
    });
    return response.ok ? await response.json() : null;
  } catch {
    return null;
  }
}

async function fetchVersion(): Promise<string | null> {
  try {
    const response = await fetch(
      `https://oss-qn.yaklang.com/yak/latest/yakit-version.txt?_=${Date.now()}`,
      { cache: "no-store" },
    );
    if (!response.ok) return null;
    const version = (await response.text()).split(/\r?\n/)[0].trim();
    return /^\d+\.\d+/.test(version) ? version : null;
  } catch {
    return null;
  }
}

function toRepoFacts(repo: RepoResponse | null): RepoFacts {
  return typeof repo?.stargazers_count === "number"
    ? { stars: repo.stargazers_count, forks: repo.forks_count }
    : null;
}

export function HomeBuildFactsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { siteConfig } = useDocusaurusContext();
  const customFields = siteConfig.customFields as
    | { buildFacts?: HomeBuildFacts; yakitLatestVersion?: string }
    | undefined;
  const [facts, setFacts] = useState<HomeBuildFacts>(() => ({
    ...customFields?.buildFacts,
    yakitVersion:
      customFields?.buildFacts?.yakitVersion ?? customFields?.yakitLatestVersion,
  }));
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let active = true;
    void Promise.all([
      fetchVersion(),
      fetchJson("https://api.github.com/repos/yaklang/yakit"),
      fetchJson("https://api.github.com/repos/yaklang/yaklang"),
    ]).then(([yakitVersion, yakit, yaklang]) => {
      if (!active) return;
      setFacts((previous) => ({
        ...previous,
        yakitVersion: yakitVersion ?? previous.yakitVersion,
        yakit: toRepoFacts(yakit) ?? previous.yakit,
        yaklang: toRepoFacts(yaklang) ?? previous.yaklang,
      }));
      setReady(true);
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <FactsContext.Provider value={{ facts, ready }}>
      {children}
    </FactsContext.Provider>
  );
}

export function useHomeBuildFacts() {
  const value = useContext(FactsContext);
  if (!value) {
    throw new Error("useHomeBuildFacts must be used within HomeBuildFactsProvider");
  }
  return value;
}