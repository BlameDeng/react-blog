import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Edit from '../components/Edit'
import Footer from '../components/Footer'

const Article = props => {
  return (
    <div className="article">
      <Header {...props} />
      <Edit {...props} />
      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(Article)
