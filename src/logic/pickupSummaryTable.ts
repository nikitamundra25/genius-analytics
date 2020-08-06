import { createLogic, Logic } from "redux-logic";
import {
  pickupSummaryTableActionTypes,
  pickupSummaryTableDataFailed,
  pickupSummaryTableDataSuccess,
  togglePickupSummaryTableLoader,
} from "../actions";
import { ApiHelper } from "../helper";

const getpickupSummaryTableLogic = createLogic({
  type: pickupSummaryTableActionTypes.REQUETS_PICKUP_SUMMARY_TABLE_DATA,
  process: async ({ action }: any, dispatch: any, done) => {
    const { month } = action.payload;
    dispatch(
      togglePickupSummaryTableLoader({
        isLoading: true,
      })
    );

    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Pickup",
      "/pickupSummaryTable.json",
      "GET"
    );
    if (isError) {
      dispatch(
        pickupSummaryTableDataFailed({
          month,
        })
      );
      done();
      return;
    }
    dispatch(
      pickupSummaryTableDataSuccess({
        data: data.data,
        isLoading: false,
        isError: false,
        month,
      })
    );
    done();
  },
});

export const PickupSummaryTableLogics: Logic[] = [
  getpickupSummaryTableLogic as Logic,
];
