import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tagTypes";

const applicationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyApplications: builder.query({
      query: () => ({
        url: "/applications/my-applications",
        method: "GET",
        params: {
          sortBy: "-createdAt",
        },
      }),

      providesTags: [tagTypes.applications],
    }),

    applyForApplication: builder.mutation({
      query: (data) => ({
        url: "/applications",
        method: "POST",
        body: data,
      }),

      invalidatesTags: [tagTypes.applications],
    }),

    updateApplication: builder.mutation({
      query: (data) => ({
        url: `/applications/${data.id}`,
        method: "PATCH",
        body: data?.data,
      }),

      invalidatesTags: [tagTypes.applications],
    }),
  }),
});

export const {
  useApplyForApplicationMutation,
  useUpdateApplicationMutation,
  useGetMyApplicationsQuery,
} = applicationApi;
