import React from "react";
import { useForm } from "react-hook-form";
import "./login.css";

// Hardcoded user data
const users = [
  { phone: "9600309337", email: "user1@gobi.com", password: "password1" },
  { phone: "7339481178", email: "user2@deepak.com", password: "password2" },
  { phone: "9345448447", email: "user3@aswin.com", password: "password3" },
  { phone: "8220876021", email: "user4@kamalesh.com", password: "password4" },
  { phone: "9047718616", email: "user5@anabil.com", password: "password5" },
  { phone: "6369336110", email: "user6@kavitha.com", password: "password6" },
  { phone: "9944971932", email: "user6@selva.com", password: "password7" },
];

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { identifier, password } = data;

    const userFound = users.find(
      (u) =>
        (u.email.toLowerCase() === identifier.toLowerCase() ||
          u.phone === identifier) &&
        u.password === password
    );

    if (userFound) {
      alert("Login successful!");
    } else {
      alert("Invalid credentials!");
    }
  };

  const validateIdentifier = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    return (
      emailRegex.test(value) ||
      phoneRegex.test(value) ||
      "Enter valid email or phone number."
    );
  };

  return (
    <div className="login-container">
      <h1 className="logo">V</h1>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <input
          type="text"
          placeholder="Phone Number or Email"
          {...register("identifier", {
            required: "Phone or Email is required.",
            validate: validateIdentifier,
          })}
        />
        {errors.identifier && (
          <p className="error">{errors.identifier.message}</p>
        )}

        <input
          type="password"
          placeholder="Password (min 8 characters)"
          {...register("password", {
            required: "Password is required.",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters.",
            },
          })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <button type="submit">Submit</button>
      </form>
      <p className="signin-link">
        Don’t have an account? <a href="#">Sign In</a>
      </p>
    </div>
  );
};

export default Login;
