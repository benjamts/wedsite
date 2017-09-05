import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import {
  BrowserRouter,
  StaticRouter
} from 'react-router-dom'

import App from './src/app'
import Routes from './src/routes'

/*
  Client takes over rendering after being served a pre-rendered page
*/
if (typeof document !== 'undefined') {
  ReactDOM.render(
    <BrowserRouter>
      {Routes}
    </BrowserRouter>,
    document.getElementById('react-root')
  )
}

/*
  Used by webpack StaticSiteGeneratorPlugin for pre-renderering at build time.
  Results served as static site.
*/
export default (locals, callback) => {
  const html = ReactDOMServer.renderToStaticMarkup(
    <App>
      <StaticRouter location={locals.path} context={{}}>
        {Routes}
      </StaticRouter>
    </App>
  )
  callback(null, html)
}
