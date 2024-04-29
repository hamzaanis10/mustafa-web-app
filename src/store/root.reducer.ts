import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './reducers/auth.reducer';
import { appReducer } from './reducers/app.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer
});
export default rootReducer;