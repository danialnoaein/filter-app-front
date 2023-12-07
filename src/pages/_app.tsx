import { store } from "@/store";
import AppTheme from "@/theme";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "../styles/globals.css";
import { AuthProvider } from "@/context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Provider store={store}>
        <AppTheme>
          <Component {...pageProps} />
        </AppTheme>
      </Provider>
    </AuthProvider>
  );
}
