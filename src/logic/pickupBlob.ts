import { createLogic, Logic } from "redux-logic";
import {
    PickupBlobActionTypes,
  PickupBlobDataFailed,
  PickupBlobDataSuccess,
  togglePickupBlobLoader,
  togglePickupBlobFutureLoader,
  PickupBlobFutureDataFailed,
  PickupBlobFutureDataSuccess,
  togglePickupBlobPastLoader,
  PickupBlobPastDataFailed,
  PickupBlobPastDataSuccess,
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


const getPickupBlobFutureLogic = createLogic({
  type: PickupBlobActionTypes.REQUETS_PICKUP_BLOB_FUTURE_DATA,
  process: async ({ action }:any, dispatch: any, done) => {
    dispatch(
      togglePickupBlobFutureLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Pickup",
      "/pickupBlobFuture.json",
      "GET"
    );
    if (isError) {
      dispatch(PickupBlobFutureDataFailed());
      done();
      return;
    }
    dispatch(
      PickupBlobFutureDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});
//  pickupBlobPast

const getPickupBlobPastLogic = createLogic({
  type: PickupBlobActionTypes.REQUETS_PICKUP_BLOB_PAST_DATA,
  process: async ({ action }:any, dispatch: any, done) => {
    dispatch(
      togglePickupBlobPastLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Pickup",
      "/pickupBlobPast.json",
      "GET"
    );
    if (isError) {
      dispatch(PickupBlobPastDataFailed());
      done();
      return;
    }
    dispatch(
      PickupBlobPastDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});
export const PickupBlobLogics: Logic[] = [getPickupBlobLogic as Logic, getPickupBlobFutureLogic as Logic , getPickupBlobPastLogic as Logic];
