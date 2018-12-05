import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'

const Index = props => {
  return (
    <div className="index">
      <Header {...props} />
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Index)
