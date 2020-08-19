import React, { useEffect } from "react";
import { Card, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestMonthlyBOBData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { getMonthsData } from "../../../../helper";
import moment from "moment";
import "../index.scss";

const MonthlyBOB = (props: any) => {
  const months = getMonthsData(props.selectedDate);
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
            return (data[index].subData[i].data[ind].date = moment(key).day());
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
            return (data[index].subData[i].data[ind].date = moment(key).day());
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
                      <th></th>
                      {months.map((month: any, indx: number) => {
                        let weekendDay = moment(month).day();
                        return (
                          <th
                            key={indx}
                            className={`date-col ${
                              weekendDay === 5 ||
                              weekendDay === 6 ||
                              weekendDay === 0
                                ? "weekend-bg"
                                : ""
                            }`}
                          >
                            <div className="date-div">
                              <span>{moment(month).format("ddd")} </span>
                              <span>{moment(month).format("DD MMM")}</span>
                            </div>
                          </th>
                        );
                      })}
                      <th>Total</th>
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
                                          className="title-col bg-1 "
                                        >
                                          {list.title}
                                        </td>
                                      ) : null}
                                    </tr>
                                    <tr key={ind}>
                                      <td className="title-col white-nowrap">
                                        {key.title}{" "}
                                      </td>
                                      {key.data.map((data: any, i: number) => {
                                        return i > months.length - 1 ? null : (
                                          <td
                                            className={`content-col  
                                            ${
                                              parseInt(data.num) < 0
                                                ? "bg-negative"
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
                                                : parseInt(data.date) === 5 ||
                                                  parseInt(data.date) === 6 ||
                                                  parseInt(data.date) === 0
                                                ? "weekend-bg"
                                                : "bg-2"
                                            } `}
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
