
import { START_LOADING, ERROR_LOADING, DONE_LOADING } from '../../action_types/loading';
import { CREATING_REACTION, REACTION_CREATED, REACTION_CREATED_ERROR  } from '../../action_types/adjustments'
import { EMPTY_INPUTS } from '../../action_types/inputs';

export const create_reaction = (input, adjustmentId, fields, token) => {
	return (dispatch) => {
		dispatch({ type: START_LOADING })	
		dispatch({ type: CREATING_REACTION })	

		let payload = {
			reaction: input,
			adjustment: adjustmentId
		}
		
		let params = {
			method: 'POST',
			body: JSON.stringify( payload ),
			headers: {
	        'Content-Type': 'application/json',
	        'Authorization': 'Bearer ' + token,
    	},
		};

		return fetch('http://medialab.mefolio.nl/api/reactions', params)
			.then(response =>	response.json())
			.then(response => dispatch(create_success(response, dispatch, fields)))
			.catch(err => dispatch(create_error(err, dispatch)));
	}
}

function create_success(data, dispatch, keys){
	dispatch({type: DONE_LOADING})
	dispatch({type: EMPTY_INPUTS, keys: keys})
	
	return {
		type: REACTION_CREATED,
		data: data
	}
}

function create_error(data, dispatch){
	dispatch({type: DONE_LOADING})
	console.log(data);
	
	return {
		type: REACTION_CREATED_ERROR,
		data: data
	}
}