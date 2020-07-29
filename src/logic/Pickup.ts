import { createLogic } from "redux-logic";
import { toast } from "react-toastify";
import {
    PickupTypes,
  showLoader,
  hideLoader,
  PickupSummarySuccess,
  PickupSummaryFailed,
  PickupDetailSuccess,
  PickupDetailFailed,
  TogglePickupSummaryLoader,
  TogglePickupDetailLoader,
} from "../actions";
import { ApiHelper } from "../helper";

/**
 *
 */

let toastId: any = null;
// To get pickup summary list

const pickupListLogic = createLogic({
  type: PickupTypes.PICKUP_SUMMARY_REQUEST,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
      TogglePickupSummaryLoader({
        isLoading: true,
      })
    );
    const {
      isError,
      data,
      
    } = await new ApiHelper().FetchFromLocalJSONFile(
      "Pickup",
      "/pickupSummaryWidget.json",
      "GET"
    );
    if (isError) {
      dispatch(PickupSummaryFailed({}));
      done();
      return;
    }
    dispatch(
      PickupSummarySuccess({
        pickupSummaryList: data,
      })
    );
    done();
  },
});


// To get pickup detail list

const pickupDetailListLogic = createLogic({
  type: PickupTypes.PICKUP_DETAIL_REQUEST,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
      TogglePickupDetailLoader({
        isLoading: true,
      })
    );
    const {
      isError,
      data,
      
    } = await new ApiHelper().FetchFromLocalJSONFile(
      "Pickup",
      "/pickupSummaryWidget.json",
      "GET"
    );
    if (isError) {
      dispatch(PickupDetailFailed({}));
      done();
      return;
    }
    dispatch(
      PickupDetailSuccess({
        pickupDetailList: data,
      })
    );
    done();
  },
});



export const PickupLogics = [
  pickupListLogic,
  pickupDetailListLogic
];
