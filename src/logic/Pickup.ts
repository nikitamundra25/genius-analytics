import { createLogic } from "redux-logic";
import { toast } from "react-toastify";
import {
    PickupTypes,
  showLoader,
  hideLoader,
  PickupSummarySuccess,
  PickupSummaryFailed,
} from "../actions";
import { ApiHelper } from "../helper";

/**
 *
 */

let toastId: any = null;
// To get pickup list
const pickupListLogic = createLogic({
  type: PickupTypes.PICKUP_SUMMARY_REQUEST,
  async process(data, dispatch: any, done) {
    dispatch(showLoader());
    const response = await new ApiHelper().FetchFromLocalJSONFile(
      "Pickup/",
      "pickupSummary.json",
      "GET",
      undefined,
      undefined,
      undefined
    );
    if (response && !response.isError) {
      dispatch(hideLoader());

      dispatch(
        PickupSummarySuccess({
            pickupSummaryList: response.data.data,
        })
      );
      // dispatch(push("/dashboard"));
      done();
    } else {
      dispatch(hideLoader());
      console.log(response);
      if (!toast.isActive(toastId)) {
        console.log("fffffffffff");
        toastId = toast.error("Something went wrong! Please try again later");
      }
      dispatch(
        PickupSummaryFailed({
          error: true,
        })
      );
      done();
    }
  },
});




export const PickupLogics = [
  pickupListLogic,
];
