import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { getBlogs } from '../actions'

const Index = props => {
  return (
    <div className="index">
      <Header {...props} /> <Main {...props} />
      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.auth,
  blogs: state.blogs
})

const mapDispatchToProps = dispatch => ({
  getBlogs: page => dispatch(getBlogs(page))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
