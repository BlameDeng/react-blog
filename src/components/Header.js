import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../style/Header.scss'
import { Popover, Button, Icon } from 'antd'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return null
  // }

  componentDidMount() {
    this.props.getBlogs(1)
  }

  handleVisibleChange(visible) {
    this.setState({
      visible
    })
  }

  render() {
    const { user } = this.props
    return (
      <div className="header-wrapper">
        <header className="header">
          <div className="logo">
          <img src={require('../style/img/logo.png')} alt="logo"/>
            <span className="text">多人共享博客</span>
          </div>
          {user ? (
            <div className="user-info">
              <Icon type="form" />
              <Popover
                placement="bottom"
                trigger="click"
                onVisibleChange={this.handleVisibleChange.bind(this)}
                content={
                  <ul style={ulStyle}>
                    <li style={liStyle}>我的博客</li>
                    <li style={liStyle}>注销登录</li>
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
