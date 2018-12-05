import React, { Component } from 'react'
import formatDate from '../utils/formatDate'
import '../style/Main.scss'
import { Pagination } from 'antd'
class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: null
    }
  }

  //   static geDerivedStateFromProps(nextProps, prevState) {
  //     let { blogs } = nextProps
  //     return blogs
  //   }

  onChange(page) {
    this.props.getBlogs(page)
  }

  render() {
    let { blogs } = this.props
    let lis = null
    if (blogs && blogs.items && blogs.items.length) {
      lis = blogs.items.map(item => (
        <li className="blog" key={item.id}>
          <div className="info">
            <img src={item.user && item.user.avatar} alt="avatar" />
            <span className="username">{item.user && item.user.username}</span>
          </div>
          <div className="blog-content">
            <h3 className="title">{item.title}</h3>
            <span className="time">{formatDate(item.createdAt)}</span>
            <div className="description">{item.description}</div>
          </div>
        </li>
      ))
    } else {
      lis = <li className="blog">xxx</li>
    }

    return (
      <main className="main">
        <ul className="list">{lis}</ul>
        <Pagination onChange={this.onChange.bind(this)} total={blogs.total} />
      </main>
    )
  }
}

export default Main
