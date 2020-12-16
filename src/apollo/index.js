import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

import { setContext } from "apollo-link-context";
import fetch from "isomorphic-unfetch";
import Cookie from "js-cookie";
import { useMemo } from "react";

const SERVER_URL = "https://edfhr-dashboard-724077.us1.kinto.io";

let apolloClient = null;

if (!process.browser) {
  global.fetch = fetch;
}

function create(initialState, token) {
  let link = createHttpLink({
    uri:
      process.env.NODE_ENV !== "development"
        ? `${SERVER_URL}/api/graphql`
        : "http://localhost:3000/api/graphql",

    fetch,
  });

  const authLink = setContext(() => {
    return {
      headers: {
        Authorization: `Bearer ${token || Cookie.get("token")}` || "",
      },
    };
  });

  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(link),
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export const initializeApollo = (initialState, options) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState, options);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options);
  }

  return apolloClient;
};

export const useApollo = (initialState) => {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
};
