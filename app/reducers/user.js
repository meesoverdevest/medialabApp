
import { AUTHENTICATE_ERROR, AUTHENTICATE_SUCCESS } from '../action_types/loading'
import { REGISTER_SUCCESS, REGISTER_ERROR, LOGIN_ERROR, LOGIN_SUCCESS, LOG_OUT } from '../action_types/user'

function user(state = {}, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:       
     		
      return Object.assign({}, state, {'name' : action.data.name, 'email': action.data.mail, 'token': action.data.token})
    case REGISTER_ERROR:        		
      return state;
    case AUTHENTICATE_SUCCESS:       
     		// console.log('dat')
      return Object.assign({}, state, {'token' : action.data.newToken})
    case AUTHENTICATE_ERROR: 
      // console.log(action)       		
      return state;
    case LOGIN_SUCCESS:
      // console.log(action.data)
      return Object.assign({}, state, {'name' : action.data.name, 'email': action.data.mail, 'token': action.data.token})
    case LOG_OUT:

      return Object.assign({}, state, {'name': "", 'email': ""});
    default:
      return state;
  }
}

export { user };