import { createSlice } from '@reduxjs/toolkit';

const userAuthenticationSlice = createSlice({
  name: 'userAuthentication',
  initialState: {
    activationToken: "",
    isLoggedIn : false,
    isSignedUn : false
  },
  reducers: {
    setActivationToken: (state, action) => {
      console.log("action.payloadsssssssssssssssss", action.payload);
      state.activationToken = true;
      console.log("state.activationToken", state.activationToken);
    },
    setLoggeIn : (state , action) => {
      console.log("Logged In", action.payload);
      state.isLoggedIn = action.payload
      console.log("After Logged In", action.payload);
    },
    setSignedUp : (state , action) => {
      console.log("Logged In", action.payload);
      state.isSignedUn = true
      console.log("After Logged In", action.payload);
    }
  },
});

export const { setActivationToken ,setLoggeIn, setSignedUp } = userAuthenticationSlice.actions;
export default userAuthenticationSlice.reducer;
