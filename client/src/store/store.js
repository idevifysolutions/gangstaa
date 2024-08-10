import { configureStore } from "@reduxjs/toolkit";
import userAuthenticationReducer from "../features/userAuthentication/userAuthenticationSlice";
import productCart from "../features/productCart/productCart";

export const store = configureStore({
  reducer: {
    cartReducer: productCart,
    userAuthentication: userAuthenticationReducer,
  },
});
