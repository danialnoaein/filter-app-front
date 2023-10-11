import { createTheme, Shadows, ThemeProvider } from "@mui/material";

const AppTheme = ({ children }) => {
  const theme = createTheme({
    shadows: Array(25).fill("none") as Shadows,

    palette: {
      text: {
        primary: "#424242",
      },
    },
    typography: {
      fontFamily: "Vazirmatn",
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppTheme;
