export default (state = {}, action) => {
    switch (action.type) {
        case 'GET_USERBLOGS':
            return Object.assign({}, state, action.userBlogs)
        case 'DELETE':
            let blogs = state.items.filter(item => item.id !== action.id)
            return Object.assign({}, state, { items: blogs })
        default:
            return state
    }
}