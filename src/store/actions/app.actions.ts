import { createAction } from "@reduxjs/toolkit";

export const addUpdateAppLoadersStatus = createAction('ADD_UPDATE_APP_LOADERS_STATUS', (data: any = {}, additionalData: any = {}) => ({
    payload: {
        data: data,
        additionalData: additionalData
    }
}));

export const clearAppLoaderStatus = createAction('CLEAR_APP_LOADER_STATUS', (data: any = {}, additionalData: any = {}) => ({
    payload: {
        data: data,
        additionalData: additionalData
    }
}));

export const cancelAllRequest = createAction('CANCEL_ALL_REQUEST', (data: any = {}, additionalData: any = {}) => ({
    payload: {
        data: data,
        additionalData: additionalData
    }
}));

export const cancelRequest = createAction('CANCEL_REQUEST', (data: any = {}, additionalData: any = {}) => ({
    payload: {
        data: data,
        additionalData: additionalData
    }
}));

export const resetTesting = createAction('RESET_TESTING', (data: any = {}, additionalData: any = {}) => ({
    payload: {
        resetActionNames: ["LOGIN"]
    }
}));
