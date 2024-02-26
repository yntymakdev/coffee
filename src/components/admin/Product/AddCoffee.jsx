import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import logo from "..//..//../image/images_coffee.png";
import { useProductContext } from "../../../context/ProductContext";
import { Link } from "react-router-dom";

const AddCoffee = () => {
  const { addProduct } = useProductContext();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  function addContext() {
    let obj = {
      name: name,
      price: price,
      image: image,
    };
    addProduct(obj);
  }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: "20px 40px ",
          borderBottom: "1px solid black",
        }}
      >
        <Avatar src={logo} sx={{ width: "70px", height: "70px" }} />
        <Typography sx={{ fontWeight: "bold" }} variant="h5">
          KULTURA COFFEE
        </Typography>
        <Avatar src={logo} sx={{ width: "70px", height: "70px" }} />
      </Box>
      <Box className="container">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "70vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "40%",
              textAlign: "center",
            }}
          >
            <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
              Add product
            </Typography>
            <TextField
              sx={{
                background: "rgba(174, 142, 121, 0.50)",
                borderRadius: "10px",
              }}
              onChange={(e) => setImage(e.target.value)}
              id="filled-multiline-flexible"
              label="Image"
              multiline
              maxRows={4}
              variant="filled"
            />
            <TextField
              sx={{
                background: "rgba(174, 142, 121, 0.50)",
                borderRadius: "10px",
              }}
              onChange={(e) => setName(e.target.value)}
              id="filled-multiline-flexible"
              label="Name"
              multiline
              maxRows={4}
              variant="filled"
            />
            <TextField
              sx={{
                background: "rgba(174, 142, 121, 0.50)",
                borderRadius: "10px",
              }}
              onChange={(e) => setPrice(e.target.value)}
              id="filled-multiline-flexible"
              label="price"
              multiline
              maxRows={4}
              variant="filled"
            />
         

            <button
              onClick={addContext}
              style={{
                width: "100%",
                height: "50px",
                border: "none",
                background: "rgb(77, 33, 15)",
                color: "white",
                fontSize: "20px",
                borderRadius: "10px",
              }}
            >
              Add product
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AddCoffee;
