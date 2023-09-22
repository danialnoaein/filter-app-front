import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Tests from "../pages/tests";
import Profile from "../pages/profile";
import { BottomNavLayout } from "../components/layout/BottomNavLayout";
import NotFound from "../pages/notFound";
import SignIn from "../pages/signin";
import Test from "../pages/tests/test";
import { PrivatePageLayout } from "../components/layout/PrivatePageLayout";
import Questions from "../pages/tests/questions";
import TestResult from "../pages/tests/testResult";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivatePageLayout />,
      errorElement: <NotFound />,
      children: [
        {
          element: <BottomNavLayout />,
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
          ],
        },
        {
          path: "test/:id",
          element: <Test />,
        },
        { path: "test/:id/questions", element: <Questions /> },
        { path: "test/:id/result", element: <TestResult /> },
      ],
    },
    { path: "/signin", element: <SignIn /> },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
