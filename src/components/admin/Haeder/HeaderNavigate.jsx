import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const HeaderNavigate = () => {
  return (
    <Box sx={{ p: "5px 0", borderBottom: "1px solid black" }}>
      <Box className="container">
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>кофе</Typography>
            <Typography sx={{ fontWeight: "bold" }}>чай</Typography>
            <Typography sx={{ fontWeight: "bold" }}>шоколад</Typography>
            <Typography sx={{ fontWeight: "bold" }}>сиропы</Typography>
            <Link to="/instructions">
              <Typography sx={{ fontWeight: "bold" }}>
                как приготовить?
              </Typography>
            </Link>
            <Typography sx={{ fontWeight: "bold" }}>
              как выбрать кофе?
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderNavigate;
