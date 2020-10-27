import React, { Suspense } from "react";
import "./App.scss";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { Store } from "redux";
import { Router } from "react-router";
import configureStore from "./store";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { logger } from "./helper";
import "./extend-definitions";
import FullPageLoader from "./app/components/Loader/FullPageLoader";
import { useAuth0, Auth0Provider } from "@auth0/auth0-react";
import { auth0Domain, auth0ClientId } from "./config/AppConfig";

const AppRoutesComponent = React.lazy(() => import("./routes"));

const history = createBrowserHistory();
const store: Store = configureStore(history);
logger(
  [
    {
      key: "fasdfasdf",
    },
    { key: "fasdfasdf" },
  ].group("key")
);
const App: React.FC = () => {
  const { error } = useAuth0();
  console.log("errorerrorerror", process.env.NODE_ENV);

  let temp = process.env.NODE_ENV;

  if (error) {
    return <div>auth0-spa-js must run on a secure origin. </div>;
  }

  const onRedirectCallback = async (appState: any) => {
    history.push(
      appState && appState.returnTo
        ? appState.returnTo
        : window.location.pathname
    );
  };

  return (
    <>
      <Provider store={store}>
        <Router history={history}>
          <Suspense fallback={<FullPageLoader />}>
            {temp === "development" ? (
              <Auth0Provider
                domain={auth0Domain}
                clientId={auth0ClientId}
                redirectUri={window.location.origin}
                onRedirectCallback={onRedirectCallback}
              >
                <AppRoutesComponent />
              </Auth0Provider>
            ) : (
              <div className="error-prod">
                <div className="err-pro"
              >
                <h5>Warning heading </h5>
                <p>
                  Due to unsecured host the auth connector does not connect to
                  the website, make it secured to access this website.
                </p>
              </div>
              </div>
            )}
          </Suspense>
        </Router>
        <ToastContainer
          autoClose={8000}
          hideProgressBar
          pauseOnFocusLoss={false}
          pauseOnHover={false}
          transition={Slide}
        />
      </Provider>
    </>
  );
};

export default App;
