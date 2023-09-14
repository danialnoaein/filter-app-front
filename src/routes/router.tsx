import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Tests from "../pages/tests";

import Profile from "../pages/profile";
import { BottomNavLayout } from "../components/layout/BottomNavLayout";
import NotFound from "../pages/notFound";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BottomNavLayout />,
      children: [
        {
          path: "home",
          index: true,
          element: <Home />,
        },

        {
          path: "tests",
          element: <Tests />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
