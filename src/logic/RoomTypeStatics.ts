import { createLogic, Logic } from "redux-logic";
import {
  RoomTypeStaticsActionTypes,
  RoomTypeStaticsDataFailed,
  RoomTypeStaticsDataSuccess,
  toggleRoomTypeStaticsLoader,
  toggleRoomTypeStaticsPastLoader,
  RoomTypeStaticsPastDataFailed,
  RoomTypeStaticsPastDataSuccess,
  toggleRoomTypeStaticsFutureLoader,
  RoomTypeStaticsFutureDataFailed,
  RoomTypeStaticsFutureDataSuccess,
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

// past 
const getRoomTypeStaticsPastDataLogic = createLogic({
  type: RoomTypeStaticsActionTypes.REQUETS_ROOM_TYPE_STATICS_PAST_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleRoomTypeStaticsPastLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/pastRoomTypeStatics.json",
      "GET"
    );
    if (isError) {
      dispatch(RoomTypeStaticsPastDataFailed());
      done();
      return;
    }
    dispatch(
      RoomTypeStaticsPastDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

// future
const getRoomTypeStaticsFutureDataLogic = createLogic({
  type: RoomTypeStaticsActionTypes.REQUETS_ROOM_TYPE_STATICS_FUTURE_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleRoomTypeStaticsFutureLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/futureRoomTypeStatics.json",
      "GET"
    );
    if (isError) {
      dispatch(RoomTypeStaticsFutureDataFailed());
      done();
      return;
    }
    dispatch(
      RoomTypeStaticsFutureDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});
export const RoomTypeStaticsDataLogics: Logic[] = [getRoomTypeStaticsDataLogic as Logic, getRoomTypeStaticsPastDataLogic as Logic, getRoomTypeStaticsFutureDataLogic as Logic];
