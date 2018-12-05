import * as api from '../api'

export const login = () => ({
    type: 'setAuth',
    auth: true
})

export const logout = () => ({
    type: 'setAuth',
    auth: false
})

const request_blogs = () => ({
    type: 'GET_BLOGS',
    blogs: {
        isFetching: true
    }
})

const receive_blogs = (currentPage, totalPage, total, items) => ({
    type: 'GET_BLOGS',
    blogs: {
        isFetching: false,
        currentPage,
        totalPage,
        total,
        items
    }
})

export const getBlogs = page => {

    return dispatch => {

        dispatch(request_blogs())

        api.getBlogs({ page })
            .then(res => {
                let { page, totalPage, total, data } = res
                dispatch(receive_blogs(page, totalPage, total, data))
            }, err => {
                console.log(err)
            })
    }
}