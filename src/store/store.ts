import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import rootReducer from "./root.reducer";
import apiMiddleware from "./middleware/api.middleware";
import loggerMiddleware from "./middleware/logger.middleware";
import appAfterMiddleware from "./middleware/app.after.middleware";
import appBeforeMiddleware from "./middleware/app.before.middleware";
import { signupApi } from "./apis/signupAPI";
import { loginApi } from "./apis/loginAPI";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }).concat(
            [loggerMiddleware, appBeforeMiddleware, apiMiddleware, appAfterMiddleware, loginApi.middleware ,signupApi.middleware]
        )
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;