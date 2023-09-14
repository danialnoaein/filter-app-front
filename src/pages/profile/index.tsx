import { AccessAlarm } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Profile = () => {
  return (
    <div>
      {Array.from("ddddd").map((_item) => (
        <Card sx={{ display: "flex", marginBottom: "8px" }}>
          <CardMedia
            component='img'
            sx={{ width: 120 }}
            image='https://nextluxury.com/wp-content/uploads/couple-not-talking-to-each-other-after-quarrel.jpg'
            alt={`Live from space album cover ${_item}`}
          />
          <Box>
            <CardContent sx={{ paddingBottom: "0" }}>
              <Typography
                variant='body2'
                sx={{ fontWeight: "bold" }}
              >
                طرحواره رها شدگی
              </Typography>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  fontSize: "0.8rem",
                  margin: "8px 0",
                  color: "#999",
                }}
              >
                <AccessAlarm />
                <span>۲ دقیقه</span>
              </div>
            </CardContent>
            <CardActions sx={{ paddingTop: "0" }}>
              <Button size='small'>شروع</Button>
            </CardActions>
          </Box>
        </Card>
      ))}
    </div>
  );
};

export default Profile;
