import { createLogic, Logic } from "redux-logic";
import {
  RoomTypeStaticsActionTypes,
  RoomTypeStaticsDataFailed,
  RoomTypeStaticsDataSuccess,
  toggleRoomTypeStaticsLoader,
} from "../actions";
import { ApiHelper } from "../helper";

const getRoomTypeStaticsDataLogic = createLogic({
  type: RoomTypeStaticsActionTypes.REQUETS_ROOM_TYPE_STATICS_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleRoomTypeStaticsLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/RoomTypeStatics.json",
      "GET"
    );
    if (isError) {
      dispatch(RoomTypeStaticsDataFailed());
      done();
      return;
    }
    dispatch(
      RoomTypeStaticsDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const RoomTypeStaticsDataLogics: Logic[] = [getRoomTypeStaticsDataLogic as Logic];
