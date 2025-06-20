import React, { useState } from "react";
import { Minus, Plus, Trash2, X, ShoppingCart } from "lucide-react";
import leek from "../../assets/leek.jpg";
import lime from "../../assets/lime.jpg";
import tomatos from "../../assets/tomatos.jpg";
import zuccini from "../../assets/zuccini.jpg";

const products = [
  { id: 1, image: leek, price: 1.99 },
  { id: 2, image: lime, price: 0.99 },
  { id: 3, image: tomatos, price: 2.49 },
  { id: 4, image: zuccini, price: 1.75 },
];

const Cart = () => {
  const [quantities, setQuantities] = useState(products.map(() => 1));

  const updateQuantity = (index, delta) => {
    setQuantities((prev) =>
      prev.map((q, i) => (i === index ? Math.max(1, q + delta) : q))
    );
  };

  const removeItem = (index) => {
    setQuantities((prev) => prev.filter((_, i) => i !== index));
    products.splice(index, 1);
  };

  const subtotal = products.reduce(
    (sum, p, i) => sum + p.price * quantities[i],
    0
  );

  const tax = +(subtotal * 0.08).toFixed(2);
  const total = +(subtotal + tax).toFixed(2);

  return (
    <div
      style={{
        maxWidth: "480px",
        margin: "40px auto",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        position: "relative",
        fontFamily: "sans-serif",
        background: "#fff",
      }}
    >
      <X
        style={{
          position: "absolute",
          right: "10px",
          top: "10px",
          cursor: "pointer",
        }}
        size={20}
      />

      <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
        <ShoppingCart size={24} style={{ verticalAlign: "middle" }} /> Cart
      </h2>

      {products.map((product, index) => (
        <div
          key={product.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
            alignItems: "center",
          }}
        >
          <div>
            <img
              src={product.image}
              alt=""
              style={{
                width: "70px",
                height: "70px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "8px",
              }}
              loading="lazy"
            />
            <div
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                onClick={() => updateQuantity(index, -1)}
                style={{
                  padding: "4px",
                  background: "#eee",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                <Minus size={16} />
              </button>
              <span>{quantities[index]}</span>
              <button
                onClick={() => updateQuantity(index, 1)}
                style={{
                  padding: "4px",
                  background: "#eee",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          <div style={{ textAlign: "right" }}>
            <Trash2
              onClick={() => removeItem(index)}
              size={18}
              style={{ cursor: "pointer", color: "#888" }}
            />
            <p
              style={{
                marginTop: "8px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              ${Number(product.price * quantities[index]).toFixed(2)}
            </p>
          </div>
        </div>
      ))}

      <hr />
      <div
        style={{
          marginTop: "16px",
          fontSize: "14px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Tax:</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "bold",
            marginTop: "6px",
          }}
        >
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button
          style={{
            padding: "8px 12px",
            background: "#f0f0f0",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          View Cart
        </button>
        <button
          style={{
            padding: "8px 12px",
            background: "black",
            border: "none",
            color: "white",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
