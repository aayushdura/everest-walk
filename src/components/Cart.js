import React from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../features/cartSlice";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.itemsInCart);
  const totalPriceOfCartItems = useSelector((state) => state.cart.price);

  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h1 className="heading">
        <ShoppingCartSharpIcon />
        Cart{" "}
      </h1>
      {/* for going back to products page */}
      <Link
        style={{
          textDecoration: "none",
          marginLeft: "5in",
          position: "absolute",
          top: "0.5in",
        }}
        to={"/"}
      >
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          size="large"
        >
          Shop More
          <ShoppingCartCheckoutIcon />
        </IconButton>
      </Link>
      {/* //for items in cart */}
      <table>
        {cartItems.map((item) => (
          <tr key={item.id} className="itemsInCart">
            <td>
              <IconButton
                aria-label="add to shopping cart"
                size="small"
                style={{
                  marginLeft: "5in",
                  position: "absolute",
                  color: "red",
                }}
                onClick={() => dispatch(removeFromCart(item))}
              >
                Remove
                <DeleteSharpIcon />
              </IconButton>
            </td>
            <td>
              {" "}
              <h2>{item.name}</h2>
            </td>
            <td>
              <p>Price:{item.price}</p>
            </td>
          </tr>
        ))}
      </table>
      {cartItems.length !== 0 ? (
        <p style={{ marginLeft: "2in" }}>
          Total Price = ${totalPriceOfCartItems}
        </p>
      ) : (
        <></>
      )}
      {/* //for empty cart */}
      {cartItems?.length === 0 ? (
        <div className="empty-cart">
          <h2>You're cart is Empty</h2>
          <p>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              Let's Shop
            </Link>
          </p>
        </div>
      ) : (
        <></>
      )}
      <br />
    </div>
  );
};

export default Cart;
