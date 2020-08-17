import React, {useEffect} from "react";
import moment from "moment";
import {
  Card,
  Table,
  OverlayTrigger,
  Tooltip,
  ProgressBar,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestCumulativeTableData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { getMonths } from "../../../../helper";
import caretup from "../../../../assets/img/caret-up.svg";
import caretdown from "../../../../assets/img/caret-down.svg";
const months = getMonths();
months.push("Total");


const CumulativeTable = ({ selectedDate }: any) => {
 
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.CumulativeTableReducer
  );
  useEffect(() => {
    dispatch(requestCumulativeTableData());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Card>
        <Card.Body>
        {isLoading ? (
          <WidgetLoader />
        ) : isError ? (
          <ErrorComponent
            message={"An error occured while fetching details "}
          />
        ) : (
        <>
          <div className="dashboard-yearly-table mb-3">
            <Table className="yearly-table mb-0" responsive>
              <thead>
                <tr className="business-top-row">
                  <th></th>
                  {months.map((month: string, indx: number) => (
                    <th key={month} className="head-col">
                      {month}
                      <br />{" "}
                      {month === "Total"
                        ? moment(selectedDate).format("YYYY")
                        : moment().format("MMMM") === month
                        ? "BOB/Actual"
                        : indx+1 > parseInt(moment().format("M")) 
                        ? "BOB"
                        : "Actual"}
                      <div className="header-sub-title">
                        <span>BUD</span>
                        <span>LY</span>
                        {/* <span>VS.BUD</span>
                        <span>VS.LY</span> */}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                { 
                data && data.tableData.length ? 
                data.tableData.map((table: any, index: number) => (
                  <React.Fragment key={`${table.type}-${index}`}>
                    <tr>
                      <td className="row-title">{table.name}</td>
                      {months.map((month: any, index: number) => (
                        <td
                          key={`month-${index}`}
                          className="content-col"
                        >
                          <div className="d-flex align-items-center flex-wrap">
                            <div className="text-col">
                              {" "}
                              { table.monthData && table.monthData.length 
                              ?  table.type === "occ" || table.type === "room-dev" ?  table.monthData[index]
                                :  parseInt(table.monthData[index]).toLocaleString()
                                : 0}
                            </div>
                            <OverlayTrigger
                              key={"top1"}
                              placement={"top"}
                              overlay={
                                <Tooltip id={`tooltip-increase`}>
                                  {table.vsBud && table.vsBud.length
                                    ? table.type === "occ" || table.type === "room-dev" 
                                    ? table.vsBud[index] : parseInt(table.vsBud[index]).toLocaleString()
                                    : 0}
                                </Tooltip>
                              }
                            >
                              <div className="icon-col">
                                <img
                                  src={
                                    parseInt(table.monthData[index]) <=
                                    parseInt(table.vsBud[index])
                                      ? caretup
                                      : caretdown
                                  }
                                  alt="increase"
                                  width="12"
                                />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger
                              key={"top2"}
                              placement={"top"}
                              overlay={
                                <Tooltip id={`tooltip-decrease`}>
                                  {table.vsLy && table.vsLy.length
                                  ? table.type === "occ" || table.type === "room-dev" 
                                    ? table.vsLy[index] : parseInt(table.vsLy[index]).toLocaleString()
                                    : 0}
                                </Tooltip>
                              }
                            >
                              <div className="icon-col">
                                <img
                                  src={
                                    parseInt(table.monthData[index]) <=
                                    parseInt(table.vsLy[index])
                                      ? caretup
                                      : caretdown
                                  }
                                  alt="decrease"
                                  width="12"
                                />
                              </div>
                            </OverlayTrigger>
                          </div>
                        </td>
                      ))}
                    </tr>
                  </React.Fragment>
                )): null }
              </tbody>
            </Table>
          </div>

          <div className="dashboard-yearly-table ">
            <Table className="yearly-table mb-0" responsive>
              <thead>
                <tr className="business-top-row">
                  <th></th>
                  
                  {months.map((month: string, index: number) => (
                    <th key={month} className="head-col min-wauto pb-1">
                      {month}
                      <br />{" "}
                      {month === "Total"
                        ? moment(selectedDate).format("YYYY")
                        : moment().format("MMMM") === month
                        ? "BOB/Actual"
                        : index+1 > parseInt(moment().format("M")) 
                        ? "BOB"
                        : "Actual"}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
              {data && data.pickupTableData.length ? 
              data.pickupTableData.map((list:any,index:number)=>{
                // let newArr:any = []
                // for (let index = 0; index < list.subData.length; index++) {
                //   const element: any = list.subData[index].value;
                //   newArr.push(element)
                // }
                // let maxArr = newArr.reduce(function(final:any, current:any) {
                //   for (let i = 0; i < final.length; ++i) {
                //     if (current[i] > final[i]) {
                //       final[i] = current[i];
                //     }
                //   }
                //   return final;
                // });
               return ( list.subData.map((subdata : any, ind:number)=>{      
               return (
               <>
               <tr key={ind} >
                 {ind === 0 ? (
                      <td
                        colSpan={14}
                        className="row-title bg-1 "
                      >
                        {list.title}
                      </td>
                    ) : null}
                 {/* {ind === 0 ? (
                <td className="row-title" rowSpan={list.subData.length}>
                  {list.title}
                </td>
                   ) : null} */}
                </tr>
                <tr>
                  
                  <td className="row-title "> {subdata.name} </td>
                 { subdata.value.map((value: any, i: number) => (
                      list.type === "label" ?
                    <td key={`${i}`}  className={`content-col  
                    ${
                      parseInt(value) < 0
                        ? "bg-negative"
                        : ""
                    }`}>
                      {value ? parseInt(value).toLocaleString() : "-"}
                    </td>
                    : <td
                    key={`${i}`}
                    className="content-col bg-white"
                  >
                    <ProgressBar
                      now={value}
                      className="custom-bar"
                      //label={`${value}%`}
                      max ={80}
                    />
                    <span className="progressbar-value">{value}%</span>
                  </td>
                  ))}
                 
              </tr>
              </>)
              }))
              })
            : null
            }
              </tbody>
            </Table>
          </div>
      </>
        )}
      </Card.Body>
      </Card>
    </>
  );
};

export default CumulativeTable;
