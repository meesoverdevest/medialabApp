
import { START_LOADING, DONE_LOADING, ERROR_LOADING } from '../action_types/loading'

const loading = (state = false, action) => {
    switch (action.type) {
        case START_LOADING:
            return true
        case DONE_LOADING:
            return false
        case ERROR_LOADING:
            return false
        default:
            return state
    }
}

export {loading}