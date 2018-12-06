import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { getBlogs } from '../actions'

const Home = props => {
  return (
    <div className="home">
      <Header {...props} /> <Main {...props} />
      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user,
  blogs: state.blogs
})

const mapDispatchToProps = dispatch => ({
  getBlogs: page => dispatch(getBlogs(page))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
