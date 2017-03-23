
import { ADJUSTMENTS_FETCHED, ADJUSTMENTS_ERROR  } from '../action_types/adjustments'

function adjustments(state = {}, action) {

  switch (action.type) {
    case ADJUSTMENTS_FETCHED:     
    console.log(action.data)   		
      return Object.assign({}, state, action.data)
    case ADJUSTMENTS_ERROR:
    	console.error('fetch failed')
    	return state;
    default:
      return state;
  }
}

export { adjustments };