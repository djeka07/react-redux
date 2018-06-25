import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { matchPath } from 'react-router-dom'
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux'
import Router, { routes } from '../../universal/routes'
import Html from '../html/html'
import createReduxStore from '../../universal/createReduxStore'
import { fetchAppSettings } from '../../app/redux/sagas/app/appSagas'
import { waitAll } from '../../app/redux/sagas'
import { languageSelector } from '../../app/redux/selectors/app/appSelectors'
import config from '../../configs'

export default function handleRender(req, res) {
  const store = createReduxStore({ server: true })

  if (config.disableSsr) {
    res.status(200).send(renderToHtmlOutput(store.getState(), null, 'sv', true))
    return
  }

  const settings = [() => fetchAppSettings()]
  let sagas = [settings]

  const component =
  (
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <Router />
      </StaticRouter>
    </Provider>
  )

  let matchedRoute;

  routes.some((route) => {
    const match = matchPath(req.path, route)
    if (match) matchedRoute = match
    if (match && route.loadData) sagas = [...sagas, ...route.loadData(req)]
    return match
  })
  /* eslint-disable promise/catch-or-return */
  store.runSaga(waitAll(sagas)).done.then(() => {
    const preloadedState = store.getState()
    res
      .status(matchedRoute && matchedRoute.isExact ? 200 : 404) //eslint-disable-line
      .send(renderToHtmlOutput(preloadedState, component, languageSelector(preloadedState), true));
  })
  /* eslint-enable */
}

const renderToHtmlOutput = (preloadedState, component, locale, noIndex) => {
  const html = (
    <Html state={preloadedState} component={component} locale={locale} noIndex={noIndex} />
  )
  return `<!doctype html>\n ${ReactDOMServer.renderToString(html)}`
}
