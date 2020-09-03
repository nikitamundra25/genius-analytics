import React, { useEffect } from "react";
// import Loader from "../../../components/Loader/Loader";
import { Table } from "react-bootstrap";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState,ISumOfColumnsState } from "../../../../interfaces";
import { requestPickupDetailTableData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { getMonthsData } from "../../../../helper";
import moment from "moment";
import { monthYearFormat, pickupDetailJsonDateFormat } from "../../../../config";

const MonthlyTable = ({ date }: any) => {
  const dispatch = useDispatch();
  
  const months: any = getMonthsData(new Date(date), "pickupData");
  const [state, setState] = React.useState<any>([]);
  const [sumOfColumns, setsumOfColumns] = React.useState<ISumOfColumnsState| any>({});

  const { isLoading, data: graphdata, isError } = useSelector(
    (state: IRootState) => state.pickupDetailTableReducer
  );

  useEffect(() => {
    dispatch(requestPickupDetailTableData());
    // eslint-disable-next-line
  }, []);
  // let result:any  = []

  useEffect(() => {
    if (graphdata && graphdata.length) {
      let filterData: any = graphdata.filter((list: any) => {
        return list.month === moment(date).format(monthYearFormat);
      })[0];
      
      let stemp :any= []
      if(filterData && filterData.pickupDetailData && filterData.pickupDetailData.length){
        // eslint-disable-next-line
        filterData.pickupDetailData.map((key:any,i:number)=>{
          let arr:any = months.filter((item: any) => {
            return item.format(pickupDetailJsonDateFormat) === key.Month;
          })[0];
          if(arr){
            return stemp.push(key)
           }
        })
      }
      
      // let temp: any =
      //   filterData && filterData.pickupDetailData && filterData.pickupDetailData.length
      //     ? filterData.pickupDetailData
      //     : [];

      // To add data according to column
      let result: ISumOfColumnsState = stemp.reduce((acc: any, n: any) => {
        for (let prop in n) {
          if (prop !== "Month") {
            if (acc.hasOwnProperty(prop)) {
              acc[prop] +=  n[prop] ? parseFloat(n[prop]) : 0;
            } else {
              acc[prop] = n[prop] ? parseFloat(n[prop]) : 0;
            }
          }
        }
        return acc;
      }, {});

      setsumOfColumns(result);
      setState(stemp);
    }
    // eslint-disable-next-line
  }, [graphdata]);

  const {
    barValueADR = 0,
    barValueRooms = 0,
    publicDiscountRooms = 0,
    publicDiscountADR = 0,
    corporateDiscountRooms = 0,
    corporateDiscountADR = 0,
    partnershipDiscountRooms = 0,
    partnershipDiscountADR = 0,
    onlineAdvADR = 0,
    onlineAdvRooms = 0,
    staffRooms = 0,
    staffADR = 0,
    monthlyContractADR = 0,
    monthlyContractRooms = 0,
    longTermContractADR = 0,
    longTermContractRooms = 0,
    wholesaleADR = 0,
    wholesaleRooms = 0,
    corporateGroupADR = 0,
    corporateGroupRooms = 0,
    ResidentialGroupsRooms = 0,
    ResidentialGroupsADR = 0,
    leisureADR = 0,
    leisureRooms = 0,
    airlineCrewADR = 0,
    airlineCrewRooms = 0,
    otaRooms = 0 ,
    otaADR = 0,
    TotalRooms = 0,
    TotalADR = 0,
    TotalRevenue = 0,
  } = sumOfColumns;

  return (
    <>
      {isLoading ? (
        <WidgetLoader />
      ) : isError ? (
        <ErrorComponent message={"An error occured while fetching details "} />
      ) : (
        <React.Suspense
          fallback={
            <div className="card-loader">
              <WidgetLoader />
            </div>
          }
        >
          <div className="table-detail-section">
            <Table responsive className="pickup-detail-table mb-0">
              <thead>
                <tr>
                  <th className="border-0"></th>
                  <th className="head-col border-left main-head-col left-width" colSpan={2}>
                    Bar
                  </th>
                  <th className="head-col border-left main-head-col" colSpan={2}>
                    Public<br/>Discount
                  </th>
                  <th className="head-col border-left main-head-col" colSpan={2}>
                    Corporate<br/>Discount
                  </th>
                  <th className="head-col border-left main-head-col" colSpan={2}>
                    Partnership<br/>Discount
                  </th>
                  <th className="head-col border-left main-head-col" colSpan={2}>
                    Online<br/>Advantage
                  </th>
                  <th className="head-col border-left main-head-col" colSpan={2}>
                    Corporate<br/>Groups
                  </th>
                  <th className="head-col border-left main-head-col" colSpan={2}>
                  Leisure<br/>Group
                  </th>
                  <th className="head-col border-left main-head-col" colSpan={2}>
                    Residential<br/>Groups
                  </th>
                  <th className="head-col border-left main-head-col" colSpan={2}>
                    OTA's
                  </th>
                  <th className="head-col border-left main-head-col" colSpan={2}>
                    Wholesale
                  </th>
                  <th className="head-col border-left main-head-col" colSpan={2}>
                    Long Term<br/>Contract
                  </th>
                  <th className="head-col border-left main-head-col" colSpan={2}>
                     Monthly<br/>Contract
                  </th>
                  <th className="head-col border-left main-head-col" colSpan={2}>
                    Airline Crew<br/>Group
                  </th>
                  <th className="head-col border-left main-head-col" colSpan={2}>
                    Staff
                  </th>
                  <th className="head-col total-content  main-head-col" colSpan={3}>
                    Total
                  </th>
                </tr>
                <tr>
                  <th className="border-left-0"></th>
                  <th className="head-col border-left left-width">Rooms</th>
                  <th className="head-col  ">ADR</th>
                  <th className="head-col border-left">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col border-left">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col border-left">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col border-left">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col border-left">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col border-left">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col border-left">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col border-left">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col border-left">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col border-left">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col border-left">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col border-left">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col  total-content">Rooms</th>
                  <th className="head-col  ">ADR</th>
                  <th className="head-col ">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {state && state.length
                  ? state.map((list: any, index: number) => {
                      let weekendDay = moment(months[index]).day();
                      return  (
                        <>
                          <tr
                            key={`monthly-${index}`}
                            className={
                              weekendDay === 5 ||
                              weekendDay === 6 ||
                              weekendDay === 0
                                ? "weekend-bg"
                                : ""
                            }
                          >
                            <td className="title-col  text-center">
                              {moment(months[index]).format("ddd DD MMM")}
                            </td>

                            <td
                              className={`content-col ${
                                list.barValueRooms &&
                                parseInt(list.barValueRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {" "}
                              {list.barValueRooms
                                ? parseFloat(list.barValueRooms).toLocaleString()
                                : null}{" "}
                            </td>
                            <td
                              className={`content-col ${
                                list.barValueADR &&
                                parseInt(list.barValueADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.barValueADR ? parseFloat(list.barValueADR).toLocaleString() : null}{" "}
                            </td>
                            <td
                              className={`content-col ${
                                list.publicDiscountRooms &&
                                parseInt(list.publicDiscountRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.publicDiscountRooms
                                ? parseFloat(list.publicDiscountRooms).toLocaleString()
                                : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.publicDiscountADR &&
                                parseInt(list.publicDiscountADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.publicDiscountADR
                                ? parseFloat(list.publicDiscountADR).toLocaleString()
                                : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.corporateDiscountRooms &&
                                parseInt(list.corporateDiscountRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.corporateDiscountRooms
                                ? parseFloat(list.corporateDiscountRooms).toLocaleString()
                                : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.corporateDiscountADR &&
                                parseInt(list.corporateDiscountADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.corporateDiscountADR
                                ? list.corporateDiscountADR
                                : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.partnershipDiscountRooms &&
                                parseInt(list.partnershipDiscountRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.partnershipDiscountRooms
                                ? list.partnershipDiscountRooms
                                : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.partnershipDiscountADR &&
                                parseInt(list.partnershipDiscountADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.partnershipDiscountADR
                                ? list.partnershipDiscountADR
                                : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.onlineAdvRooms &&
                                parseInt(list.onlineAdvRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {" "}
                              {list.onlineAdvRooms
                                ? list.onlineAdvRooms
                                : null}{" "}
                            </td>
                            <td
                              className={`content-col ${
                                list.onlineAdvADR &&
                                parseInt(list.onlineAdvADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.onlineAdvADR ? list.onlineAdvADR : null}{" "}
                            </td>
                            <td
                              className={`content-col ${
                                list.corporateGroupRooms &&
                                parseInt(list.corporateGroupRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.corporateGroupRooms
                                ? list.corporateGroupRooms
                                : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.corporateGroupADR &&
                                parseInt(list.corporateGroupADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.corporateGroupADR
                                ? list.corporateGroupADR
                                : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.leisureRooms &&
                                parseInt(list.leisureRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.leisureRooms
                                ? list.leisureRooms
                                : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.leisureADR &&
                                parseInt(list.leisureADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.leisureADR
                                ? list.leisureADR
                                : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.ResidentialGroupsRooms &&
                                parseInt(list.ResidentialGroupsRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.ResidentialGroupsRooms
                                ? list.ResidentialGroupsRooms
                                : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.ResidentialGroupsADR &&
                                parseInt(list.ResidentialGroupsADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.ResidentialGroupsADR
                                ? list.ResidentialGroupsADR
                                : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.otaRooms &&
                                parseInt(list.otaRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {" "}
                              {list.otaRooms
                                ? list.otaRooms
                                : null}{" "}
                            </td>
                            <td
                              className={`content-col ${
                                list.otaADR &&
                                parseInt(list.otaADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.otaADR
                                ? list.otaADR
                                : null}{" "}
                            </td>
                            <td
                              className={`content-col ${
                                list.wholesaleRooms &&
                                parseInt(list.wholesaleRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.wholesaleRooms ? list.wholesaleRooms : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.wholesaleADR &&
                                parseInt(list.wholesaleADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.wholesaleADR ? list.wholesaleADR : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.longTermContractRooms &&
                                parseInt(list.longTermContractRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.longTermContractRooms
                                ? list.longTermContractRooms
                                : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.longTermContractADR &&
                                parseInt(list.longTermContractADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.longTermContractADR
                                ? list.longTermContractADR
                                : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.monthlyContractRooms &&
                                parseInt(list.monthlyContractRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.monthlyContractRooms
                                ? list.monthlyContractRooms
                                : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.monthlyContractADR &&
                                parseInt(list.monthlyContractADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.monthlyContractADR
                                ? list.monthlyContractADR
                                : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.airlineCrewRooms &&
                                parseInt(list.airlineCrewRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {" "}
                              {list.airlineCrewRooms ? list.airlineCrewRooms : null}{" "}
                            </td>
                            <td
                              className={`content-col ${
                                list.airlineCrewADR && parseInt(list.airlineCrewADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.airlineCrewADR ? list.airlineCrewADR : null}{" "}
                            </td>
                            <td
                              className={`content-col ${
                                list.staffRooms &&
                                parseInt(list.staffRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.staffRooms
                                ? list.staffRooms
                                : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.staffADR &&
                                parseInt(list.staffADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.staffADR ? list.staffADR : null}
                            </td>
                            <td
                              className={`content-col total-content  ${
                                list.TotalRooms && parseInt(list.TotalRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.TotalRooms ? list.TotalRooms : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.TotalADR && parseInt(list.TotalADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.TotalADR ? list.TotalADR : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.TotalRevenue &&
                                parseInt(list.TotalRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.TotalRevenue ? parseFloat(list.TotalRevenue).toLocaleString() : null}
                            </td>
                          </tr>
                        </>
                      );
                    })
                  : 
                  <tr>
                     
                     <td className="title-col  text-center">
                             
                    </td>
                    <td colSpan={31} className={`content-col`}>
                      <div className="no-data-section">
                        <div className="no-data-icon">
                          <i className="icon-ban" />
                        </div>
                        <p className="mb-0">
                          No data found for this month 
                        </p>
                      </div>
                    </td>
                  </tr>
                 }
              </tbody>
              <tfoot>
                <tr>
                  <td className="border-left-0"></td>
                  <td className="total-col left-width">{barValueRooms}</td>
                  <td className="total-col">{barValueADR}</td>
                  <td className="total-col">{publicDiscountRooms}</td>
                  <td className="total-col">{publicDiscountADR}</td>
                  <td className="total-col">{corporateDiscountRooms}</td>
                  <td className="total-col ">{corporateDiscountADR}</td>
                  <td className="total-col ">{partnershipDiscountRooms}</td>
                  <td className="total-col ">{partnershipDiscountADR}</td>
                  <td className="total-col">{onlineAdvRooms}</td>
                  <td className="total-col">{onlineAdvADR}</td>
                  <td className="total-col">{corporateGroupRooms}</td>
                  <td className="total-col">{corporateGroupADR}</td>
                  <td className="total-col">{leisureRooms}</td>
                  <td className="total-col ">{leisureADR}</td>
                  <td className="total-col ">{ResidentialGroupsRooms}</td>
                  <td className="total-col ">{ResidentialGroupsADR}</td>
                  <td className="total-col">{otaRooms}</td>
                  <td className="total-col">{otaADR}</td>
                  <td className="total-col">{wholesaleRooms}</td>
                  <td className="total-col">{wholesaleADR}</td>
                  <td className="total-col">{longTermContractRooms}</td>
                  <td className="total-col ">{longTermContractADR}</td>
                  <td className="total-col ">{monthlyContractRooms}</td>
                  <td className="total-col ">{monthlyContractADR} </td>
                  <td className="total-col ">{airlineCrewRooms}</td>
                  <td className="total-col ">{airlineCrewADR}</td>
                  <td className="total-col ">{staffRooms}</td>
                  <td className="total-col ">{staffADR}</td>
                  <td className="total-col total-content">{TotalRooms}</td>
                  <td className="total-col ">{TotalADR > 0 ? TotalADR.toFixed(1): 0}</td>
                  <td className="total-col ">{TotalRevenue.toLocaleString()}</td>
                </tr>
              </tfoot>
            </Table>
          </div>
        </React.Suspense>
      )}
    </>
  );
};

export default MonthlyTable;
