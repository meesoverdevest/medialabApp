
import { SET_CAM_PROP } from '../action_types/camera'

let initialState = { torchMode: "off", cameraType: "back" }

function camera(state = initialState, action) {

  switch (action.type) {
    case SET_CAM_PROP:        		
      return Object.assign({}, state, {[action.name] : action.value})
    default:
      return state;
  }
}

export { camera };