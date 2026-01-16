import "@/styles/globals.css";
import Head from "next/head";
import Cursor from "../Components/components";
import Favicon from "../assets/favicon.png";

const DEFAULT_TITLE = "Advanced AI & Cybersecurity Solutions | Aicyro ";
const DEFAULT_DESC =
  "Aicyro Solutions is a SaaS development company and cyber security experts delivering AI, cloud, and secure software for modern businesses.";
const DEFAULT_KEYWORDS =
  "SaaS development company, Cyber security experts, Aicyro Solutions, AI solutions, Cloud DevOps, App development, Web development, VAPT, QA automation, Blockchain security";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{DEFAULT_TITLE}</title>
        <meta name="description" content={DEFAULT_DESC} />
        <meta name="keywords" content={DEFAULT_KEYWORDS} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="icon" href={Favicon.src} />
      </Head>

      <Cursor />
      <Component {...pageProps} />
    </>
  );
}

export default App;
