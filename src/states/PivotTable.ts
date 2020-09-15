import { IBookingChannelModel } from "../interfaces";

export const pivotTableInitialState: IBookingChannelModel = {
  isLoading: true,
  isError: false,
  totalRecords: 0,
  data: [],
};
