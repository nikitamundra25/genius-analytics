import React, { Component, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";
import {
  IDefaultLayoutProps,
  IDefaultLayoutState,
  IredirectPath,
} from "../../../interfaces";
import { AppRoutes } from "../../../config/AppRoutes";
import routes from "../../../routes/routes";
// sidebar nav config
import navigation from "../../../_nav";
import Loader from "../../components/Loader/Loader";
import {
  // AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from "@coreui/react";
import {  redirectTo } from "../../../actions";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import logo from "./../../../assets/img/logo150.png";
import logosmall from "./../../../assets/img/logosmall.png";
const DefaultFooter = React.lazy(() => import("./DefaultFooter"));
const DefaultHeader = React.lazy(() => import("./DefaultHeader"));

class DefaultLayout extends Component<
  IDefaultLayoutProps,
  IDefaultLayoutState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: true,
      isAuthenticated: true,
      userDetails: {},
    };
  }

  // componentDidUpdate() {
  //   // if (prevProps.location.pathname !== this.props.location.pathname) {
  //     const window_width = window.innerWidth;
  //     console.log("hello didupdate" , window_width);
  //     const header: HTMLElement | null = document.getElementById('mainHeader');
  //     if (header) {
  //       console.log("hello header");
  //       const width1 = `${window_width}px` ;
  //       header.style.width = width1;
       
  //     }
  //   // }
  // }
  

  render() {
    return (
      <div className='app' >
        <AppHeader fixed>
          <Suspense fallback={<Loader />}>
            <DefaultHeader {...this.props} />
          </Suspense>
        </AppHeader>
        <div className='app-body'>
          <AppSidebar fixed minimized display='lg'>
            <div className='brand-logo'>
              <img src={logo} width={120} alt='' className='main-logo' />
              <img
                src={logosmall}
                width={40}
                alt=''
                className='minimized-logo'
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
          <main className='main'>
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
      </div>
    );
  }
}



const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    redirectTo: (data: IredirectPath) => {
      dispatch(redirectTo(data));
    },
  };
};

export default connect(undefined, mapDispatchToProps)(DefaultLayout);
