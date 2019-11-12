// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("/Users/prajvalraval/Downloads/dsc-kitrc-website-gatsbjyjs/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/prajvalraval/Downloads/dsc-kitrc-website-gatsbjyjs/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-js": () => import("/Users/prajvalraval/Downloads/dsc-kitrc-website-gatsbjyjs/src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/prajvalraval/Downloads/dsc-kitrc-website-gatsbjyjs/.cache/data.json")

