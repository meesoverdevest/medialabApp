
import { SET_BARCODE_DATA } from '../action_types/barcodes'

function barcodes(state = { }, action) {

  switch (action.type) {
    case SET_BARCODE_DATA:        		
      return Object.assign({}, state, {[action.barcode] : action.value})
    default:
      return state;
  }
}

export { barcodes };