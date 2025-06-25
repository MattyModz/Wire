import "../src/styles/index.scss";
import { AnimatePresence } from "framer-motion";
import Footer from "../src/componants/Footer/index";
import Header from "../src/componants/Header/header";

function MyApp({ Component, pageProps, router }) {
  return (
    <div>
      <Header />

      <AnimatePresence exitBeforeEnter>
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
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default MyApp;
//  <ApolloProvider client={client}>
// </ApolloProvider>
{
  /* <Loading loading={loading} />; */
}
