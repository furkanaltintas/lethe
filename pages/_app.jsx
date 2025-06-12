import "@/styles/globals.css";
import "@/public/css/vendor.css";
import "@/public/css/styles.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <script src="/js/plugins.js" />
      <script src="/js/main.js" />
    </>
  );
}
