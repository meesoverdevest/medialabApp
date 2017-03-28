
import { START_LOADING, ERROR_LOADING, DONE_LOADING } from '../../action_types/loading';
import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from '../../action_types/user';
import { EMPTY_INPUTS } from '../../action_types/inputs';

export const login = (email, pass, fields) => {
	return (dispatch) => {
		dispatch({ type: START_LOADING })	

		let payload = {
			mail: email,
			pass: pass
		}
		
		let params = {
			method: 'POST',
			body: JSON.stringify( payload ),
			headers: {
	        'Content-Type': 'application/json',
    	},
			// headers: {
   //      'Authorization': 'Bearer ' + user.token,
   //  	}
		};

		return fetch('http://medialab.mefolio.nl/api/login', params)
			.then(response =>	response.json())
			.then(response => dispatch(login_success(response, dispatch, fields)))
			.catch(err => dispatch(login_error(err, dispatch)));


		// return fetch('http://ff.app/api/test', params)
			// .then(response =>	response)
			// .then(response => dispatch(login_success(response)))
			// .catch(err => dispatch(login_error(err)));
		// return dispatch(login_success({name: name, email: email},dispatch))
	}
}

function login_success(data, dispatch, keys){
	dispatch({type: DONE_LOADING})
	dispatch({type: EMPTY_INPUTS, keys: keys})
	
	return {
		type: LOGIN_SUCCESS,
		data: data
	}
}

function login_error(data, dispatch){
	dispatch({type: DONE_LOADING})
	console.log(data);
	
	return {
		type: LOGIN_ERROR,
		data: data
	}
}