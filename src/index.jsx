import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './Router';
import {
  RouterProvider,
} from "react-router-dom";
import "../src/index.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>
)