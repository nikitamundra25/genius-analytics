import { createLogic, Logic } from "redux-logic";
import {
    PickupBlobActionTypes,
  PickupBlobDataFailed,
  PickupBlobDataSuccess,
  togglePickupBlobLoader,
} from "../actions";
import { ApiHelper } from "../helper";

const getPickupBlobLogic = createLogic({
  type: PickupBlobActionTypes.REQUETS_PICKUP_BLOB,
  process: async ({ action }:any, dispatch: any, done) => {
    dispatch(
        togglePickupBlobLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Pickup",
      "/pickupBlob.json",
      "GET"
    );
    if (isError) {
      dispatch(PickupBlobDataFailed());
      done();
      return;
    }
    dispatch(
      PickupBlobDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const PickupBlobLogics: Logic[] = [getPickupBlobLogic as Logic];
