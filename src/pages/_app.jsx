// import "@/styles/globals.css";
// import Head from "next/head";
// import Cursor from "../Components/components";
// import Favicon from "../assets/favicon.png";

// const DEFAULT_TITLE = "Advanced AI & Cybersecurity Solutions | Aicyro ";
// const DEFAULT_DESC =
//   "Aicyro Solutions is a SaaS development company and cyber security experts delivering AI, cloud, and secure software for modern businesses.";
// const DEFAULT_KEYWORDS =
//   "SaaS development company, Cyber security experts, Aicyro Solutions, AI solutions, Cloud DevOps, App development, Web development, VAPT, QA automation, Blockchain security";

// function App({ Component, pageProps }) {
//   return (
//     <>
//       <Head>
//         <title>{DEFAULT_TITLE}</title>
//         <meta name="description" content={DEFAULT_DESC} />
//         <meta name="keywords" content={DEFAULT_KEYWORDS} />
//         <meta name="robots" content="index, follow" />
//         <meta name="googlebot" content="index, follow" />
//         <link rel="icon" href={Favicon.src} />
//       </Head>
//       <Cursor />
//       <Component {...pageProps} />
//     </>
//   );
// }
// export default App;



// import "@/styles/globals.css";
// import Head from "next/head";
// import Cursor from "../Components/components";
// import Favicon from "../assets/favicon.png";
// import LogoAnimation from "../Components/LogoAnimation";
// import { useState, useEffect } from "react";

// const DEFAULT_TITLE = "Advanced AI & Cybersecurity Solutions | Aicyro ";
// const DEFAULT_DESC =
//   "Aicyro Solutions is a SaaS development company and cyber security experts delivering AI, cloud, and secure software for modern businesses.";
// const DEFAULT_KEYWORDS =
//   "SaaS development company, Cyber security experts, Aicyro Solutions, AI solutions, Cloud DevOps, App development, Web development, VAPT, QA automation, Blockchain security";

// function App({ Component, pageProps }) {
//   const [showSplash, setShowSplash] = useState(false);

//   useEffect(() => {
//     // Check if the user has visited the site in this session
//     const hasVisited = sessionStorage.getItem("hasVisited");

//     if (!hasVisited) {
//       // If not, show the splash screen and mark as visited
//       setShowSplash(true);
//       sessionStorage.setItem("hasVisited", "true");
//     }
//   }, []);

//   const handleSplashComplete = () => {
//     setShowSplash(false);
//   };

//   return (
//     <>
//       <Head>
//         <title>{DEFAULT_TITLE}</title>
//         <meta name="description" content={DEFAULT_DESC} />
//         <meta name="keywords" content={DEFAULT_KEYWORDS} />
//         <meta name="robots" content="index, follow" />
//         <meta name="googlebot" content="index, follow" />
//         <link rel="icon" href={Favicon.src} />
//       </Head>

//       <Cursor />

//       {/* Conditionally render LogoAnimation */}
//       {showSplash && <LogoAnimation onComplete={handleSplashComplete} />}

//       <Component {...pageProps} />
//     </>
//   );
// }

// export default App;


//
//
//
//
//
//
//
//
//
//
//
// import "@/styles/globals.css";
// import Head from "next/head";
// // import Cursor from "../Components/components";
// import Favicon from "../assets/favicon.png";
// // 1. Import the LogoAnimation component
// import LogoAnimation from "../Components/LogoAnimation";
// import { useState, useEffect } from "react";

// const DEFAULT_TITLE = "Advanced AI & Cybersecurity Solutions | Aicyro ";
// const DEFAULT_DESC =
//   "Aicyro Solutions is a SaaS development company and cyber security experts delivering AI, cloud, and secure software for modern businesses.";
// const DEFAULT_KEYWORDS =
//   "SaaS development company, Cyber security experts, Aicyro Solutions, AI solutions, Cloud DevOps, App development, Web development, VAPT, QA automation, Blockchain security";

// function App({ Component, pageProps }) {
//   // 2. State to control visibility
//   // We default to false so returning users see the site immediately (no flash of splash screen)
//   const [showSplash, setShowSplash] = useState(false);

