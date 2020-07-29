import { IDashboardMainModel } from "../interfaces";

export const DashboardMainState: IDashboardMainModel = {
  isLoading: true,
  isMonthlyLoading: true,
  isYearlyLoading: true,
  widgets: [],
  dashboardMainList: [],
  dashboardMonthlyList: [],
  dashboardYearlyList: [],
  isError: false,
  isMonthlyError: false,
  isYearlyError: false
};
