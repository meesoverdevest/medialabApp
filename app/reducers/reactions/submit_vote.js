
import { VOTE_SUBMITTED, VOTE_SUBMISSION_ERROR  } from '../../action_types/adjustments'

function vote_submitted(state = false, action) {

  switch (action.type) {
    case VOTE_SUBMITTED:     
    console.log(action.data)   		
      return true;
    case VOTE_SUBMISSION_ERROR:
    	console.error('vote submission failed')
    	return false;
    default:
      return state;
  }
}

export { vote_submitted };