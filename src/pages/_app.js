import Head from "next/head";
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { RecoilRoot } from "recoil";
import "styles/index.scss";
import { theme } from "theme";
import { ThemeProvider } from "theme-ui";
import { ThemeProvider as Styledtheme } from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <meta
          name="description"
          content="Nigeria's #1 Electronic platform for Law reports, Practice and study notes, legal questions in Nigeria"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
          crossOrigin="anonymous"
        />
        <title>HELA</title>
      </Head>
      <RecoilRoot>
        <Styledtheme theme={theme}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Styledtheme>
      </RecoilRoot>
    </Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default MyApp;
