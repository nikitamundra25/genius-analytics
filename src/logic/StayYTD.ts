import { createLogic, Logic } from "redux-logic";
import {
  StayYTDActionTypes,
  StayYTDDataFailed,
  StayYTDDataSuccess,
  toggleStayYTDLoader,
} from "../actions";
import { ApiHelper } from "../helper";

const getStayYTDDataLogic = createLogic({
  type: StayYTDActionTypes.REQUETS_STAY_YTD_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleStayYTDLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardYearly",
      "/StayYTD.json",
      "GET"
    );
    if (isError) {
      dispatch(StayYTDDataFailed());
      done();
      return;
    }
    dispatch(
      StayYTDDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const StayYTDDataLogics: Logic[] = [getStayYTDDataLogic as Logic];
