import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { itemsInCart: [], price: 0 },
  reducers: {
    addInCart: (state, { payload }) => {
      state.itemsInCart = [...state.itemsInCart, payload];
      const price = state.itemsInCart.map((cartItem) =>
        parseInt(cartItem.price.slice(1))
      );
      state.price = price.reduce((a, b) => a + b, 0);
    },

    removeFromCart: (state, { payload }) => {
      const remainingItems = state.itemsInCart.filter(
        (cartItem) => cartItem.id !== payload.id
      );
      state.itemsInCart = remainingItems;
      const price = state.itemsInCart.map((cartItem) =>
        parseInt(cartItem.price.slice(1))
      );
      state.price = price.reduce((a, b) => a + b, 0);
    },
  },
});

export default cartSlice.reducer;
export const { addInCart, removeFromCart } = cartSlice.actions;
