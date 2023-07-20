import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.css";
import Root from "./routes/Root";
import About from "./routes/About";
import Conference from "./routes/Conference";
import Committee from "./routes/Committee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/conference",
    element: <Conference />,
  },
  {
    path: "/committees",
    element: <Committee />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
