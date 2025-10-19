// src/App.js
import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Login
          onLogin={() => {
            setIsLoggedIn(true);
          }}
        />
      ),
    },
    {
      path: "/dashboard",
      element: isLoggedIn ? <Dashboard /> : <Navigate to="/" replace />,
    },
  ]);

  return <RouterProvider router={router} />;
}


export default App;
