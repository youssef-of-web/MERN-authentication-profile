import { combineReducers } from "redux";

import authReducer from './authReducer'
import errorsReducer from './errorsReducer'
import profileReducer from './profileReducer'
export default combineReducers({
    auth: authReducer,
    errors: errorsReducer,
    profiles: profileReducer
})