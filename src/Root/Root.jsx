import { createBrowserRouter } from "react-router-dom";
import Layout from "../alamin/Layout";
import HomePage from "../Pages/Homepage/HomePage";
import ProjectDetails from "../Pages/Project/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "project/:id",
         element: <ProjectDetails /> },
    ],
  },
]);
export default router;
