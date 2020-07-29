import { createLogic, Logic } from "redux-logic";
import {
  KeyLeadTimesYTDActionTypes,
  KeyLeadTimesYTDDataFailed,
  KeyLeadTimesYTDDataSuccess,
  toggleKeyLeadTimesYTDLoader,
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

export const LeadTimesYTDDataLogics: Logic[] = [getLeadTimesYTDDataLogic as Logic];
