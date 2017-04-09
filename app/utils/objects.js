
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
		if(obj[key].id === id) {
			return obj[key];
		}
	}

	return false;
}

export const getReactionsForAdjustment = (obj, id) => {
	let keys = Object.keys(obj)

	for (let i = 0; i < keys.length; i++) {
		if(keys[i] == id) {
			return obj[keys[i]];
		}
	}

	return false;
}

export const getVotesForReaction = (obj, id) => {
	let downvotes = [];
	let upvotes = [];
	let total = 0;

	let keys = Object.keys(obj)

	for (let i = 0; i < keys.length; i++) {
		// console.log(obj[keys[i]][0])
		// console.log(obj[keys[i]][0].reaction_id)
		if(obj[keys[i]][0].reaction_id === id) {
			total++;

			if(obj[keys[i]][0].vote === 1){
				upvotes.push(obj[keys[i]][0]);
			} else {
				downvotes.push(obj[keys[i]][0]);
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

export const hasUserVotedOnReaction = (votes, user_id, reaction) => {
	let keys = Object.keys(votes)

	for (let i = 0; i < keys.length; i++) {
		if(votes[i].reaction_id === reaction.id) {
			if(votes[i].user_id === user_id) {
				return true;
			}
		}
	}

	return false;
}