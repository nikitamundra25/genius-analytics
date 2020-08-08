import React, { useEffect } from "react";
import { Card, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestMonthlyBOBData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { getMonthsData } from "../../../../helper";
import moment from "moment";

const MonthlyBOB = (props: any) => {
  const months = getMonthsData(new Date());
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
    data.map((list: any, index: number) => {
      return list.subData.map((subdata: any, i: number) =>
        months.map((key: any, ind: number) => {
          data[index].subData[i].data[ind].date = moment(key).day();
        })
      );
    });
    setbobList(data);
    // eslint-disable-next-line
  }, [data]);

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
                      <th></th>
                      {months.map((month: any) => {
                        let weekendDay = moment(month).day();
                        return (
                          <th
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
                                  <tr key={ind}>
                                    {ind === 0 ? (
                                      <td
                                        rowSpan={list.subData.length}
                                        className="title-col bg-1 text-center"
                                      >
                                        {list.title}
                                      </td>
                                    ) : null}
                                    <td className="title-col white-nowrap">
                                      {key.title}{" "}
                                    </td>
                                    {key.data.map((data: any, i: number) => {                         
                                      return (
                                        <td
                                          className={`content-col ${
                                            parseInt(data.num) < 0
                                              ? "text-danger"
                                              : ""
                                          } ${
                                            parseInt(data.date) === 0 ||
                                            parseInt(data.date) === 5 ||
                                            parseInt(data.date) === 6
                                              ? "weekend-bg"
                                              : "bg-2"
                                          } `}
                                          key={i}
                                        >
                                          {data.num}{" "}
                                        </td>
                                      );
                                    })}
                                    <td className="total-col  ">
                                      {" "}
                                      {key.total}
                                    </td>
                                  </tr>
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
