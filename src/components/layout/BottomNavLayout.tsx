import { AccountBox, Apps, QuizOutlined, Apartment } from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

export const BottomNavLayout = ({ children }: any) => {
  const [tab, setTab] = useState(0);
  const router = useRouter();

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
      <div style={{ padding: "8px" }}>{children}</div>
      <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
        <BottomNavigation
          style={{ borderTop: "1px solid #E1E1E1" }}
          showLabels
          value={tab}
          onChange={(_event, newValue) => {
            setTab(newValue);
            router.push("/");
          }}
        >
          <BottomNavigationAction
            label="خانه"
            onClick={() => router.push("/")}
            icon={<Apps />}
          />
          <BottomNavigationAction
            label="تست ها"
            onClick={() => router.push("/tests")}
            icon={<QuizOutlined />}
          />
          <BottomNavigationAction
            label="کلینیک"
            onClick={() => router.push("/clinic")}
            icon={<Apartment />}
          />
          <BottomNavigationAction
            label="پروفایل"
            onClick={() => router.push("/profile")}
            icon={<AccountBox />}
          />
        </BottomNavigation>
      </div>
    </div>
  );
};
