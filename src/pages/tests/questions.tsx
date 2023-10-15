import { ArrowForwardIos } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  LinearProgress,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";

const Questions = () => {
  const router = useRouter();
  const params = useParams();
  const onClickBack = () => {
    router.back();
  };
  const onClickStartTest = () => {};

  const [value, setValue] = useState("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("NEXT QUESTION");

    router.push(`/test/${params.id}/result`);
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
          display: "flex",
          alignItems: "center",
          boxShadow:
            "0 3px 6px 0 rgba(0,0,0,0.1), 0 1px 3px 0 rgba(0,0,0,0.08)",
        }}
      >
        <Button
          variant="text"
          sx={{ color: "white" }}
          onClick={() => onClickBack()}
          size="small"
        >
          <ArrowForwardIos />
        </Button>
        <Typography style={{ marginRight: "8px" }}>طرحواره رها شدگی</Typography>
      </div>
      <div style={{ padding: "8px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ minWidth: 20 }}>
            <Typography
              variant="body2"
              color="text.secondary"
            >{`3/60`}</Typography>
          </Box>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress variant="determinate" value={20} />
          </Box>
        </Box>
        <Card
          style={{
            marginTop: "8px",
            border: "1px solid rgba(47, 43, 61, 0.16)",
          }}
        >
          <CardContent sx={{ paddingBottom: "0px" }}>
            <Typography variant="body2">
              طرحواره رهاشدگی یعنی اینکه فرد إحساس می کند که همه او را ترک می
              کنند و او همیشه تنهاست. افراد مبتلا به این نوع طرحواره دائم
              ارتباطات خود رابا دیگران بر سر موضوعات کم اهمیت قطع می کنند.
              رهاشدگی إحساس تنهایی، ترس از دست دادن عزیزان، ترس از خیانت و ترک
              شریک زندگی و … است.
            </Typography>
          </CardContent>
        </Card>

        <form onSubmit={handleSubmit}>
          <FormControl variant="standard">
            <RadioGroup
              aria-labelledby="demo-error-radios"
              name="quiz"
              value={value}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="جواب ۱"
                sx={{
                  background: "white",
                  border: "1px solid rgba(47, 43, 61, 0.16)",
                  borderRadius: "4px",
                  margin: "8px 0px 0px",
                  width: "calc(100vw - 18px)",
                }}
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="جواب ۲"
                sx={{
                  background: "white",
                  border: "1px solid rgba(47, 43, 61, 0.16)",
                  borderRadius: "4px",
                  margin: "8px 0px 0px",
                  width: "calc(100vw - 18px)",
                }}
              />
            </RadioGroup>
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            color="success"
            sx={{ marginTop: "8px", width: 1 }}
            size="small"
          >
            ثبت
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Questions;
