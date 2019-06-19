import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import withRedux, { AppProps } from "next-redux-wrapper";

import { makeStore } from "@Redux";

class MyApp extends App<AppProps> {
  render(): JSX.Element {
    const { Component, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component />
        </Provider>
      </Container>
    );
  }
}

MyApp.getInitialProps = async ({ Component, ctx, router }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  console.log("router: ", router);

  return { pageProps };
};

export default withRedux(makeStore)(MyApp);
