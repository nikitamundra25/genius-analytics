import { IRootState } from "./../interfaces";
import { Reducer, AnyAction, combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { DashboardReducer } from "./Dashboard";
import { PickupReducer } from "./Pickup";
import { BOBReducer } from "./BOB";
import { BookingChannelReducer } from "./BookingChannel";
import { BusinessMixReducer } from "./BusinessMix";
import { GeographicOriginReducer } from "./GeographicOriginOfBusiness";
import { KeyBusinessMetricsReducer } from "./KeyBusinessMetrics";
import { MTRDRGIPerformanceReducer } from "./MTDRGIPerformance";
import { OccupacyStaticsReducer } from "./OccupacyStatics";
import { RGIYOYVarianceReducer } from "./RGIYOYVariance";
import { RoomNightsReducer } from "./RoomNights";
import { RoomTypeStaticsReducer } from "./RoomTypeStatics";
import { BookingChannelMonthlyReducer } from "./BookingChannelMonthly";
import { DailyOccupacyBudLyReducer } from "./DailyOccupacyBudLy";
import { MarketSegmentationReducer } from "./MarketSegmentation";
import { MonthlyDailyOccupacyReducer } from "./MonthlyDailyOccupacy";
import { MonthlyRoomTypeStatsReducer } from "./MonthlyRoomTypeStats";
import { RateCodeStatisticsReducer } from "./RateCodeStatistics";

export const mainReducer = handleActions(
  {
    SHOW_LOADER: () => ({
      showLoader: true,
    }),
    HIDE_LOADER: () => ({
      showLoader: false,
    }),
  },
  {
    showLoader: false,
  }
);

export const RootReducer: Reducer<IRootState, AnyAction> = combineReducers<
  IRootState
>({
  mainReducer: mainReducer as any,
  DashboardReducer: DashboardReducer as any,
  PickupReducer: PickupReducer as any,
  BOBReducer: BOBReducer as any,
  BookingChannelReducer: BookingChannelReducer as any,
  BusinessMixReducer: BusinessMixReducer as any,
  GeographicOriginReducer: GeographicOriginReducer as any,
  KeyBusinessMetricsReducer: KeyBusinessMetricsReducer as any,
  MTRDRGIPerformanceReducer: MTRDRGIPerformanceReducer as any,
  OccupacyStaticsReducer: OccupacyStaticsReducer as any,
  RGIYOYVarianceReducer: RGIYOYVarianceReducer as any,
  RoomNightsReducer: RoomNightsReducer as any,
  RoomTypeStaticsReducer: RoomTypeStaticsReducer as any,

  BookingChannelMonthlyReducer: BookingChannelMonthlyReducer as any,
  DailyOccupacyBudLyReducer: DailyOccupacyBudLyReducer as any,
  MarketSegmentationReducer: MarketSegmentationReducer as any,
  MonthlyDailyOccupacyReducer: MonthlyDailyOccupacyReducer as any,
  MonthlyRoomTypeStatsReducer: MonthlyRoomTypeStatsReducer as any,
  RateCodeStatisticsReducer: RateCodeStatisticsReducer as any
});
