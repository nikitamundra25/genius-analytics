import { handleActions } from "redux-actions";
import { IDateSelectionModel } from "../interfaces";
import { DateSelectionInitialState } from "../states";
import { DateSelectionActionTypes } from "../actions";

export const DateSelectionReducer = handleActions<IDateSelectionModel, IDateSelectionModel|any>(
  {
    [DateSelectionActionTypes.REQUETS_DATE_SELECTION_DATA]: (
      state = DateSelectionInitialState,
      action
    ): IDateSelectionModel|any => ({
        ...state,
      selectedDate: action.payload,
      isChangedDate: true
    }),
  },
  DateSelectionInitialState
);
