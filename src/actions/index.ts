import { createAction } from "redux-actions";

export * from "./Dashboard";
export * from "./Pickup";
export * from "./BOB";
export * from "./BookingChannels";
export * from "./BusinessMix";
export * from "./GeographicOriginOfBusiness";
export * from "./KeyBusinessMetrics";
export * from "./MTDRGIPerformance";
export * from "./OccupacyStatics";
export * from "./RGIYOYVariance";
export * from "./RoomNights";
export * from "./RoomTypeStatics";

export * from "./BookingChannelMonthly";
export * from "./DailyOccupacyBudLy";
export * from "./MarketSegmentation";
export * from "./MonthlyDailyOccupacy";
export * from "./RateCodeStatistics";
export * from "./MonthlyRoomTypeStats";


export * from "./LeadTimeYTDSegment";
export * from "./LeadTimesYTD";
export * from "./MOCCADR";
export * from "./QOCCADR";
export * from "./RevPARYTD";
export * from "./RGIPerformance";
export * from "./ROOMTYPES";
export * from "./StayYTD";

export * from "./pickupSummaryDowData";
export * from "./pickupSummaryOCC";
export * from "./pickupSummarySegmentData";
export * from "./PickupDetailTable";

//
export const redirectTo = createAction("REDIRET_TO");
//
export const showLoader = createAction("SHOW_LOADER");
export const hideLoader = createAction("HIDE_LOADER");
export const LogOutRequest = createAction("Logout Started!");
