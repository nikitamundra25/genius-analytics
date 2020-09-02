import { createLogic, Logic } from "redux-logic";
import {
  pickupMainSummaryActionTypes,
  pickupMainSummaryDataFailed,
  pickupMainSummaryDataSuccess,
  togglePickupMainSummaryLoader,
} from "../actions";
import { ApiHelper } from "../helper";

const getpickupMainSummaryLogic = createLogic({
  type: pickupMainSummaryActionTypes.REQUETS_PICKUP_MAIN_SUMMARY_DATA,
  process: async ({ action }: any, dispatch: any, done) => {
    dispatch(
      togglePickupMainSummaryLoader({
        isLoading: true,
      })
    );

    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Pickup",
      "/pickupMainSummary.json",
      "GET"
    );
    if (isError) {
      dispatch(pickupMainSummaryDataFailed());
      done();
      return;
    }
    dispatch(
      pickupMainSummaryDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const PickupMainSummaryLogics: Logic[] = [
    getpickupMainSummaryLogic as Logic,
];
