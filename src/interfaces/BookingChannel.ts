export interface IBookingChannelModel {
  isLoading: boolean;
  data: any;
  isError: boolean;
  month?: string;
  totalRecords?: number
}

export interface IPickupSummaryModel {
  isLoading: boolean;
  tabOneState: any,
  tabTwoState: any,
  isError: boolean;
}