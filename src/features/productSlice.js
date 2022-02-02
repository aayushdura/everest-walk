import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = (dispatch) => {
  axios
    //making get request to endpoint of giver url
    .get(`https://electronic-ecommerce.herokuapp.com/api/v1/product`)
    .then((response) => dispatch(addProducts(response.data.data.product))) //contains a call-back function "taking response and setting the data from the response as local state"
    .catch((error) => console.error(error)); // as axios in an promise based
};

export const productSlice = createSlice({
  name: "products",
  initialState: { products: [] },
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { addProducts } = productSlice.actions;
export default productSlice.reducer;
