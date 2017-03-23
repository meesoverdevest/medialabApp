
import { START_LOADING, ERROR_LOADING, DONE_LOADING } from '../../action_types/loading';
import { ADJUSTMENTS_FETCHED, ADJUSTMENTS_ERROR  } from '../../action_types/adjustments'

export const fetch_adjustments = () => {
	return (dispatch) => {
		// Actions.refresh();
		dispatch({ type: START_LOADING })	
		
		return fetch('https://teamstack.nl/api/adjustments')
			.then(response =>	response.json())
			.then(response => dispatch(register_success(response, dispatch)))
			.catch(err => dispatch(register_error(err, dispatch)));
	}
}

function register_success(data, dispatch){
	dispatch({type: DONE_LOADING})
	
	return {
		type: ADJUSTMENTS_FETCHED,
		data: data
	}
}

function register_error(data, dispatch){
	dispatch({type: DONE_LOADING})
	
	return {
		type: ADJUSTMENTS_ERROR,
		data: data
	}
}