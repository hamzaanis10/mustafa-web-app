import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { CustomerProfile } from "@/types/api-types";

export const customerProfileApi = createApi({
  reducerPath: "customerProfileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/v1/`,
    prepareHeaders: (headers) => {
      let accessToken = null;
      if (typeof window !== "undefined" && window.sessionStorage) {
        accessToken = sessionStorage.getItem("accessToken");
      }
      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      } else {
        headers.delete("Authorization");
      }
      headers.set("X-device-serial", "12345");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCustomerProfile: builder.query<CustomerProfile, void>({
      query: () => "customer/profile",
    }),
  }),
});

export const { useGetCustomerProfileQuery } = customerProfileApi;
