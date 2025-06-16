import React from "react";
import ProductCard from "./Card";

const listStyle = {
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  padding: "1rem",
  overflowX: "auto",
  flexWrap: "nowrap",
  flexShrink: 0,
};


const products = [
  {
    name: "Fruits",
    image:
      "https://img.freepik.com/free-photo/mixed-fruits-with-apple-banana-orange-other_74190-938.jpg",
    price: 1.99,
    rating: 4.6,
  },
  {
    name: "Vegetables",
    image:
      "https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg",
    price: 0.99,
    rating: 4.3,
  },
  {
    name: "Meat",
    image:
      "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
    price: 2.49,
    rating: 4.7,
  },
  {
    name: "Beverages",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThxmHECn46kcU1-uWErovIRyULc5tTGY9nU0YOSf2XNbG24cteVEdcE8f6Dy_bkSjTXuU&usqp=CAU",
    price: 1.29,
    rating: 4.4,
  },
];

const ProductCardList = () => {
  return (
 <div style={listStyle}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          image={product.image}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </div>
  );
};

export default ProductCardList;