import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import Home from "../pages/home";
import Tests from "../pages/tests";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import { AccountBox, Apps, QuizOutlined } from "@mui/icons-material";
import Profile from "../pages/profile";

export const Main = () => {
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();
  return (
    <div style={{ paddingBottom: "56px" }}>
      <div>
        <Outlet />
      </div>
      <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
        <BottomNavigation
          showLabels
          value={tab}
          onChange={(_event, newValue) => {
            setTab(newValue);
            navigate("/");
          }}
        >
          <BottomNavigationAction
            label='خانه'
            onClick={() => navigate("/home")}
            icon={<Apps />}
          />
          <BottomNavigationAction
            label='تست ها'
            onClick={() => navigate("/tests")}
            icon={<QuizOutlined />}
          />
          <BottomNavigationAction
            label='پروفایل'
            onClick={() => navigate("/profile")}
            icon={<AccountBox />}
          />
        </BottomNavigation>
      </div>
    </div>
  );
};

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
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
