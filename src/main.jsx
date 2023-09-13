import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./routes/Homepage";
import About from "./routes/About";
import Conference from "./routes/Conference";
import Committee from "./routes/Committee";
import Apply from "./routes/Apply";
import Partners from "./routes/Partners";
import Prepare from "./routes/Prepare";

import "./main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
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
