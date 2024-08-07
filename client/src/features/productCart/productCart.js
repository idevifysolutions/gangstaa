import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  productAddedToCartId: []
};

export const productAddedToCartSlice = createSlice({
  name: 'productAddedToCart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productId = action.payload;
      state.productAddedToCartId.push(productId);
      console.log("State after adding product:", state.productAddedToCartId);
    },
    removeProductFromCart: (state, action) => {
      const productId = action.payload;
      state.productAddedToCartId = state.productAddedToCartId.filter(id => id !== productId);
      console.log("State after removing product:", state.productAddedToCartId);
    },
    emptyCart: (state) => {
      state.productAddedToCartId = [];
      console.log("All products removed:", state.productAddedToCartId);
    }
  }
});

export const { addToCart, removeProductFromCart, emptyCart } = productAddedToCartSlice.actions;

export default productAddedToCartSlice.reducer;