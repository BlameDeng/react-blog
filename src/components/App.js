import React, { Component } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import '../style/App.scss'
// import AuthRoute from './AuthRoute'
import Home from '../containers/Home'
import Auth from '../containers/Auth'

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
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={Home} />
          <Route exact path="/auth/:tab" component={Auth} />
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

export default App
