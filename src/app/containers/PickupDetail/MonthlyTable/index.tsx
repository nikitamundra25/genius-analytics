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

const MonthlyTable = ({ date }: any) => {
  const dispatch = useDispatch();
  const months: any = getMonthsData(new Date(date));
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
      let result: ISumOfColumnsState = graphdata.reduce((acc: any, n: any) => {
        for (let prop in n) {
          if (prop !== "title") {
            if (acc.hasOwnProperty(prop)) {
              acc[prop] += n[prop] ? parseInt(n[prop]) : 0;
            } else {
              acc[prop] = n[prop] ? parseInt(n[prop]) : 0;
            }
          }
        }
        return acc;
      }, {});
      setsumOfColumns(result);
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
    employeeTravelADR = 0,
    employeeTravelRooms = 0,
    corporateContractADR = 0,
    corporateContractRooms = 0,
    monthlyContractADR = 0,
    monthlyContractRooms = 0,
    longTermContractADR = 0,
    longTermContractRooms = 0,
    wholesaleADR = 0,
    wholesaleRooms = 0,
    corporateGroupADR = 0,
    corporateGroupRooms = 0,
    corporateMonGroupADR = 0,
    corporateMonGroupRooms = 0,
    leisureADR = 0,
    leisureRooms = 0,
    airlineCrewADR = 0,
    airlineCrewRooms = 0,
    totalRooms = 0,
    totalADR = 0,
    totalRevenue = 0,
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
                  <th className="head-col border-left" colSpan={2}>
                    Bar
                  </th>
                  <th className="head-col border-left" colSpan={2}>
                    Public Discount
                  </th>
                  <th className="head-col border-left" colSpan={2}>
                    Corporate Discount
                  </th>
                  <th className="head-col border-left" colSpan={2}>
                    Partnership Discount
                  </th>
                  <th className="head-col border-left" colSpan={2}>
                    Online Advantage
                  </th>
                  <th className="head-col border-left" colSpan={2}>
                    Employee Travel
                  </th>
                  <th className="head-col border-left" colSpan={2}>
                    Corporate Contracted
                  </th>
                  <th className="head-col border-left" colSpan={2}>
                    Monthly Contract
                  </th>
                  <th className="head-col border-left" colSpan={2}>
                    Long Term Contract
                  </th>
                  <th className="head-col border-left" colSpan={2}>
                    Wholesale
                  </th>
                  <th className="head-col border-left" colSpan={2}>
                    Corporate Group
                  </th>
                  <th className="head-col border-left" colSpan={2}>
                    Corporate Monthly Group
                  </th>
                  <th className="head-col border-left" colSpan={2}>
                    Leisure Group
                  </th>
                  <th className="head-col border-left" colSpan={2}>
                    Airline Crew Group
                  </th>
                  <th className="head-col total-content " colSpan={3}>
                    Total Pick-up
                  </th>
                </tr>
                <tr>
                  <th className="border-left-0"></th>
                  <th className="head-col border-left">Rooms</th>
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
                {graphdata && graphdata.length
                  ? graphdata.map((list: any, index: number) => {
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
                                list.partnershipDiscountRooms &&
                                parseInt(list.partnershipDiscountRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.partnershipDiscountRooms
                                ? list.partnershipDiscountRooms
                                : "-"}
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
                                list.onlineAdvRooms &&
                                parseInt(list.onlineAdvRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {" "}
                              {list.onlineAdvRooms
                                ? list.onlineAdvRooms
                                : "-"}{" "}
                            </td>
                            <td
                              className={`content-col ${
                                list.onlineAdvADR &&
                                parseInt(list.onlineAdvADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.onlineAdvADR ? list.onlineAdvADR : "-"}{" "}
                            </td>
                            <td
                              className={`content-col ${
                                list.employeeTravelRooms &&
                                parseInt(list.employeeTravelRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.employeeTravelRooms
                                ? list.employeeTravelRooms
                                : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.employeeTravelADR &&
                                parseInt(list.employeeTravelADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.employeeTravelADR
                                ? list.employeeTravelADR
                                : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.corporateContractRooms &&
                                parseInt(list.corporateContractRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.corporateContractRooms
                                ? list.corporateContractRooms
                                : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.corporateContractADR &&
                                parseInt(list.corporateContractADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.corporateContractADR
                                ? list.corporateContractADR
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
                                list.longTermContractRooms &&
                                parseInt(list.longTermContractRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {" "}
                              {list.longTermContractRooms
                                ? list.longTermContractRooms
                                : "-"}{" "}
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
                                : "-"}{" "}
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
                              {list.corporateGroupADR
                                ? list.corporateGroupADR
                                : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.corporateMonGroupRooms &&
                                parseInt(list.corporateMonGroupRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.corporateMonGroupRooms
                                ? list.corporateMonGroupRooms
                                : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.corporateMonGroupADR &&
                                parseInt(list.corporateMonGroupADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.corporateMonGroupADR
                                ? list.corporateMonGroupADR
                                : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.leisureRooms &&
                                parseInt(list.leisureRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {" "}
                              {list.leisureRooms ? list.leisureRooms : "-"}{" "}
                            </td>
                            <td
                              className={`content-col ${
                                list.leisureADR && parseInt(list.leisureADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.leisureADR ? list.leisureADR : "-"}{" "}
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
                              className={`content-col total-content  ${
                                list.totalRooms && parseInt(list.totalRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.totalRooms ? list.totalRooms : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.totalADR && parseInt(list.totalADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.totalADR ? list.totalADR : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.totalRevenue &&
                                parseInt(list.totalRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.totalRevenue ? list.totalRevenue : "-"}
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
                  <td className="total-col">{barValueRooms}</td>
                  <td className="total-col">{barValueADR}</td>
                  <td className="total-col">{publicDiscountRooms}</td>
                  <td className="total-col">{publicDiscountADR}</td>
                  <td className="total-col">{corporateDiscountRooms}</td>
                  <td className="total-col ">{corporateDiscountADR}</td>
                  <td className="total-col ">{partnershipDiscountRooms}</td>
                  <td className="total-col ">{partnershipDiscountADR}</td>
                  <td className="total-col">{onlineAdvRooms}</td>
                  <td className="total-col">{onlineAdvADR}</td>
                  <td className="total-col">{employeeTravelRooms}</td>
                  <td className="total-col">{employeeTravelADR}</td>
                  <td className="total-col">{corporateContractRooms}</td>
                  <td className="total-col ">{corporateContractADR}</td>
                  <td className="total-col ">{monthlyContractRooms}</td>
                  <td className="total-col ">{monthlyContractADR}</td>
                  <td className="total-col">{longTermContractRooms}</td>
                  <td className="total-col">{longTermContractADR}</td>
                  <td className="total-col">{wholesaleRooms}</td>
                  <td className="total-col">{wholesaleADR}</td>
                  <td className="total-col">{corporateGroupRooms}</td>
                  <td className="total-col ">{corporateGroupADR}</td>
                  <td className="total-col ">{corporateMonGroupRooms}</td>
                  <td className="total-col ">{corporateMonGroupADR} </td>
                  <td className="total-col">{leisureRooms}</td>
                  <td className="total-col ">{leisureADR}</td>
                  <td className="total-col ">{airlineCrewRooms}</td>
                  <td className="total-col ">{airlineCrewADR}</td>
                  <td className="total-col total-content">{totalRooms}</td>
                  <td className="total-col ">{totalADR}</td>
                  <td className="total-col ">{totalRevenue}</td>
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
