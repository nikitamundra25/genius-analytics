import { IDashboardMainModel } from "./Dashboard";
import { IPickupModel } from "./Pickup";
import { IBOBModel } from "./BOB";
import { IBookingChannelModel } from "./BookingChannel";
import { IDateSelectionModel } from "./DateSelection";

export interface ImainState {
  showLoader: boolean;
}

export interface IRootState {
  DashboardReducer: IDashboardMainModel;
  PickupReducer: IPickupModel;
  mainReducer: ImainState;
  BOBReducer: IBOBModel;
  BookingChannelReducer: IBookingChannelModel;
  BusinessMixReducer: IBookingChannelModel;
  GeographicOriginReducer: IBookingChannelModel;
  KeyBusinessMetricsReducer: IBookingChannelModel;
  MTRDRGIPerformanceReducer: IBookingChannelModel;
  OccupacyStaticsReducer: IBookingChannelModel;
  RGIYOYVarianceReducer: IBookingChannelModel;
  RoomNightsReducer: IBookingChannelModel;
  RoomTypeStaticsReducer: IBookingChannelModel;

  BookingChannelMonthlyReducer: IBookingChannelModel;
  DailyOccupacyBudLyReducer: IBookingChannelModel;
  MarketSegmentationReducer: IBookingChannelModel;
  MonthlyDailyOccupacyReducer: IBookingChannelModel;
  MonthlyRoomTypeStatsReducer: IBookingChannelModel;
  RateCodeStatisticsReducer: IBookingChannelModel;

  LeadTimesYTDReducer: IBookingChannelModel;
  LeadTimesYTDSegmentReducer: IBookingChannelModel;
  MOCCADRReducer: IBookingChannelModel;
  QOCCADRReducer: IBookingChannelModel;
  ROOMTYPESReducer: IBookingChannelModel;
  StayYTDReducer: IBookingChannelModel;
  RevPARYTDReducer: IBookingChannelModel;
  RGIPerformanceReducer: IBookingChannelModel;
  pickupSummarySegmentReducer: IBookingChannelModel;
  pickupSummaryOCCReducer: IBookingChannelModel;
  pickupSummaryDowDataReducer: IBookingChannelModel;
  pickupDetailTableReducer: IBookingChannelModel;
  MonthlyBOBReducer: IBookingChannelModel;
  pickupBlobReducer: IBookingChannelModel;
  pickupSummaryTableReducer: IBookingChannelModel;
  CumulativeTableReducer: IBookingChannelModel;

  DateSelectionReducer: IDateSelectionModel;
  pickupMainSummaryReducer: IBookingChannelModel;

  pivotTableReducer: IBookingChannelModel;
}
