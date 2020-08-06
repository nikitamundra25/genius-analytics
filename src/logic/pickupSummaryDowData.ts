import { createLogic, Logic } from "redux-logic";
import {
  pickupSummaryDowDataActionTypes,
  pickupSummaryDowDataDataFailed,
  pickupSummaryDowDataDataSuccess,
  togglePickupSummaryDowDataLoader,
} from "../actions";
import { ApiHelper } from "../helper";

const getpickupSummaryDowDataLogic = createLogic({
  type: pickupSummaryDowDataActionTypes.REQUETS_PICKUP_SUMMARY_DOWDATA_DATA,
  process: async ({ action }: any, dispatch: any, done) => {
    dispatch(
      togglePickupSummaryDowDataLoader({
        isLoading: true,
      })
    );

    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Pickup",
      "/pickupSummaryDowData.json",
      "GET"
    );
    if (isError) {
      dispatch(pickupSummaryDowDataDataFailed());
      done();
      return;
    }
    dispatch(
      pickupSummaryDowDataDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const PickupSummaryDowDataLogics: Logic[] = [
  getpickupSummaryDowDataLogic as Logic,
];
