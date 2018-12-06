import React, { Component } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import '../style/Header.scss'
import { Button } from 'antd'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return null
  // }

  componentDidMount() {
    this.props.getBlogs(1)
  }

  render() {
    const auth = this.props.auth
    if (auth) {
    } else {
      return (
        <div className="header-wrapper">
          <header className="header">
            <div className="logo">
              <span className="text">多人共享博客</span>
            </div>
            <div className="btns">
              <Button style={{ marginRight: '10px' }}>
                <Link to="/auth/login">登录</Link>
              </Button>
              <Button>
                <Link to="/auth/register">注册</Link>
              </Button>
            </div>
          </header>
        </div>
      )
    }
  }
}

export default Header
