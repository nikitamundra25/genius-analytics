import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { pickupSummaryTableInitialState } from "../states";
import { pickupSummaryTableActionTypes } from "../actions";

export const pickupSummaryTableReducer = handleActions<
  IBookingChannelModel[],
  IBookingChannelModel
>(
  {
    [pickupSummaryTableActionTypes.PICKUP_SUMMARY_TABLE_DATA_FAILED]: (
      state = pickupSummaryTableInitialState,
      action
    ): IBookingChannelModel[] => {
      const { month } = action.payload;
      const data: IBookingChannelModel[] = Object.assign([], state);
      const index = data.findIndex(
        (d: IBookingChannelModel) => d.month === month
      );
      if (index === -1) {
        data.push({
          month,
          isLoading: false,
          isError: true,
          data: [],
        });
      } else {
        data[index] = {
          month,
          isLoading: false,
          isError: true,
          data: [],
        };
      }
      return data;
    },
    [pickupSummaryTableActionTypes.PICKUP_SUMMARY_TABLE_DATA_SUCCESS]: (
      state = pickupSummaryTableInitialState,
      action
    ): IBookingChannelModel[] => {
      const { month } = action.payload;
      const data: IBookingChannelModel[] = Object.assign([], state);
      const index = data.findIndex(
        (d: IBookingChannelModel) => d.month === month
      );
      if (index === -1) {
        data.push(action.payload);
      } else {
        data[index] = action.payload;
      }
      return data;
    },
  },
  pickupSummaryTableInitialState
);
