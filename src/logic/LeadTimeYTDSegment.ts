import { createLogic, Logic } from "redux-logic";
import {
  LeadTimeYTDSegmentActionTypes,
  LeadTimeYTDSegmentDataFailed,
  LeadTimeYTDSegmentDataSuccess,
  toggleLeadTimeYTDSegmentLoader,
  toggleLeadTimeYTDSegmentPastLoader,
  LeadTimeYTDSegmentPastDataFailed,
  LeadTimeYTDSegmentPastDataSuccess,
  toggleLeadTimeYTDSegmentFutureLoader,
  LeadTimeYTDSegmentFutureDataFailed,
  LeadTimeYTDSegmentFutureDataSuccess,
} from "../actions";
import { ApiHelper } from "../helper";

const getLeadTimeYTDSegmentDataLogic = createLogic({
  type: LeadTimeYTDSegmentActionTypes.REQUETS_KEY_LEAD_TIMES_SEGMENT_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleLeadTimeYTDSegmentLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardYearly",
      "/LeadTimeYTDSegment.json",
      "GET"
    );
    if (isError) {
      dispatch(LeadTimeYTDSegmentDataFailed());
      done();
      return;
    }
    dispatch(
      LeadTimeYTDSegmentDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

// past
const getLeadTimeYTDSegmentDataPastLogic = createLogic({
  type: LeadTimeYTDSegmentActionTypes.REQUETS_KEY_LEAD_TIMES_SEGMENT_PAST_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleLeadTimeYTDSegmentPastLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardYearly",
      "/pastLeadTimeYTDSegment.json",
      "GET"
    );
    if (isError) {
      dispatch(LeadTimeYTDSegmentPastDataFailed());
      done();
      return;
    }
    dispatch(
      LeadTimeYTDSegmentPastDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

// future
const getLeadTimeYTDSegmentDataFutureLogic = createLogic({
  type: LeadTimeYTDSegmentActionTypes.REQUETS_KEY_LEAD_TIMES_SEGMENT_FUTURE_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleLeadTimeYTDSegmentFutureLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardYearly",
      "/futureLeadTimeYTDSegment.json",
      "GET"
    );
    if (isError) {
      dispatch(LeadTimeYTDSegmentFutureDataFailed());
      done();
      return;
    }
    dispatch(
      LeadTimeYTDSegmentFutureDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const LeadTimeYTDSegmentDataLogics: Logic[] = [getLeadTimeYTDSegmentDataLogic as Logic, getLeadTimeYTDSegmentDataPastLogic as Logic, getLeadTimeYTDSegmentDataFutureLogic as Logic];
