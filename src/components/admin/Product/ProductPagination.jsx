import { Pagination } from "@mui/material";
import React from "react";
import { useProductContext } from "../../../context/ProductContext";
export default function ProductPagination() {
  const { setPage, currentPage, count } = useProductContext();
  function handleChange(p, n) {
    setPage(n);
  }
  return <Pagination onChange={handleChange} count={count} color="primary" />;
}
