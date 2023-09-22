import { AccountBox, Apps, QuizOutlined } from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const BottomNavLayout = () => {
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();

  return (
    <div style={{ padding: "56px 0" }}>
      <div
        style={{
          position: "fixed",
          top: "0",
          width: "100%",
          background: "#1e88e5",
          color: "white",
          height: "56px",
          display: "flex",
          alignItems: "center",
          boxShadow:
            "0 3px 6px 0 rgba(0,0,0,0.1), 0 1px 3px 0 rgba(0,0,0,0.08)",
        }}
      >
        <Typography style={{ marginRight: "8px" }}>فیلتر</Typography>
      </div>
      <div style={{ padding: "8px" }}>
        <Outlet />
      </div>
      <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
        <BottomNavigation
          style={{ borderTop: "1px solid #E1E1E1" }}
          showLabels
          value={tab}
          onChange={(_event, newValue) => {
            setTab(newValue);
            navigate("/");
          }}
        >
          <BottomNavigationAction
            label='خانه'
            onClick={() => navigate("/")}
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
