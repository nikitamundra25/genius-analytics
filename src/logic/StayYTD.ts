import { createLogic, Logic } from "redux-logic";
import {
  StayYTDActionTypes,
  StayYTDDataFailed,
  StayYTDDataSuccess,
  toggleStayYTDLoader,
  toggleStayYTDPastLoader,
  StayYTDPastDataFailed,
  StayYTDPastDataSuccess,
  toggleStayYTDFutureLoader,
  StayYTDFutureDataFailed,
  StayYTDFutureDataSuccess,
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

// past
const getStayYTDDataPastLogic = createLogic({
  type: StayYTDActionTypes.REQUETS_STAY_YTD_PAST_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleStayYTDPastLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardYearly",
      "/pastStayYTD.json",
      "GET"
    );
    if (isError) {
      dispatch(StayYTDPastDataFailed());
      done();
      return;
    }
    dispatch(
      StayYTDPastDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

// future
const getStayYTDDataFutureLogic = createLogic({
  type: StayYTDActionTypes.REQUETS_STAY_YTD_FUTURE_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleStayYTDFutureLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardYearly",
      "/futureStayYTD.json",
      "GET"
    );
    if (isError) {
      dispatch(StayYTDFutureDataFailed());
      done();
      return;
    }
    dispatch(
      StayYTDFutureDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});
export const StayYTDDataLogics: Logic[] = [getStayYTDDataLogic as Logic, getStayYTDDataPastLogic as Logic,getStayYTDDataFutureLogic as Logic ];
