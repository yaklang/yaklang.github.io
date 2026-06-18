import {useEffect} from "react";
import "./styles.scss";

// 纯前端侧边栏搜索过滤控制器。
// - 覆盖所有文档侧边栏(docs / api-manual / products / Yaklab)与博客侧边栏。
// - 仅在浏览器端运行，通过 MutationObserver 应对 SPA 路由切换/懒加载导致的重渲染。
// - 文档侧边栏分类采用 lazy collapsible，折叠时子项不在 DOM 中。为保证折叠分类也能被搜到，
//   搜索时主动展开所有折叠分类(点击 caret 触发懒加载渲染)，配合 MutationObserver 逐层收敛；
//   清空搜索时再把本次会话展开的分类恢复折叠，避免破坏用户原有的折叠状态。
// 关键词: sidebar filter, DOM search, MutationObserver, lazy collapsible, expand on search

const HIDDEN = "sidebar-filter-hidden";
const ACTIVE = "sidebar-filter-active";
const GUARD = "data-sidebar-filter";

type SidebarKind = "doc" | "blog";

type FilterState = {
  query: string;
  // 本次搜索会话中被我们主动展开的折叠分类切换器，清空搜索时用于恢复折叠。
  // 注意：可能是 button.menu__caret(带 link 的分类)，也可能是
  // a.menu__link--sublist-caret(无 link 的分类，如「旧版手册」)。
  expanded: Set<HTMLElement>;
};

function createBox(onInput: (value: string) => void): HTMLElement {
  const box = document.createElement("div");
  box.className = "sidebar-filter-box";

  const input = document.createElement("input");
  input.type = "search";
  input.className = "sidebar-filter-input";
  input.placeholder = "搜索目录...";
  input.setAttribute("aria-label", "search sidebar items");
  input.autocomplete = "off";
  input.spellcheck = false;

  input.addEventListener("input", () => onInput(input.value));
  input.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      input.value = "";
      onInput("");
    }
  });

  box.appendChild(input);
  return box;
}

// 递归过滤文档侧边栏的 ul，返回该列表内是否有可见项。
function filterDocList(ul: Element, query: string): boolean {
  let anyVisible = false;
  const items = Array.from(ul.children).filter(
    (c) => c.tagName === "LI"
  ) as HTMLElement[];

  for (const li of items) {
    const link = li.querySelector(
      ":scope > a.menu__link, :scope > .menu__list-item-collapsible > a.menu__link"
    ) as HTMLElement | null;
    const nested = li.querySelector(":scope > ul.menu__list");

    const text = (link?.textContent ?? "").toLowerCase();
    const selfMatch = query === "" || text.includes(query);

    let childVisible = false;
    if (nested) {
      // 命中分类标签时，下钻传空查询以展示其全部子项。
      childVisible = filterDocList(nested, selfMatch ? "" : query);
    }

    const visible = selfMatch || childVisible;
    li.classList.toggle(HIDDEN, !visible);
    if (visible) {
      anyVisible = true;
    }
  }
  return anyVisible;
}

function filterBlogNav(nav: Element, query: string): void {
  const groups = Array.from(nav.querySelectorAll('div[role="group"]'));
  if (groups.length > 0) {
    for (const group of groups) {
      let anyVisible = false;
      group.querySelectorAll("li").forEach((li) => {
        const a = li.querySelector("a");
        const match =
          query === "" || (a?.textContent ?? "").toLowerCase().includes(query);
        (li as HTMLElement).classList.toggle(HIDDEN, !match);
        if (match) {
          anyVisible = true;
        }
      });
      (group as HTMLElement).classList.toggle(HIDDEN, !anyVisible);
    }
  } else {
    nav.querySelectorAll("li").forEach((li) => {
      const a = li.querySelector("a");
      const match =
        query === "" || (a?.textContent ?? "").toLowerCase().includes(query);
      (li as HTMLElement).classList.toggle(HIDDEN, !match);
    });
  }
}

