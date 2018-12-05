import { combineReducers } from 'redux'
import auth from './auth'
import user from './user'
import userBlogs from './userBlogs'
import blogs from './blogs'

export default combineReducers({
    auth,
    user,
    userBlogs,
    blogs
})