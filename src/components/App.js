import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import '../style/App.scss'
import Home from '../containers/Home'
import Auth from '../containers/Auth'
import Detail from '../containers/Detail'
import User from '../containers/User'
import Article from '../containers/Article'
import * as api from '../api'
import { login } from '../actions'

class App extends Component {
  componentDidMount() {
    api
      .checkLogin()
      .then(res => {
        res.isLogin && this.props.login(res.data)
      })
      .catch(err => {})
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/:page?" component={Home} />
          <Route path="/auth/:tab" component={Auth} />
          <Route path="/blog/:id" component={Detail} />
          <Route path="/user/:id" component={User} />
          <Route path="/article/:id?" component={Article} />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
