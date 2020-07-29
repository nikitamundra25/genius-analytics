export interface IWidget {
  name: string;
  id: number;
}
export interface IDashboardMainModel {
  isLoading: boolean;
  isMonthlyLoading?: boolean;
  isYearlyLoading?: boolean;
  widgets: IWidget[];
  dashboardMainList: Object[] | any;
  dashboardMonthlyList: Object[] | any;
  dashboardYearlyList: Object[] | any;
  isError: boolean;
  isMonthlyError?: boolean;
  isYearlyError?: boolean;
}
