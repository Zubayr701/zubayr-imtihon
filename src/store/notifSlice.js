import { createSlice } from "@reduxjs/toolkit";

const initialNotifyState = {
  message: "",
  status: "",
  open: false,
};

const notifySlice = createSlice({
  name: "notify",
  initialState: initialNotifyState,
  reducers: {
    showNotification(state, action) {
      state.message = action.payload.message;
      state.status = action.payload.status;
      state.open = true;
    },
    hideNotification(state) {
      state.open = false;
      state.message = "";
      state.status = "";
    },
  },
});

export const notifyActions = notifySlice.actions;
export default notifySlice;
