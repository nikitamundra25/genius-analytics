import React, { useEffect } from "react";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { IRootState, IBOBState } from "../../../../interfaces";
import { requestPickupBlobData, requestPickupBlobFutureData,requestPickupBlobPastData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { getMonthsData } from "../../../../helper";
import moment from "moment";

const BOBMonthlyTable = ({ date }: any) => {
  const dispatch = useDispatch();
  const months: any = getMonthsData(new Date(date),"pickupDataBob");
  const [state, setState] = React.useState<any>([]);
  const [sumOfColumns, setsumOfColumns] = React.useState<IBOBState | any>({});

  const { isLoading, data: graphdata, isError } = useSelector(
    (state: IRootState) => state.pickupBlobReducer
  );

  useEffect(() => {
    // dispatch(requestPickupBlobData());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {

    const yearDate :any = moment(date).format("YYYY");
    let d = new Date();
    const currentYear:any = d.getFullYear();
  
    if (yearDate > currentYear) {
      dispatch(requestPickupBlobFutureData());
    } else if (yearDate < currentYear) {
      dispatch(requestPickupBlobPastData())
    } else {
      dispatch(requestPickupBlobData());
    }

    // eslint-disable-next-line
  }, [date]);

  useEffect(() => {
    if (graphdata && graphdata.length) {
      let filterData: any = graphdata.filter((list: any) => {
        return list.month === moment(date).format("MMMM");
      })[0];
      let temp: any =
        filterData && filterData.blobData && filterData.blobData.length
          ? filterData.blobData
          : [];
  
      // To add data according to column
      let result: IBOBState = temp.reduce((acc: any, n: any) => {
        for (let prop in n) {
          if (prop !== "month") {
            if (acc.hasOwnProperty(prop)) {
              acc[prop] += n[prop] ? parseFloat(n[prop]) : 0;
            } else {
              acc[prop] = n[prop] ? parseFloat(n[prop]) : 0;
            }
          }
        }
        return acc;
      }, {});
      setsumOfColumns(result);
      setState(temp);
    }
    // eslint-disable-next-line
  }, [graphdata]);

  const {
    barValueRooms = 0,
    barValueADR = 0,
    barValueRevenue = 0,
    publicDiscountRooms = 0,
    publicDiscountADR = 0,
    publicDiscountRevenue = 0,

    corporateDiscountRooms = 0,
    corporateDiscountADR = 0,
    corporateDiscountRevenue = 0,

    partnershipDiscountRooms = 0,
    partnershipDiscountADR = 0,
    partnershipDiscountRevenue = 0,

    onlineAdvRooms = 0,
    onlineAdvADR = 0,
    onlineAdvRevenue = 0,

    corporateGroupRooms = 0,
    corporateGroupADR = 0,
    corporateGroupRevenue = 0,

    leisureRooms = 0,
    leisureADR = 0,
    leisureRevenue = 0,

    residentialGroupRooms = 0,
    residentialGroupADR = 0,
    residentialGroupRevenue = 0,

    otaRooms = 0,
    otaADR = 0,
    otaRevenue = 0,

    wholesaleRooms = 0,
    wholesaleADR = 0,
    wholesaleRevenue = 0,

    longTermContractRooms = 0,
    longTermContractADR = 0,
    longTermContractRevenue = 0,
    monthlyContractRooms = 0,
    monthlyContractADR = 0,
    monthlyContractRevenue = 0,
    airlineCrewRooms = 0,
    airlineCrewADR = 0,
    airlineCrewRevenue = 0,
    staffRooms = 0,
    staffADR = 0,
    staffRevenue = 0,
    resultRooms = 0,
    resultADR = 0,
    resultRevenue = 0,
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
                  <th className="head-col  main-head-col left-width" colSpan={3}>
                    Bar
                  </th>
                  <th className="head-col left-width main-head-col" colSpan={3}>
                    Public<br/>Discount
                  </th>
                  <th className="head-col left-width main-head-col" colSpan={3}>
                    Corporate<br/>Discount
                  </th>
                  <th className="head-col left-width main-head-col" colSpan={3}>
                    Partnership<br/>Discount
                  </th>
                  <th className="head-col left-width main-head-col" colSpan={3}>
                    Online<br/>Advantage
                  </th>
                  <th className="head-col left-width main-head-col" colSpan={3}>
                    Corporate<br/>Groups
                  </th>
                  <th className="head-col left-width main-head-col" colSpan={3}>
                    Leisure<br/>Groups
                  </th>
                  <th className="head-col left-width main-head-col" colSpan={3}>
                    Residential<br/>Groups
                  </th>
                  <th className="head-col left-width main-head-col" colSpan={3}>
                    OTAs
                  </th>
                  <th className="head-col left-width main-head-col" colSpan={3}>
                    Wholesale
                  </th>
                  <th className="head-col left-width main-head-col" colSpan={3}>
                    Long Term<br/>Contract
                  </th>
                  <th className="head-col left-width main-head-col" colSpan={3}>
                    Monthly<br/>Contract
                  </th>
                  <th className="head-col left-width main-head-col" colSpan={3}>
                    Airline Crew<br/>Group
                  </th>
                  <th className="head-col  left-width main-head-col" colSpan={3}>
                    Staff
                  </th>
                  <th className="head-col total-content main-head-col" colSpan={3}>
                  Total
                  </th>
                </tr>
                <tr>
                  <th className="border-left-0"></th>
                  <th className="head-col left-width">Rooms</th>
                  <th className="head-col  ">ADR</th>
                  <th className="head-col ">Revenue</th>
                  <th className="head-col left-width">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col ">Revenue</th>
                  <th className="head-col left-width">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col ">Revenue</th>
                  <th className="head-col left-width">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col ">Revenue</th>
                  <th className="head-col left-width">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col ">Revenue</th>
                  <th className="head-col left-width">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col ">Revenue</th>
                  <th className="head-col left-width">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col ">Revenue</th>
                  <th className="head-col left-width">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col ">Revenue</th>
                  <th className="head-col left-width">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col ">Revenue</th>
                  <th className="head-col left-width">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col ">Revenue</th>
                  <th className="head-col left-width">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col ">Revenue</th>
                  <th className="head-col left-width">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col ">Revenue</th>
                  <th className="head-col left-width">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col ">Revenue</th>

                  <th className="head-col ">Rooms</th>
                  <th className="head-col  ">ADR</th>
                  <th className="head-col ">Revenue</th>
                   <th className="head-col  total-content">Rooms</th>
                  <th className="head-col  ">ADR</th>
                  <th className="head-col ">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {state && state.length
                  ? state.map((list: any, index: number) => {     
                      let weekendDay = moment(months[index]).day();
                      return index > months.length - 1 ? null : (
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
                              {/* {list.title}{" "} */}
                            </td>

                            <td
                              className={`content-col left-width ${
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
                                list.barValueRevenue &&
                                parseInt(list.barValueRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.barValueRevenue
                                ? Math.round(list.barValueRevenue).toLocaleString()
                                : null}
                            </td>
                            <td
                              className={`content-col left-width ${
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
                                list.publicDiscountRevenue &&
                                parseInt(list.publicDiscountRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.publicDiscountRevenue
                                ? Math.round(list.publicDiscountRevenue).toLocaleString()
                                : null}
                            </td>
                            <td
                              className={`content-col left-width ${
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
                                ? parseFloat(list.corporateDiscountADR).toLocaleString()
                                : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.corporateDiscountRevenue &&
                                parseInt(list.corporateDiscountRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {" "}
                              {list.corporateDiscountRevenue
                                ? Math.round(list.corporateDiscountRevenue).toLocaleString()
                                : null}{" "}
                            </td>
                            <td
                              className={`content-col left-width ${
                                list.partnershipDiscountRooms &&
                                parseInt(list.partnershipDiscountRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.partnershipDiscountRooms
                                ?parseFloat(list.partnershipDiscountRooms).toLocaleString()
                                : null}{" "}
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
                                ? parseFloat(list.partnershipDiscountADR).toLocaleString()
                                : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.partnershipDiscountRevenue &&
                                parseInt(list.partnershipDiscountRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.partnershipDiscountRevenue
                                ? Math.round(list.partnershipDiscountRevenue).toLocaleString()
                                : null}
                            </td>
                            <td
                              className={`content-col left-width ${
                                list.onlineAdvRooms &&
                                parseInt(list.onlineAdvRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.onlineAdvRooms ?parseFloat(list.onlineAdvRooms).toLocaleString() : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.onlineAdvADR &&
                                parseInt(list.onlineAdvADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.onlineAdvADR ? parseFloat(list.onlineAdvADR).toLocaleString() : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.onlineAdvRevenue &&
                                parseInt(list.onlineAdvRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.onlineAdvRevenue
                                ? Math.round(list.onlineAdvRevenue).toLocaleString()
                                : null}
                            </td>
                            <td
                              className={`content-col left-width ${
                                list.corporateGroupRooms &&
                                parseInt(list.corporateGroupRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.corporateGroupRooms
                                ? parseFloat(list.corporateGroupRooms).toLocaleString()
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
                              {" "}
                              {list.corporateGroupADR
                                ?parseFloat(list.corporateGroupADR).toLocaleString()
                                : null}{" "}
                            </td>
                            <td
                              className={`content-col ${
                                list.corporateGroupRevenue &&
                                parseInt(list.corporateGroupRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.corporateGroupRevenue
                                ? Math.round(list.corporateGroupRevenue).toLocaleString()
                                : null}{" "}
                            </td>
                            <td
                              className={`content-col left-width ${
                                list.leisureRooms &&
                                parseInt(list.leisureRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.leisureRooms ? parseFloat(list.leisureRooms).toLocaleString() : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.leisureADR && parseInt(list.leisureADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.leisureADR ? parseFloat(list.leisureADR).toLocaleString() : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.leisureRevenue &&
                                parseInt(list.leisureRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.leisureRevenue ? Math.round(list.leisureRevenue).toLocaleString() : null}
                            </td>
                            <td
                              className={`content-col left-width ${
                                list.residentialGroupRooms &&
                                parseInt(list.residentialGroupRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.residentialGroupRooms
                                ? parseFloat(list.residentialGroupRooms).toLocaleString()
                                : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.residentialGroupADR &&
                                parseInt(list.residentialGroupADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.residentialGroupADR
                                ?  parseFloat(list.residentialGroupADR).toLocaleString()
                                : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.residentialGroupRevenue &&
                                parseInt(list.residentialGroupRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.residentialGroupRevenue
                                ? Math.round(list.residentialGroupRevenue).toLocaleString()
                                : null}
                            </td>
                            <td
                              className={`content-col left-width ${
                                list.otaRooms && parseInt(list.otaRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {" "}
                              {list.otaRooms ? parseFloat(list.otaRooms).toLocaleString() : null}{" "}
                            </td>
                            <td
                              className={`content-col ${
                                list.otaADR && parseInt(list.otaADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.otaADR ?  parseFloat(list.otaADR).toLocaleString(): null}{" "}
                            </td>
                            <td
                              className={`content-col ${
                                list.otaRevenue && parseInt(list.otaRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.otaRevenue ? Math.round(list.otaRevenue).toLocaleString() : null}
                            </td>
                            <td
                              className={`content-col left-width ${
                                list.wholesaleRooms &&
                                parseInt(list.wholesaleRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.wholesaleRooms ? parseFloat(list.wholesaleRooms).toLocaleString()  : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.wholesaleADR &&
                                parseInt(list.wholesaleADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.wholesaleADR ?parseFloat(list.wholesaleADR).toLocaleString()  : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.wholesaleRevenue &&
                                parseInt(list.wholesaleRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.wholesaleRevenue
                                ? Math.round(list.wholesaleRevenue).toLocaleString() 
                                : null}
                            </td>
                            <td
                              className={`content-col left-width ${
                                list.longTermContractRooms &&
                                parseInt(list.longTermContractRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.longTermContractRooms
                                ? parseFloat(list.longTermContractRooms).toLocaleString()
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
                                ? parseFloat(list.longTermContractADR).toLocaleString()
                                : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.longTermContractRevenue &&
                                parseInt(list.longTermContractRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.longTermContractRevenue
                                ? Math.round(list.longTermContractRevenue).toLocaleString()
                                : null}
                            </td>
                            <td
                              className={`content-col left-width ${
                                list.monthlyContractRooms &&
                                parseInt(list.monthlyContractRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.monthlyContractRooms
                                ? parseFloat(list.monthlyContractRooms).toLocaleString()
                                : null}
                            </td>
                            <td
                              className={`content-col left-width ${
                                list.monthlyContractADR &&
                                parseInt(list.monthlyContractADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.monthlyContractADR
                                ?parseFloat(list.monthlyContractADR).toLocaleString()
                                : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.monthlyContractRevenue &&
                                parseInt(list.monthlyContractRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.monthlyContractRevenue
                                ? Math.round(list.monthlyContractRevenue).toLocaleString()
                                : null}
                            </td>
                            <td
                              className={`content-col left-width ${
                                list.airlineCrewRooms &&
                                parseInt(list.airlineCrewRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.airlineCrewRooms
                                ?parseFloat(list.airlineCrewRooms).toLocaleString()
                                : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.airlineCrewADR &&
                                parseInt(list.airlineCrewADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.airlineCrewADR ? parseFloat(list.airlineCrewADR).toLocaleString() : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.airlineCrewRevenue &&
                                parseInt(list.airlineCrewRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.airlineCrewRevenue
                                ? Math.round(list.airlineCrewRevenue).toLocaleString()
                                : null}
                            </td>
                            <td
                              className={`content-col  left-width ${
                                list.staffRooms && parseInt(list.staffRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.staffRooms ? parseFloat(list.staffRooms).toLocaleString(): null}
                            </td>
                            <td
                              className={`content-col ${
                                list.staffADR && parseInt(list.staffADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.staffADR ? parseFloat(list.staffADR).toLocaleString() : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.staffRevenue &&
                                parseInt(list.staffRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.staffRevenue ? Math.round(list.staffRevenue).toLocaleString() : null}
                            </td>
                            <td
                              className={`content-col  total-content ${
                                list.resultRooms &&
                                parseInt(list.resultRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.resultRooms ? parseFloat(list.resultRooms).toLocaleString() : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.resultADR &&
                                parseInt(list.resultADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.resultADR ? parseFloat(list.resultADR).toLocaleString() : null}
                            </td>
                            <td
                              className={`content-col ${
                                list.resultRevenue &&
                                parseInt(list.resultRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.resultRevenue ? Math.round(list.resultRevenue).toLocaleString() : null}
                            </td>
                          </tr>
                        </>
                      );
                    })
                  :  <tr>
                     
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
               </tr>}
              </tbody>
              <tfoot>
                <tr>
                  <td className="border-left-0"></td>
                  <td className="total-col left-width">
                    {barValueRooms > 0 ? parseFloat(barValueRooms).toLocaleString() : 0}
                  </td>
                  <td className="total-col">
                    {barValueADR > 0 ?parseFloat(barValueADR).toLocaleString() : 0}
                  </td>
                  <td className="total-col">
                    {barValueRevenue > 0 ? Math.round(barValueRevenue).toLocaleString() : 0}
                  </td>
                  <td className="total-col left-width">
                    {publicDiscountRooms > 0
                      ?  parseFloat(publicDiscountRooms).toLocaleString() 
                      : 0}
                  </td>
                  <td className="total-col">
                    {publicDiscountADR > 0 ? parseFloat(publicDiscountADR).toLocaleString() : 0}
                  </td>
                  <td className="total-col ">
                    {publicDiscountRevenue > 0
                      ? Math.round(publicDiscountRevenue).toLocaleString()
                      : 0}
                  </td>
                  <td className="total-col left-width">
                    {corporateDiscountRooms > 0
                      ? parseFloat(corporateDiscountRooms).toLocaleString()
                      : 0}
                  </td>
                  <td className="total-col ">
                    {corporateDiscountADR > 0
                      ? parseFloat(corporateDiscountADR).toLocaleString()
                      : 0}
                  </td>
                  <td className="total-col">
                    {corporateDiscountRevenue > 0
                      ? Math.round(corporateDiscountRevenue).toLocaleString()
                      : 0}
                  </td>
                  <td className="total-col left-width">
                    {partnershipDiscountRooms > 0
                      ?parseFloat(partnershipDiscountRooms).toLocaleString()
                      : 0}
                  </td>
                  <td className="total-col">
                    {partnershipDiscountADR > 0
                      ? parseFloat(partnershipDiscountADR).toLocaleString()
                      : 0}
                  </td>
                  <td className="total-col">
                    {partnershipDiscountRevenue > 0
                      ? Math.round(partnershipDiscountRevenue).toLocaleString()
                      : 0}
                  </td>
                  <td className="total-col left-width">
                    {onlineAdvRooms > 0 ? parseFloat(onlineAdvRooms).toLocaleString() : 0}
                  </td>
                  <td className="total-col ">
                    {onlineAdvADR > 0 ?parseFloat(onlineAdvADR).toLocaleString(): 0}
                  </td>
                  <td className="total-col ">
                    {onlineAdvRevenue > 0 ? Math.round(onlineAdvRevenue).toLocaleString( ): 0}
                  </td>
                  <td className="total-col left-width">
                    {corporateGroupRooms > 0
                      ? parseFloat(corporateGroupRooms).toLocaleString()
                      : 0}
                  </td>
                  <td className="total-col">
                    {corporateGroupADR > 0 ? parseFloat(corporateGroupADR).toLocaleString( ): 0}
                  </td>
                  <td className="total-col">
                    {corporateGroupRevenue > 0
                      ? Math.round(corporateGroupRevenue).toLocaleString()
                      : 0}
                  </td>
                  <td className="total-col left-width">
                    {leisureRooms > 0 ? parseFloat(leisureRooms).toLocaleString() : 0}
                  </td>
                  <td className="total-col">
                    {leisureADR > 0 ?parseFloat(leisureADR).toLocaleString() : 0}
                  </td>
                  <td className="total-col">
                    {leisureRevenue > 0 ? Math.round(leisureRevenue).toLocaleString() : 0}
                  </td>
                  <td className="total-col left-width">
                    {residentialGroupRooms > 0
                      ? parseFloat(residentialGroupRooms).toLocaleString()
                      : 0}
                  </td>
                  <td className="total-col ">
                    {residentialGroupADR > 0
                      ?parseFloat(residentialGroupADR).toLocaleString()
                      : 0}
                  </td>
                  <td className="total-col ">
                    {residentialGroupRevenue > 0
                      ? Math.round(residentialGroupRevenue).toLocaleString()
                      : 0}
                  </td>
                  <td className="total-col left-width">
                    {otaRooms > 0 ? parseFloat(otaRooms).toLocaleString() : 0}
                  </td>
                  <td className="total-col ">
                    {otaADR > 0 ? parseFloat(otaADR).toLocaleString() : 0}
                  </td>
                  <td className="total-col ">
                    {otaRevenue > 0 ? Math.round(otaRevenue).toLocaleString() : 0}
                  </td>
                  <td className="total-col left-width">
                    {wholesaleRooms > 0 ?parseFloat(wholesaleRooms).toLocaleString() : 0}
                  </td>
                  <td className="total-col">
                    {wholesaleADR > 0 ? parseFloat(wholesaleADR).toLocaleString()  : 0}
                  </td>
                  <td className="total-col">
                    {wholesaleRevenue > 0 ? Math.round(wholesaleRevenue).toLocaleString()  : 0}
                  </td>
                  <td className="total-col left-width">
                    {longTermContractRooms > 0
                      ? parseFloat(longTermContractRooms).toLocaleString() 
                      : 0}
                  </td>
                  <td className="total-col">
                    {longTermContractADR > 0
                      ? parseFloat(longTermContractADR).toLocaleString() 
                      : 0}
                  </td>
                  <td className="total-col">
                    {longTermContractRevenue > 0
                      ?Math.round(longTermContractRevenue).toLocaleString() 
                      : 0}
                  </td>
                  <td className="total-col left-width">
                    {monthlyContractRooms > 0
                      ? parseFloat(monthlyContractRooms).toLocaleString() 
                      : 0}
                  </td>
                  <td className="total-col">
                    {monthlyContractADR > 0 ? parseFloat(monthlyContractADR).toLocaleString()  : 0}
                  </td>
                  <td className="total-col">
                    {monthlyContractRevenue > 0
                      ? Math.round(monthlyContractRevenue).toLocaleString() 
                      : 0}
                  </td>
                  <td className="total-col left-width">
                    {airlineCrewRooms > 0 ?parseFloat(airlineCrewRooms).toLocaleString() : 0}
                  </td>
                  <td className="total-col">
                    {airlineCrewADR > 0 ?parseFloat(airlineCrewADR).toLocaleString(): 0}
                  </td>
                  <td className="total-col">
                    {airlineCrewRevenue > 0 ? Math.round(airlineCrewRevenue).toLocaleString() : 0}
                  </td>
                  <td className="total-col left-width">
                    {staffRooms > 0 ? parseFloat(staffRooms).toLocaleString() : 0}
                  </td>
                  <td className="total-col ">
                    {staffADR > 0 ? parseFloat(staffADR).toLocaleString() : 0}
                  </td>
                  <td className="total-col ">
                    {staffRevenue > 0 ?Math.round(staffRevenue).toLocaleString() : 0}
                  </td>
                  <td className="total-col total-content">
                    {resultRooms > 0 ? parseFloat(resultRooms).toLocaleString() : 0}
                  </td>
                  <td className="total-col ">
                    {resultADR > 0 ? parseFloat(resultADR).toLocaleString() : 0}
                  </td>
                  <td className="total-col ">
                    {resultRevenue > 0 ? Math.round(resultRevenue).toLocaleString() : 0}
                  </td>
                </tr>
              </tfoot>
            </Table>
          </div>
        </React.Suspense>
      )}
    </>
  );
};

export default BOBMonthlyTable;
