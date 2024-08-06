import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './reducers/auth.reducer';
import { appReducer } from './reducers/app.reducer';
import { signupApi } from './apis/signupAPI';
import signUpSlice from './reducers/signUpSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    signUp: signUpSlice,
    [signupApi.reducerPath]: signupApi.reducer,
});

export default rootReducer;