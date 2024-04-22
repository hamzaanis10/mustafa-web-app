import { createAction } from "@reduxjs/toolkit";

export const doLogin = createAction('LOGIN', (data: any = {},additionalData:any = {}) => ({
    payload: {
        data: data,
        additionalData: additionalData,
        url: 'v1/auth/login',
        method: 'POST'
    }
}));


