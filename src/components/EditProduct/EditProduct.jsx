import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import logo from "..//..//image/images_coffee.png";
// import { useProductContext } from "../../../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";

const EditProduct = () => {
  const { getOneProduct, oneProduct, editProduct } = useProductContext();
  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (oneProduct) {
      setImage(oneProduct.image || "");
      setName(oneProduct.name || "");
      setPrice(oneProduct.price || 0);
    }
  }, [oneProduct]);

  const navigate = useNavigate();

  function createContext() {
    let newObj = {
      name: name,
      price: price,
      image: image,
    };

    editProduct(id, newObj);

    navigate("/");
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
              Edit product
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
              value={image}
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
              value={name}
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
              value={price}
            />
            <button
              onClick={createContext}
              style={{
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

export default EditProduct;
