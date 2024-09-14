import { baseApi } from "@/redux/api/baseApi";

const applicationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    applyForApplication: builder.mutation({
      query: (data) => ({
        url: "/applications",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useApplyForApplicationMutation } = applicationApi;
