import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  username: "",
  isAuthenticated: false,
};

const AuthSlice = createSlice({
  name: "authform",
  initialState: authInitialState,
  reducers: {
    username(state, action) {
      state.username = state.username + action.payload;
    },
    isLogin(state) {
      state.isAuthenticated = true;
    },
  },
});

export const authActions = AuthSlice.actions;

export default AuthSlice.reducer;