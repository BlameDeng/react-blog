import { combineReducers } from 'redux'
import user from './user'
import userBlogs from './userBlogs'
import blogs from './blogs'

export default combineReducers({
    user,
    userBlogs,
    blogs
})