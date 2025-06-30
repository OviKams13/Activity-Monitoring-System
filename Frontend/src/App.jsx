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
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import SupervisorGitHubPage from "./routes/supervisorGitHubPage/supervisorGitHubPage";

function App() {
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
        {
          path: "/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/supervisorGitHubPage",
          element: <SupervisorGitHubPage />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
