import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import ideaImage from "../assets/idea.png";
import { EventSeat, NavigateBefore, Share, Warning } from "@mui/icons-material";
import { BottomNavLayout } from "@/components/layout/BottomNavLayout";
import Image from "next/image";
const Home = () => {
  const onClickShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "هدیه",
          text: "حتی تاریک ترین شب هم به پایان می رسد و خورشید دوباره طلوع می کند.",
          url: "https://filter.app/",
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    }
  };

  return (
    <BottomNavLayout>
      <div style={{ padding: "8px" }}>
        <Card>
          <div
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              padding: "8px",
              background: "#ed6c02",
              color: "#fff3e0",
            }}
          >
            <Warning />
            <Typography sx={{ fontSize: "0.9rem", flex: "1", margin: "0 4px" }}>
              لطفا ثبت نام خود را کامل کنید
            </Typography>

            <Button color="inherit" size="small">
              ادامه
            </Button>
          </div>
        </Card>

        <Card
          style={{
            margin: "8px 0",
            border: "1px solid rgba(47, 43, 61, 0.16)",
          }}
        >
          <div style={{ position: "relative" }}>
            <Image
              height={172}
              width={172}
              alt="poster"
              src={ideaImage}
              style={{
                position: "absolute",
                opacity: "0.4",
                zIndex: "0",
                left: "-56px",
              }}
            />
          </div>
          <CardContent sx={{ paddingBottom: "0px" }}>
            <Typography
              variant="h2"
              style={{ fontSize: "1.6rem", fontWeight: "bold" }}
            >
              " حتی تاریک ترین شب هم به پایان می رسد و خورشید دوباره طلوع می
              کند. "
            </Typography>

            <Typography
              style={{
                textAlign: "left",
                fontStyle: "italic",
                color: "#616161",
              }}
              variant="body2"
            >
              - ویکتور هوگو
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={onClickShare}
              startIcon={<Share style={{ marginLeft: "4px" }} />}
            >
              هدیه این جمله به یک دوست
            </Button>
          </CardActions>
        </Card>

        <Card
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
    </BottomNavLayout>
  );
};

export default Home;
