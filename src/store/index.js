import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./auth";

const store = configureStore({
  reducer: { isAuth: AuthSlice },
});

export default store;