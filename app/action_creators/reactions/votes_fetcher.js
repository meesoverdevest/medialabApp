import { START_LOADING, ERROR_LOADING, DONE_LOADING } from '../../action_types/loading';
import { VOTES_FETCHED, VOTES_ERROR  } from '../../action_types/adjustments'

export const fetch_votes = (token) => {
	return (dispatch) => {

		dispatch({ type: START_LOADING })	

		let params = {
			method: 'GET',
			headers: {
        'Authorization': 'Bearer ' + token,
    	},
		};
		
		return fetch('http://medialab.mefolio.nl/api/votes', params)
			.then(response =>	response.json())
			.then(response => dispatch(votes_success(response, dispatch)))
			.catch(err => dispatch(votes_error(err, dispatch)));
	}
}

function votes_success(data, dispatch){
	dispatch({type: DONE_LOADING})
	
	return {
		type: VOTES_FETCHED,
		data: data
	}
}

function votes_error(data, dispatch){
	dispatch({type: DONE_LOADING})
	
	return {
		type: VOTES_ERROR,
		data: data
	}
}