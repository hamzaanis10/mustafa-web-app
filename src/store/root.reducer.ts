import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './reducers/auth.reducer';
import { appReducer } from './reducers/app.reducer';
import { signupApi } from './apis/signupAPI';

const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    [signupApi.reducerPath]: signupApi.reducer,
});
export default rootReducer;