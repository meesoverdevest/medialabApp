
import { START_LOADING, ERROR_LOADING, DONE_LOADING } from '../../action_types/loading';
import { REACTIONS_FETCHED, REACTIONS_ERROR  } from '../../action_types/adjustments'

export const fetch_reactions = (token) => {
	return (dispatch) => {

		dispatch({ type: START_LOADING })	

		let params = {
			method: 'GET',
			headers: {
        'Authorization': 'Bearer ' + token,
    	},
		};
		
		return fetch('http://medialab.mefolio.nl/api/reactions', params)
			.then(response =>	response.json())
			.then(response => dispatch(reaction_success(response, dispatch)))
			.catch(err => dispatch(reaction_error(err, dispatch)));
	}
}

function reaction_success(data, dispatch){
	dispatch({type: DONE_LOADING})
	
	return {
		type: REACTIONS_FETCHED,
		data: data
	}
}

function reaction_error(data, dispatch){
	dispatch({type: DONE_LOADING})
	
	return {
		type: REACTIONS_ERROR,
		data: data
	}
}