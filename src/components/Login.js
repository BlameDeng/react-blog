import React, { Component } from 'react'
import { Input, Button } from 'antd'
import '../style/Auth.scss'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="form">
      <h3>用户登录</h3>
        <Input placeholder="请输入用户名" />
        <Input placeholder="请输入密码" />
        <Button>登录</Button>
      </div>
    )
  }
}

export default Register
