import { configureStore } from '@reduxjs/toolkit';
import userAuthenticationReducer from '../features/userAuthentication/userAuthenticationSlice';

export const store = configureStore({
  reducer: {
    userAuthentication: userAuthenticationReducer,
  },
});
