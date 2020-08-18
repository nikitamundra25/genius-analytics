import React, { useEffect } from "react";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { IRootState, IBOBState } from "../../../../interfaces";
import { requestPickupBlobData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { getMonthsData } from "../../../../helper";
import moment from "moment";

const BOBMonthlyTable = ({date}:any) => {
  const dispatch = useDispatch();
  const months:any = getMonthsData(new Date(date));
  const [state, setState] = React.useState<any>([]);
  const [sumOfColumns, setsumOfColumns] = React.useState<IBOBState| any>({});

  const { isLoading, data: graphdata, isError } = useSelector(
    (state: IRootState) => state.pickupBlobReducer
  );

  useEffect(() => {
    dispatch(requestPickupBlobData());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (graphdata && graphdata.length) {
    let filterData:any =  graphdata.filter((list:any) => {
      return list.month === moment(date).format("MMMM-YY");
    })[0];
    let temp :any = filterData && filterData.blobData && filterData.blobData.length ? filterData.blobData : []

    // To add data according to column
    let result: IBOBState = temp.reduce((acc: any, n: any) => {
      for (let prop in n) {
        if (prop !== "month") {
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
    setState(temp)
  }
    // eslint-disable-next-line
  }, [graphdata]);

  const {
    barValueRooms=0,
    barValueADR=0,
    barValueRevenue=0,
    publicDiscountRooms=0,
    publicDiscountADR=0,
    publicDiscountRevenue=0,

    corporateDiscountRooms=0,
    corporateDiscountADR=0,
    corporateDiscountRevenue=0,

    partnershipDiscountRooms=0,
    partnershipDiscountADR=0,
    partnershipDiscountRevenue=0,

    onlineAdvRooms=0,
    onlineAdvADR=0,
    onlineAdvRevenue=0,

    corporateGroupRooms=0,
    corporateGroupADR=0,
    corporateGroupRevenue=0,

    leisureRooms=0,
    leisureADR=0,
    leisureRevenue=0,

    residentialGroupRooms=0,
    residentialGroupADR=0,
    residentialGroupRevenue=0,

    otaRooms=0,
    otaADR=0,
    otaRevenue=0,

    wholesaleRooms=0,
    wholesaleADR=0,
    wholesaleRevenue=0,

    longTermContractRooms=0,
    longTermContractADR=0,
    longTermContractRevenue=0,
    monthlyContractRooms=0,
    monthlyContractADR=0,
    monthlyContractRevenue=0,
    airlineCrewRooms=0,
    airlineCrewADR=0,
    airlineCrewRevenue=0,
    staffRooms=0,
    staffADR=0,
    staffRevenue=0
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
                  <th className="head-col border-left" colSpan={3}>Bar</th>
                  <th className="head-col border-left" colSpan={3}>Public Discount</th>
                  <th className="head-col border-left" colSpan={3}>Corporate Discount</th>
                  <th className="head-col border-left" colSpan={3}>Partnership Discount</th>
                  <th className="head-col border-left" colSpan={3}>Online Advantage</th>
                  <th className="head-col border-left" colSpan={3}>Corporate Groups</th>
                  <th className="head-col border-left" colSpan={3}>Leisure Groups</th>
                  <th className="head-col border-left" colSpan={3}>Residential Groups</th>
                  <th className="head-col border-left" colSpan={3}>OTAs</th>
                  <th className="head-col border-left" colSpan={3}>Wholesale</th>
                  <th className="head-col border-left" colSpan={3}>Long Term Contract</th>
                  <th className="head-col border-left" colSpan={3}>Monthly Contract</th>
                  <th className="head-col border-left" colSpan={3}>Airline Crew Group</th>
                  <th className="head-col total-content " colSpan={3}>Staff</th>
                  
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
                 
                  <th className="head-col  total-content" >Rooms</th>
                  <th className="head-col  ">ADR</th>
                  <th className="head-col ">Revenue</th>
                </tr>
              </thead>
              <tbody>
              {state && state.length
                  ? state.map((list: any, index: number) => {
                    let weekendDay = moment(months[index]).day();
                      return ( index > months.length - 1 ? null :
                        <>
                          <tr
                            key={`monthly-${index}`}
                            className={weekendDay === 5 ||
                              weekendDay === 6 ||
                              weekendDay === 0 ? "weekend-bg" : ""}
                          >
                            <td
                              className="title-col  text-center"
                            >
                              {moment(months[index]).format("ddd DD MMM")}
                              {/* {list.title}{" "} */}
                            </td>
                            
                            <td
                              className={`content-col ${
                                list.barValueRooms && parseInt(list.barValueRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {" "}
                              {list.barValueRooms ? list.barValueRooms : "-"}{" "}
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
                                list.barValueRevenue && parseInt(list.barValueRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.barValueRevenue ? list.barValueRevenue : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.publicDiscountRooms && parseInt(list.publicDiscountRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.publicDiscountRooms ? list.publicDiscountRooms : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.publicDiscountADR && parseInt(list.publicDiscountADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.publicDiscountADR ? list.publicDiscountADR : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.publicDiscountRevenue && parseInt(list.publicDiscountRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.publicDiscountRevenue ? list.publicDiscountRevenue : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.corporateDiscountRooms && parseInt(list.corporateDiscountRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.corporateDiscountRooms ? list.corporateDiscountRooms : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.corporateDiscountADR && parseInt(list.corporateDiscountADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.corporateDiscountADR ? list.corporateDiscountADR : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.corporateDiscountRevenue && parseInt(list.corporateDiscountRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {" "}
                              {list.corporateDiscountRevenue ? list.corporateDiscountRevenue : "-"}{" "}
                            </td>
                            <td
                              className={`content-col ${
                                list.partnershipDiscountRooms &&
                                parseInt(list.partnershipDiscountRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.partnershipDiscountRooms ? list.partnershipDiscountRooms : "-"}{" "}
                            </td>
                            <td
                              className={`content-col ${
                                list.partnershipDiscountADR && parseInt(list.partnershipDiscountADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.partnershipDiscountADR ? list.partnershipDiscountADR : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.partnershipDiscountRevenue && parseInt(list.partnershipDiscountRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.partnershipDiscountRevenue ? list.partnershipDiscountRevenue : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.onlineAdvRooms && parseInt(list.onlineAdvRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.onlineAdvRooms ? list.onlineAdvRooms : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.onlineAdvADR && parseInt(list.onlineAdvADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.onlineAdvADR ? list.onlineAdvADR : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.onlineAdvRevenue && parseInt(list.onlineAdvRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.onlineAdvRevenue ? list.onlineAdvRevenue : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.corporateGroupRooms && parseInt(list.corporateGroupRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.corporateGroupRooms ? list.corporateGroupRooms : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.corporateGroupADR && parseInt(list.corporateGroupADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {" "}
                              {list.corporateGroupADR ? list.corporateGroupADR : "-"}{" "}
                            </td>
                            <td
                              className={`content-col ${
                                list.corporateGroupRevenue &&
                                parseInt(list.corporateGroupRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.corporateGroupRevenue ? list.corporateGroupRevenue : "-"}{" "}
                            </td>
                            <td
                              className={`content-col ${
                                list.leisureRooms && parseInt(list.leisureRooms) < 0
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
                                list.leisureRevenue && parseInt(list.leisureRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.leisureRevenue ? list.leisureRevenue : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.residentialGroupRooms && parseInt(list.residentialGroupRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.residentialGroupRooms ? list.residentialGroupRooms : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.residentialGroupADR && parseInt(list.residentialGroupADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.residentialGroupADR ? list.residentialGroupADR : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.residentialGroupRevenue && parseInt(list.residentialGroupRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.residentialGroupRevenue ? list.residentialGroupRevenue : "-"}
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
                                list.otaADR &&
                                parseInt(list.otaADR) < 0
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
                                list.wholesaleRooms && parseInt(list.wholesaleRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.wholesaleRooms ? list.wholesaleRooms : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.wholesaleADR && parseInt(list.wholesaleADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.wholesaleADR ? list.wholesaleADR : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.wholesaleRevenue && parseInt(list.wholesaleRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.wholesaleRevenue ? list.wholesaleRevenue : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.longTermContractRooms && parseInt(list.longTermContractRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.longTermContractRooms ? list.longTermContractRooms : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.longTermContractADR && parseInt(list.longTermContractADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.longTermContractADR ? list.longTermContractADR : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.longTermContractRevenue && parseInt(list.longTermContractRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.longTermContractRevenue ? list.longTermContractRevenue : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.monthlyContractRooms && parseInt(list.monthlyContractRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.monthlyContractRooms ? list.monthlyContractRooms : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.monthlyContractADR && parseInt(list.monthlyContractADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.monthlyContractADR ? list.monthlyContractADR : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.monthlyContractRevenue && parseInt(list.monthlyContractRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.monthlyContractRevenue ? list.monthlyContractRevenue : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.airlineCrewRooms && parseInt(list.airlineCrewRooms) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.airlineCrewRooms ? list.airlineCrewRooms : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.airlineCrewADR && parseInt(list.airlineCrewADR) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.airlineCrewADR ? list.airlineCrewADR : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.airlineCrewRevenue && parseInt(list.airlineCrewRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.airlineCrewRevenue ? list.airlineCrewRevenue : "-"}
                            </td>
                            <td
                              className={`content-col total-content  ${
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
                                list.staffRevenue && parseInt(list.staffRevenue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.staffRevenue ? list.staffRevenue : "-"}
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
                  <td className="total-col">{barValueRevenue}</td>
                  <td className="total-col">{publicDiscountRooms}</td>
                  <td className="total-col">{publicDiscountADR}</td>
                  <td className="total-col ">{publicDiscountRevenue}</td>
                  <td className="total-col ">{corporateDiscountRooms}</td>
                  <td className="total-col ">{corporateDiscountADR}</td>
                  <td className="total-col">{corporateDiscountRevenue}</td>
                  <td className="total-col">{partnershipDiscountRooms}</td>
                  <td className="total-col">{partnershipDiscountADR}</td>
                  <td className="total-col">{partnershipDiscountRevenue}</td>
                  <td className="total-col">{onlineAdvRooms}</td>
                  <td className="total-col ">{onlineAdvADR}</td>
                  <td className="total-col ">{onlineAdvRevenue}</td>
                  <td className="total-col ">{corporateGroupRooms}</td>
                  <td className="total-col">{corporateGroupADR}</td>
                  <td className="total-col">{corporateGroupRevenue}</td>
                  <td className="total-col">{leisureRooms}</td>
                  <td className="total-col">{leisureADR}</td>
                  <td className="total-col">{leisureRevenue}</td>
                  <td className="total-col ">{residentialGroupRooms}</td>
                  <td className="total-col ">{residentialGroupADR}</td>
                  <td className="total-col ">{residentialGroupRevenue}</td>
                  <td className="total-col">{otaRooms}</td>
                  <td className="total-col ">{otaADR}</td>
                  <td className="total-col ">{otaRevenue}</td>
                  <td className="total-col ">{wholesaleRooms}</td>
                  <td className="total-col">{wholesaleADR}</td>
                  <td className="total-col">{wholesaleRevenue}</td>
                  <td className="total-col">{longTermContractRooms}</td>
                  <td className="total-col">{longTermContractADR}</td>
                  <td className="total-col">{longTermContractRevenue}</td>
                  <td className="total-col">{monthlyContractRooms}</td>
                  <td className="total-col">{monthlyContractADR}</td>
                  <td className="total-col">{monthlyContractRevenue}</td>
                  <td className="total-col">{airlineCrewRooms}</td>
                  <td className="total-col">{airlineCrewADR}</td>
                  <td className="total-col">{airlineCrewRevenue}</td>
                  <td className="total-col total-content">{staffRooms}</td>
                  <td className="total-col ">{staffADR}</td>
                  <td className="total-col ">{staffRevenue}</td>
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
