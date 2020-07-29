import { createLogic, Logic } from "redux-logic";
import {
  QOCCADRActionTypes,
  QOCCADRDataFailed,
  QOCCADRDataSuccess,
  toggleQOCCADRLoader,
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

export const QOCCADRDataLogics: Logic[] = [getQOCCADRDataLogic as Logic];
