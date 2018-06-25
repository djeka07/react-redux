import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Router from '../universal/routes'
import createReduxStore from '../universal/createReduxStore'
import { rootSaga } from '../app/redux/sagas'

const renderClient = async () => {
  const preloadedState = window.__PRELOADED_STATE__ // eslint-disable-line no-underscore-dangle
  delete window.__PRELOADED_STATE__ // eslint-disable-line no-underscore-dangle

  // Create Redux store with initial state
  const store = createReduxStore({ preloadedState })
  store.runSaga(rootSaga)

  hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  )
}

renderClient()
