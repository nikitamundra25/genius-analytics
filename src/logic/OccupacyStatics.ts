import { createLogic, Logic } from "redux-logic";
import {
  OccupacyStaticsActionTypes,
  OccupacyStaticsDataFailed,
  OccupacyStaticsDataSuccess,
  toggleOccupacyStaticsLoader,
} from "../actions";
import { ApiHelper } from "../helper";

const getOccupacyStaticsDataLogic = createLogic({
  type: OccupacyStaticsActionTypes.REQUETS_OCCUPACY_STATICS_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleOccupacyStaticsLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/OccupacyStatics.json",
      "GET"
    );
    if (isError) {
      dispatch(OccupacyStaticsDataFailed());
      done();
      return;
    }
    dispatch(
      OccupacyStaticsDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const OccupacyStaticsDataLogics: Logic[] = [getOccupacyStaticsDataLogic as Logic];
