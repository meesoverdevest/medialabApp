
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