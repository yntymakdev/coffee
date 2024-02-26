import { Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { useProductContext } from "../../../context/ProductContext";
import { Link, useNavigate } from "react-router-dom";
// import "./Product.css";

const ProductCard = ({ el }) => {
  const { deleteProduct } = useProductContext();
  const navigate = useNavigate();

  return (
    <>
      <Box>
        <Box className="container">
          <Box
            sx={{
              width: "200px",
              background: "rgb(77, 33, 15)",
              color: "white",
              borderRadius: "15px 40% 15px 15px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              p: "4px",
            }}
          >
            <img
              style={{
                width: "200px",
                height: "220px",
                borderRadius: " 10px 50%",
              }}
              src={el.image}
              alt="img"
            />
            <Box
              sx={{
                width: "70%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: "9px 0",
                background: "rgb(77, 33, 15)",
                color: "white",
              }}
            >
              <h1 style={{ fontSize: "20px", background: "rgb(77, 33, 15)" }}>
                {el.name}
              </h1>
              <h2
                style={{
                  fontSize: "20px",
                  background: "rgb(77, 33, 15)",
                  color: "white",
                }}
              >{`${el.price}$`}</h2>
            </Box>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100px",
                padding: "10px 0",
                background: "rgb(77, 33, 15)",
                color: "white",
              }}
            >
              <button
                style={{
                  border: "none",

                  background: "rgb(77, 33, 15)",
                  color: "white",
                }}
                onClick={() => navigate(`/edit/${el.id}`)}
              >
                <BorderColorIcon
                  sx={{
                    fontSize: "18px",
                    background: "rgb(77, 33, 15)",
                    color: "white",
                  }}
                />
              </button>

              <button
                style={{
                  border: "none",
                  background: "none",
                  //   background: "rgb(77, 33, 15)",
                  color: "white",
                }}
                className="a1"
                onClick={() => deleteProduct(el.id)}
              >
                <DeleteIcon
                  sx={{
                    fontSize: "18px",
                    background: "rgb(77, 33, 15)",
                    color: "white",
                  }}
                />
              </button>
              <Link to={`/edit/${el.id}`}>
                <ShoppingCartIcon
                  sx={{
                    fontSize: "18px",
                    background: "rgb(77, 33, 15)",
                    color: "white",
                  }}
                />
              </Link>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductCard;
