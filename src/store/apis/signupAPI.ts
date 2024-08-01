import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MessageResponse, SignUpData, SignUpDetails } from '@/types/api-types';

export const signupApi = createApi({
    reducerPath: 'signupApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/v1/` }),
    endpoints: (builder) => ({
        signUp: builder.mutation<MessageResponse, { data: SignUpData; details: SignUpDetails }>({
            query: ({ data, details }) => {
                let url = '';
                switch (details.step) {
                    case 'VALIDATION':
                        url = 'auth/signup/validate';
                        break;
                    case 'SEND_OTP':
                        url = 'otp/send';
                        break;
                    case 'CONFIRM_SIGN_UP':
                        url = 'signup/confirm';
                        break;
                    default:
                        throw new Error('Invalid step');
                }
                return {
                    url,
                    method: 'POST',
                    body: { ...data, ...details },
                };
            },
        }),
    }),
});

export const { useSignUpMutation } = signupApi;
