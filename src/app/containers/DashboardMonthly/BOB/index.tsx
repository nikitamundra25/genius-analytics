import React, { useEffect } from "react";
import { Card, Table, OverlayTrigger, Tooltip, } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestMonthlyBOBData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { getMonthsData } from "../../../../helper";
import { defaultDateFormat } from "../../../../config/Constant";
import moment from "moment";
import "../index.scss";
import bob from "../../../../assets/img/bob.svg";
import pickup from "../../../../assets/img/pickup.svg";
import market from "../../../../assets/img/availability.svg";
import bed from "../../../../assets/img/bed.svg";

const MonthlyBOB = (props: any) => {
  const months = getMonthsData(props.selectedDate, "dashboard");
  const dispatch = useDispatch();
  const [bobList, setbobList] = React.useState<any>([]);

  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.MonthlyBOBReducer
  );
  useEffect(() => {
    dispatch(requestMonthlyBOBData());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (data && data.length) {
      data.map((list: any, index: number) => {
        return list.subData.map((subdata: any, i: number) =>
          months.map((key: any, ind: number) => {
            return (data[index].subData[i].data[ind].date = moment(key));
          })
        );
      });
      setbobList(data);
    }
    // eslint-disable-next-line
  }, [data]);

  useEffect(() => {
    if (data && data.length) {
      data.map((list: any, index: number) => {
        return list.subData.map((subdata: any, i: number) =>
          months.map((key: any, ind: number) => {
            return (data[index].subData[i].data[ind].date = moment(key));
          })
        );
      });
      setbobList(data);
    }
    // eslint-disable-next-line
  }, [props.selectedDate]);

  return (
    <>
      <Card>
        <Card.Body className="month-table-card">
          {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
            <React.Suspense
              fallback={
                <div className="card-loader">
                  <WidgetLoader />
                </div>
              }
            >
              <div className="dashboard-monthly-table">
                <Table responsive className="mb-0">
                  <thead>
                    <tr className="business-top-row">
                      <th className="month-title">
                        <span className="mr-2">
                          <i className="icon-calendar"/>
                        </span>
                        <span>
                          {moment(props.selectedDate).format("MMMM")}
                          </span>
                        </th>
                      {months.map((month: any, indx: number) => {
                        console.log("monthmonth",month);
                        
                        let weekendDay = moment(month).day();
                        return (
                          <th
                            key={indx}
                            className={`date-col
                            ${moment().format(defaultDateFormat) === moment(month).format(defaultDateFormat) ? "today-bg" : ""  }
                            ${
                              weekendDay === 5 ||
                              weekendDay === 6 ||
                              weekendDay === 0
                                ? "weekend-bg"
                                : ""
                            }`}
                            
                          >
                            <div className="date-div">
                              <span className="date-text">{moment(month).format("DD")}</span>
                              <span className="weekname-text">{moment(month).format("ddd")} </span>
                            </div>
                          </th>
                        );
                      })}
                      <th className="total-head">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bobList && bobList.length
                      ? bobList.map((list: any, index: number) => {
                          return (
                            <>
                              {list.subData.map((key: any, ind: number) => {
                                return (
                                  <>
                                  <tr>
                                      {ind === 0 ? (
                                        <td
                                          colSpan={
                                            months.length
                                              ? months.length + 2
                                              : 33
                                          }
                                          className="title-col sperator-white-section"
                                        >
                                          {/* {list.title} */}
                                        </td>
                                      ) : null}
                                    </tr>
                                    <tr>
                                      {ind === 0 ? (
                                        <td
                                          colSpan={
                                            months.length
                                              ? months.length + 2
                                              : 33
                                          }
                                          className="title-col bg-1 "
                                        >
                                          <div className="separtor-line"></div>
                                        </td>
                                      ) : null}
                                    </tr>
                                    <tr key={ind}>
                                      <td className="title-col white-nowrap">
                                        <OverlayTrigger
                                            key={"top2"}
                                            placement={"top"}
                                            overlay={
                                              <Tooltip id={`tooltip-${ind}`}>
                                                {list.title}
                                              </Tooltip>
                                            }
                                          >
                                            <div className="d-flex align-items-cente subtitle-section">
                                          
                                              { list.title === "Business on the Books" ? (
                                                <img src={bob}  width="20px" alt={list.title}/>
                                              ) : list.title === "Pick up since Yesterday" ? (
                                                <img src={pickup}  width="20px" alt={list.title}/>
                                              ) : list.title === "Availability & Rates" ? (
                                                <img src={market}  width="20px" alt={list.title}/>
                                              ) : list.title === "Room Type Availability" ? (
                                                <img src={bed}  width="20px" alt={list.title}/>
                                              ) : null }
                                              
                                              <span>{key.title}</span>
                                            
                                          </div>
                                        </OverlayTrigger>
                                      </td>
                                      {key.data.map((data: any, i: number) => {
                                        return i > months.length - 1 ? null : (
                                          <td
                                            className={`content-col  
                                            ${
                                              parseInt(data.num) < 0
                                                ? "text-danger"
                                                : ""
                                            } ${
                                              key.title === "OCC" &&
                                              parseInt(data.num) >= 0 &&
                                              parseInt(data.num) < 50
                                                ? "bg-min"
                                                : key.title === "OCC" &&
                                                  parseInt(data.num) >= 50 &&
                                                  parseInt(data.num) < 86
                                                ? "bg-mid"
                                                : key.title === "OCC" &&
                                                  parseInt(data.num) < 100
                                                ? "bg-max"
                                                :
                                                moment(data.date).day() === 5 ||
                                                moment(data.date).day() === 6 ||
                                                moment(data.date).day() === 0
                                                
                                                ? "weekend-bg"
                                                : "bg-2"
                                            }  ${moment().format(defaultDateFormat) === moment(data.date).format(defaultDateFormat) ? "today-bg" : ""  }`}
                                            key={i}
                                          >
                                            {key.title === "OCC"
                                              ? `${parseInt(
                                                  data.num
                                                ).toLocaleString()}%`
                                              : parseInt(
                                                  data.num
                                                ).toLocaleString()}{" "}
                                          </td>
                                        );
                                      })}
                                      <td
                                        className={`${
                                          key.total ? "total-col" : "bg-white"
                                        }`}
                                      >
                                        {key.total
                                          ? key.title === "OCC"
                                            ? `${parseInt(
                                                key.total
                                              ).toLocaleString()}%`
                                            : parseInt(
                                                key.total
                                              ).toLocaleString()
                                          : null}
                                      </td>
                                    </tr>
                                  </>
                                );
                              })}
                            </>
                          );
                        })
                      : null}
                  </tbody>
                </Table>
              </div>
            </React.Suspense>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default MonthlyBOB;
