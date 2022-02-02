import { configureStore } from "@reduxjs/toolkit";
import products from "../features/productSlice";
import cart from "../features/cartSlice";
export const store = configureStore({
  reducer: {
    products: products,
    cart: cart,
  },
});
