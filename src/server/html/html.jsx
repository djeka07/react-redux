import React, { Component } from 'react'
import ReactDOM from 'react-dom/server'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import serialize from 'serialize-javascript'
import config from '../../configs'

export default class Html extends Component {
  render() {
    const {
      component, locale, noIndex, state
    } = this.props

    const content = ReactDOM.renderToStaticMarkup(component)
    const head = Helmet.rewind()
    return (
      <html lang={locale}>
        <head>
          <meta charSet={config.app.charset} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {head.base.toComponent()}
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          {head.script.toComponent()}
          {noIndex && <meta property="robots" content="noindex" />}
          {noIndex && <meta property="googlebot" content="noindex" />}
          {config.isProduction && <link href="/dist/main.style.css" media="screen, projection" rel="stylesheet" type="text/css" />}
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
          <script dangerouslySetInnerHTML={{ __html: `window.__PRELOADED_STATE__=${serialize(state)};` }} charSet="UTF-8" />
          <script src="/dist/main.bundle.js" />
        </body>
      </html>
    )
  }
}

Html.propTypes = {
  component: PropTypes.node,
  state: PropTypes.object.isRequired, //eslint-disable-line
  locale: PropTypes.string.isRequired,
  noIndex: PropTypes.bool.isRequired
}

Html.defaultProps = {
  component: null
}
