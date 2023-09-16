import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Tests from "../pages/tests";
import Profile from "../pages/profile";
import { BottomNavLayout } from "../components/layout/BottomNavLayout";
import NotFound from "../pages/notFound";
import SignIn from "../pages/signin";
import Test from "../pages/tests/test";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BottomNavLayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "",
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
        { path: "test/:id", element: <Test /> },
      ],
    },
    { path: "/signin", element: <SignIn /> },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
