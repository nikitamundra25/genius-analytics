import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { GeographicOriginInitialState } from "../states";
import { GeographicOriginActionTypes } from "../actions";

export const GeographicOriginReducer = handleActions<IBookingChannelModel, IBookingChannelModel>(
  {
    [GeographicOriginActionTypes.TOGGLE_GEOGRAPHIC_ORIGIN_LOADER]: (
      state = GeographicOriginInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [GeographicOriginActionTypes.GEOGRAPHIC_ORIGIN_DATA_FAILED]: (
      state = GeographicOriginInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [GeographicOriginActionTypes.GEOGRAPHIC_ORIGIN_DATA_SUCCESS]: (
      state = GeographicOriginInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  GeographicOriginInitialState
);
