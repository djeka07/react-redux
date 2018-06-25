import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import { createLogger } from 'redux-logger'
import reduxState from '../app/redux/reducers'
import config from '../configs'

const loggerMiddleware = createLogger()
const sagaMiddleware = createSagaMiddleware()

export default function createReduxStore({ preloadedState, server } = {}) {
  let enhancer
  console.log('isProduction', config.isProduction)
  if (!config.isProduction && !server) {
    /* eslint-disable no-underscore-dangle */
    const composeEnhancers = (global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })) || compose
    /* eslint-enable */
    enhancer = composeEnhancers(applyMiddleware(sagaMiddleware, loggerMiddleware))
  } else {
    enhancer = applyMiddleware(sagaMiddleware)
  }

  const store = createStore(reduxState, preloadedState, enhancer)
  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  return store
}
