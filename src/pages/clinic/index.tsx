import { EventSeat, NavigateBefore } from "@mui/icons-material";
import { Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Clinic = () => {
  const navigate = useNavigate();
  const onNewAppointmentClick = () => {
    navigate("new-appointment");
  };

  return (
    <div>
      <Card
        onClick={onNewAppointmentClick}
        style={{
          border: "1px solid #9c27b0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            padding: "8px",
            background: "#f3e5f5",
            color: "#9c27b0",
          }}
        >
          <EventSeat />
          <Typography sx={{ fontWeight: "bold", flex: "1", margin: "0 4px" }}>
            رزرو وقت مشاوره
          </Typography>
          <NavigateBefore />
        </div>
      </Card>
    </div>
  );
};

export default Clinic;
