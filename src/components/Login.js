import React, { Component } from 'react'
import { Input, Button, message } from 'antd'
import * as api from '../api'
import '../style/Auth.scss'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'hunger',
      password: '123456',
      isLogining: false
    }
  }

  handleUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit() {
    if (this.state.isLogining) {
      return
    }
    let { username, password } = this.state
    if (!username || !password) {
      message.info('用户名或密码不能为空', 2)
      return
    }
    const pattern1 = /^[\w\u4e00-\u9fa5]{1,15}$/
    const pattern2 = /^.{6,16}$/
    if (!pattern1.test(username)) {
      message.info('用户名为长度1到15的字母数字下划线或中文', 2)
      return
    }
    if (!pattern2.test(password)) {
      message.info('密码为长度6到16的任意字符', 2)
      return
    }
    this.setState({
      isLogining: true
    })
    api
      .login({ username, password })
      .then(res => {
        this.props.login(res.data)
        this.setState({
          isLogining: false
        })
        this.props.history.push('/')
      })
      .catch(err => {
        message.error(err.msg, 2)
        this.setState({
          isLogining: false
        })
      })
  }

  render() {
    return (
      <div className="form">
        <h3>用户登录</h3>
        <Input
          placeholder="请输入用户名"
          value={this.state.username}
          onChange={this.handleUsername.bind(this)}
        />
        <Input
          placeholder="请输入密码"
          type="password"
          value={this.state.password}
          onChange={this.handlePassword.bind(this)}
        />
        <Button onClick={this.handleSubmit.bind(this)}>登录</Button>
      </div>
    )
  }
}

export default Register
