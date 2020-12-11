import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import creatSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import sagas from './sagas'

import App from './App'

const sagaMiddleware = creatSagaMiddleware()

const composeEnhancers =
  process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      shouldHotReload: false,
      trace: true
    })
  : compose

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
)

const store = createStore(reducers, enhancer)
sagaMiddleware.run(sagas)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
