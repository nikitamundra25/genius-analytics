import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { pickupSummarySegmentInitialState } from "../states";
import { pickupSummarySegmentDataActionTypes } from "../actions";

export const pickupSummarySegmentReducer = handleActions<
  IBookingChannelModel[],
  IBookingChannelModel
>(
  {
    [pickupSummarySegmentDataActionTypes.PICKUP_SUMMARY_SEGMENT_DATA_DATA_FAILED]: (
      state = pickupSummarySegmentInitialState,
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
    [pickupSummarySegmentDataActionTypes.PICKUP_SUMMARY_SEGMENT_DATA_DATA_SUCCESS]: (
      state = pickupSummarySegmentInitialState,
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
  pickupSummarySegmentInitialState
);
