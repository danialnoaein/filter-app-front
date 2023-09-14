import { createTheme, ThemeProvider } from "@mui/material";

const AppTheme = ({ children }) => {
  const theme = createTheme({
    typography: {
      fontFamily: "Vazirmatn",
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppTheme;
