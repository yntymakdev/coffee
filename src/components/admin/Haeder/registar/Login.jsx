import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useAuthContext } from "../../../../context/AuthContext";

const Login = () => {
  const { login } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

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
        component="form"
        onSubmit={handleLoginSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "40%",
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
          Sign In
        </Typography>
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          label="Email"
          variant="outlined"
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
          label="Password"
          variant="outlined"
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button
          type="submit"
          variant="contained"
          sx={{ height: "50px" }}
          fullWidth
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
