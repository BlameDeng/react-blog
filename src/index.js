import React from 'react'
import ReactDOM from 'react-dom'
import './style/Global.scss'
// import 'antd/dist/antd.css'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import App from './components/App'
import initStore from './initStore'

ReactDOM.render(
  <Provider store={initStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
