
import { SET_SELECTED_ADJUSTMENT  } from '../../action_types/adjustments'

function selected_adjustment(state = null, action) {
  switch (action.type) {
    case SET_SELECTED_ADJUSTMENT:     
      return action.data;
    default:
      return state;
  }
}

export { selected_adjustment };