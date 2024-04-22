import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './reducers/auth.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
});
export default rootReducer;