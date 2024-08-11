import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  productAddedToCartId: [],
};

export const productAddedToCartSlice = createSlice({
  name: "productAddedToCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productId = action.payload;
        state.productAddedToCartId.push(productId);
    },
    removeProductFromCart: (state, action) => {
      const productId = action.payload;
      state.productAddedToCartId = state.productAddedToCartId.filter(
        (id) => id !== productId
      );
    },
    emptyCart: (state) => {
      state.productAddedToCartId = [];
    },
  },
});

export const { addToCart, removeProductFromCart, emptyCart } =
  productAddedToCartSlice.actions;

export default productAddedToCartSlice.reducer;
