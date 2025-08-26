import React from "react";
import Button from "../components/ui/Button";
import "./App.css";
import AppLayout from "../layouts/app-layout.jsx";
import LandingPage from "../pages/landing-page.jsx";
import { createBrowserRouter, Link } from "react-router-dom";
import Dashboard from "@/pages/dashboard";
import Auth from "@/pages/auth";
import LinkPage from "@/pages/link-page";
import RedirectLink from "@/pages/redirect-link";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/link/:id",
        element: <Link />,
      },
      {
        path: "/:id",
        element: <RedirectLink />,
      },
    ],
  },
]);
function App() {
  return (
    
  );
}

export default App;
