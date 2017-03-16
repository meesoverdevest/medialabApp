import Permissions from 'react-native-permissions';
import { SET_PERMISSION } from '../../action_types/user'
import { START_LOADING, ERROR_LOADING, DONE_LOADING } from '../../action_types/loading';

export const check_permission = (permission) => {
	return (dispatch) => {
		// dispatch({ type: START_LOADING })	
		return Permissions.getPermissionStatus(permission)
		  .then(response => {
		    //response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
		    dispatch(checked_permission(response, permission, dispatch))
		  });
	}
}

export const request_permission = (permission) => {
	//request permission to access camera
  return (dispatch) => {
	  return Permissions.requestPermission(permission)
      .then(res => {
        dispatch(set_permission(res, permission));
      }).catch(e => console.warn(e))      
  }
}

let checked_permission = (status, name, dispatch) => {
	dispatch(set_permission(1, name + 'Checked'));

	return {
		type: SET_PERMISSION,
		name: name,
		value: status
	}
}

let set_permission = (status, name) => {
	// dispatch({type: DONE_LOADING})
	// console.log(response)
	return {
		type: SET_PERMISSION,
		name: name,
		value: status
	}
}