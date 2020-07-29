import { createLogic, Logic } from "redux-logic";
import {
  GeographicOriginActionTypes,
  GeographicOriginDataFailed,
  GeographicOriginDataSuccess,
  toggleGeographicOriginLoader,
} from "../actions";
import { ApiHelper } from "../helper";

const getGeographicOriginDataLogic = createLogic({
  type: GeographicOriginActionTypes.REQUETS_GEOGRAPHIC_ORIGIN_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleGeographicOriginLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/GeographicOriginOfBusiness.json",
      "GET"
    );
    if (isError) {
      dispatch(GeographicOriginDataFailed());
      done();
      return;
    }
    dispatch(
      GeographicOriginDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const GeographicOriginDataLogics: Logic[] = [getGeographicOriginDataLogic as Logic];
