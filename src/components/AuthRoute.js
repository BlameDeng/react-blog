import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, logout } from '../actions'

class AuthRoute extends Component {
  componentDidMount = () => {
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <div onClick={this.props.login.bind(this)}>登录</div>
        <div onClick={this.props.logout.bind(this)}>登出</div>
        {this.props.auth ? <div>已登录</div> : <div>未登录</div>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login()),
  logout: () => dispatch(logout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRoute)
