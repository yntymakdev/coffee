import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { useProductContext } from "../../../context/ProductContext";
import ProductPagination from "./ProductPagination";
import { ADMIN_USER } from "../../../helpers/constr";

const ProductSort = () => {
  const [search, setSearch] = useState("");
  const { product, setProduct, user, readProduct } = useProductContext();
  function searchData() {
    let result = product.filter(
      (el) =>
        el.name.toLowerCase().includes(search) ||
        el.price.toLowerCase().includes(search)
    );
    setProduct(result);
  }
  useEffect(() => {
    searchData();
  }, [search]);

  if (!search) {
    readProduct();
  }
  return (
    <Box>
      <Box className="container">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "none",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "27px",
                fontWeight: "bold",
                gap: "26pc",
              }}
            >
              Все виды ({product.length})
              {/* <select>
                <option>Type</option>
                <option>All</option>
                <option>1</option>
                <option>2</option>
              </select> */}
            </Typography>
          </Box>
          <Box>
            {ADMIN_USER.map((el) =>
              user && el.email === user.email ? (
                <Link to="/addcoffee">
                  <AddIcon />
                </Link>
              ) : (
                "error"
              )
            )}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <input
              onChange={(e) => setSearch(e.target.value)}
              style={{
                padding: "10px 20px",
                borderRadius: "40px",
                border: "none",
                background: "rgb(230, 210, 193)",
              }}
              type="text"
              name=""
              id=""
              value={search}
            />
            <SearchIcon />
          </Box>
        </Box>
      </Box>
      <div className="pagination">
        <ProductPagination />
      </div>
    </Box>
  );
};

export default ProductSort;
