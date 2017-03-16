 import { SET_PERMISSION } from '../../action_types/user'

let initialState = { 
	camera: "undetermined",
	location: "undetermined", 
	microphone: "undetermined", 
	photo: "undetermined",
	contacts: "undetermined",
	event: "undetermined",
	reminder: "undetermined", 
	bluetooth: "undetermined", 
	notification: "undetermined",
	backgroundRefresh: "undetermined",
	cameraChecked: 0,
	locationChecked: 0
}

function permissions(state = initialState, action) {
	switch (action.type){
    case SET_PERMISSION:
      return Object.assign({}, state, {[action.name] : action.value})
    default:
    	return state;
  }

}	

export {permissions}