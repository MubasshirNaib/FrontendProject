import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Login from "../components/Login";
import ProtectedRoute from "../components/ProtectedRoute";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/about",
    element: (
      <ProtectedRoute allowedRoles={["admin"]}>
        <About />
      </ProtectedRoute>
    ),
  },
  {
    path: "/contact",
    element: (
      <ProtectedRoute>
        <Contact />
      </ProtectedRoute>
    ),
  },
]);

const BrowserRoute = () => {
  return <RouterProvider router={router} />;
};

export default BrowserRoute;
