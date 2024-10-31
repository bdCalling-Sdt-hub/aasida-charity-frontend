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

    updateApplication: builder.mutation({
      query: (data) => ({
        url: `/applications/${data.id}`,
        method: "PATCH",
        body: data?.data,
      }),
    }),
  }),
});

export const { useApplyForApplicationMutation, useUpdateApplicationMutation } =
  applicationApi;
