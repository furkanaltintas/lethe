import "@/styles/globals.css";
import "@/public/css/vendor.css";
import "@/public/css/styles.css";

import Layout from "@/layout/Layout";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div id="preloader">
        <div id="loader" className="dots-fade">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div id="page" className="s-pagewrap ss-home">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>

      <Script src="/js/plugins.js" strategy="beforeInteractive" />
      <Script src="/js/main.js" strategy="afterInteractive" />
    </>
  );
}
