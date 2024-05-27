import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },

  reducers: {
    addProduct: (state, action) => {
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        const existingProduct = state.products[existingProductIndex];
        existingProduct.quantity += action.payload.quantity;
        state.total += action.payload.price * action.payload.quantity;
        state.products[existingProductIndex] = existingProduct;
      } else {
        state.products.push(action.payload);
        state.quantity += action.payload.quantity;
        state.total += action.payload.price * action.payload.quantity;
      }
    },
  },
});

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
