import { createSlice } from '@reduxjs/toolkit';

const userAuthenticationSlice = createSlice({
  name: 'userAuthentication',
  initialState: {
    activationToken: "",
  },
  reducers: {
    setActivationToken: (state, action) => {
      console.log("action.payloadsssssssssssssssss", action.payload);
      state.activationToken = action.payload;
      console.log("state.activationToken", state.activationToken);
    },
  },
});

export const { setActivationToken } = userAuthenticationSlice.actions;
export default userAuthenticationSlice.reducer;
