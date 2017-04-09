
import { START_LOADING, ERROR_LOADING, DONE_LOADING } from '../../action_types/loading';
import { VOTE_SUBMITTED, VOTE_SUBMISSION_ERROR  } from '../../action_types/adjustments'

export const submit_vote = (token, vote, reactionId) => {
	return (dispatch) => {

		dispatch({ type: START_LOADING })	

		let payload = {
			vote: vote,
			reaction: reactionId
		}
		
		let params = {
			method: 'POST',
			body: JSON.stringify( payload ),
			headers: {
	        'Content-Type': 'application/json',
	        'Authorization': 'Bearer ' + token,
    	},
		};
		
		return fetch('http://medialab.mefolio.nl/api/votes', params)
			.then(response =>	response.json())
			.then(response => dispatch(vote_success(response, dispatch)))
			.catch(err => dispatch(vote_error(err, dispatch)));
	}
}

function vote_success(data, dispatch){
	dispatch({type: DONE_LOADING})
	
	return {
		type: VOTE_SUBMITTED,
		data: data
	}
}

function vote_error(data, dispatch){
	dispatch({type: DONE_LOADING})
	
	return {
		type: VOTE_SUBMISSION_ERROR,
		data: data
	}
}