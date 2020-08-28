import { createLogic, Logic } from "redux-logic";
import {
  QOCCADRActionTypes,
  QOCCADRDataFailed,
  QOCCADRDataSuccess,
  toggleQOCCADRLoader,
  toggleQOCCADRPastLoader,
  QOCCADRPastDataFailed,
  QOCCADRPastDataSuccess,
  toggleQOCCADRFutureLoader,
  QOCCADRFutureDataFailed,
  QOCCADRFutureDataSuccess,
} from "../actions";
import { ApiHelper } from "../helper";

const getQOCCADRDataLogic = createLogic({
  type: QOCCADRActionTypes.REQUETS_QOCCADR_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleQOCCADRLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardYearly",
      "/QOCCADR.json",
      "GET"
    );
    if (isError) {
      dispatch(QOCCADRDataFailed());
      done();
      return;
    }
    dispatch(
      QOCCADRDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

// past
const getQOCCADRDataPastLogic = createLogic({
  type: QOCCADRActionTypes.REQUETS_QOCCADR_PAST_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleQOCCADRPastLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardYearly",
      "/pastQOCCADR.json",
      "GET"
    );
    if (isError) {
      dispatch(QOCCADRPastDataFailed());
      done();
      return;
    }
    dispatch(
      QOCCADRPastDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});


// future
const getQOCCADRDataFutureLogic = createLogic({
  type: QOCCADRActionTypes.REQUETS_QOCCADR_FUTURE_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleQOCCADRFutureLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardYearly",
      "/futureQOCCADR.json",
      "GET"
    );
    if (isError) {
      dispatch(QOCCADRFutureDataFailed());
      done();
      return;
    }
    dispatch(
      QOCCADRFutureDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const QOCCADRDataLogics: Logic[] = [getQOCCADRDataLogic as Logic, getQOCCADRDataPastLogic as Logic, getQOCCADRDataFutureLogic as Logic];
