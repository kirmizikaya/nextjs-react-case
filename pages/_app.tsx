import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import stores from "../stores/index";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={stores}>
      <Component {...pageProps} />
    </Provider>
  );
}

 