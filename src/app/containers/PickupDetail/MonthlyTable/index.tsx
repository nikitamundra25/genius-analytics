import React, { useEffect } from "react";
// import Loader from "../../../components/Loader/Loader";
import { Table } from "react-bootstrap";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestPickupDetailTableData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";


const MonthlyTable = ({ index }: any) => {
  const dispatch = useDispatch();

  const { isLoading, data: graphdata, isError } = useSelector(
    (state: IRootState) => state.pickupDetailTableReducer
  );

  useEffect(() => {
    dispatch(requestPickupDetailTableData());
    // eslint-disable-next-line
  }, []);
  // let result:any  = []



// const sumCount = (list = []) => {
//   const sum:any = {};
//   // count number
//   list.map((item:any) => {
//       Object.entries(item).map(([key, val] : any) => {  
//           if (key === "barValue" || key === "leisureBreak" ||key === "corporate" ||key === "consortia" ||key === "promotions" ||key === "groups" ||key === "ota" ||key === "fit"|| key === "total" ) {
//             sum[key] = sum[key] ? (sum[key] + parseInt(val)) : parseInt(val);
//           }
//       })
//   });
  
//   return sum;
// }

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
                  <th className="head-col border-left" colSpan={2}>Bar</th>
                  <th className="head-col border-left" colSpan={2}>Public Discount</th>
                  <th className="head-col border-left" colSpan={2}>Corporate Discount</th>
                  <th className="head-col border-left" colSpan={2}>Partnership Discount</th>
                  <th className="head-col border-left" colSpan={2}>Online Advantage</th>
                  <th className="head-col border-left" colSpan={2}>Employee Travel</th>
                  <th className="head-col border-left" colSpan={2}>Corporate Contracted</th>
                  <th className="head-col border-left" colSpan={2}>Monthly Contract</th>
                  <th className="head-col border-left" colSpan={2}>Long Term Contract</th>
                  <th className="head-col border-left" colSpan={2}>Wholesale</th>
                  <th className="head-col border-left" colSpan={2}>Corporate Group</th>
                  <th className="head-col border-left" colSpan={2}>Corporate Monthly Group</th>
                  <th className="head-col border-left" colSpan={2}>Leisure Group</th>
                  <th className="head-col border-left" colSpan={2}>Airline Crew Group</th>
                  <th className="head-col total-content " colSpan={3}>Total Pick-up</th>
                  
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
                  <th className="head-col  total-content" >Rooms</th>
                  <th className="head-col  ">ADR</th>
                  <th className="head-col ">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {graphdata && graphdata.length
                  ? graphdata.map((list: any, index: number) => {
                    
                      return (
                        <>
                          <tr
                            key={`monthly-${index}`}
                            className={list.isWeekend ? "weekend-bg" : ""}
                          >
                            <td
                           
                              className="title-col  text-center"
                            >
                              {list.title}{" "}
                            </td>
                            
                            <td
                              className={`content-col ${
                                list.barValue && parseInt(list.barValue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {" "}
                              {list.barValue ? list.barValue : "-"}{" "}
                            </td>
                            <td
                              className={`content-col ${
                                list.leisureBreak &&
                                parseInt(list.leisureBreak) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.leisureBreak ? list.leisureBreak : "-"}{" "}
                            </td>
                            <td
                              className={`content-col ${
                                list.corporate && parseInt(list.corporate) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.corporate ? list.corporate : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.consortia && parseInt(list.consortia) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.consortia ? list.consortia : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.promotions && parseInt(list.promotions) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.promotions ? list.promotions : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.groups && parseInt(list.groups) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.groups ? list.groups : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.ota && parseInt(list.ota) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.ota ? list.ota : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.fit && parseInt(list.fit) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.fit ? list.fit : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.barValue && parseInt(list.barValue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {" "}
                              {list.barValue ? list.barValue : "-"}{" "}
                            </td>
                            <td
                              className={`content-col ${
                                list.leisureBreak &&
                                parseInt(list.leisureBreak) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.leisureBreak ? list.leisureBreak : "-"}{" "}
                            </td>
                            <td
                              className={`content-col ${
                                list.corporate && parseInt(list.corporate) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.corporate ? list.corporate : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.consortia && parseInt(list.consortia) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.consortia ? list.consortia : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.promotions && parseInt(list.promotions) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.promotions ? list.promotions : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.groups && parseInt(list.groups) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.groups ? list.groups : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.ota && parseInt(list.ota) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.ota ? list.ota : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.fit && parseInt(list.fit) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.fit ? list.fit : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.barValue && parseInt(list.barValue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {" "}
                              {list.barValue ? list.barValue : "-"}{" "}
                            </td>
                            <td
                              className={`content-col ${
                                list.leisureBreak &&
                                parseInt(list.leisureBreak) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.leisureBreak ? list.leisureBreak : "-"}{" "}
                            </td>
                            <td
                              className={`content-col ${
                                list.corporate && parseInt(list.corporate) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.corporate ? list.corporate : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.consortia && parseInt(list.consortia) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.consortia ? list.consortia : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.promotions && parseInt(list.promotions) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.promotions ? list.promotions : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.groups && parseInt(list.groups) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.groups ? list.groups : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.ota && parseInt(list.ota) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.ota ? list.ota : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.fit && parseInt(list.fit) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.fit ? list.fit : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.barValue && parseInt(list.barValue) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {" "}
                              {list.barValue ? list.barValue : "-"}{" "}
                            </td>
                            <td
                              className={`content-col ${
                                list.leisureBreak &&
                                parseInt(list.leisureBreak) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.leisureBreak ? list.leisureBreak : "-"}{" "}
                            </td>
                            <td
                              className={`content-col ${
                                list.corporate && parseInt(list.corporate) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.corporate ? list.corporate : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.consortia && parseInt(list.consortia) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.consortia ? list.consortia : "-"}
                            </td>
                            <td
                              className={`content-col total-content  ${
                                list.total && parseInt(list.total) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.total ? list.total : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.promotions && parseInt(list.promotions) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.promotions ? list.promotions : "-"}
                            </td>
                            <td
                              className={`content-col ${
                                list.groups && parseInt(list.groups) < 0
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {list.groups ? list.groups : "-"}
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
                  <td className="total-col">5</td>
                  <td className="total-col">19</td>
                  <td className="total-col">23</td>
                  <td className="total-col">12</td>
                  <td className="total-col">3</td>
                  <td className="total-col ">0</td>
                  <td className="total-col ">17</td>
                  <td className="total-col ">7</td>
                  <td className="total-col">5</td>
                  <td className="total-col">19</td>
                  <td className="total-col">23</td>
                  <td className="total-col">12</td>
                  <td className="total-col">3</td>
                  <td className="total-col ">0</td>
                  <td className="total-col ">17</td>
                  <td className="total-col ">7</td>
                  <td className="total-col">5</td>
                  <td className="total-col">19</td>
                  <td className="total-col">23</td>
                  <td className="total-col">12</td>
                  <td className="total-col">3</td>
                  <td className="total-col ">0</td>
                  <td className="total-col ">17</td>
                  <td className="total-col ">7</td>
                  <td className="total-col">3</td>
                  <td className="total-col ">0</td>
                  <td className="total-col ">17</td>
                  <td className="total-col ">7</td>
                  <td className="total-col total-content">86</td>
                  <td className="total-col ">17</td>
                  <td className="total-col ">7</td>
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
