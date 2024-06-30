import Layout from "../pages/Layout";
import Login from "../pages/Login";
import { createBrowserRouter } from "react-router-dom";
import vueRouter from "./vueRoute";

const router = createBrowserRouter([
  {
    path: "/layout",
    element: <Layout></Layout>,
    children: vueRouter,
  },
  {
    path: "/",
    element: <Login></Login>,
  },
]);

export default router;
