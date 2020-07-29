import { Logic, createLogic } from "redux-logic";
import { push } from "react-router-redux";
import { DashBoardLogics } from "./Dashboard";
import { PickupLogics } from "./Pickup";
import { BOBDataLogics } from "./BOB";
import { BookingChannelDataLogics } from "./BookingChannel";
import { BusinessMixDataLogics } from "./BusinessMix";
import { GeographicOriginDataLogics } from "./GeographicOriginOfBusiness";
import { KeyBusinessMetricsDataLogics } from "./KeyBusinessMetrics";
import { MTRDRGIPerformanceDataLogics } from "./MTDRGIPerformance";
import { OccupacyStaticsDataLogics } from "./OccupacyStatics";
import { RGIYOYVarianceDataLogics } from "./RGIYOYVariance";
import { RoomNightsDataLogics } from "./RoomNights";
import { RoomTypeStaticsDataLogics } from "./RoomTypeStatics";
import { DailyOccupacyBudLyDataLogics } from "./DailyOccupacyBudLy";
import { MarketSegmentationDataLogics } from "./MarketSegmentation";
import { MonthlyDailyOccupacyDataLogics } from "./MonthlyDailyOccupacy";
import { RateCodeStatisticsDataLogics } from "./RateCodeStatistics";
import { MonthlyRoomTypeStatsDataLogics } from "./MonthlyRoomTypeStats";
import { BookingChannelMonthlyDataLogics } from "./BookingChannelMonthly";
import { LeadTimesYTDDataLogics } from "./LeadTimesYTD";
import { LeadTimeYTDSegmentDataLogics } from "./LeadTimeYTDSegment";
import { MOCCADRDataLogics } from "./MOCCADR";
import { QOCCADRDataLogics } from "./QOCCADR";
import { ROOMTYPESDataLogics } from "./ROOMTYPES";
import { StayYTDDataLogics } from "./StayYTD";
import { RGIPerformanceLogics } from "./RGIPerformance";
import { RevPARYTDLogics } from "./RevPARYTD";

export const redirectToLogic = createLogic({
  type: "REDIRET_TO",
  async process(data, dispatch: any, done) {
    const action: any = data.action;
    dispatch(push(action.payload.path));
    done();
  },
});

export const AllLogics: Logic[] | any = [
  ...DashBoardLogics,
  ...PickupLogics,
  ...BOBDataLogics,
  ...BookingChannelDataLogics,
  ...BusinessMixDataLogics,
  ...GeographicOriginDataLogics,
  ...KeyBusinessMetricsDataLogics,
  ...MTRDRGIPerformanceDataLogics,
  ...OccupacyStaticsDataLogics,
  ...RGIYOYVarianceDataLogics,
  ...RoomNightsDataLogics,
  ...RoomTypeStaticsDataLogics,

  ...BookingChannelMonthlyDataLogics,
  ...DailyOccupacyBudLyDataLogics,
  ...MarketSegmentationDataLogics,
  ...MonthlyDailyOccupacyDataLogics,
  ...RateCodeStatisticsDataLogics,
  ...MonthlyRoomTypeStatsDataLogics,


  ...LeadTimesYTDDataLogics,
  ...LeadTimeYTDSegmentDataLogics,
  ...MOCCADRDataLogics,
  ...QOCCADRDataLogics,
  ...ROOMTYPESDataLogics,
  ...StayYTDDataLogics,
  ...RGIPerformanceLogics,
  ...RevPARYTDLogics,
  redirectToLogic,
];
