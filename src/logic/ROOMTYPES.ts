import { createLogic, Logic } from "redux-logic";
import {
  ROOMTYPESActionTypes,
  ROOMTYPESDataFailed,
  ROOMTYPESDataSuccess,
  toggleROOMTYPESLoader,
} from "../actions";
import { ApiHelper } from "../helper";

const getROOMTYPESDataLogic = createLogic({
  type: ROOMTYPESActionTypes.REQUETS_ROOMTYPES_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleROOMTYPESLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardYearly",
      "/ROOMTYPES.json",
      "GET"
    );
    if (isError) {
      dispatch(ROOMTYPESDataFailed());
      done();
      return;
    }
    dispatch(
      ROOMTYPESDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const ROOMTYPESDataLogics: Logic[] = [getROOMTYPESDataLogic as Logic];
