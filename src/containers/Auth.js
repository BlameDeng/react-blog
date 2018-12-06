import React from 'react'
import { connect } from 'react-redux'
import Register from '../components/Register'
import Login from '../components/Login'

const Auth = props => {
  let tab = props.match.params.tab
  return (
    <div className="auth">{tab === 'register' ? <Register /> : <Login />}</div>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Auth)
