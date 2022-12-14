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
  return (
    <>
      <Provider store={store}>
        <Router history={history}>
          <Suspense fallback={<FullPageLoader />}>
            <AppRoutesComponent />
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
