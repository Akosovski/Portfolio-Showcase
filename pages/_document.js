import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
        
      </Head>
      <body className="font-abel">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
