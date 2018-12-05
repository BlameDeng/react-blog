import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.scss'
import Root from './components/Root.js'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<Root />, document.getElementById('root'))

serviceWorker.unregister()