// 展开 nav 下所有处于折叠状态的分类，触发其子项的懒加载渲染。
// 已展开过的切换器记录在 state.expanded 中，既避免重复点击造成抖动，
// 也用于清空搜索时把它们恢复折叠。返回是否有新的展开动作。
//
// 关键：Docusaurus 对折叠分类有两种渲染：
//  - 带 link 的分类: 折叠切换器是独立的 button.menu__caret;
//  - 无 link 的分类(如「旧版手册」): 折叠切换器是 a.menu__link--sublist-caret(role=button)，
//    并没有 button.menu__caret。早期只选 button 会漏掉这类分类，导致首次搜索
//    搜不到旧版手册里的条目(必须先手动点开一次)。这里两种都选上。
function expandCollapsed(nav: Element, state: FilterState): boolean {
  const carets = Array.from(
    nav.querySelectorAll(
      'button.menu__caret[aria-expanded="false"], a.menu__link--sublist-caret[aria-expanded="false"]'
    )
  ) as HTMLElement[];
  let clicked = false;
  for (const c of carets) {
    if (!state.expanded.has(c)) {
      state.expanded.add(c);
      c.click();
      clicked = true;
    }
  }
  return clicked;
}

// 恢复本次搜索会话中被展开的分类(重新折叠)。
function restoreCollapsed(state: FilterState): void {
  state.expanded.forEach((c) => {
    if (document.contains(c) && c.getAttribute("aria-expanded") === "true") {
      c.click();
    }
  });
  state.expanded.clear();
}

