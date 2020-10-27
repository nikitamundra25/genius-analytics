import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "@auth0/auth0-react";
import { auth0Domain, auth0ClientId } from "./config/AppConfig";
const history = createBrowserHistory();

const onRedirectCallback = async(appState:any) => {
  console.log("appStateappStateappState",appState);
  
  history.push(
    appState && appState.returnTo
      ? appState.returnTo
      : window.location.pathname
  );
};


ReactDOM.render(
  // <Auth0Provider
  //   domain={auth0Domain}
  //   clientId={auth0ClientId}
  //   redirectUri={window.location.origin}
  //   onRedirectCallback={onRedirectCallback}
  // >
  //   {" "}
    <App />,
  // </Auth0Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
