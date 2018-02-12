import React from 'react'
import { render } from 'react-dom'

import createHistory from 'history/createBrowserHistory'

import './styles/index.sass'
import registerServiceWorker from './registerServiceWorker'
import Root from './modules/root/components/Root'
import Store from './store/configureStore'


const history = createHistory()
const store   = new Store(history, window.INITIAL_STATE)

render(
  <Root store={store.data} />,
  document.getElementById('root')
)

registerServiceWorker()
