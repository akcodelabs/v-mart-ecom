import {
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
  Outlet,
  Link,
} from "@tanstack/react-router";

import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Products from "./Components/Products";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <h1>My App</h1>
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Outlet />
    </>
  ),
});

const homeRoute = createRoute({
  path: "/",
  component: Home,
  getParentRoute: () => rootRoute,
});

const loginRoute = createRoute({
  path: "/login",
  component: Login,
  getParentRoute: () => rootRoute,
});

const registerRoute = createRoute({
  path: "/register",
  component: Register,
  getParentRoute: () => rootRoute,
});

const productsRoute = createRoute({
  path: "/products",
  component: Products,
  getParentRoute: () => rootRoute,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  loginRoute,
  registerRoute,
  productsRoute,
]);

export const router = createRouter({ routeTree });
