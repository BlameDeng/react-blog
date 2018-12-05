import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App.js'
import reducers from '../reducers'

const store = createStore(reducers)

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default Root
