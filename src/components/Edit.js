import React, { Component } from 'react'
import '../style/Edit.scss'
import { Button, Input } from 'antd'

class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clientHeight: 0
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    let clientHeight = document.documentElement.clientHeight
    if (prevState.clientHeight !== clientHeight) {
      return { clientHeight }
    }
    return null
  }

  render() {
    return (
      <div className="article-edit">
        <h2 className="title">新建文章</h2>
        <div className="article-form">
          <div className="item">
            <span>标题</span>
            <Input />
          </div>
          <div className="item">
            <span>简介</span>
            <Input />
          </div>
          <div className="item text-wrapper">
            <span>内容</span>
            <Input.TextArea style={{flexGrow:1}} />
          </div>
          <div className="btns">
            <Button style={{marginRight:'10px'}}>取消</Button>
            <Button style={{marginRight:'10px'}} type="primary">预览</Button>
            <Button type="primary">保存</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Edit
