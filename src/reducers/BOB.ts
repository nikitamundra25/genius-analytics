import { handleActions } from "redux-actions";
import { IBOBModel } from "../interfaces";
import { BOBInitialState } from "../states";
import { BOBActionTypes } from "../actions";

export const BOBReducer = handleActions<IBOBModel, IBOBModel>(
  {
    [BOBActionTypes.TOGGLE_BOB_LOADER]: (
      state = BOBInitialState,
      action
    ): IBOBModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [BOBActionTypes.BOB_DATA_FAILED]: (
      state = BOBInitialState,
      action
    ): IBOBModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [BOBActionTypes.BOB_DATA_SUCCESS]: (
      state = BOBInitialState,
      action
    ): IBOBModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),

    //  past 
    [BOBActionTypes.TOGGLE_BOB_PAST_LOADER]: (
      state = BOBInitialState,
      action
    ): IBOBModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [BOBActionTypes.BOB_DATA_PAST_FAILED]: (
      state = BOBInitialState,
      action
    ): IBOBModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [BOBActionTypes.BOB_DATA_PAST_SUCCESS]: (
      state = BOBInitialState,
      action
    ): IBOBModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),

    //  Future
    [BOBActionTypes.TOGGLE_BOB_FUTURE_LOADER]: (
      state = BOBInitialState,
      action
    ): IBOBModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [BOBActionTypes.BOB_DATA_FUTURE_FAILED]: (
      state = BOBInitialState,
      action
    ): IBOBModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [BOBActionTypes.BOB_DATA_FUTURE_SUCCESS]: (
      state = BOBInitialState,
      action
    ): IBOBModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  BOBInitialState
);
