import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Products from './routes/Products';
import Home from './routes/Home';
import Reports from './routes/Reports';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "reports",
    element: <Reports />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);