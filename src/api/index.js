import axios from 'axios'

const AUTH = {
    SIGNUP: '/auth/register',
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    GET_INFO: '/auth'
}

const BLOG = {
    GET_BLOGS: '/blog',
    GET_DETAIL: '/blog/:blogId',
    CREATE: '/blog',
    UPDATE: '/blog/:blogId',
    DELETE: '/blog/:blogId'
}

axios.defaults.baseURL = 'https://blog-server.hunger-valley.com'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true

function request(url, type = 'GET', data = {}) {
    return new Promise((resolve, reject) => {
        let option = { url, method: type }
        if (type.toLowerCase() === 'get') {
            option.params = data
        } else { option.data = data }
        axios(option).then(response => {
            if (response.data.status === 'ok') {
                resolve(response.data)
            } else {
                reject(response.data)
            }
        }).catch(error => {
            reject(error)
        })
    })
}

export const getBlogs = ({ page = 1 } = { page: 1 }) => {
    return request(BLOG.GET_BLOGS, 'GET', { page })
}

export const signUp = ({ username, password }) => {
    return request(AUTH.SIGNUP, 'POST', { username, password })
}

export const login = ({ username, password }) => {
    return request(AUTH.LOGIN, 'POST', { username, password })
}

export const logout = () => {
    return request(AUTH.LOGOUT)
}

export const checkLogin = () => {
    return request(AUTH.GET_INFO)
}

export const getBlogById = id => {
    return request(BLOG.GET_DETAIL.replace(':blogId', id))
}

export const getUserBlogs = ({ id, page = 1 }) => {
    return request(BLOG.GET_BLOGS, 'GET', { userId: id, page })
}

export const deleteBlog = (id) => {
    return request(BLOG.DELETE.replace(':blogId', id), 'DELETE')
}