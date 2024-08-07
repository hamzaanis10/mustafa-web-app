import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MessageResponse } from '@/types/api-types';
import { LoginData } from '@/types/api-types';

export const loginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/v1/` }),
    endpoints: (builder) => ({
        login: builder.mutation<MessageResponse, LoginData>({
            query: (data) => ({
                url: 'auth/login',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useLoginMutation } = loginApi;