export default function SidebarFilter(): null {
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    const states = new WeakMap<Element, FilterState>();

    const getDocNavs = (): HTMLElement[] =>
      Array.from(document.querySelectorAll("nav.menu")).filter((n) =>
        n.querySelector("ul.theme-doc-sidebar-menu")
      ) as HTMLElement[];

    const getBlogNavs = (): HTMLElement[] =>
      Array.from(document.querySelectorAll("aside nav")).filter(
        (n) => !n.classList.contains("menu") && n.querySelector("a")
      ) as HTMLElement[];

    const applyDoc = (nav: Element, state: FilterState) => {
      if (state.query) {
        expandCollapsed(nav, state);
      }
      const menu = nav.querySelector("ul.theme-doc-sidebar-menu");
      if (menu) {
        filterDocList(menu, state.query);
      }
    };

    const onInput = (nav: Element, kind: SidebarKind, value: string) => {
      const state = states.get(nav);
      if (!state) {
        return;
      }
      const query = value.trim().toLowerCase();
      state.query = query;
      nav.classList.toggle(ACTIVE, query !== "");

      if (kind === "doc") {
        if (query) {
          applyDoc(nav, state);
        } else {
          // 清空搜索：先恢复折叠，再清除所有过滤标记。
          restoreCollapsed(state);
          const menu = nav.querySelector("ul.theme-doc-sidebar-menu");
          if (menu) {
            filterDocList(menu, "");
          }
        }
      } else {
        filterBlogNav(nav, query);
      }
    };

    // 路由切换或懒加载挂载后，对仍处于激活状态的侧边栏重新应用过滤。
    const applyActive = (nav: Element) => {
      const state = states.get(nav);
      if (!state || !state.query) {
        return;
      }
      const kind = nav.getAttribute(GUARD) as SidebarKind | null;
      if (kind === "doc") {
        applyDoc(nav, state);
      } else if (kind === "blog") {
        filterBlogNav(nav, state.query);
      }
    };

    const ensureInput = (nav: HTMLElement, kind: SidebarKind) => {
      if (nav.getAttribute(GUARD)) {
        return;
      }
      nav.setAttribute(GUARD, kind);
      states.set(nav, {query: "", expanded: new Set()});
      const box = createBox((value) => onInput(nav, kind, value));
      nav.insertBefore(box, nav.firstChild);
    };

    // 单行省略号截断后，用自定义浮层 tooltip 展示完整内容(原生 title 有 ~1s 延迟且常触发不出来)。
    // 这里把每个侧边栏链接的完整文本固化到 data-sidebar-full，并移除原生 title 避免重复弹出。
    const FULL = "data-sidebar-full";
    const cacheFullText = (nav: Element) => {
      nav.querySelectorAll("a").forEach((a) => {
        const el = a as HTMLAnchorElement;
        const span = el.querySelector("span[title]") as HTMLElement | null;
        const text = (
          span?.getAttribute("title") ??
          el.getAttribute("title") ??
          el.textContent ??
          ""
        ).trim();
        if (text && el.getAttribute(FULL) !== text) {
          el.setAttribute(FULL, text);
        }
        // 移除原生 title，改用自定义 tooltip，避免两个提示同时出现。
        if (el.hasAttribute("title")) {
          el.removeAttribute("title");
        }
        if (span?.hasAttribute("title")) {
          span.removeAttribute("title");
        }
      });
    };

    const enhanceAndApply = () => {
      getDocNavs().forEach((nav) => ensureInput(nav, "doc"));
      getBlogNavs().forEach((nav) => ensureInput(nav, "blog"));
      document
        .querySelectorAll(`nav[${GUARD}]`)
        .forEach((nav) => cacheFullText(nav));
      document
        .querySelectorAll(`nav[${GUARD}]`)
        .forEach((nav) => applyActive(nav));
    };

    // 自定义浮层 tooltip：只在文本确实被省略号截断时显示，悬停即出，移走即隐。
    const tip = document.createElement("div");
    tip.className = "sidebar-tooltip";
    document.body.appendChild(tip);
    let tipTarget: HTMLElement | null = null;

    const isTruncated = (a: HTMLElement): boolean => {
      const span = a.querySelector("span") as HTMLElement | null;
      const probe = span ?? a;
      return probe.scrollWidth - probe.clientWidth > 1;
    };

    const positionTip = (a: HTMLElement) => {
      const r = a.getBoundingClientRect();
      tip.style.top = `${r.top + r.height / 2}px`;
      // 优先显示在条目右侧；若右侧空间不足则贴右边界，由 max-width 控制换行。
      tip.style.left = `${Math.min(r.right + 10, window.innerWidth - 12)}px`;
    };

    const SIDEBAR_LINK_SEL =
      'nav.menu .menu__link, .theme-blog-sidebar-container a, aside nav:not(.menu) a';

    const showTip = (a: HTMLElement) => {
      const text = a.getAttribute(FULL) ?? a.textContent?.trim() ?? "";
      if (!text) {
        return;
      }
      tip.textContent = text;
      positionTip(a);
      tip.classList.add("visible");
      tipTarget = a;
    };
    const hideTip = () => {
      tip.classList.remove("visible");
      tipTarget = null;
    };

    const onOver = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest(
        SIDEBAR_LINK_SEL
      ) as HTMLElement | null;
      if (!a) {
        if (tipTarget) {
          hideTip();
        }
        return;
      }
      if (a === tipTarget) {
        return;
      }
      if (isTruncated(a)) {
        showTip(a);
      } else {
        hideTip();
      }
    };
    const onLeaveDoc = (e: MouseEvent) => {
      const to = e.relatedTarget as Element | null;
      if (tipTarget && (!to || !to.closest(SIDEBAR_LINK_SEL))) {
        hideTip();
      }
    };
    const onScrollOrResize = () => {
      if (tipTarget && document.contains(tipTarget)) {
        positionTip(tipTarget);
      } else if (tipTarget) {
        hideTip();
      }
    };

    document.addEventListener("mouseover", onOver, true);
    document.addEventListener("mouseout", onLeaveDoc, true);
    window.addEventListener("scroll", onScrollOrResize, true);
    window.addEventListener("resize", onScrollOrResize);

    let scheduled = false;
    const schedule = () => {
      if (scheduled) {
        return;
      }
      scheduled = true;
      window.requestAnimationFrame(() => {
        scheduled = false;
        enhanceAndApply();
      });
    };

    // 仅监听 childList/subtree，避免观察自身的 class 变更而产生死循环。
    const observer = new MutationObserver(schedule);
    observer.observe(document.body, {childList: true, subtree: true});
    schedule();

    return () => {
      observer.disconnect();
      document.removeEventListener("mouseover", onOver, true);
      document.removeEventListener("mouseout", onLeaveDoc, true);
      window.removeEventListener("scroll", onScrollOrResize, true);
      window.removeEventListener("resize", onScrollOrResize);
      tip.remove();
    };
  }, []);

  return null;
}
