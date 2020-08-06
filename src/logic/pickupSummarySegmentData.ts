import { createLogic, Logic } from "redux-logic";
import {
  pickupSummarySegmentDataActionTypes,
  pickupSummarySegmentDataDataFailed,
  pickupSummarySegmentDataDataSuccess,
  togglePickupSummarySegmentDataLoader,
} from "../actions";
import { ApiHelper } from "../helper";

const getpickupSummarySegmentLogic = createLogic({
  type:
    pickupSummarySegmentDataActionTypes.REQUETS_PICKUP_SUMMARY_SEGMENT_DATA_DATA,
  process: async ({ action }: any, dispatch: any, done) => {
    const { month } = action.payload;
    dispatch(
      togglePickupSummarySegmentDataLoader({
        isLoading: true,
      })
    );

    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Pickup",
      "/pickupSummarySegmentData.json",
      "GET"
    );
    if (isError) {
      dispatch(
        pickupSummarySegmentDataDataFailed({
          month,
        })
      );
      done();
      return;
    }
    dispatch(
      pickupSummarySegmentDataDataSuccess({
        data: data.data,
        isLoading: false,
        isError: false,
        month,
      })
    );
    done();
  },
});

export const PickupSummarySegmentLogics: Logic[] = [
  getpickupSummarySegmentLogic as Logic,
];
