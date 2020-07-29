import { createLogic, Logic } from "redux-logic";
import {
  LeadTimeYTDSegmentActionTypes,
  LeadTimeYTDSegmentDataFailed,
  LeadTimeYTDSegmentDataSuccess,
  toggleLeadTimeYTDSegmentLoader,
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

export const LeadTimeYTDSegmentDataLogics: Logic[] = [getLeadTimeYTDSegmentDataLogic as Logic];
