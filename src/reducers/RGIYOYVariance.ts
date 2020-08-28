import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { RGIYOYVarianceInitialState } from "../states";
import { RGIYOYVarianceActionTypes } from "../actions";

export const RGIYOYVarianceReducer = handleActions<IBookingChannelModel, IBookingChannelModel>(
  {
    [RGIYOYVarianceActionTypes.TOGGLE_RGI_YOY_VARIANCE_LOADER]: (
      state = RGIYOYVarianceInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [RGIYOYVarianceActionTypes.RGI_YOY_VARIANCE_DATA_FAILED]: (
      state = RGIYOYVarianceInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [RGIYOYVarianceActionTypes.RGI_YOY_VARIANCE_DATA_SUCCESS]: (
      state = RGIYOYVarianceInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),

    // PAST
    [RGIYOYVarianceActionTypes.TOGGLE_RGI_YOY_VARIANCE_PAST_LOADER]: (
      state = RGIYOYVarianceInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [RGIYOYVarianceActionTypes.RGI_YOY_VARIANCE_PAST_DATA_FAILED]: (
      state = RGIYOYVarianceInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [RGIYOYVarianceActionTypes.RGI_YOY_VARIANCE_PAST_DATA_SUCCESS]: (
      state = RGIYOYVarianceInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),

    // FUTURE
    [RGIYOYVarianceActionTypes.TOGGLE_RGI_YOY_VARIANCE_FUTURE_LOADER]: (
      state = RGIYOYVarianceInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [RGIYOYVarianceActionTypes.RGI_YOY_VARIANCE_FUTURE_DATA_FAILED]: (
      state = RGIYOYVarianceInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [RGIYOYVarianceActionTypes.RGI_YOY_VARIANCE_FUTURE_DATA_SUCCESS]: (
      state = RGIYOYVarianceInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  RGIYOYVarianceInitialState
);
