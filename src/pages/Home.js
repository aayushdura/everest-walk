import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/productSlice";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { OutlinedInput } from "@mui/material";

// import { addData } from "../features/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const cartItems = useSelector((state) => state.cart.itemsInCart);
  const numberOfItemInCart = cartItems.length;
  const [searchInputKey, setSearchInputKey] = useState("");
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  //fetching the data from API on component renderusing action reducer method
  useEffect(() => {
    dispatch(fetchData);
  }, [dispatch]);

  const productList = products
    ?.filter((product) => {
      return product.name.toLowerCase().includes(searchInputKey.toLowerCase());
    })
    .map((product) => <Product prodDetails={product} key={product.id} />);
  return (
    <div className="home-container">
      <nav className="navbar">
        <OutlinedInput
          placeholder="Search..."
          id="searchqueryinput-adornment"
          onChange={(e) => {
            setSearchInputKey(e.target.value);
          }}
          style={{ width: "4in", top: "-0.5ch" }}
          color="warning"
          size="small"
          endAdornment={
            <InputAdornment position="end">
              {" "}
              <IconButton>
                <SearchIcon color="warning" />
              </IconButton>
            </InputAdornment>
          }
        ></OutlinedInput>

        <div id="cart">
          <Link to={"/cart"} style={{ textDecoration: "none" }}>
            <IconButton
              aria-label="cart"
              style={{ color: "	#ff4000" }}
              size="large"
            >
              {" "}
              cart
              <StyledBadge badgeContent={numberOfItemInCart} color="primary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Link>
        </div>
      </nav>
      <div className="product">{productList}</div>
    </div>
  );
};

export default Home;
