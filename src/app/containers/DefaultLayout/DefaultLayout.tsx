import React, { Component, Suspense } from 'react';
import { Route, Switch, Redirect, RouteComponentProps } from 'react-router-dom';
import { Container, Dropdown } from 'react-bootstrap';
import {
  IDefaultLayoutProps,
  IDefaultLayoutState,
  IRootState,
  IredirectPath,
} from '../../../interfaces';
import { AppRoutes } from '../../../config/AppRoutes';
import routes from '../../../routes/routes';
// sidebar nav config
import navigation from '../../../_nav';
import Loader from '../../components/Loader/Loader';
import {
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
import { profileInfoRequest, redirectTo } from '../../../actions';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

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

 

  render() {
    return (
      <div className='app'>
        <AppHeader fixed>
          <Suspense fallback={<Loader />}>
            <DefaultHeader {...this.props} />
          </Suspense>
        </AppHeader>
        <div className='app-body'>
          <AppSidebar fixed minimized display='lg' >
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense fallback={<Loader />}>
              <AppSidebarNav navConfig={navigation} {...this.props} isOpen />
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className='main'>
            {/* <AppBreadcrumb appRoutes={routes} /> */}

            <Container fluid>
              <div className="main-navbar">
                <div className="navbar-nav-item">
                  <div className="year-nav">
                    <span className="cursor-pointer"><i className="icon-arrow-left "></i></span>
                    <span className="mx-3">November</span>
                    <span className="cursor-pointer"><i className="icon-arrow-right "></i></span>
                  </div>
                </div>
                <div className="navbar-nav-item">
                  <Dropdown className="year-dropdown common-dropdown">
                    <Dropdown.Toggle variant="success" id="dropdown-year">
                      2018
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">2017</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">2016</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">2015</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
              
                </div>
                <div className="navbar-nav-item">
                  <Dropdown className="dashboard-dropdown common-dropdown">
                  <Dropdown.Toggle variant="success" id="dropdown-dasboard">
                    Dashboard
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Dashboard</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Dashboard Monthly</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something Yearly</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                </div>
              
              
              </div>
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

const mapStateToProps: any = (state: IRootState) => ({
  loginReducer: state.loginReducer,
  profileInfoReducer: state.profileInfoReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    profileInfo: () => {
      dispatch(profileInfoRequest());
    },
    redirectTo: (data: IredirectPath) => {
      dispatch(redirectTo(data));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DefaultLayout);
