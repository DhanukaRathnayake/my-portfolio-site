// Libraries
import type { AppProps } from "next/app";

// Global styles
import "../styles/globals.css";

// Layout component
import Layout from "../components/layout";

// Redux
import store from "../redux/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
