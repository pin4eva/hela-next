import Head from "next/head";
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { RecoilRoot } from "recoil";
import Nprogress from "nprogress";
import "styles/resets.css";
import "styles/index.scss";
import Router from "next/router";
import { theme } from "theme";
import { ThemeProvider } from "theme-ui";
import { ThemeProvider as Styledtheme } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "apollo";
import "react-mde/lib/styles/css/react-mde-all.css";
// import "bootstrap/dist/js/bootstrap";

// import "utils/scripts";

if (typeof window !== "undefined") {
  // require("popper.js");
  require("bootstrap/dist/js/bootstrap");
  // require("../utils/scripts.js");
}

Router.events.on("routeChangeStart", () => {
  Nprogress.start();
});
Router.events.on("routeChangeComplete", () => Nprogress.done());
Router.events.on("routeChangeError", () => Nprogress.done());

function MyApp({ Component, pageProps }) {
  const client = useApollo(pageProps.apollo);
  return (
    <Fragment>
      <Head>
        <meta
          name="description"
          content="Nigeria's #1 Electronic platform for Law reports, Practice and study notes, legal questions in Nigeria"
        />
        <link rel="stylesheet" href="/nprogress.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
          crossOrigin="anonymous"
        />
        <title>HELA</title>
      </Head>
      <RecoilRoot>
        <ApolloProvider client={client}>
          <Styledtheme theme={theme}>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </Styledtheme>
        </ApolloProvider>
      </RecoilRoot>
    </Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default MyApp;
