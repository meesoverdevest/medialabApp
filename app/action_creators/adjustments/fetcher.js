
import { START_LOADING, ERROR_LOADING, DONE_LOADING } from '../../action_types/loading';
import { ADJUSTMENTS_FETCHED, ADJUSTMENTS_ERROR  } from '../../action_types/adjustments'

export const fetch_adjustments = (token) => {
	return (dispatch) => {
		// Actions.refresh();
		dispatch({ type: START_LOADING })	

		let params = {
			method: 'GET',
			headers: {
        'Authorization': 'Bearer ' + token,
    	},
		};
		
		return fetch('http://medialab.mefolio.nl/api/adjustments', params)
			.then(response =>	response.json())
			.then(response => dispatch(adjustment_success(response, dispatch)))
			.catch(err => dispatch(adjustment_error(err, dispatch)));
	}
}

function adjustment_success(data, dispatch){
	dispatch({type: DONE_LOADING})
	
	return {
		type: ADJUSTMENTS_FETCHED,
		data: data
	}
}

function adjustment_error(data, dispatch){
	dispatch({type: DONE_LOADING})
	
	return {
		type: ADJUSTMENTS_ERROR,
		data: data
	}
}