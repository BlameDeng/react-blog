import React, { Component } from 'react'
import formatDate from '../utils/formatDate'
import '../style/Main.scss'
import { Pagination, Spin, Button, Popconfirm, message } from 'antd'
import * as api from '../api'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: '',
      defaultCurrent: 1
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let { page, id } = nextProps.match.params
    if (page) {
      return { defaultCurrent: +page, userId: id }
    }
    return { userId: id }
  }

  componentDidMount() {
    this.getBlogsList()
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      return true
    }
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) {
      this.getBlogsList()
    }
  }

  getBlogsList() {
    if (this.props.match.params && this.props.match.params.id) {
      this.setState({ userId: this.props.match.params.id })
      this.props.getUserBlogs(
        this.props.match.params.id,
        this.state.defaultCurrent
      )
    } else {
      this.props.getBlogs(this.state.defaultCurrent)
    }
  }

  onChange(page) {
    if (this.props.getBlogs) {
      this.props.getBlogs(page)
      this.props.history.push('./' + page)
    }
    this.props.getUserBlogs && this.props.getUserBlogs(this.state.userId, page)
  }

  handleClickBlog(id) {
    this.props.history.push('/blog/' + id)
  }

  handleClickUser(id) {
    this.props.history.push('/user/' + id)
  }

  handleClickButton(type, id) {
    if (type === 'scan') {
      this.props.history.push('/blog/' + id)
    } else if (type === 'edit') {
    } else if (type === 'delete') {
    }
  }

  handleCancle() {
    message.info('已取消删除', 2)
  }

  handleConfirm(id) {
    api
      .deleteBlog(id)
      .then(() => {
        this.props.deleteBlog(id)
        message.success('删除成功', 2)
      })
      .catch(err => {
        message.error(err.msg, 2)
      })
  }

  render() {
    let { blogs, getBlogs } = this.props
    let self = this.props.user && this.props.user.id === +this.state.userId
    return (
      <main className="main">
        {!getBlogs && (
          <h2 className="title" style={{ padding: '10px' }}>
            {self ? '我' : '他 / 她'}发表的博客
          </h2>
        )}
        <ul className="list">
          {blogs && blogs.items && blogs.items.length ? (
            blogs.items.map(item => (
              <li className="blog" key={item.id}>
                <div
                  className="info"
                  onClick={this.handleClickUser.bind(
                    this,
                    item.user && item.user.id
                  )}
                >
                  <img src={item.user && item.user.avatar} alt="avatar" />
                  <span className="username">
                    {item.user && item.user.username}
                  </span>
                </div>
                <div
                  className="blog-content"
                  onClick={this.handleClickBlog.bind(this, item.id)}
                >
                  <h3 className="title"> {item.title} </h3>
                  <span className="time"> {formatDate(item.createdAt)} </span>
                  <div className="description"> {item.description} </div>
                </div>
                {self ? (
                  <div className="actions">
                    <Button
                      onClick={this.handleClickButton.bind(
                        this,
                        'scan',
                        item.id
                      )}
                      style={{ marginRight: '5px' }}
                    >
                      查看
                    </Button>
                    <Button
                      onClick={this.handleClickButton.bind(
                        this,
                        'edit',
                        item.id
                      )}
                      type="primary"
                      style={{ marginRight: '5px' }}
                    >
                      编辑
                    </Button>
                    <Popconfirm
                      title="是否永久删除该博客"
                      okText="确认删除"
                      cancelText="取消删除"
                      onConfirm={this.handleConfirm.bind(this, item.id)}
                      onCancel={this.handleCancle.bind(this)}
                    >
                      <Button
                        onClick={this.handleClickButton.bind(
                          this,
                          'delete',
                          item.id
                        )}
                        type="danger"
                      >
                        删除
                      </Button>
                    </Popconfirm>
                  </div>
                ) : (
                  ''
                )}
              </li>
            ))
          ) : (
            <li
              className="blog"
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                padding: '40px 0'
              }}
            >
              <Spin spinning={true} size="large" />
            </li>
          )}
        </ul>
        <Pagination
          onChange={this.onChange.bind(this)}
          total={blogs.total}
          defaultCurrent={this.state.defaultCurrent}
        />
      </main>
    )
  }
}

export default Main
