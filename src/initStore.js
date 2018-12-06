import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
const initStore = () => {
    const state = {
        user: null,
        userBlogs: {
            isFetching: false,
            currentPage: 0,
            totalPage: 0,
            total: 0,
            items: []
        },
        blogs: {
            isFetching: false,
            currentPage: 0,
            totalPage: 0,
            total: 0,
            items: []
        }
    }
    const store = createStore(reducers, state, applyMiddleware(ReduxThunk))
    return store
}

export default initStore