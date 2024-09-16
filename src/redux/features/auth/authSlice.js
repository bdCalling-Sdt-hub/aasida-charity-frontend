import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  user: null,
  // token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;

      state.user = user;
      state.token = token;

      // Set access-token in cookies
      Cookies.set("financial-assistance-access-token", token, {
        path: "/",
      });
    },

    logout: (state) => {
      state.user = null;
      state.token = null;

      // Set access-token in cookies
      Cookies.remove("financial-assistance-access-token", {
        path: "/",
      });
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
