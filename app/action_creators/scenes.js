
import { SET_SCENE_KEY } from '../action_types/scenes'

export const nextScene = (sceneKey) => ({type: SET_SCENE_KEY, key: sceneKey})
