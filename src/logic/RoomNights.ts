import { createLogic, Logic } from "redux-logic";
import {
  RoomNightsActionTypes,
  RoomNightsDataFailed,
  RoomNightsDataSuccess,
  toggleRoomNightsLoader,
} from "../actions";
import { ApiHelper } from "../helper";

const getRoomNightsDataLogic = createLogic({
  type: RoomNightsActionTypes.REQUETS_ROOM_NIGHTS_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleRoomNightsLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/RoomNights.json",
      "GET"
    );
    if (isError) {
      dispatch(RoomNightsDataFailed());
      done();
      return;
    }
    dispatch(
      RoomNightsDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const RoomNightsDataLogics: Logic[] = [getRoomNightsDataLogic as Logic];
