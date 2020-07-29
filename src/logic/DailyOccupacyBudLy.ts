import { createLogic, Logic } from "redux-logic";
import {
  DailyOccupacyBudLyActionTypes,
  DailyOccupacyBudLyDataFailed,
  DailyOccupacyBudLyDataSuccess,
  toggleDailyOccupacyBudLyLoader,
} from "../actions";
import { ApiHelper } from "../helper";

const getDailyOccupacyBudLyDataLogic = createLogic({
  type: DailyOccupacyBudLyActionTypes.REQUETS_DAILY_OCCUPACY_BUD_LY_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleDailyOccupacyBudLyLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardMonthly",
      "/DailyOccupacyBudLy.json",
      "GET"
    );
    if (isError) {
      dispatch(DailyOccupacyBudLyDataFailed());
      done();
      return;
    }
    dispatch(
      DailyOccupacyBudLyDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const DailyOccupacyBudLyDataLogics: Logic[] = [getDailyOccupacyBudLyDataLogic as Logic];
