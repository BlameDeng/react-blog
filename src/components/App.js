import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import '../style/App.scss'
// import AuthRoute from './AuthRoute'
import Home from '../containers/Home'
import Auth from '../containers/Auth'
import Detail from '../containers/Detail'
import * as api from '../api'
import { login } from '../actions'
// function Home() {
//   return (
//     <div>
//       <h2> Home页面 </h2>
//     </div>
//   )
// }

// function About() {
//   return (
//     <div>
//       <h2> About页面 </h2>
//     </div>
//   )
// }

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
          <Route exact path="/" component={Home} />
          <Route exact path="/auth/:tab" component={Auth} />
          <Route exact path="/blog/:id" component={Detail} />
        </div>
      </Router>
    )
  }
}
// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <AuthRoute />
//           <ul>
//             <li>
//               <Link to="/"> Home </Link>
//             </li>
//             <li>
//               <Link to="/about"> About </Link>
//             </li>
//           </ul>
//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//         </div>
//       </Router>
//     )
//   }
// }

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
