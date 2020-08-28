import { createAction } from "redux-actions";

export enum DateSelectionActionTypes {
  REQUETS_DATE_SELECTION_DATA = "Request Date Selection Data"
}

export const requestDateSelectionData = createAction(DateSelectionActionTypes.REQUETS_DATE_SELECTION_DATA);

