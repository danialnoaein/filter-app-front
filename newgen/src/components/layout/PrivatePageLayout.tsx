import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const PrivatePageLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (false) {
      navigate("/signin");
    }
  }, [navigate]);
  return <Outlet />;
};
