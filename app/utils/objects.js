
export const isObjectEmpty = (obj) => {
  for (let key in obj) {
    return false;
  }
  return true;
}

export const arrayIfy = (obj) => {
	// console.log(obj)
	let arr = [];
	let len = obj.length;
	for (let i = 0; i < len; i++) {
	    arr.push({
	        key: [i],
	        name: obj[i].name,
	        picture: obj[i].picture
	    });
	}
	return arr;
}

export const getObjectWithId = (obj, id) => {
	let keys = Object.keys(obj)
	
	for (let key in keys) {
		if(obj[key].id === parseInt(id)) {
			return obj[key];
		}
	}

	return false;
}

export const getReactionsForAdjustment = (obj, id) => {
	let keys = Object.keys(obj)
	for (let o in obj) {
		// console.log(adjustment)
		
			// console.log(id)
			// console.log(obj[o].adjustment_id)	
		if(obj[o].adjustment_id === parseInt(id)){
			if(obj[o].data.length !== 0){
				return obj[o].data;
			}
		}
	}
	

	// for (let i = 0; i < keys.length; i++) {
	// 	if(obj[keys[i] == id) {
	// 		return obj[keys[i]];
	// 	}
	// }

	return false;
}

export const getVotesForReaction = (obj, reaction_id) => {
	let downvotes = [];
	let upvotes = [];
	let total = 0;

	let keys = Object.keys(obj)

	for(let o in obj){
		if(obj[o].length !== 0) {
			for(let vote of obj[o]){
				if(vote.reaction_id === reaction_id){
					total++;

					if(vote.vote === 1){
						upvotes.push(vote);
					} else {
						downvotes.push(vote);
					}
				}
			}
		}
	}

	let returnObj = {
		upvotes: upvotes,
		downvotes: downvotes,
		total: total
	};

	return returnObj;
}

export const hasUserVotedOnReaction = (obj, user_id, reaction) => {
	// let keys = Object.keys(obj)

	// for (let i = 0; i < keys.length; i++) {
	// 	if(votes[i].reaction_id === reaction.id) {
	// 		if(votes[i].user_id === user_id) {
	// 			return true;
	// 		}
	// 	}
	// }

	for(let votes in obj){
		if(votes.length !== 0) {
			for(let vote of votes){
				if(vote.user_id === user_id){
					return true;
				}
			}
		}
	}

	return false;
}