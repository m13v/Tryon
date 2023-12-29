import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-9K94NYM2MP" />
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-9K94NYM2MP');`}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
