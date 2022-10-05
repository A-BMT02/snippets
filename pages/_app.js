import "../styles/globals.css";
import { DataContextProvider } from "../Context/dataContext";

function MyApp({ Component, pageProps }) {
  return (
    <DataContextProvider>
      <Component {...pageProps} />
    </DataContextProvider>
  );
}

export default MyApp;
