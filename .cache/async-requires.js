// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-fund-template-js": () => import("../src/templates/fundTemplate.js" /* webpackChunkName: "component---src-templates-fund-template-js" */),
  "component---cache-dev-404-page-js": () => import("dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-fundlistpage-jsx": () => import("../src/pages/fundlistpage.jsx" /* webpackChunkName: "component---src-pages-fundlistpage-jsx" */),
  "component---src-pages-index-js": () => import("../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

