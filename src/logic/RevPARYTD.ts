import { createLogic, Logic } from "redux-logic";
import {
  RevPARYTDActionTypes,
  RevPARYTDDataFailed,
  RevPARYTDDataSuccess,
  toggleRevPARYTDLoader,
  toggleRevPARYTDPastLoader,
  RevPARYTDPastDataFailed,
  RevPARYTDPastDataSuccess,
  toggleRevPARYTDFutureLoader,
  RevPARYTDFutureDataFailed,
  RevPARYTDFutureDataSuccess,
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

// past
const getRevPARYTDPastLogic = createLogic({
  type: RevPARYTDActionTypes.REQUETS_REV_PARYTD_PAST_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleRevPARYTDPastLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardYearly",
      "/pastRevPARYTD.json",
      "GET"
    );
    if (isError) {
      dispatch(RevPARYTDPastDataFailed());
      done();
      return;
    }
    dispatch(
        RevPARYTDPastDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

// future
const getRevPARYTDFutureLogic = createLogic({
  type: RevPARYTDActionTypes.REQUETS_REV_PARYTD_FUTURE_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleRevPARYTDFutureLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardYearly",
      "/futureRevPARYTD.json",
      "GET"
    );
    if (isError) {
      dispatch(RevPARYTDFutureDataFailed());
      done();
      return;
    }
    dispatch(
        RevPARYTDFutureDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const RevPARYTDLogics: Logic[] = [getRevPARYTDLogic as Logic, getRevPARYTDPastLogic as Logic, getRevPARYTDFutureLogic as Logic];
