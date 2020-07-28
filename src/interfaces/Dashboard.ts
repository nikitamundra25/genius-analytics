export interface IWidget {
  name: string;
  id: number;
}
export interface IDashboardMainModel {
  isLoading: boolean;
  widgets: IWidget[];
  dashboardMainList: Object[] | any;
  dashboardMonthlyList: Object[] | any;
  dashboardYearlyList: Object[] | any;
  isError: boolean;
}
