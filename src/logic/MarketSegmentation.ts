import { createLogic, Logic } from "redux-logic";
import {
  MarketSegmentationActionTypes,
  MarketSegmentationDataFailed,
  MarketSegmentationDataSuccess,
  toggleMarketSegmentationLoader,
} from "../actions";
import { ApiHelper } from "../helper";

const getMarketSegmentationDataLogic = createLogic({
  type: MarketSegmentationActionTypes.REQUETS_MARKET_SEGMENTATION_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleMarketSegmentationLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardMonthly",
      "/MarketSegmentation.json",
      "GET"
    );
    if (isError) {
      dispatch(MarketSegmentationDataFailed());
      done();
      return;
    }
    dispatch(
      MarketSegmentationDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const MarketSegmentationDataLogics: Logic[] = [getMarketSegmentationDataLogic as Logic];
