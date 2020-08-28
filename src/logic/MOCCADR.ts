import { createLogic, Logic } from "redux-logic";
import {
  MOCCADRActionTypes,
  MOCCADRDataFailed,
  MOCCADRDataSuccess,
  toggleMOCCADRLoader,
  toggleMOCCADRPastLoader,
  MOCCADRPastDataFailed,
  MOCCADRPastDataSuccess,
  toggleMOCCADRFutureLoader,
  MOCCADRFutureDataFailed,
  MOCCADRFutureDataSuccess,
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

// past
const getMOCCADRDataPastLogic = createLogic({
  type: MOCCADRActionTypes.REQUETS_MOCCADR_PAST_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleMOCCADRPastLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardYearly",
      "/pastMOCCADR.json",
      "GET"
    );
    if (isError) {
      dispatch(MOCCADRPastDataFailed());
      done();
      return;
    }
    dispatch(
      MOCCADRPastDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});


// future
const getMOCCADRDataFutureLogic = createLogic({
  type: MOCCADRActionTypes.REQUETS_MOCCADR_FUTURE_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleMOCCADRFutureLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardYearly",
      "/futureMOCCADR.json",
      "GET"
    );
    if (isError) {
      dispatch(MOCCADRFutureDataFailed());
      done();
      return;
    }
    dispatch(
      MOCCADRFutureDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});


export const MOCCADRDataLogics: Logic[] = [getMOCCADRDataLogic as Logic, getMOCCADRDataPastLogic as Logic, getMOCCADRDataFutureLogic as Logic];
