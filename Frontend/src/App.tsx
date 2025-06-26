import HomePage from "./routes/homePage/homePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import GitHubPage from "./routes/GitHubPage/GitHubPage";
import Layout from "./routes/layout/layout";
import SupervisorPage from "./routes/supervisorPage/supervisorPage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import { JSX } from "react";

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/GitHubPage",
          element: <GitHubPage />,
        },
        {
          path: "/supervisor",
          element: <SupervisorPage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
