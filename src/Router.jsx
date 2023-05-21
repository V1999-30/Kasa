import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import About from './pages/About/About';
import Error from "./pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error/>,
  },
  {
    path: "/Logement/:id",
    element: <Product/>,
  },
  {
    path: "/About",
    element: <About/>,
  },
]);

export default router;