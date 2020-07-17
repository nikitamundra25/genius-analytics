import { DashboardMainState } from './../states';
import { handleActions } from 'redux-actions';
import { IDashboardMainModel } from '../interfaces';
import { DashBoardTypes } from '../actions';

export const DashboardReducer = handleActions<any, any>(
  {
    //   Dashboard main list 
    [DashBoardTypes.DASHBOARD_MAIN_REQUEST]: (
      state = DashboardMainState,
      action,
    ): IDashboardMainModel => ({
      ...state,
      isLoading: true,
    }),
    [DashBoardTypes.DASHBOARD_MAIN_SUCCESS]: (
      state = DashboardMainState,
      action,
    ): IDashboardMainModel => ({
      ...state,
      isLoading: false,
      dashboardMainList: action.payload.dashboardMainList,
    }),
    [DashBoardTypes.DASHBOARD_MAIN_FAILURE]: (
      state = DashboardMainState,
      action,
    ): IDashboardMainModel => ({
      ...state,
      isLoading: false,
      error: action.payload.error,
    }),

    // Dashboard monthly list
    [DashBoardTypes.DASHBOARD_MONTHLY_REQUEST]: (
        state = DashboardMainState,
        action,
      ): IDashboardMainModel => ({
        ...state,
        isLoading: true,
      }),
      [DashBoardTypes.DASHBOARD_MONTHLY_SUCCESS]: (
        state = DashboardMainState,
        action,
      ): IDashboardMainModel => ({
        ...state,
        isLoading: false,
        dashboardMonthlyList: action.payload.dashboardMonthlyList,
      }),
      [DashBoardTypes.DASHBOARD_MONTHLY_FAILURE]: (
        state = DashboardMainState,
        action,
      ): IDashboardMainModel => ({
        ...state,
        isLoading: false,
        error: action.payload.error,
      }),

    //   Dashboard yearly list
    [DashBoardTypes.DASHBOARD_YEARLY_REQUEST]: (
        state = DashboardMainState,
        action,
      ): IDashboardMainModel => ({
        ...state,
        isLoading: true,
      }),
      [DashBoardTypes.DASHBOARD_YEARLY_SUCCESS]: (
        state = DashboardMainState,
        action,
      ): IDashboardMainModel => ({
        ...state,
        isLoading: false,
        dashboardYearlyList: action.payload.dashboardYearlyList,
      }),
      [DashBoardTypes.DASHBOARD_YEARLY_FAILURE]: (
        state = DashboardMainState,
        action,
      ): IDashboardMainModel => ({
        ...state,
        isLoading: false,
        error: action.payload.error,
      }),
  },
  DashboardMainState,
);
