import React from "react";
import { LuShoppingCart } from "react-icons/lu";
const cardStyles = {
  container: {
    border: "1px solid #ddd",
    borderRadius: "12px",
    overflow: "hidden",
    maxWidth: "300px",
    backgroundColor: "white",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  info: {
    padding: "1rem",
    textAlign: "center",
  },
  name: {
    fontSize: "1.2rem",
    margin: "0.5rem 0",
  },
  price: {
    fontWeight: "bold",
    color: "#28a745",
  },
  rating: {
    color: "#f39c12",
    position:"relative",
    bottom:"5.5rem",
    right:"7rem",
  },
  button: {
    position:"absolute",
    bottom:"1rem",
    right:"1rem",
    marginTop: "0.5rem",
    padding: "0.5rem 1rem",
    backgroundColor: "rgb(23, 163, 73)",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

const ProductCard = ({ name, image, price, rating }) => {
  return (
    <div
      style={cardStyles.container}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.03)";
        e.currentTarget.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
      }}
    >
      <img src={image} alt={name} style={cardStyles.image} />
      <div style={cardStyles.info}>
        <h3 style={cardStyles.name}>{name}</h3>
        <p style={cardStyles.price}>${price}</p>
        <p style={cardStyles.rating}>⭐ {rating}</p>
        <button
          style={cardStyles.button}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgb(16, 125, 54)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgb(23, 163, 73)")}
        >
          <LuShoppingCart style={{ marginRight: "0.5rem" }} />
        Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;