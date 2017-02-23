
import { SET_SCENE_KEY } from '../action_types/scenes'

function scene(state = false, action) {

  switch (action.type) {
    case SET_SCENE_KEY:        		
      return action.key;
    default:
      return state;
  }
}

export { scene };