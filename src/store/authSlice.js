import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: "",
  userId: "",
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
    setToken: (state, action) => {
      state.token = action.payload.token;
    },
    setUserId: (state, action) => {
      state.userId = action.payload.userId;
    },
  },
});

export const { setUser, setToken, setUserId } = authSlice.actions;

export default authSlice.reducer;
