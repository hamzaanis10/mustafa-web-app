import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginData, LoginResponse } from "@/types/api-types";

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/v1/`,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginData>({
      query: (data) => ({
        url: "auth/login",
        method: "POST",
        body: data,
      }),
      transformResponse: (response: LoginResponse) => {
        if (typeof window !== "undefined" && window.sessionStorage) {
          sessionStorage.setItem("accessToken", response.accessToken);
        }
        return response;
      },
    }),
  }),
});

export const { useLoginMutation } = loginApi;
