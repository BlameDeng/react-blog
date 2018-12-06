import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../style/Header.scss'
import { Popover, Button, Icon, message } from 'antd'
import * as api from '../api'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  handleClickLogo() {
    this.props.history.push('/')
  }

  handleVisibleChange(visible) {
    this.setState({
      visible
    })
  }

  handleLogout() {
    this.setState({ visible: false })
    api
      .logout()
      .then(res => {
        this.props.logout()
        message.info(res.msg, 2)
      })
      .catch(err => {
        this.props.logout()
        message.error(err.msg, 2)
      })
  }

  handleClickMyBlogs() {
    this.props.history.push('/user/' + this.props.user.id)
  }

  render() {
    const { user } = this.props
    return (
      <div className="header-wrapper">
        <header className="header">
          <div className="logo" onClick={this.handleClickLogo.bind(this)}>
            <img src={require('../style/img/logo.png')} alt="logo" />
            <span className="text">多人共享博客</span>
          </div>
          {user ? (
            <div className="user-info">
              <Icon type="form" />
              <Popover
                placement="bottom"
                trigger="click"
                onVisibleChange={this.handleVisibleChange.bind(this)}
                visible={this.state.visible}
                content={
                  <ul style={ulStyle}>
                    <li
                      style={liStyle}
                      onClick={this.handleClickMyBlogs.bind(this)}
                    >
                      我的博客
                    </li>
                    <li style={liStyle} onClick={this.handleLogout.bind(this)}>
                      注销登录
                    </li>
                  </ul>
                }
              >
                <div className="info">
                  <img src={user.avatar} alt="avatar" />
                  <span className="username">{user.username}</span>
                </div>
              </Popover>
            </div>
          ) : (
            <div className="btns">
              <Button style={{ marginRight: '10px' }}>
                <Link to="/auth/login">登录</Link>
              </Button>
              <Button>
                <Link to="/auth/register">注册</Link>
              </Button>
            </div>
          )}
        </header>
      </div>
    )
  }
}

const ulStyle = {
  width: '100%',
  height: '56px',
  marginBottom: '0',
  lineHeight: '28px'
}

const liStyle = {
  width: '100%',
  height: '28px',
  cursor: 'pointer'
}

export default Header
