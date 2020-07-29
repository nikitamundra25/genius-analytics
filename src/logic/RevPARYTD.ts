import { createLogic, Logic } from "redux-logic";
import {
  RevPARYTDActionTypes,
  RevPARYTDDataFailed,
  RevPARYTDDataSuccess,
  toggleRevPARYTDLoader,
} from "../actions";
import { ApiHelper } from "../helper";

const getRevPARYTDLogic = createLogic({
  type: RevPARYTDActionTypes.REQUETS_REV_PARYTD_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleRevPARYTDLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardYearly",
      "/RevPARYTD.json",
      "GET"
    );
    if (isError) {
      dispatch(RevPARYTDDataFailed());
      done();
      return;
    }
    dispatch(
        RevPARYTDDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const RevPARYTDLogics: Logic[] = [getRevPARYTDLogic as Logic];
