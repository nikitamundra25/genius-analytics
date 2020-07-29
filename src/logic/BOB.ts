import { createLogic, Logic } from "redux-logic";
import {
  BOBActionTypes,
  BOBDataFailed,
  BOBDataSuccess,
  toggleBOBLoader,
} from "../actions";
import { ApiHelper } from "../helper";

const getBoBDataLogic = createLogic({
  type: BOBActionTypes.REQUETS_BOB_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
      toggleBOBLoader({
        isLoading: true,
      })
    );
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/BOBData.json",
      "GET"
    );
    if (isError) {
      dispatch(BOBDataFailed());
      done();
      return;
    }
    dispatch(
      BOBDataSuccess({
        data: data,
      })
    );
    done();
  },
});

export const BOBDataLogics: Logic[] = [getBoBDataLogic as Logic];
