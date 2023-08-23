import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/Root";
import About from "./routes/About";
import Conference from "./routes/Conference";
import Committee from "./routes/Committee";
import Apply from "./routes/Apply";
import Partners from "./routes/Partners";
import Prepare from "./routes/Prepare";
import Enomum from "./routes/Enomum";

import "./main.css";

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
  {
    path: "/apply",
    element: <Apply />,
  },
  {
    path: "/enomum",
    element: <Enomum />,
  },
  {
    path: "/partners",
    element: <Partners />,
  },
  {
    path: "/prepare",
    element: <Prepare />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
