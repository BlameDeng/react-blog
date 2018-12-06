import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import { logout } from '../actions'
const Detail = props => {
  return (
    <div className="detail">
      <Header {...props} />
      <Blog {...props} />
      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)
