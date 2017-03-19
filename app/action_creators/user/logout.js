
import { START_LOADING, ERROR_LOADING, DONE_LOADING } from '../../action_types/loading';
import { LOG_OUT } from '../../action_types/user';

export const logout = (name, email) => {
	return (dispatch) => {
		dispatch({ type: START_LOADING })	
		
		return dispatch(log_out(dispatch))
	}
}

function log_out(dispatch){
	dispatch({type: DONE_LOADING})
	
	return {
		type: LOG_OUT
	}
}
