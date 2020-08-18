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

export interface IBOBState{
    barValueRooms: number,
    barValueADR: number,
    barValueRevenue: number,
    publicDiscountRooms:number,
    publicDiscountADR:number,
    publicDiscountRevenue:number,

    corporateDiscountRooms: number,
    corporateDiscountADR: number,
    corporateDiscountRevenue: number,

    partnershipDiscountRooms: number,
    partnershipDiscountADR: number,
    partnershipDiscountRevenue: number,

    onlineAdvRooms: number,
    onlineAdvADR: number,
    onlineAdvRevenue: number,

    corporateGroupRooms: number,
    corporateGroupADR: number,
    corporateGroupRevenue: number,

    leisureRooms: number,
    leisureADR: number,
    leisureRevenue: number,

    residentialGroupRooms: number,
    residentialGroupADR: number,
    residentialGroupRevenue: number,

    otaRooms: number,
    otaADR: number,
    otaRevenue: number,

    wholesaleRooms: number,
    wholesaleADR: number,
    wholesaleRevenue: number,

    longTermContractRooms: number,
    longTermContractADR: number,
    longTermContractRevenue: number,
    monthlyContractRooms: number,
    monthlyContractADR: number,
    monthlyContractRevenue: number,
    airlineCrewRooms: number,
    airlineCrewADR: number,
    airlineCrewRevenue: number,
    staffRooms: number,
    staffADR: number,
    staffRevenue: number
  
}