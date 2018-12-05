export default (state = false, action) => {
    switch (action.type) {
        case 'setAuth':
            return action.auth
        default:
            return state
    }
}