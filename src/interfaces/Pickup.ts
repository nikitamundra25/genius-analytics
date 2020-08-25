export interface IPickupModel {
  isLoading: boolean;
  pickupSummaryList: Object[] | any;
  pickupDetailList: Object[] | any;
  isError: boolean;
  isPickupLoading: boolean;
  isPickupError: boolean;
}

export interface ISumOfColumnsState{
  barValueRooms: number ,
  barValueADR: number ,
  publicDiscountRooms: number ,
  publicDiscountADR: number,
  corporateDiscountRooms: number ,
  corporateDiscountADR: number ,
  partnershipDiscountRooms: number ,
  partnershipDiscountADR: number ,
  onlineAdvRooms: number ,
  onlineAdvADR: number ,
  corporateGroupRooms: number ,
  corporateGroupADR: number ,
  leisureRooms: number ,
  leisureADR: number ,
  ResidentialGroupsRooms: number ,
  ResidentialGroupsADR: number ,
  otaRooms: number ,
  otaADR: number ,
  wholesaleRooms: number ,
  wholesaleADR: number ,
  longTermContractRooms: number ,
  longTermContractADR: number ,
  monthlyContractRooms: number ,
  monthlyContractADR: number ,
  airlineCrewRooms: number ,
  airlineCrewADR: number ,
  staffRooms: number ,
  staffADR: number ,
  TotalRooms: number ,
  TotalADR: number ,
  TotalRevenue: number 
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
    staffRevenue: number,
    TotalRooms: number,
    TotalADR: number,
    TotalRevenue: number
  
}
