// Libraries
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { wrapper } from "../redux/store";

// Global styles
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

// Layout component
import Layout from "../components/Layout";
import { ToastProvider } from "@/components/Common/Toast/ToastContext";

export const MyApp = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <ToastProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ToastProvider>
    </Provider>
  );
};

export default MyApp;
