import { SET_INPUT_VALUE, EMPTY_INPUTS } from '../action_types/inputs';

export const set_input_value = (container, field, value) => ({type: SET_INPUT_VALUE, container: container, field: field, value: value})

export const empty_inputs = (arr) => ({type: EMPTY_INPUTS, keys: arr})