import { PrivatePageLayout } from "@/components/layout/PrivatePageLayout";
import { useAuth } from "@/context/AuthContext";
import { supabaseClient } from "@/utils/supabase/supabaseClient";
import { EventSeat, NavigateBefore } from "@mui/icons-material";
import { Card, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const Doctors = () => {
  const [doctors, setDoctors] = useState<any[]>([]);
  const [appointments, setAppointments] = useState<any[]>([]);

  const router = useRouter();
  const auth = useAuth();
  const supabase = supabaseClient();
  const onNewAppointmentClick = () => {
    if (auth.user) {
      router.push("clinic/new-appointment");
    } else {
      router.push("/signin");
    }
  };

  const onGetAllDoctors = () => {
    const getAll = async () => {
      let { data: clinic_staff, error } = await supabase
        .from("appointments")
        .select(`*, User ( other_user_details ) `);

      if (clinic_staff !== null) {
        setDoctors(clinic_staff);
      }
    };
    getAll();
  };

  const onDoctorClick = (doctorUserId: any) => {
    console.log(doctorUserId);

    const getAll = async () => {
      let { data: clinic_staff, error } = await supabase
        .from("clinic_staff")
        .select(`*, User ( other_user_details ) `);

      if (clinic_staff !== null) {
        setDoctors(clinic_staff);
      }
    };
    getAll();
  };

  return (
    <PrivatePageLayout showBackButton={true}>
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

      <Card
        onClick={onGetAllDoctors}
        style={{
          border: "1px solid #9c27b0",
          marginTop: "8px",
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
            لیست دکتر ها
          </Typography>
          <NavigateBefore />
        </div>
      </Card>

      {doctors.map((doctor: any) => (
        <Card
          onClick={() => onDoctorClick(doctor.user_id)}
          style={{
            marginTop: "8px",
          }}
          key={doctor.user_id}
        >
          <div
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              padding: "8px",
              background: "#eee",
              color: "#111",
            }}
          >
            <EventSeat />
            <Typography sx={{ fontWeight: "bold", flex: "1", margin: "0 4px" }}>
              {doctor.User.other_user_details}
            </Typography>
            <NavigateBefore />
          </div>
        </Card>
      ))}

      {appointments.map((appointment: any) => (
        <Card
          // onClick={() => onDoctorClick(doctor.user_id)}
          style={{
            marginTop: "8px",
          }}
          key={appointment.id}
        >
          <div
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              padding: "8px",
              background: "#eee",
              color: "#111",
            }}
          >
            {/* <EventSeat /> */}
            <Typography sx={{ fontWeight: "bold", flex: "1", margin: "0 4px" }}>
              {appointment.id}
            </Typography>
            <NavigateBefore />
          </div>
        </Card>
      ))}
    </PrivatePageLayout>
  );
};

export default Doctors;
