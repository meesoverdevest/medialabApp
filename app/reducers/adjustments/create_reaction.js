
import { CREATING_REACTION, REACTION_CREATED, REACTION_CREATED_ERROR  } from '../../action_types/adjustments'

function creating_reaction(state = false, action) {

  switch (action.type) {
    case CREATING_REACTION:     
    console.log(action.data)      
      return true
    case REACTION_CREATED:     
    console.log(action.data)   		
      return false
    case REACTION_CREATED_ERROR:
    	console.error('fetch failed')
    	return state;
    default:
      return state;
  }
}

export { creating_reaction };