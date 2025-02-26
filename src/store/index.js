import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import notifySlice from "./notifSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    notify: notifySlice.reducer,
  },
});

export default store ;
