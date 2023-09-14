import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const onClickGoBackToHome = () => {
    navigate("/");
  };
  return (
    <>
      <div style={{ maxWidth: "300px", textAlign: "center", margin: "0 auto" }}>
        <img
          style={{ display: "inline-block", width: "100%", height: "auto" }}
          src='https://mobilekit.bragherstudio.com/view29/assets/img/sample/photo/vector6.png'
          alt='alt'
        />
        <div style={{ fontWeight: "bold", fontSize: "1.4rem" }}>نیست</div>
        <div>شما دنبال چی هستی؟</div>

        <div>
          <Button
            variant='contained'
            sx={{ marginTop: "16px" }}
            onClick={() => onClickGoBackToHome()}
          >
            بازگشت به خانه
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
