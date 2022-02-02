import React from "react";
import "./product.css";
import { useDispatch } from "react-redux";
import { addInCart } from "../features/cartSlice";
import Button from "@mui/material/Button";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
const Product = (props) => {
  const { prodDetails } = props;
  const dispatch = useDispatch();
  return (
    <div className="product-container">
      <h2>{prodDetails.name}</h2>
      <div>
        <img src={prodDetails.image} alt={prodDetails.image}></img>

        <h4>Price:{prodDetails.price}</h4>
        <h4>Stock:{prodDetails.stock}</h4>
      </div>
      <Button
        style={{ color: "	#ff4000" }}
        startIcon={<ShoppingCartSharpIcon />}
        onClick={() => dispatch(addInCart(prodDetails))}
      >
        Add To Cart
      </Button>
    </div>
  );
};

export default Product;
