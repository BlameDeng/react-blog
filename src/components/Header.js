import React, { Component } from 'react'
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
              <Button style={{ marginRight: '10px' }}>登录</Button>
              <Button>注册</Button>
            </div>
          </header>
        </div>
      )
    }
  }
}

export default Header
