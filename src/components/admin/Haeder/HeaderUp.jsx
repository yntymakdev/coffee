import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";
const HeaderUp = () => {
  // const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const { user, logOut } = useAuthContext();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleLogOut() {
    logOut();
    handleClose();
  }
  return (
    <Box
      sx={{
        width: "100%",
        height: "25px",
        background: "black",
        // padding: "0 0 5px 0",
        p: "3px 0 19px 0",
      }}
    >
      <Box className="container">
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "white",
              background: "black",
            }}
          >
            <Typography variant="">О нас</Typography>
            <Box
              sx={{
                width: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{ width: "50px", display: "flex", alignItems: "flex-end" }}
              >
                <FavoriteBorderIcon
                  sx={{
                    fontSize: "20px",
                    cursor: "pointer",
                    background: "black",
                  }}
                />

                <Typography
                  sx={{
                    fontSize: "13px",
                    cursor: "pointer",
                    background: "black",
                  }}
                >
                  Желания
                </Typography>
              </Box>

              {user ? (
                <>
                  <Tooltip title={user.displayName}>
                    <Avatar
                      onClick={handleMenu}
                      src={user.photoURL}
                      alt={user.displayName}
                    />
                  </Tooltip>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <Link to="/registar">
                      <MenuItem onClick={handleClose}>Sign up</MenuItem>
                    </Link>
                    <Link to="/login">
                      <MenuItem onClick={handleClose}>Sign in</MenuItem>
                    </Link>
                    <Link>
                      <MenuItem onClick={handleLogOut}>logOut</MenuItem>
                    </Link>
                  </Menu>
                </>
              ) : (
                <>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <PersonIcon sx={{ fontSize: "20px" }} />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <Link to="/registar">
                      <MenuItem onClick={handleClose}>Sign up</MenuItem>
                    </Link>
                    <Link to="/login">
                      <MenuItem onClick={handleClose}>Sign in</MenuItem>
                    </Link>
                    {/* <Link>
                    <MenuItem onClick={handleLogOut}>logOut</MenuItem>
                  </Link> */}
                  </Menu>
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderUp;
