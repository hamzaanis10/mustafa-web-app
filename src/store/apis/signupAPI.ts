import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MessageResponse, SignUpData } from '@/types/api-types';

export const signupApi = createApi({
    reducerPath: 'signupApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/v1/` }),
    endpoints: (builder) => ({
        validateSignUp: builder.mutation<MessageResponse, SignUpData>({
            query: (data) => ({
                url: 'auth/signup/validate',
                method: 'POST',
                body: data,
            }),
        }),
        sendOtp: builder.mutation<MessageResponse, { data: SignUpData; method: 'SMS' | 'WhatsApp' | 'Email' }>({
            query: ({ data }) => ({
                url: 'otp/send',
                method: 'POST',
                body: data,
            }),
        }),
        confirmSignUp: builder.mutation<MessageResponse, SignUpData>({
            query: (data) => ({
                url: 'auth/signup/confirm',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useValidateSignUpMutation, useSendOtpMutation, useConfirmSignUpMutation } = signupApi;
