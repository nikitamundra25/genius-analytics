import { createLogic, Logic } from "redux-logic";
import {
  GeographicOriginActionTypes,
  GeographicOriginDataFailed,
  GeographicOriginDataSuccess,
  toggleGeographicOriginLoader,
  toggleGeographicOriginFutureLoader,
  GeographicOriginFutureDataFailed,
  GeographicOriginFutureDataSuccess,
  toggleGeographicOriginPastLoader,
  GeographicOriginPastDataFailed,
  GeographicOriginPastDataSuccess,
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

// past 
const getGeographicOriginDataPastLogic = createLogic({
  type: GeographicOriginActionTypes.REQUETS_GEOGRAPHIC_ORIGIN_PAST_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
      toggleGeographicOriginPastLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/pastGeographicOriginOfBusiness.json",
      "GET"
    );
    if (isError) {
      dispatch(GeographicOriginPastDataFailed());
      done();
      return;
    }
    dispatch(
      GeographicOriginPastDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

// future
const getGeographicOriginDataFutureLogic = createLogic({
  type: GeographicOriginActionTypes.REQUETS_GEOGRAPHIC_ORIGIN_FUTURE_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
      toggleGeographicOriginFutureLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/futureGeographicOriginOfBusiness.json",
      "GET"
    );
    if (isError) {
      dispatch(GeographicOriginFutureDataFailed());
      done();
      return;
    }
    dispatch(
      GeographicOriginFutureDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});
export const GeographicOriginDataLogics: Logic[] = [getGeographicOriginDataLogic as Logic, getGeographicOriginDataPastLogic as Logic, getGeographicOriginDataFutureLogic as Logic];
