// Libraries
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { wrapper } from "../redux/store";

// Global styles
import "../styles/globals.css";

// Layout component
import Layout from "../components/Layout";

export const MyApp = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
