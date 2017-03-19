
import { START_LOADING, ERROR_LOADING, DONE_LOADING } from '../../action_types/loading';
import { REGISTER, REGISTER_SUCCESS, REGISTER_ERROR } from '../../action_types/user';
import { Actions } from 'react-native-router-flux';

import { EMPTY_INPUTS } from '../../action_types/inputs';

export const register = (mail, pass) => {
	return (dispatch) => {
		// Actions.refresh();
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

		// AFTER REGISTER
		dispatch({type: EMPTY_INPUTS, keys: ["RegisterScene-name", "RegisterScene-mail", "RegisterScene-pass", "RegisterScene-neighbourhood"]});
		return dispatch(register_success(
					{email: mail, pass: pass},
					dispatch
				)
			);
	}
}

function register_success(data, dispatch){
	dispatch({type: DONE_LOADING})
	// console.log(data);
	
	return {
		type: REGISTER_SUCCESS,
		data: data
	}
}

function register_error(data, dispatch){
	dispatch({type: DONE_LOADING})
	console.log(data);
	
	return {
		type: REGISTER_ERROR,
		data: data
	}
}