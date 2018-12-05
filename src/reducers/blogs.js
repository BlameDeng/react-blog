export default (state = {}, action) => {
    switch (action.type) {
        case 'GET_BLOGS':
            return Object.assign({}, state, action.blogs)
        default:
            return state
    }
}