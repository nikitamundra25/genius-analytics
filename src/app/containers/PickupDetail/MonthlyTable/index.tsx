import React, { useEffect } from "react";
// import Loader from "../../../components/Loader/Loader";
import { Table } from "react-bootstrap";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestPickupDetailTableData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { getMonthsData } from "../../../../helper";
import moment from "moment";


const MonthlyTable = ({ date }: any) => {
  const dispatch = useDispatch();
  const months:any = getMonthsData(new Date(date));

  const { isLoading, data: graphdata, isError } = useSelector(
    (state: IRootState) => state.pickupDetailTableReducer
  );

  useEffect(() => {
    dispatch(requestPickupDetailTableData());
    // eslint-disable-next-line
  }, []);
  // let result:any  = []

  // useEffect(() => {
  //   if(graphdata && graphdata.length){
  //     var result = [ graphdata.reduce((acc:any, n:any) => {
  //       for (var prop in n) {
  //         if(prop !== "title"){
  //           if (acc.hasOwnProperty(prop)){
  //             acc[prop] += n[prop] ?  parseInt(n[prop]) : 0;
  //           } 
  //           else{ 
  //             acc[prop] =n[prop] ? parseInt(n[prop]) : 0
  //           }
  //         }
  //       }
  //       return acc;
  //     }, {})]
  //     console.log(result,"resultttttttt")
  //   }
  //   // eslint-disable-next-line
  // }, [graphdata]);




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
