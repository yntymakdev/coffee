import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useProductContext } from "../../../context/ProductContext";

const ProductList = () => {
  const { readProduct, product, deleteProduct, currentPage } =
    useProductContext();

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "80px",
        padding: "30px 60px",
        flexWrap: "wrap",
        overflowY: "scroll",
        height: "50vh",
        margin: "0 0 10pc 0",
      }}
    >
      {product ? (
        currentPage().map((el, index) => <ProductCard key={index} el={el} />)
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default ProductList;
