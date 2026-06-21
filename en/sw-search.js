/*
 * sw-search.js - Yaklang 站点搜索专用 Service Worker
 *
 * 职责(刻意保持最小):
 *   - 仅缓存前端搜索用到的两个同源资源:
 *       /site-content/latest.zip    (内容包, ~2-3MB, 含全部 docs/products/blog 正文)
 *       /site-packages.json         (历史归档清单, 体积可忽略)
 *   - 策略: stale-while-revalidate (缓存优先, 后台静默更新)
 *   - 其它所有请求一律放行, 不做任何缓存或拦截, 避免与 Docusaurus 资源策略冲突。
 *
 * 缓存版本通过 CACHE_VERSION 控制, 升级时 bump 版本号即可让旧缓存被清理。
 *
 * 关键词: service worker, search cache, stale-while-revalidate
 */

const CACHE_VERSION = "v1";
const CACHE_NAME = `yak-search-${CACHE_VERSION}`;
const CACHED_PATHS = new Set([
  "/site-content/latest.zip",
  "/site-packages.json",
]);

self.addEventListener("install", (event) => {
  // 立即激活, 不等待旧 SW 释放控制
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // 清理非当前版本的缓存, 避免存储膨胀
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((k) => k.startsWith("yak-search-") && k !== CACHE_NAME)
          .map((k) => caches.delete(k))
      );
      // 立即接管所有客户端
      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") {
    return;
  }
  // 只处理同源 GET, 且只缓存白名单路径
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) {
    return;
  }
  if (!CACHED_PATHS.has(url.pathname)) {
    return;
  }

  // stale-while-revalidate:
  //   1. 命中缓存立即返回(stale)
  //   2. 同时后台 fetch 更新缓存(revalidate), 供下次请求使用
  //   3. 缓存缺失时直接 fetch 并写入
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(req);
      const networkFetchPromise = fetch(req)
        .then((resp) => {
          // 只缓存 2xx 且类型安全的响应, 避免 4xx/5xx 被永久缓存
          if (resp && resp.status === 200) {
            // resp 只能消费一次, clone 后一份入缓存、一份返回
            cache.put(req, resp.clone());
          }
          return resp;
        })
        .catch((err) => {
          // 网络失败: 若有缓存则用缓存, 否则向上抛错交给浏览器处理
          if (cached) return cached;
          throw err;
        });
      return cached || networkFetchPromise;
    })()
  );
});
