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
  const months: any = getMonthsData(new Date(date),"pickupData");
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
                  <th className="head-col border-left main-head-col" colSpan={3}>
                    Bar
                  </th>
                  <th className="head-col border-left main-head-col" colSpan={3}>
                    Public<br/>Discount
                  </th>
                  <th className="head-col border-left main-head-col" colSpan={3}>
                    Corporate<br/>Discount
                  </th>
                  <th className="head-col border-left main-head-col" colSpan={3}>
                    Partnership<br/>Discount
                  </th>
                  <th className="head-col border-left main-head-col" colSpan={3}>
                    Online<br/>Advantage
                  </th>
                  <th className="head-col border-left main-head-col" colSpan={3}>
                    Corporate<br/>Groups
                  </th>
                  <th className="head-col border-left main-head-col" colSpan={3}>
                    Leisure<br/>Groups
                  </th>
                  <th className="head-col border-left main-head-col" colSpan={3}>
                    Residential<br/>Groups
                  </th>
                  <th className="head-col border-left main-head-col" colSpan={3}>
                    OTAs
                  </th>
                  <th className="head-col border-left main-head-col" colSpan={3}>
                    Wholesale
                  </th>
                  <th className="head-col border-left main-head-col" colSpan={3}>
                    Long Term<br/>Contract
                  </th>
                  <th className="head-col border-left main-head-col" colSpan={3}>
                    Monthly<br/>Contract
                  </th>
                  <th className="head-col border-left main-head-col" colSpan={3}>
                    Airline Crew<br/>Group
                  </th>
                  <th className="head-col  main-head-col" colSpan={3}>
                    Staff
                  </th>
                  <th className="head-col total-content main-head-col" colSpan={3}>
                  Total
                  </th>
                </tr>
                <tr>
                  <th className="border-left-0"></th>
                  <th className="head-col border-left">Rooms</th>
                  <th className="head-col  ">ADR</th>
                  <th className="head-col ">Revenue</th>
                  <th className="head-col border-left">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col ">Revenue</th>
                  <th className="head-col border-left">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col ">Revenue</th>
                  <th className="head-col border-left">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col ">Revenue</th>
                  <th className="head-col border-left">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col ">Revenue</th>
                  <th className="head-col border-left">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col ">Revenue</th>
                  <th className="head-col border-left">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col ">Revenue</th>
                  <th className="head-col border-left">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col ">Revenue</th>
                  <th className="head-col border-left">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col ">Revenue</th>
                  <th className="head-col border-left">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col ">Revenue</th>
                  <th className="head-col border-left">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col ">Revenue</th>
                  <th className="head-col border-left">Rooms</th>
                  <th className="head-col ">ADR</th>
                  <th className="head-col ">Revenue</th>
                  <th className="head-col border-left">Rooms</th>
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
                              className={`content-col ${
                                list.barValueRooms &&
                                parseInt(list.barValueRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {" "}
                              {list.barValueRooms
                                ? list.barValueRooms
                                : "-"}{" "}
                            </td>
                            <td
                              className={`content-col ${
                                list.barValueADR &&
                                parseInt(list.barValueADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.barValueADR ? list.barValueADR : "-"}{" "}
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
                                ? list.barValueRevenue
                                : "-"}
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
                                ? list.publicDiscountRooms
                                : "-"}
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
                                ? list.publicDiscountADR
                                : "-"}
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
                                ? list.publicDiscountRevenue
                                : "-"}
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
                                ? list.corporateDiscountRooms
                                : "-"}
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
                                : "-"}
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
                                ? list.corporateDiscountRevenue
                                : "-"}{" "}
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
                                : "-"}{" "}
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
                                : "-"}
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
                                ? list.partnershipDiscountRevenue
                                : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.onlineAdvRooms &&
                                parseInt(list.onlineAdvRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.onlineAdvRooms ? list.onlineAdvRooms : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.onlineAdvADR &&
                                parseInt(list.onlineAdvADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.onlineAdvADR ? list.onlineAdvADR : "-"}
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
                                ? list.onlineAdvRevenue
                                : "-"}
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
                                : "-"}
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
                                ? list.corporateGroupADR
                                : "-"}{" "}
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
                                ? list.corporateGroupRevenue
                                : "-"}{" "}
                            </td>
                            <td
                              className={`content-col ${
                                list.leisureRooms &&
                                parseInt(list.leisureRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.leisureRooms ? list.leisureRooms : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.leisureADR && parseInt(list.leisureADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.leisureADR ? list.leisureADR : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.leisureRevenue &&
                                parseInt(list.leisureRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.leisureRevenue ? list.leisureRevenue : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.residentialGroupRooms &&
                                parseInt(list.residentialGroupRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.residentialGroupRooms
                                ? list.residentialGroupRooms
                                : "-"}
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
                                ? list.residentialGroupADR
                                : "-"}
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
                                ? list.residentialGroupRevenue
                                : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.otaRooms && parseInt(list.otaRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {" "}
                              {list.otaRooms ? list.otaRooms : "-"}{" "}
                            </td>
                            <td
                              className={`content-col ${
                                list.otaADR && parseInt(list.otaADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.otaADR ? list.otaADR : "-"}{" "}
                            </td>
                            <td
                              className={`content-col ${
                                list.otaRevenue && parseInt(list.otaRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.otaRevenue ? list.otaRevenue : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.wholesaleRooms &&
                                parseInt(list.wholesaleRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.wholesaleRooms ? list.wholesaleRooms : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.wholesaleADR &&
                                parseInt(list.wholesaleADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.wholesaleADR ? list.wholesaleADR : "-"}
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
                                ? list.wholesaleRevenue
                                : "-"}
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
                                : "-"}
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
                                : "-"}
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
                                ? list.longTermContractRevenue
                                : "-"}
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
                                : "-"}
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
                                : "-"}
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
                                ? list.monthlyContractRevenue
                                : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.airlineCrewRooms &&
                                parseInt(list.airlineCrewRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.airlineCrewRooms
                                ? list.airlineCrewRooms
                                : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.airlineCrewADR &&
                                parseInt(list.airlineCrewADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.airlineCrewADR ? list.airlineCrewADR : "-"}
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
                                ? list.airlineCrewRevenue
                                : "-"}
                            </td>
                            <td
                              className={`content-col  ${
                                list.staffRooms && parseInt(list.staffRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.staffRooms ? list.staffRooms : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.staffADR && parseInt(list.staffADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.staffADR ? list.staffADR : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.staffRevenue &&
                                parseInt(list.staffRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.staffRevenue ? list.staffRevenue : "-"}
                            </td>
                            <td
                              className={`content-col  total-content ${
                                list.resultRooms &&
                                parseInt(list.resultRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.resultRooms ? list.resultRooms : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.resultADR &&
                                parseInt(list.resultADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.resultADR ? list.resultADR : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.resultRevenue &&
                                parseInt(list.resultRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.resultRevenue ? list.resultRevenue : "-"}
                            </td>
                          </tr>
                        </>
                      );
                    })
                  : null}
              </tbody>
              <tfoot>
                <tr>
                  <td className="border-left-0"></td>
                  <td className="total-col">
                    {barValueRooms > 0 ? barValueRooms.toFixed(1) : 0}
                  </td>
                  <td className="total-col">
                    {barValueADR > 0 ? barValueADR.toFixed(1) : 0}
                  </td>
                  <td className="total-col">
                    {barValueRevenue > 0 ? barValueRevenue.toFixed(1) : 0}
                  </td>
                  <td className="total-col">
                    {publicDiscountRooms > 0
                      ? publicDiscountRooms.toFixed(1)
                      : 0}
                  </td>
                  <td className="total-col">
                    {publicDiscountADR > 0 ? publicDiscountADR.toFixed(1) : 0}
                  </td>
                  <td className="total-col ">
                    {publicDiscountRevenue > 0
                      ? publicDiscountRevenue.toFixed(1)
                      : 0}
                  </td>
                  <td className="total-col ">
                    {corporateDiscountRooms > 0
                      ? corporateDiscountRooms.toFixed(1)
                      : 0}
                  </td>
                  <td className="total-col ">
                    {corporateDiscountADR > 0
                      ? corporateDiscountADR.toFixed(1)
                      : 0}
                  </td>
                  <td className="total-col">
                    {corporateDiscountRevenue > 0
                      ? corporateDiscountRevenue.toFixed(1)
                      : 0}
                  </td>
                  <td className="total-col">
                    {partnershipDiscountRooms > 0
                      ? partnershipDiscountRooms.toFixed(1)
                      : 0}
                  </td>
                  <td className="total-col">
                    {partnershipDiscountADR > 0
                      ? partnershipDiscountADR.toFixed(1)
                      : 0}
                  </td>
                  <td className="total-col">
                    {partnershipDiscountRevenue > 0
                      ? partnershipDiscountRevenue.toFixed(1)
                      : 0}
                  </td>
                  <td className="total-col">
                    {onlineAdvRooms > 0 ? onlineAdvRooms.toFixed(1) : 0}
                  </td>
                  <td className="total-col ">
                    {onlineAdvADR > 0 ? onlineAdvADR.toFixed(1) : 0}
                  </td>
                  <td className="total-col ">
                    {onlineAdvRevenue > 0 ? onlineAdvRevenue.toFixed(1) : 0}
                  </td>
                  <td className="total-col ">
                    {corporateGroupRooms > 0
                      ? corporateGroupRooms.toFixed(1)
                      : 0}
                  </td>
                  <td className="total-col">
                    {corporateGroupADR > 0 ? corporateGroupADR.toFixed(1) : 0}
                  </td>
                  <td className="total-col">
                    {corporateGroupRevenue > 0
                      ? corporateGroupRevenue.toFixed(1)
                      : 0}
                  </td>
                  <td className="total-col">
                    {leisureRooms > 0 ? leisureRooms.toFixed(1) : 0}
                  </td>
                  <td className="total-col">
                    {leisureADR > 0 ? leisureADR.toFixed(1) : 0}
                  </td>
                  <td className="total-col">
                    {leisureRevenue > 0 ? leisureRevenue.toFixed(1) : 0}
                  </td>
                  <td className="total-col ">
                    {residentialGroupRooms > 0
                      ? residentialGroupRooms.toFixed(1)
                      : 0}
                  </td>
                  <td className="total-col ">
                    {residentialGroupADR > 0
                      ? residentialGroupADR.toFixed(1)
                      : 0}
                  </td>
                  <td className="total-col ">
                    {residentialGroupRevenue > 0
                      ? residentialGroupRevenue.toFixed(1)
                      : 0}
                  </td>
                  <td className="total-col">
                    {otaRooms > 0 ? otaRooms.toFixed(1) : 0}
                  </td>
                  <td className="total-col ">
                    {otaADR > 0 ? otaADR.toFixed(1) : 0}
                  </td>
                  <td className="total-col ">
                    {otaRevenue > 0 ? otaRevenue.toFixed(1) : 0}
                  </td>
                  <td className="total-col ">
                    {wholesaleRooms > 0 ? wholesaleRooms.toFixed(1) : 0}
                  </td>
                  <td className="total-col">
                    {wholesaleADR > 0 ? wholesaleADR.toFixed(1) : 0}
                  </td>
                  <td className="total-col">
                    {wholesaleRevenue > 0 ? wholesaleRevenue.toFixed(1) : 0}
                  </td>
                  <td className="total-col">
                    {longTermContractRooms > 0
                      ? longTermContractRooms.toFixed(1)
                      : 0}
                  </td>
                  <td className="total-col">
                    {longTermContractADR > 0
                      ? longTermContractADR.toFixed(1)
                      : 0}
                  </td>
                  <td className="total-col">
                    {longTermContractRevenue > 0
                      ? longTermContractRevenue.toFixed(1)
                      : 0}
                  </td>
                  <td className="total-col">
                    {monthlyContractRooms > 0
                      ? monthlyContractRooms.toFixed(1)
                      : 0}
                  </td>
                  <td className="total-col">
                    {monthlyContractADR > 0 ? monthlyContractADR.toFixed(1) : 0}
                  </td>
                  <td className="total-col">
                    {monthlyContractRevenue > 0
                      ? monthlyContractRevenue.toFixed(1)
                      : 0}
                  </td>
                  <td className="total-col">
                    {airlineCrewRooms > 0 ? airlineCrewRooms.toFixed(1) : 0}
                  </td>
                  <td className="total-col">
                    {airlineCrewADR > 0 ? airlineCrewADR.toFixed(1) : 0}
                  </td>
                  <td className="total-col">
                    {airlineCrewRevenue > 0 ? airlineCrewRevenue.toFixed(1) : 0}
                  </td>
                  <td className="total-col ">
                    {staffRooms > 0 ? staffRooms.toFixed(1) : 0}
                  </td>
                  <td className="total-col ">
                    {staffADR > 0 ? staffADR.toFixed(1) : 0}
                  </td>
                  <td className="total-col ">
                    {staffRevenue > 0 ? staffRevenue.toFixed(1) : 0}
                  </td>
                  <td className="total-col total-content">
                    {TotalRooms > 0 ? TotalRooms.toFixed(1) : 0}
                  </td>
                  <td className="total-col ">
                    {TotalADR > 0 ? TotalADR.toFixed(1) : 0}
                  </td>
                  <td className="total-col ">
                    {TotalRevenue > 0 ? TotalRevenue.toFixed(1) : 0}
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
