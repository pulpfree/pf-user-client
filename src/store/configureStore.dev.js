// import ApolloClientSingleton from '../network/apollo-client'
// import ReduxThunk from 'redux-thunk'
import rootReducer from '../services/reducers'
// import { createLogger } from 'redux-logger'
import logger from 'redux-logger'
import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'


export default class Store {
  constructor(history, initialState = {}) {
    this.data = createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(
          // ApolloClientSingleton.middleware(),
          // ReduxThunk.withExtraArgument(ApolloClientSingleton),
          routerMiddleware(history),
          logger
        ),
        (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
      )
    )
  }
}
