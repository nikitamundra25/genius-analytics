import { createLogic, Logic } from "redux-logic";
import {
    PickupDetailTableActionTypes,
  PickupDetailTableDataFailed,
  PickupDetailTableDataSuccess,
  togglePickupDetailTableLoader,
} from "../actions";
import { ApiHelper } from "../helper";

const getPickupDetailTableLogic = createLogic({
  type: PickupDetailTableActionTypes.REQUETS_PICKUP_DETAIL_TABLE,
  process: async ({ action }:any, dispatch: any, done) => {
    dispatch(
        togglePickupDetailTableLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Pickup",
      "/PickupDetailTable.json",
      "GET"
    );
    if (isError) {
      dispatch(PickupDetailTableDataFailed());
      done();
      return;
    }
    dispatch(
      PickupDetailTableDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const PickupDetailTableLogics: Logic[] = [getPickupDetailTableLogic as Logic];
