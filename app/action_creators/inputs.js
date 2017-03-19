import { SET_INPUT_VALUE, EMPTY_INPUTS } from '../action_types/inputs';
import { isObjectEmpty } from '../utils/objects'

export const set_input_value = (field, value) => ({type: SET_INPUT_VALUE, field: field, value: value})

export const update_inputs = (state, inputs) => {

	let rows = new Array();

	for(input of inputs) {

		rows[input] = [];

		if(state[input] === undefined) {
			rows[input]['value'] = "";
		} else {
			rows[input]['value'] = isObjectEmpty(state[input]) !== true ? state[input]["value"] : "";
		}

		
		rows[input]['field'] = input;
		rows[input]['name'] = input.substr(input.indexOf("-") + 1);
	}

	return rows;
}

export const empty_inputs = (arr) => ({type: EMPTY_INPUTS, keys: arr})