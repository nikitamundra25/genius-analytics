import { createLogic, Logic } from "redux-logic";
import {
  ROOMTYPESActionTypes,
  ROOMTYPESDataFailed,
  ROOMTYPESDataSuccess,
  toggleROOMTYPESLoader,
  toggleROOMTYPESPastLoader,
  ROOMTYPESPastDataFailed,
  ROOMTYPESPastDataSuccess,
  toggleROOMTYPESFutureLoader,
  ROOMTYPESFutureDataFailed,
  ROOMTYPESFutureDataSuccess,
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

// past
const getROOMTYPESDataPastLogic = createLogic({
  type: ROOMTYPESActionTypes.REQUETS_ROOMTYPES_PAST_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleROOMTYPESPastLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardYearly",
      "/pastROOMTYPES.json",
      "GET"
    );
    if (isError) {
      dispatch(ROOMTYPESPastDataFailed());
      done();
      return;
    }
    dispatch(
      ROOMTYPESPastDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});


// future
const getROOMTYPESDataFutureLogic = createLogic({
  type: ROOMTYPESActionTypes.REQUETS_ROOMTYPES_FUTURE_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleROOMTYPESFutureLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardYearly",
      "/futureROOMTYPES.json",
      "GET"
    );
    if (isError) {
      dispatch(ROOMTYPESFutureDataFailed());
      done();
      return;
    }
    dispatch(
      ROOMTYPESFutureDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const ROOMTYPESDataLogics: Logic[] = [getROOMTYPESDataLogic as Logic, getROOMTYPESDataPastLogic as Logic, getROOMTYPESDataFutureLogic as Logic];
