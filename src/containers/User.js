import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { logout, getUserBlogs ,deleteBlog} from '../actions'

const User = props => {
  return (
    <div className="user">
      <Header {...props} /> <Main {...props}> </Main> <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user,
  blogs: state.userBlogs
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  getUserBlogs: (id, page) => dispatch(getUserBlogs(id, page)),
  deleteBlog:id=>dispatch(deleteBlog(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)
