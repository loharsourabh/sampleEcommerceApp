import { createSlice } from "@reduxjs/toolkit";

export const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    cart: [],
  },
  reducers: {
    toggleCartProduct: (state, action) => {
      const productIndex = state.cart.findIndex(v => v.product.id === action.payload.id);

      if (productIndex === -1) {
        state.cart.push({quantity: 1, product: action.payload});
      }

      else {
        state.cart.splice(productIndex, 1);
      }
    },
    incrementQuantity: (state, action) => {
      state.cart.find(v => v.product.id === action.payload.id).quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const product = state.cart.find(v => v.product.id === action.payload.id);
      const productIndex = state.cart.findIndex(v => v.product.id === action.payload.id);

      if (product.quantity > 1) {
        product.quantity -= 1;
      }

      else {
        state.cart.splice(productIndex, 1);
      }
    }
  }
});

export const {
  toggleCartProduct,
  incrementQuantity,
  decrementQuantity
} = productListSlice.actions;
export default productListSlice.reducer;