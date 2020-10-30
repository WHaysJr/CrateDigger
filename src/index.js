import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const client = new ApolloClient({
  uri: "http://localhost:8000/",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <AlertProvider template={AlertTemplate}>
      <App />
    </AlertProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
