import { createLogic, Logic } from "redux-logic";
import {
  pickupSummaryOCCDataActionTypes,
  pickupSummaryOCCDataDataFailed,
  pickupSummaryOCCDataDataSuccess,
  togglePickupSummaryOCCDataLoader,
} from "../actions";
import { ApiHelper } from "../helper";

const getpickupSummaryOCCLogic = createLogic({
  type: pickupSummaryOCCDataActionTypes.REQUETS_PICKUP_SUMMARY_OCCDATA_DATA,
  process: async ({ action }: any, dispatch: any, done) => {
    dispatch(
      togglePickupSummaryOCCDataLoader({
        isLoading: true,
      })
    );

    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Pickup",
      "/pickupSummaryOCC.json",
      "GET"
    );
    if (isError) {
      dispatch(pickupSummaryOCCDataDataFailed());
      done();
      return;
    }
    dispatch(
      pickupSummaryOCCDataDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const PickupSummaryOCCLogics: Logic[] = [
  getpickupSummaryOCCLogic as Logic,
];
