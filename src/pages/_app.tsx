// Libraries
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { wrapper } from "../redux/store";
import { useReportWebVitals } from "next/web-vitals";

// Global styles
import "../styles/globals.css";

// Layout component
import Layout from "../components/Layout";
import { ToastProvider } from "@/components/Common/Toast/ToastContext";

export const MyApp = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  // Google Analytics Web Vitals
  useReportWebVitals((metric) => {
    // Send Web Vitals metrics to Google Analytics
    if (window.gtag) {
      window.gtag("event", "web_vitals", {
        event_category: "Web Vitals",
        event_label: metric.name,
        value: metric.value,
        non_interaction: true, // Ensures the event doesn't affect bounce rate
      });
    }
  });

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
