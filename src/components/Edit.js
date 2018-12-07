import React, { Component } from 'react'
import '../style/Edit.scss'
import { Button, Input, Icon, message } from 'antd'
import marked from 'marked'
import * as api from '../api'

class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      content: '',
      preview: false,
      isFetching: false
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let { user, history } = nextProps
    if (!user) {
      history.push('/')
    }
    return null
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (
      prevProps.match.params.id !== 'add' &&
      this.props.match.params.id === 'add'
    ) {
      return true
    }
    return null
  }

  componentDidMount() {
    if (this.props.match.params.id !== 'add') {
      this.getEditingBlog()
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) {
      this.setState({
        title: '',
        description: '',
        content: ''
      })
    }
  }

  getEditingBlog() {
    api
      .getBlogById(this.props.match.params.id)
      .then(res => {
        let { title, description, content } = res.data
        this.setState({ title, description, content })
      })
      .catch(err => {
        message.error(err.msg, 2)
      })
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value
    })
  }

  handleDescriptionChange(e) {
    this.setState({
      description: e.target.value
    })
  }

  handleContentChange(e) {
    this.setState({
      content: e.target.value
    })
  }

  handlePreview() {
    this.setState({
      preview: true
    })
  }

  handleClose() {
    this.setState({
      preview: false
    })
  }

  handleSave() {
    if (!this.state.title || !this.state.content) {
      message.info('博客标题或内容不能为空', 2)
      return
    }
    if (this.isFetching) {
      return
    }
    this.setState({ isFetching: true })
    if (this.props.match.params.id !== 'add') {
      this.patchBlog()
      return
    }
    api
      .createBlog(this.state.title, this.state.description, this.state.content)
      .then(res => {
        this.setState({ isFetching: false })
        message.success(res.msg, 1, () => {
          this.props.history.push('/user/' + this.props.user.id)
        })
      })
      .catch(err => {
        message.error(err.msg, 2)
        this.setState({ isFetching: false })
      })
  }

  handleCancle() {
    this.props.history.push('/user/' + this.props.user.id)
  }

  patchBlog() {
    api
      .patchBlog(
        this.props.match.params.id,
        this.state.title,
        this.state.description,
        this.state.content
      )
      .then(res => {
        message.success(res.msg, 1, () => {
          this.props.history.push('/user/' + this.props.user.id)
        })
        this.setState({ isFetching: false })
      })
      .catch(err => {
        message.error(err.msg, 2)
        this.setState({ isFetching: false })
      })
  }

  render() {
    let id = this.props.match.params.id
    return (
      <div className="article-edit">
        <h2 className="title">{id&&id==='add'?'新建文章':'编辑文章'}</h2>
        <div className="article-form">
          <div className="item">
            <span>标题</span>
            <Input
              value={this.state.title}
              onChange={this.handleTitleChange.bind(this)}
            />
            <span className="limit">
              {this.state.title.length > 100 ? (
                <span style={{ color: '#f5222d', fontSize: '12px' }}>
                  {this.state.title.length}
                </span>
              ) : (
                <span style={{ fontSize: '12px' }}>
                  {this.state.title.length}
                </span>
              )}
              /100
            </span>
          </div>
          <div className="item">
            <span>简介</span>
            <Input
              value={this.state.description}
              onChange={this.handleDescriptionChange.bind(this)}
            />
          </div>
          <div className="item text-wrapper">
            <span>内容</span>
            <Input.TextArea
              style={{ flexGrow: 1 }}
              value={this.state.content}
              onChange={this.handleContentChange.bind(this)}
            />
          </div>
          <div className="btns">
            <Button
              style={{ marginRight: '10px' }}
              onClick={this.handleCancle.bind(this)}
            >
              取消
            </Button>
            <Button
              style={{ marginRight: '10px' }}
              type="primary"
              onClick={this.handlePreview.bind(this)}
            >
              预览
            </Button>
            <Button type="primary" onClick={this.handleSave.bind(this)}>
              保存
            </Button>
          </div>
        </div>
        {this.state.preview ? (
          <div className="preview">
            <div
              className="marked-content"
              dangerouslySetInnerHTML={{ __html: marked(this.state.content) }}
            />
            <div className="icon-wrapper" onClick={this.handleClose.bind(this)}>
              <Icon type="close" />
            </div>
            <div className="btn-wrapper">
              <Button onClick={this.handleClose.bind(this)}>关闭预览</Button>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default Edit
