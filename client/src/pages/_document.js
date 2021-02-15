import React from "react";
import Document from "next/document";
// import { extractCritical } from "@emotion/server";
import { InitializeColorMode } from "theme-ui";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <html>
            {initialProps.styles}
            {sheet.getStyleElement()}
            <InitializeColorMode />
          </html>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
