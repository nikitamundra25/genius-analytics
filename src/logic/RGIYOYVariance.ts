import { createLogic, Logic } from "redux-logic";
import {
  RGIYOYVarianceActionTypes,
  RGIYOYVarianceDataFailed,
  RGIYOYVarianceDataSuccess,
  toggleRGIYOYVarianceLoader,
} from "../actions";
import { ApiHelper } from "../helper";

const getRGIYOYVarianceDataLogic = createLogic({
  type: RGIYOYVarianceActionTypes.REQUETS_RGI_YOY_VARIANCE_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleRGIYOYVarianceLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/RGIYOYVariance.json",
      "GET"
    );
    if (isError) {
      dispatch(RGIYOYVarianceDataFailed());
      done();
      return;
    }
    dispatch(
      RGIYOYVarianceDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const RGIYOYVarianceDataLogics: Logic[] = [getRGIYOYVarianceDataLogic as Logic];
