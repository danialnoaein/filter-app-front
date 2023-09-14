import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

const Tests = () => {
  return (
    <>
      <Typography
        variant='h5'
        fontStyle={"bold"}
      >
        تست های سلامت روان
      </Typography>
      <Typography variant='h6'>اول خودت رو بشناس، بعد تصمیم بگیر </Typography>

      <div>
        <div style={{ display: "flex" }}>
          <Card sx={{ width: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color='text.secondary'
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography
                variant='h5'
                component='div'
              >
                benev
              </Typography>
              <Typography
                sx={{ mb: 1.5 }}
                color='text.secondary'
              >
                adjective
              </Typography>
              <Typography variant='body2'>
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>Learn More</Button>
            </CardActions>
          </Card>

          <Card sx={{ width: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color='text.secondary'
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography
                variant='h5'
                component='div'
              >
                benev
              </Typography>
              <Typography
                sx={{ mb: 1.5 }}
                color='text.secondary'
              >
                adjective
              </Typography>
              <Typography variant='body2'>
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>Learn More</Button>
            </CardActions>
          </Card>

          <Card sx={{ width: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color='text.secondary'
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography
                variant='h5'
                component='div'
              >
                benev
              </Typography>
              <Typography
                sx={{ mb: 1.5 }}
                color='text.secondary'
              >
                adjective
              </Typography>
              <Typography variant='body2'>
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>Learn More</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Tests;
