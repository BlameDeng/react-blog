import React from 'react'
import { connect } from 'react-redux'
import Register from '../components/Register'
import Login from '../components/Login'
import { login, logout } from '../actions'

const Auth = props => {
  let tab = props.match.params.tab
  return (
    <div className="auth">
      {tab === 'register' ? <Register {...props} /> : <Login {...props} />}
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth)