//   useEffect(() => {
//     // 3. Check if the user has visited in this session
//     const hasVisited = sessionStorage.getItem("aicyro_visited");

//     if (!hasVisited) {
//       // If NOT visited, show splash and set the flag
//       setShowSplash(true);
//       sessionStorage.setItem("aicyro_visited", "true");
//     }
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>{DEFAULT_TITLE}</title>
//         <meta name="description" content={DEFAULT_DESC} />
//         <meta name="keywords" content={DEFAULT_KEYWORDS} />
//         <meta name="robots" content="index, follow" />
//         <meta name="googlebot" content="index, follow" />
//         <link rel="icon" href={Favicon.src} />
//       </Head>

//       {/* <Cursor /> */}

//       {/* 4. Conditionally render the Splash Screen */}
//       {showSplash && (
//         <LogoAnimation
//           onComplete={() => setShowSplash(false)} // Hides splash when animation is done
//         />
//       )}

//       <Component {...pageProps} />
//     </>
//   );
// }

// export default App;


//
//
//
//
//
//
//
//
//
// import "@/styles/globals.css";
// import Head from "next/head";
// import Favicon from "../assets/favicon.png";
// import LogoAnimation from "../Components/LogoAnimation";
// import { useState, useEffect } from "react";
// // 1. Import the Provider
// import { GoogleOAuthProvider } from '@react-oauth/google';

// const DEFAULT_TITLE = "Advanced AI & Cybersecurity Solutions | Aicyro ";
// const DEFAULT_DESC = "Aicyro Solutions is a SaaS development company...";
// const DEFAULT_KEYWORDS = "SaaS development company, Cyber security experts...";

// function App({ Component, pageProps }) {
//   const [showSplash, setShowSplash] = useState(false);

//   useEffect(() => {
//     const hasVisited = sessionStorage.getItem("aicyro_visited");
//     if (!hasVisited) {
//       setShowSplash(true);
//       sessionStorage.setItem("aicyro_visited", "true");
//     }
//   }, []);

//   return (
//     // 2. Wrap the app with the Provider and pass the Client ID
//     <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
//       <Head>
//         <title>{DEFAULT_TITLE}</title>
//         <meta name="description" content={DEFAULT_DESC} />
//         <meta name="keywords" content={DEFAULT_KEYWORDS} />
//         <meta name="robots" content="index, follow" />
//         <meta name="googlebot" content="index, follow" />
//         <link rel="icon" href={Favicon.src} />
//       </Head>

//       {showSplash && (
//         <LogoAnimation onComplete={() => setShowSplash(false)} />
//       )}

//       <Component {...pageProps} />
//     </GoogleOAuthProvider>
//   );
// }

// export default App;

//
//
//
//
//
//
//
//
//
//
//
//
//

import "@/styles/globals.css";
import Head from "next/head";
import Favicon from "../assets/favicon.png";
import LogoAnimation from "../Components/LogoAnimation";
import { useState, useEffect } from "react";
// 1. Import the Provider
import { GoogleOAuthProvider } from '@react-oauth/google';

const DEFAULT_TITLE = "Advanced AI & Cybersecurity Solutions | Aicyro ";
const DEFAULT_DESC = "Aicyro Solutions is a SaaS development company...";
const DEFAULT_KEYWORDS = "SaaS development company, Cyber security experts...";

function App({ Component, pageProps }) {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("aicyro_visited");
    if (!hasVisited) {
      setShowSplash(true);
      sessionStorage.setItem("aicyro_visited", "true");
    }
  }, []);

  return (
    // 2. Wrap the app with the Provider and pass the Client ID
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <Head>
        <title>{DEFAULT_TITLE}</title>
        <meta name="description" content={DEFAULT_DESC} />
        <meta name="keywords" content={DEFAULT_KEYWORDS} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="icon" href={Favicon.src} />
      </Head>

      {showSplash && (
        <LogoAnimation onComplete={() => setShowSplash(false)} />
      )}

      <Component {...pageProps} />
    </GoogleOAuthProvider>
  );
}

export default App;