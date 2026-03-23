import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./components/Root/Root";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import './index.css' 
import Discover from "./components/pages/Discover";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { index: true, Component:Home},
      {path:'about', Component:About},
      {path:'discover', Component:Discover}
    
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
