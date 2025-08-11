import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/index.css";

import App from "./shell/App.jsx";
import Home from "./pages/Home.jsx";
import Engineering from "./pages/Engineering.jsx";
import Art from "./pages/Art.jsx";
import Fitness from "./pages/Fitness.jsx";
import Business from "./pages/Business.jsx";
import ErrorBoundary from "./shell/ErrorBoundary.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "engineering", element: <Engineering /> },
      { path: "art", element: <Art /> },
      { path: "fitness", element: <Fitness /> },
      { path: "business", element: <Business /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);
