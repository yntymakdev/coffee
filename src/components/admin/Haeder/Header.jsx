import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import logo from "..//..//../image/images_coffee.png";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Box sx={{ padding: "15px 0", borderBottom: "1px solid black" }}>
      <Box className="container">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <Avatar src={logo} sx={{ width: "70px", height: "70px" }} />
          </Link>
          <Typography sx={{ fontWeight: "bold" }} variant="h5">
            KULTURA COFFEE
          </Typography>
          <Box
            sx={{
              width: "130px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <ShoppingBasketIcon sx={{ fontSize: "35px" }} />
            <Typography sx={{ fontWeight: "bold" }}>Мой заказ</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
