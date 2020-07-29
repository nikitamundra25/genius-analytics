import { createLogic, Logic } from "redux-logic";
import {
  MOCCADRActionTypes,
  MOCCADRDataFailed,
  MOCCADRDataSuccess,
  toggleMOCCADRLoader,
} from "../actions";
import { ApiHelper } from "../helper";

const getMOCCADRDataLogic = createLogic({
  type: MOCCADRActionTypes.REQUETS_MOCCADR_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleMOCCADRLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardYearly",
      "/MOCCADR.json",
      "GET"
    );
    if (isError) {
      dispatch(MOCCADRDataFailed());
      done();
      return;
    }
    dispatch(
      MOCCADRDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const MOCCADRDataLogics: Logic[] = [getMOCCADRDataLogic as Logic];
