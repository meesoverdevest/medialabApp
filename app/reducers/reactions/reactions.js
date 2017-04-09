
import { REACTIONS_FETCHED, REACTION_ERROR  } from '../../action_types/adjustments'

function reactions(state = {}, action) {

  switch (action.type) {
    case REACTIONS_FETCHED:     
    // console.log(action.data)   		
      return Object.assign({}, state, action.data)
    case REACTION_ERROR:
    	console.error('fetch reactions failed')
    	return state;
    default:
      return state;
  }
}

export { reactions };