import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tagTypes";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSingleUser: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),

      providesTags: [tagTypes.user],
    }),

    getMyApplications: builder.query({
      query: () => ({
        url: "/applications/my-applications",
        method: "GET",
      }),

      providesTags: [tagTypes.applications],
    }),
  }),
});

export const { useGetSingleUserQuery, useGetMyApplicationsQuery } = userApi;
