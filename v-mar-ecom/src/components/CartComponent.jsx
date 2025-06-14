import React, { useState } from 'react';

const initialProducts = [
  {
    _id: "101",
    name: "Fresh Tomatoes",
    price: 20,
    quantity: 2,
    image: "https://via.placeholder.com/100?text=Tomatoes",
  },
  {
    _id: "102",
    name: "Basmati Rice",
    price: 80,
    quantity: 1,
    image: "https://via.placeholder.com/100?text=Rice",
  },
  {
    _id: "103",
    name: "Shampoo Bottle",
    price: 120,
    quantity: 1,
    image: "https://via.placeholder.com/100?text=Shampoo",
  },
  {
    _id: "104",
    name: "Toothpaste",
    price: 50,
    quantity: 1,
    image: "https://via.placeholder.com/100?text=Toothpaste",
  }
];

function CartComponent() {
  const [cartItems, setCartItems] = useState(initialProducts);

  const handleQuantityChange = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item._id === id
          ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(prev => prev.filter(item => item._id !== id));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return <div className="empty-cart">Your cart is empty.</div>;
  }

  return (
    <div className="cart-grid">
      <div className="cart-list">
        {cartItems.map(item => (
          <div className="cart-item" key={item._id}>
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h4>{item.name}</h4>
              <p>Price: ₹{item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(item._id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item._id, 1)}>+</button>
              </div>
              <button className="remove-btn" onClick={() => handleRemove(item._id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <p>Total Items: {cartItems.length}</p>
        <p>Total Price: ₹{totalPrice}</p>
        <div className="cart-buttons">
          <button className="btn-outline">Continue Shopping</button>
          <button className="btn-filled">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartComponent;
