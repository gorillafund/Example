const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-fund-template-js": hot(preferDefault(require("/home/colt/Software/gatsby/Example/src/templates/fundTemplate.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/colt/Software/gatsby/Example/.cache/dev-404-page.js"))),
  "component---src-pages-fundlistpage-jsx": hot(preferDefault(require("/home/colt/Software/gatsby/Example/src/pages/fundlistpage.jsx"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/colt/Software/gatsby/Example/src/pages/index.js")))
}

