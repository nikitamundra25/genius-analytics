import { createAction } from "redux-actions";

export enum MarketSegmentationActionTypes {
  REQUETS_MARKET_SEGMENTATION_DATA = "Request Market Segmentation Data",
  TOGGLE_MARKET_SEGMENTATION_LOADER = "Toggle Market Segmentation loader",
  MARKET_SEGMENTATION_DATA_SUCCESS = "Requested Market Segmentation data fetched successfully",
  MARKET_SEGMENTATION_DATA_FAILED = "Requested Market Segmentation data fetching failed",
}

export const requestMarketSegmentationData = createAction(MarketSegmentationActionTypes.REQUETS_MARKET_SEGMENTATION_DATA);
export const toggleMarketSegmentationLoader = createAction(MarketSegmentationActionTypes.TOGGLE_MARKET_SEGMENTATION_LOADER);
export const MarketSegmentationDataSuccess = createAction(MarketSegmentationActionTypes.MARKET_SEGMENTATION_DATA_SUCCESS);
export const MarketSegmentationDataFailed = createAction(MarketSegmentationActionTypes.MARKET_SEGMENTATION_DATA_FAILED);
