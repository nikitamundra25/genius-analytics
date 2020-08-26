import { createLogic, Logic } from "redux-logic";
import {
  RoomNightsActionTypes,
  RoomNightsDataFailed,
  RoomNightsDataSuccess,
  toggleRoomNightsLoader,
  RoomNightsPastDataFailed,
  RoomNightsPastDataSuccess,
  RoomNightsFutureDataFailed,
  RoomNightsFutureDataSuccess,
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

//  past 
const getRoomNightsPastDataLogic = createLogic({
  type: RoomNightsActionTypes.REQUETS_ROOM_NIGHTS_PAST_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleRoomNightsLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/pastRoomNights.json",
      "GET"
    );
    if (isError) {
      dispatch(RoomNightsPastDataFailed());
      done();
      return;
    }
    dispatch(
      RoomNightsPastDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

//  Future
const getRoomNightsFutureDataLogic = createLogic({
  type: RoomNightsActionTypes.REQUETS_ROOM_NIGHTS_FUTURE_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleRoomNightsLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/futureRoomNights.json",
      "GET"
    );
    if (isError) {
      dispatch(RoomNightsFutureDataFailed());
      done();
      return;
    }
    dispatch(
      RoomNightsFutureDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const RoomNightsDataLogics: Logic[] = [getRoomNightsDataLogic as Logic, getRoomNightsPastDataLogic as Logic, getRoomNightsFutureDataLogic as Logic];
