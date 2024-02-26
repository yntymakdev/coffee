import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAuthContext } from "../../../../context/AuthContext";

const Registar = () => {
  const { register, googleSignIn } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  async function handleRegistar() {
    try {
      await register(email, password);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
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
          Sign Up
        </Typography>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          id="outlined-basic"
          label="Password"
          variant="outlined"
        />
        <button
          onClick={handleRegistar}
          style={{
            height: "50px",
            border: "none",
            background: "black",
            color: "white",
            fontSize: "20px",
            borderRadius: "5px",
          }}
        >
          Sign Up
        </button>
        <button
          onClick={() => googleSignIn()}
          style={{
            height: "50px",
            border: "none",
            background: "black",
            color: "white",
            fontSize: "20px",
            borderRadius: "5px",
          }}
        >
          Sign Up with google
        </button>
      </Box>
    </Box>
  );
};

export default Registar;
