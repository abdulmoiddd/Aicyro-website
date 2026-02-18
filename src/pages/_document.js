import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    // ADD lang="en" HERE
    <Html lang="en"> 
      <Head>
        {/* You can move the favicon link here from _app.js if preferred, 
            but keeping it in _app.js is also fine. */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}