import { createLogic, Logic } from "redux-logic";
import {
  KeyLeadTimesYTDActionTypes,
  KeyLeadTimesYTDDataFailed,
  KeyLeadTimesYTDDataSuccess,
  toggleKeyLeadTimesYTDLoader,
  toggleKeyLeadTimesYTDPastLoader,
  KeyLeadTimesYTDPastDataFailed,
  KeyLeadTimesYTDPastDataSuccess,
  toggleKeyLeadTimesYTDFutureLoader,
  KeyLeadTimesYTDFutureDataFailed,
  KeyLeadTimesYTDFutureDataSuccess,
} from "../actions";
import { ApiHelper } from "../helper";

const getLeadTimesYTDDataLogic = createLogic({
  type: KeyLeadTimesYTDActionTypes.REQUETS_KEY_LEAD_TIMES_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleKeyLeadTimesYTDLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardYearly",
      "/LeadTimesYTD.json",
      "GET"
    );
    if (isError) {
      dispatch(KeyLeadTimesYTDDataFailed());
      done();
      return;
    }
    dispatch(
      KeyLeadTimesYTDDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

// past
const getLeadTimesYTDDataPastLogic = createLogic({
  type: KeyLeadTimesYTDActionTypes.REQUETS_KEY_LEAD_TIMES_PAST_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleKeyLeadTimesYTDPastLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardYearly",
      "/pastLeadTimesYTD.json",
      "GET"
    );
    if (isError) {
      dispatch(KeyLeadTimesYTDPastDataFailed());
      done();
      return;
    }
    dispatch(
      KeyLeadTimesYTDPastDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

// future
const getLeadTimesYTDDataFutureLogic = createLogic({
  type: KeyLeadTimesYTDActionTypes.REQUETS_KEY_LEAD_TIMES_FUTURE_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleKeyLeadTimesYTDFutureLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardYearly",
      "/futureLeadTimesYTD.json",
      "GET"
    );
    if (isError) {
      dispatch(KeyLeadTimesYTDFutureDataFailed());
      done();
      return;
    }
    dispatch(
      KeyLeadTimesYTDFutureDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const LeadTimesYTDDataLogics: Logic[] = [getLeadTimesYTDDataLogic as Logic, getLeadTimesYTDDataPastLogic as Logic, getLeadTimesYTDDataFutureLogic as Logic ];
