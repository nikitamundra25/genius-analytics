import React, { Suspense } from "react";
import {
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from "@coreui/react";
import { Container } from "react-bootstrap";
import { CookiesProvider } from "react-cookie";
import { Redirect, Route, Switch } from "react-router-dom";
import { AppRoutes } from "../../../config/AppRoutes";
import routes from "../../../routes/routes";
// sidebar nav config
import navigation from "../../../_nav";
import Loader from "../../components/Loader/Loader";
import logo from "./../../../assets/img/logo150.png";
import logosmall from "./../../../assets/img/logosmall.png";
import PasswordProtection from "../PasswordProtection";
import { useAuth0 } from "@auth0/auth0-react";
const DefaultFooter = React.lazy(() => import("./DefaultFooter"));
const DefaultHeader = React.lazy(() => import("./DefaultHeader"));

const DefaultLayout = (props: any) => {
  const { isAuthenticated } = useAuth0();
  
  return (
    <CookiesProvider>
      <div className="app">
        {isAuthenticated ? (
          <>
            <AppHeader fixed>
              <Suspense fallback={" "}>
                <DefaultHeader {...props} />
              </Suspense>
            </AppHeader>
            <div className="app-body overflow-hidden">
              <AppSidebar fixed minimized display="lg">
                <div
                  className="brand-logo"
                  //ref={this.setWrapperRef}
                >
                  <img src={logo} width={120} alt="" className="main-logo" />
                  <img
                    src={logosmall}
                    width={40}
                    alt=""
                    className="minimized-logo"
                  />
                </div>
                <AppSidebarHeader />
                <AppSidebarForm />
                <Suspense fallback={<Loader />}>
                  <AppSidebarNav navConfig={navigation} isOpen />
                </Suspense>
                <AppSidebarFooter />
                <AppSidebarMinimizer />
              </AppSidebar>
              <main className="main">
                <Container fluid>
                  <Suspense fallback={<Loader />}>
                    <Switch>
                      {routes.map((route, idx) => {
                        return route.component ? (
                          <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                          />
                        ) : null;
                      })}
                      <Redirect from={AppRoutes.MAIN} to={AppRoutes.HOME} />
                    </Switch>
                  </Suspense>
                </Container>
              </main>
            </div>
            <AppFooter>
              <Suspense fallback={<Loader />}>
                <DefaultFooter />
              </Suspense>
            </AppFooter>
          </>
        ) : (
          <PasswordProtection />
        )}
      </div>
    </CookiesProvider>
  );
};
// }

// const mapDispatchToProps = (dispatch: Dispatch) => {
//   return {
//     redirectTo: (data: IredirectPath) => {
//       dispatch(redirectTo(data));
//     },
//   };
// };

export default DefaultLayout;
// export default connect(
//   undefined,
//   mapDispatchToProps
// )(withCookies(DefaultLayout));
