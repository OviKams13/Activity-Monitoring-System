import HomePage from "./routes/homePage/homePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import GitHubPage from "./routes/GitHubPage/GitHubPage";
import Layout from "./routes/layout/layout";

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
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
