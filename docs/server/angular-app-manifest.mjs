
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
    'index.csr.html': {size: 23584, hash: '38c1d7336709617caae0d85a79f501444a46aa8da23c80bf31ba25d499f1cfbb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17158, hash: 'b1d751fcf5349c58e702746d6c68a496c920cf11e544c568e1981def5b866ea9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 37613, hash: '6b2d85cdfbc5863c42209ad9e143850174d6c43084fce87ae921c1a694f2b5cd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
