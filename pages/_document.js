import { Head, Html, Main, NextScript } from "next/document";

export default function Document(props) {
  return (
    <Html
      className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
      lang="en"
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap"
        />
        <>
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
                  (function(){
                    var s = document.createElement("script");
                    s.setAttribute("data-account","CeglA0oqvN");
                    s.setAttribute("src","https://cdn.userway.org/widget.js");
                    document.body.appendChild(s);
                  })();
                `,
            }}
          /> */}
        </>
      </Head>
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
