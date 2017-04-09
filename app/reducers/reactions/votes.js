
import { VOTES_FETCHED, VOTES_ERROR  } from '../../action_types/adjustments'

function votes(state = {}, action) {

  switch (action.type) {
    case VOTES_FETCHED:     
    // console.log(action.data)   		
      return Object.assign({}, state, action.data)
    case VOTES_ERROR:
    	console.error('fetch votes failed')
    	return state;
    default:
      return state;
  }
}

export { votes };