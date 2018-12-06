import React, { Component } from 'react'
import '../style/Blog.scss'
import * as api from '../api'
import { message } from 'antd'
import formatDate from '../utils/formatDate'

class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blog: null
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id
    api
      .getBlogById(id)
      .then(res => {
        this.setState({ blog: res.data })
      })
      .catch(err => {
        message.error(err.msg, 2, () => {
          this.props.history.push('/')
        })
      })
  }

  handleClickUsername(id) {
    this.props.history.push('/user/' + id)
  }

  render() {
    let blog = this.state.blog
    return (
      <div className="detail-blog">
        {blog ? (
          <div className="wrapper">
            <div className="title">
              <img src={blog.user && blog.user.avatar} alt="avatar" />
              <div className="title-inner">
                <h3> {blog.title} </h3>
                <div className="info">
                  {blog.user ? (
                    <span
                      className="username"
                      onClick={this.handleClickUsername.bind(
                        this,
                        blog.user.id
                      )}
                    >
                      {blog.user.username}
                    </span>
                  ) : (
                    ''
                  )}
                  <span className="time">
                    发表于 {formatDate(blog.createdAt)}
                  </span>
                </div>
              </div>
            </div>
            <p className="content"> {blog.content} </p>
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default Blog
