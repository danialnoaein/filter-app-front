import { ArrowForwardIos } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const PrivatePageLayout = ({
  showBackButton = false,
  children,
}: any) => {
  const router = useRouter();
  useEffect(() => {
    if (false) {
      router.push("/signin");
    }
  }, [router]);
  const onClickBack = () => {
    router.back();
  };
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
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          boxShadow:
            "0 3px 6px 0 rgba(0,0,0,0.1), 0 1px 3px 0 rgba(0,0,0,0.08)",
        }}
      >
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
          {showBackButton && (
            <Button
              variant="text"
              sx={{ color: "white" }}
              onClick={() => onClickBack()}
              size="small"
            >
              <ArrowForwardIos />
            </Button>
          )}

          <Typography style={{ marginRight: "8px" }}>فیلتر</Typography>
        </div>
      </div>
      <div style={{ padding: "8px" }}>{children}</div>
    </div>
  );

  return <></>;
};
