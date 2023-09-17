import { ArrowForwardIos } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const Test = () => {
  const params = useParams();
  console.log(params);

  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1);
  };
  const onClickStartTest = () => {};

  return (
    <div style={{ padding: "56px 0" }}>
      <div
        style={{
          position: "fixed",
          top: "0",
          width: "100%",
          background: "#1E74FD",
          color: "white",
          height: "56px",
          display: "flex",
          alignItems: "center",
          boxShadow:
            "0 3px 6px 0 rgba(0,0,0,0.1), 0 1px 3px 0 rgba(0,0,0,0.08)",
        }}
      >
        <Button
          variant='text'
          sx={{ color: "white" }}
          onClick={() => onClickBack()}
          size='small'
        >
          <ArrowForwardIos />
        </Button>
        <Typography style={{ marginRight: "8px" }}>طرحواره رها شدگی</Typography>
      </div>
      <div style={{ padding: "8px" }}>
        <Card
          style={{
            border: "1px solid rgba(47, 43, 61, 0.16)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              padding: "8px",
            }}
          >
            <img
              src='https://mobilekit.bragherstudio.com/view29/assets/img/sample/photo/vector5.png '
              style={{ width: "54px" }}
              alt=''
            />

            <Typography variant='body2'>
              تا کنون
              <span style={{ fontWeight: "bold" }}> 544 نفر </span>
              در این تست شرکت کرده اند و از نتایج آن استفاده کردند
            </Typography>
          </div>
        </Card>

        <Card
          style={{
            marginTop: "8px",
            border: "1px solid rgba(47, 43, 61, 0.16)",
          }}
        >
          <CardMedia
            sx={{
              height: 140,
              borderTopLeftRadius: "4px",
              borderTopRightRadius: "4px",
            }}
            image={
              "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2022-08/shutterstock_524194495.jpg"
            }
          />

          <CardContent sx={{ paddingBottom: "0px" }}>
            <Typography variant='body2'>
              طرحواره رهاشدگی یعنی اینکه فرد إحساس می کند که همه او را ترک می
              کنند و او همیشه تنهاست. افراد مبتلا به این نوع طرحواره دائم
              ارتباطات خود رابا دیگران بر سر موضوعات کم اهمیت قطع می کنند.
              رهاشدگی إحساس تنهایی، ترس از دست دادن عزیزان، ترس از خیانت و ترک
              شریک زندگی و … است.
            </Typography>
          </CardContent>
        </Card>

        <Button
          variant='contained'
          color='success'
          sx={{ marginTop: "8px", width: 1 }}
          onClick={() => onClickStartTest()}
          size='small'
        >
          شروع
        </Button>
      </div>
    </div>
  );
};

export default Test;
