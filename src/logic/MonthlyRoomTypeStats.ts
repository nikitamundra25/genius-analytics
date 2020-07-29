import { createLogic, Logic } from "redux-logic";
import {
  MonthlyRoomTypeStaticsActionTypes,
  MonthlyRoomTypeStaticsDataFailed,
  MonthlyRoomTypeStaticsDataSuccess,
  toggleMonthlyRoomTypeStaticsLoader,
} from "../actions";
import { ApiHelper } from "../helper";

const getMonthlyRoomTypeStatsDataLogic = createLogic({
  type: MonthlyRoomTypeStaticsActionTypes.REQUETS_MONTHLY_ROOM_TYPE_STATICS_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleMonthlyRoomTypeStaticsLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/RoomTypeStatics.json",
      "GET"
    );
    if (isError) {
      dispatch(MonthlyRoomTypeStaticsDataFailed());
      done();
      return;
    }
    dispatch(
      MonthlyRoomTypeStaticsDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const MonthlyRoomTypeStatsDataLogics: Logic[] = [getMonthlyRoomTypeStatsDataLogic as Logic];
