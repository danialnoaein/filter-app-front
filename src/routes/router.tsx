import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Tests from "../pages/tests";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/tests",
    element: <Tests />,
  },
]);

export default router;
