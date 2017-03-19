
import { SET_INPUT_VALUE, EMPTY_INPUTS } from '../action_types/inputs'

function inputs(state = { }, action) {

  switch (action.type) {
    case SET_INPUT_VALUE:        		
      return Object.assign({}, state, {[action.field] : {value: action.value}})

    case EMPTY_INPUTS: // Empty input field values of fields specified in action.keys
    	let newState = new Object();

	    for(var deleteKey in action.keys){
				newState = Object.values(state)
			    .filter(value => value !== deleteKey)
			    .reduce((result, current) => {
			      result[current] = state[current];
			      return result;
			  }, {});
	    }
	    	
	    return newState;
    default:
      return state;
  }
}

export { inputs };