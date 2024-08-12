import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './reducers/auth.reducer';
import { appReducer } from './reducers/app.reducer';
import { signupApi } from './apis/signupAPI';
import signUpSlice from './reducers/signUpSlice';
import loginSlice from './reducers/loginSlice';
import { loginApi } from './apis/loginAPI';
import { customerProfileApi } from './apis/customerProfileAPI';

const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    login: loginSlice,
    [loginApi.reducerPath]: loginApi.reducer,
    signUp: signUpSlice,
    [signupApi.reducerPath]: signupApi.reducer,
    [customerProfileApi.reducerPath]: customerProfileApi.reducer,
});

export default rootReducer;