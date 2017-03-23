
import { START_LOADING, ERROR_LOADING, DONE_LOADING } from '../../action_types/loading';
import { REGISTER, REGISTER_SUCCESS, REGISTER_ERROR } from '../../action_types/user';

import { EMPTY_INPUTS } from '../../action_types/inputs';

export const register = (inputs) => {

	var payload = {};
	var keys = [];

	for( let [key, value] of Object.entries(inputs)) {
		payload[key.substr(key.indexOf("-") + 1)] = value.value;
		keys.push(key);
	}

	return (dispatch) => {
		dispatch({ type: START_LOADING })	
		
		let params = {
		    method: "POST",
		    body: JSON.stringify( payload ),
		    headers: {
	        'Content-Type': 'application/json',
	    	},
		}

		return fetch('https://teamstack.nl/api/register', params)
			.then(response =>	response.json())
			.then(response => dispatch(register_success(response, dispatch, keys)))
			.catch(err => dispatch(register_error(err, dispatch)));
	}
}

function register_success(data, dispatch, keys){
	dispatch({type: DONE_LOADING})
	dispatch({type: EMPTY_INPUTS, keys: keys})
	// console.log(data);
	
	return {
		type: REGISTER_SUCCESS,
		data: data
	}
}

function register_error(data, dispatch){
	dispatch({type: DONE_LOADING})
	
	return {
		type: REGISTER_ERROR,
		data: data
	}
}