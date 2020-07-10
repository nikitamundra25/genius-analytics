import React, { Component, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";
import {
  IDefaultLayoutProps,
  IDefaultLayoutState,
  IRootState,
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
import { profileInfoRequest, redirectTo } from "../../../actions";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import logo from "./../../../assets/img/logo150.png";
import logosmall from "./../../../assets/img/logosmall.png";
import moment from "moment";
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
      startDate: new Date(),
      activeMonth: moment().month(),
      activeYear: moment().year(),
    };
  }

  handleMonthNav = (str: string) => {
    const { activeMonth, activeYear } = this.state;
    let month: number = str === "previous" ? activeMonth - 1 : activeMonth + 1;
    let year: number = parseInt(activeYear);
    if (str === "previous") {
      // To check if active month is january than set month to december & year to previous year
      if (activeMonth === 0) {
        month = 11;
        year = activeYear - 1;
      }
    } else {
      if (activeMonth === 11) {
        month = 0;
        year = activeYear + 1;
      }
    }
    let setMonthForDays: any = new Date(
      year,
      parseInt(moment().month(month).format("M"))
    );

    let setNewDate: any = new Date(
      setMonthForDays.getFullYear(),
      setMonthForDays.getMonth() - 1,
      1
    );
    this.setState({
      activeMonth: month,
      activeYear: year,
      startDate: setNewDate,
    });
  };

  onhandleChange = (e: any) => {
    if (e && e.itemData && e.itemData.text) {
      let setMonthForDays: any = new Date(
        e.itemData.text,
        this.state.activeMonth
      );

      let setNewDate: any = new Date(
        setMonthForDays.getFullYear(),
        setMonthForDays.getMonth() - 1,
        1
      );
      this.setState({
        activeYear: e.itemData.text,
        startDate: setNewDate,
      });
    }
  };

  handleDatePicker = (date: Date | any) => {
    let year: number = date.getFullYear();
    let month: number = date.getMonth();
    this.setState({ startDate: date, activeYear: year, activeMonth: month });
  };

  render() {
    return (
      <div className='app'>
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
              <AppSidebarNav navConfig={navigation} {...this.props} isOpen />
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

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
