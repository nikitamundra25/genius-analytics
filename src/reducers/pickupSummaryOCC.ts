import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { pickupSummaryOCCInitialState } from "../states";
import { pickupSummaryOCCDataActionTypes } from "../actions";

export const pickupSummaryOCCReducer = handleActions<
  IBookingChannelModel[],
  IBookingChannelModel
>(
  {
    [pickupSummaryOCCDataActionTypes.PICKUP_SUMMARY_OCCDATA_DATA_FAILED]: (
      state = pickupSummaryOCCInitialState,
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
    [pickupSummaryOCCDataActionTypes.PICKUP_SUMMARY_OCCDATA_DATA_SUCCESS]: (
      state = pickupSummaryOCCInitialState,
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
  pickupSummaryOCCInitialState
);
