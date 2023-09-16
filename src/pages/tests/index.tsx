import { AccessAlarm } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ITest {
  id: number;
  title: string;
  thumb: string;
  time: number;
}

interface ITestsSection {
  title: string;
  tests: ITest[];
}
const data: ITestsSection[] = [
  {
    title: "تله های ذهنی",
    tests: [
      {
        id: 44,
        title: "طرحواره رهاشدگی",
        thumb:
          "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2022-08/shutterstock_524194495.jpg",
        time: 2,
      },

      {
        id: 44,
        title: "طرحواره رهاشدگی",
        thumb:
          "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2022-08/shutterstock_524194495.jpg",
        time: 2,
      },

      {
        id: 44,
        title: "طرحواره رهاشدگی",
        thumb:
          "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2022-08/shutterstock_524194495.jpg",
        time: 2,
      },
    ],
  },
];
const Tests = () => {
  const navigate = useNavigate();

  const onClickGoToTest = (id: number) => {
    navigate(`/app/test/${id}`);
  };
  return (
    <>
      <div style={{ marginBottom: "8px" }}>
        <Typography
          variant='h5'
          sx={{ fontWeight: "bold" }}
        >
          تست های سلامت روان
        </Typography>
        <Typography>اول خودت رو بشناس، بعد تصمیم بگیر </Typography>
      </div>
      {data.map((section: ITestsSection) => (
        <>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              marginTop: "16px",
            }}
          >
            {section.title}
          </div>
          <div>
            <div style={{ overflow: "auto", whiteSpace: "nowrap" }}>
              {section.tests.map((test: ITest) => (
                <Card
                  style={{
                    display: "inline-block",
                    marginLeft: "8px",
                    width: "180px",
                    position: "relative",
                    border: "1px solid rgba(47, 43, 61, 0.16)",
                  }}
                >
                  <CardMedia
                    sx={{ height: 140 }}
                    image={test.thumb}
                  />

                  <div
                    style={{
                      position: "absolute",
                      top: "8px",
                      left: "8px",
                      backgroundColor: "rgb(30, 116, 253)",
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      fontSize: "0.8rem",
                      borderRadius: "4px",
                      padding: "0 4px",
                      color: "white",
                    }}
                  >
                    <AccessAlarm
                      style={{ fontSize: "0.9rem", marginLeft: "2px" }}
                    />
                    <span>۲ دقیقه</span>
                  </div>
                  <CardContent sx={{ paddingBottom: "0px" }}>
                    <Typography
                      variant='body2'
                      sx={{ fontWeight: "bold" }}
                    >
                      {test.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => onClickGoToTest(test.id)}
                      size='small'
                    >
                      شروع
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </div>
          </div>
        </>
      ))}

      <div
        style={{ fontWeight: "bold", fontSize: "1.2rem", marginTop: "16px" }}
      >
        افسردگی
      </div>
      <div>
        <div style={{ overflow: "auto", whiteSpace: "nowrap" }}>
          <Card
            style={{
              display: "inline-block",
              marginLeft: "8px",
              width: "180px",
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image='https://nextluxury.com/wp-content/uploads/couple-not-talking-to-each-other-after-quarrel.jpg'
            />
            <CardContent sx={{ paddingBottom: "0px" }}>
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
            <CardActions>
              <Button size='small'>شروع</Button>
            </CardActions>
          </Card>
          <Card
            style={{
              display: "inline-block",
              marginLeft: "8px",
              width: "180px",
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image='https://nextluxury.com/wp-content/uploads/couple-not-talking-to-each-other-after-quarrel.jpg'
            />
            <CardContent sx={{ paddingBottom: "0px" }}>
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
            <CardActions>
              <Button size='small'>شروع</Button>
            </CardActions>
          </Card>
          <Card
            style={{
              display: "inline-block",
              marginLeft: "8px",
              width: "180px",
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image='https://nextluxury.com/wp-content/uploads/couple-not-talking-to-each-other-after-quarrel.jpg'
            />
            <CardContent sx={{ paddingBottom: "0px" }}>
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
            <CardActions>
              <Button size='small'>شروع</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Tests;
