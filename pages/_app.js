import "../styles/globals.css";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }) {
  const theme = {
    purple: { normal: "#AD1FEA", hover: "#C75AF6" },
    blue: { normal: "#4661E6", hover: "#7C91F9" },
    darkBlue: { normal: "#3A4374", hover: "#656EA3" },
    red: { normal: "#D73737", hover: "#E98888" },
  };

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
