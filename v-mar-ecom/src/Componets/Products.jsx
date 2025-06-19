import React, { useEffect, useState } from "react";
import ProductCard from "./Card";

const getlistStyle = (isMobile) => ({
  display: "flex",
  flexDirection: isMobile ? "column" : "row",
  gap: "2rem",
  padding: "1rem",
  overflowX: isMobile ? "visible" : "auto",
  flexWrap: isMobile ? "wrap" : "nowrap",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
});

const products = [
  {
    name: "Fruits",
    description: "Farm fresh,organically grown",
    image:
      "https://img.freepik.com/free-photo/mixed-fruits-with-apple-banana-orange-other_74190-938.jpg",
    price: 1.99,
    rating: 4.6,
    label: "Best Seller",
    reviewCount: 120,
    strikePrice: 2.49,
  },
  {
    name: "Vegetables",
    description: "Farm fresh,organically grown",
    image:
      "https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg",
    price: 0.99,
    rating: 4.3,
    label: "New Arrival",
    reviewCount: 80,
    strikePrice: 1.49,
  },
  {
    name: "Meat",
    description: "Farm fresh,organically grown",
    image:
      "https://www.meatemporium.com.au/cdn/shop/products/JA_AME_OurFarmBeefPack_29_1024x1024.jpg?v=1652748098",
    price: 2.49,
    rating: 4.7,
    label: "Limited Edition",
    reviewCount: 50,
    strikePrice: 3.49,
  },
  {
    name: "Honey",
    description: "Farm fresh,organically grown",
    image:
      "https://beeswiki.com/wp-content/uploads/2020/11/Blackberry-Honey-1024x683.jpg",
    price: 1.29,
    rating: 4.4,
    label: "Organic",
    reviewCount: 90,
    strikePrice: 1.99,
  },
];

const ProductCardList = () => {
  const [isMobile, setisMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setisMobile(window.innerWidth < 600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="App">
      <h1
        style={{
          textAlign: "center",
          color: "#050b1a",
          fontFamily: "Poppins,san-serif",
          fontWeight: 700,
        }}
      >
        Featured Products
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "#8e9399",
          fontFamily: "Poppins, algeria",
        }}
      >
        Discover our handpicked selection of freshest vegetables,sourced
        directly from local farms
      </p>
      <div style={getlistStyle(isMobile)}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            description={product.description}
            image={product.image}
            price={product.price}
            rating={product.rating}
            actualPrice={product.strikePrice}
            review={product.reviewCount}
            label={product.label}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCardList;
