import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tagTypes";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),

      invalidatesTags: [tagTypes.auth],
    }),

    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),

    verifyOtp: builder.mutation({
      query: (data) => ({
        url: "/otp/verify-otp",
        method: "POST",
        body: data,
      }),

      invalidatesTags: [tagTypes.auth],
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation, useVerifyOtpMutation } =
  authApi;
