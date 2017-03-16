import { SET_CAM_PROP } from '../action_types/camera'

export const set_cam_prop = (name, value) => ({type: SET_CAM_PROP, name: name, value: value})