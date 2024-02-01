import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Help from "./pages/Help.jsx";
import Home from "./pages/Home.jsx";
import Needs from "./pages/Needs.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/nourriture",
        element: <App />,
      },
      {
        path: "/boisson",
        element: <App />,
      },
      {
        path: "/rechauffage",
        element: <App />,
      },
      {
        path: "/repo",
        element: <App />,
      },
      {
        path: "/needs",
        element: <Needs />,
      },
      {
        path: "/help",
        element: <Help />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
