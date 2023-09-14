import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Tests from "../pages/tests";

import Profile from "../pages/profile";
import { BottomNavLayout } from "../components/layout/BottomNavLayout";

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
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
