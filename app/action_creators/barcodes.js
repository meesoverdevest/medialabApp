import { SET_BARCODE_DATA } from '../action_types/barcodes'

export const set_barcode_data = (barcode, type) => ({type: SET_BARCODE_DATA, barcode: barcode, value: type})