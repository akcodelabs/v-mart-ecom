import React, { useState } from 'react';
import './Login.css';

// Hardcoded 6 user credentials
const users = [
  { phone: "9600309337", email: "user1@gobi.com", password: "password1" },
  { phone: "7339481178", email: "user2@deepak.com", password: "password2" },
  { phone: "93454484470", email: "user3@aswin.com", password: "password3" },
  { phone: "8220876021", email: "user4@kamalesh.com", password: "password4" },
  { phone: "9047718616", email: "user5@anabil.com", password: "password5" },
  { phone: "6369336110", email: "user6@kavitha.com", password: "password6" },
  { phone: "9944971932", email: "user6@selva.com", password: "password7" }   
];

const Login = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone) => /^\d{10}$/.test(phone);

  const handleLogin = () => {
    if (!identifier || !password) {
      alert("Please fill in both fields.");
      return;
    }

    if (!isValidEmail(identifier) && !isValidPhone(identifier)) {
      alert("Enter a valid email or 10-digit phone number.");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    const userFound = users.find(
      (u) =>
        (u.email.toLowerCase() === identifier.toLowerCase() || u.phone === identifier) &&
        u.password === password
    );

    if (userFound) {
      alert("Login successful!");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    
    <div className="login-container">
        <h1 className='logo'>V</h1>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Phone Number or Email"
        value={identifier}
        onChange={(e) => setIdentifier(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password (min 8 characters)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Submit</button>
      <p className="signin-link">
        Don’t have an account? <a href="#">Sign In</a>
      </p>
    </div>
    
  );

};

export default Login;
