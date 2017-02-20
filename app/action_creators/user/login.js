
import { START_LOADING, ERROR_LOADING, DONE_LOADING } from '../../action_types/loading';
import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from '../../action_types/user';

export const login = (name, email) => {
	return (dispatch) => {

		dispatch({ type: START_LOADING })	
		
		// let params = {
		// 	method: 'GET',
		// 	headers: {
  //       'Authorization': 'Bearer ' + user.token,
  //   	}
		// };

		// return fetch('http://ff.app/api/test', params)
			// .then(response =>	response)
			// .then(response => dispatch(login_success(response)))
			// .catch(err => dispatch(login_error(err)));
		return dispatch(login_success({name: name, email: email},dispatch))
	}
}

function login_success(data, dispatch){
	dispatch({type: DONE_LOADING})
	// console.log(data);
	
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