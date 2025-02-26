import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },

    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
