import { CacheProvider } from "@emotion/react";
import {
  createTheme,
  CssBaseline,
  Shadows,
  ThemeProvider,
} from "@mui/material";
import { Vazirmatn } from "next/font/google";
import createCache from "@emotion/cache";
import stylisRTLPlugin from "stylis-plugin-rtl";

const vazir = Vazirmatn({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: [],
});
const AppTheme = ({ children }: any) => {
  const theme = createTheme({
    shadows: Array(25).fill("none") as Shadows,

    direction: "rtl",
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            fontFamily: ` ${vazir.style.fontFamily} , "Arial" !important`,
            lineHeight: 1.4,
            fontSize: 12,
          },
        },
      },
    },
    typography: {
      fontSize: 12,
      fontFamily: ` ${vazir.style.fontFamily}  , "Arial" !important`,
    },
    palette: {
      text: {
        primary: "#424242",
      },
      primary: { main: "#424242" },
      secondary: { main: "#FF8833" },
    },
  });

  const styleCache = () =>
    createCache({
      key: "rtl",
      prepend: true,
      stylisPlugins: [stylisRTLPlugin],
    });

  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={styleCache()}>
        <CssBaseline />
        {children}{" "}
      </CacheProvider>
    </ThemeProvider>
  );
};

export default AppTheme;
