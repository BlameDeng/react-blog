import React, { Component } from 'react'
import '../style/Header.scss'
import Icon from './ui/Icon'
class Header extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    const auth = this.props.auth
    if (auth) {
    } else {
      return (
        <header className="header">
          <Icon style={{ width: '30px', height: '30px', color: 'red' }} icon={'blog'} />
          <div className="btns">
            <div className="btn">登录</div>
            <div className="btn">注册</div>
          </div>
        </header>
      )
    }
  }
}

export default Header
