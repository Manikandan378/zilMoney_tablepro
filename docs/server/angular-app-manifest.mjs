
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/zilMoney_tablepro/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/zilMoney_tablepro"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23584, hash: '4f43f98043d6e1f345d74b728b7ed2f1b64f99847d31e2a01ce9ecddae3d2121', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17158, hash: '27767f0b8bdd006192d9e5b5d06e1381cd31d8054e5d6f43a3708560359e6a56', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 45961, hash: 'a02150c49389a12e3b44e731024bf078975b44edd9ddf5705885cc8f5113e71b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
