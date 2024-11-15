import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tagTypes";
import { getBackendBaseUrl } from "@/config/envConfig";
import { getFromSessionStorage } from "@/utils/handle-session-storage";
import { jwtDecode } from "jwt-decode";
import { logout } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: getBackendBaseUrl(),
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    const signUpToken = getFromSessionStorage("sign-up-token");

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    if (signUpToken) {
      headers.set("token", signUpToken);
    }

    return headers;
  },
});

const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    const res = await fetch(getBackendBaseUrl(), {
      method: "POST",
      credentials: "include",
    });

    if (!res.ok) {
      api.dispatch(logout());
      return result;
    }

    const data = await res.json();
    if (data?.data?.accessToken) {
      const user = api.getState().auth.user;

      api.dispatch(
        setUser({
          user,
          token: data?.data?.accessToken,
        }),
      );

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: tagTypesList,
  endpoints: () => ({}),
});
