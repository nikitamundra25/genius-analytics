import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { pickupSummaryDowDataInitialState } from "../states";
import { pickupSummaryDowDataActionTypes } from "../actions";

export const pickupSummaryDowDataReducer = handleActions<
  IBookingChannelModel[],
  IBookingChannelModel
>(
  {
    [pickupSummaryDowDataActionTypes.PICKUP_SUMMARY_DOWDATA_DATA_FAILED]: (
      state = pickupSummaryDowDataInitialState,
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
    [pickupSummaryDowDataActionTypes.PICKUP_SUMMARY_DOWDATA_DATA_SUCCESS]: (
      state = pickupSummaryDowDataInitialState,
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
  pickupSummaryDowDataInitialState
);
