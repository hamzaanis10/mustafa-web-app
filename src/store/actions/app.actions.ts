import { createAction } from "@reduxjs/toolkit";

export const addUpdateAppLoadersStatus = createAction('ADD_UPDATE_APP_LOADERS_STATUS', (data: any = {},additionalData:any = {}) => ({
    payload: {
        data: data,
        additionalData: additionalData
    }
}));

export const clearAppLoaderStatus = createAction('CLEAR_APP_LOADER_STATUS', (data: any = {},additionalData:any = {}) => ({
    payload: {
        data: data,
        additionalData: additionalData
    }
}));


