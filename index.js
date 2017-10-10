import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import {
  BrowserRouter,
  StaticRouter
} from 'react-router-dom'

import Routes from './src/routes'

/*
  Client takes over rendering after being served a pre-rendered page
*/
if (typeof document !== 'undefined') {
  ReactDOM.hydrate(
    <BrowserRouter>
      {Routes}
    </BrowserRouter>,
    document.getElementById('react-root')
  );
}

/*
  Used by webpack StaticSiteGeneratorPlugin for pre-renderering at build time.
  Results served as static site.
*/
export default (locals) => {
  // fs and Plates are provided during prerendering via
  // StaticSiteGeneratorPlugin configuration in webpack.config.js
  //
  // They are not included in the JS bundle that is delivered to the client.
  const template = global.fs.readFileSync('./index.html').toString();

  const data = {
    'css-hash': `/${locals.webpackStats.hash}.css`,
    'js-hash': `/${locals.webpackStats.hash}.js`,
  }

  const map = new Plates.Map();
  map.where('src').is('/bundle.js').insert('js-hash');
  map.where('href').is('/styles.css').insert('css-hash');
  map.where('id').is('react-root').append(
    ReactDOMServer.renderToString(
      <StaticRouter location={locals.path} context={{}}>
        {Routes}
      </StaticRouter>
    )
  );

  const html = Plates.bind(template, data, map);

  return html;
}
