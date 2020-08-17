export interface IPickupModel {
  isLoading: boolean;
  pickupSummaryList: Object[] | any;
  pickupDetailList: Object[] | any;
  isError: boolean;
  isPickupLoading: boolean;
  isPickupError: boolean;
}

export interface ISumOfColumnsState{
  barValueADR :number,
  barValueRooms :number,
  publicDiscountRooms :number,
  publicDiscountADR :number,
  corporateDiscountRooms :number,
  corporateDiscountADR :number,
  partnershipDiscountRooms :number,
  partnershipDiscountADR :number,
  onlineAdvADR :number,
  onlineAdvRooms :number,
  employeeTravelADR :number,
  employeeTravelRooms :number,
  corporateContractADR :number,
  corporateContractRooms :number,
  monthlyContractADR :number,
  monthlyContractRooms :number,
  longTermContractADR :number,
  longTermContractRooms :number,
  wholesaleADR :number,
  wholesaleRooms :number,
  corporateGroupADR :number,
  corporateGroupRooms :number,
  corporateMonGroupADR :number,
  corporateMonGroupRooms :number,
  leisureADR :number,
  leisureRooms :number,
  airlineCrewADR :number,
  airlineCrewRooms :number,
  totalRooms :number,
  totalADR :number,
  totalRevenue :number,
}