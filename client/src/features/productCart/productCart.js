import { createSlice } from "@reduxjs/toolkit";

const getLocalCartItems = ()=>{
  let localCartItems = localStorage.getItem("cart_items")
  if(localCartItems){
    return JSON.parse(localStorage.getItem("cart_items"))   
  }
  else{
    return []
  }
}

export const initialState = {
  loading: false,
  cartItems: getLocalCartItems(),
  subtotal: 0,
  tax: 0,
  shippingCharges: 0,
  discount: 0,
  total: 0,
  shippingInfo: {
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
    phone: ""
  }
};

export const productAddedToCartSlice = createSlice({
  name: "productAddedToCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.loading = true

      console.log("reducer", action.payload)

      const index = state.cartItems.findIndex((i) => i.productId === action.payload.productId)

      if (index !== -1) state.cartItems[index] = action.payload
      else {
        state.cartItems.push(action.payload)
      }
      state.loading = false
    },
    removeProductFromCart: (state, action) => {
      state.loading = true;
      state.cartItems = state.cartItems.filter((i) => i.productId !== action.payload)
      state.loading = false;
    },

    calculatePrice: (state) => {
      const subtotal = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      state.subtotal = subtotal;
      state.shippingCharges = state.subtotal > 1000 ? 0 : 200;
      state.tax = Math.round(state.subtotal * 0.18);
      state.total = state.subtotal + state.tax + state.shippingCharges;
    },

    saveShippingInfo: (state, action) => {
      state.shippingInfo = action.payload
    },

    emptyCart: () => initialState
  },
});

export const { addToCart, removeProductFromCart,calculatePrice, saveShippingInfo, emptyCart } =
  productAddedToCartSlice.actions;

export default productAddedToCartSlice.reducer;
