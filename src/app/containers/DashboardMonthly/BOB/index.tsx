import React,{useEffect} from "react";
import { Card, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestMonthlyBOBData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";

const MonthlyBOB = (props: any) => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.MonthlyBOBReducer
  );
  useEffect(() => {
    dispatch(requestMonthlyBOBData());
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
                    <th className="date-col">
                      <div className="date-div">
                        <span>Thu</span>
                        <span>1 Nov</span>
                      </div>
                    </th>
                    <th className="date-col weekend-bg">
                      <div className="date-div">
                        <span>Fri</span>
                        <span>2 Nov</span>
                      </div>
                    </th>
                    <th className="date-col weekend-bg">
                      <div className="date-div">
                        <span>Sat</span>
                        <span>3 Nov</span>
                      </div>
                    </th>
                    <th className="date-col weekend-bg">
                      <div className="date-div">
                        <span>Sun</span>
                        <span>4 Nov</span>
                      </div>
                    </th>
                    <th className="date-col">
                      <div className="date-div">
                        <span>Mon</span>
                        <span>5 Nov</span>
                      </div>
                    </th>
                    <th className="date-col">
                      <div className="date-div">
                        <span>Tue</span>
                        <span>6 Nov</span>
                      </div>
                    </th>
                    <th className="date-col">
                      <div className="date-div">
                        <span>Wed</span>
                        <span>7 Nov</span>
                      </div>
                    </th>
                    <th className="date-col ">
                      <div className="date-div">
                        <span>Thu</span>
                        <span>8 Nov</span>
                      </div>
                    </th>
                    <th className="date-col weekend-bg">
                      <div className="date-div">
                        <span>Fri</span>
                        <span>9 Nov</span>
                      </div>
                    </th>
                    <th className="date-col weekend-bg">
                      <div className="date-div">
                        <span>Sat</span>
                        <span>10 Nov</span>
                      </div>
                    </th>
                    <th className="date-col weekend-bg">
                      <div className="date-div">
                        <span>Sun</span>
                        <span>11 Nov</span>
                      </div>
                    </th>
                    <th className="date-col">
                      <div className="date-div">
                        <span>Mon</span>
                        <span>12 Nov</span>
                      </div>
                    </th>
                    <th className="date-col">
                      <div className="date-div">
                        <span>Tue</span>
                        <span>13 Nov</span>
                      </div>
                    </th>
                    <th className="date-col">
                      <div className="date-div">
                        <span>Wed</span>
                        <span>14 Nov</span>
                      </div>
                    </th>
                    <th className="date-col ">
                      <div className="date-div">
                        <span>Thu</span>
                        <span>15 Nov</span>
                      </div>
                    </th>
                    <th className="date-col weekend-bg">
                      <div className="date-div">
                        <span>Fri</span>
                        <span>16 Nov</span>
                      </div>
                    </th>
                    <th className="date-col weekend-bg">
                      <div className="date-div">
                        <span>Sat</span>
                        <span>17 Nov</span>
                      </div>
                    </th>
                    <th className="date-col weekend-bg">
                      <div className="date-div">
                        <span>Sun</span>
                        <span>18 Nov</span>
                      </div>
                    </th>
                    <th className="date-col ">
                      <div className="date-div">
                        <span>Mon</span>
                        <span>19 Nov</span>
                      </div>
                    </th>
                    <th className="date-col">
                      <div className="date-div">
                        <span>Tue</span>
                        <span>20 Nov</span>
                      </div>
                    </th>
                    <th className="date-col ">
                      <div className="date-div">
                        <span>Wed</span>
                        <span>21 Nov</span>
                      </div>
                    </th>
                    <th className="date-col">
                      <div className="date-div">
                        <span>Thu</span>
                        <span>22 Nov</span>
                      </div>
                    </th>
                    <th className="date-col weekend-bg">
                      <div className="date-div">
                        <span>Fri</span>
                        <span>23 Nov</span>
                      </div>
                    </th>
                    <th className="date-col weekend-bg">
                      <div className="date-div">
                        <span>Sat</span>
                        <span>24 Nov</span>
                      </div>
                    </th>
                    <th className="date-col weekend-bg">
                      <div className="date-div">
                        <span>Sun</span>
                        <span>25 Nov</span>
                      </div>
                    </th>
                    <th className="date-col">
                      <div className="date-div">
                        <span>Mon</span>
                        <span>26 Nov</span>
                      </div>
                    </th>
                    <th className="date-col">
                      <div className="date-div">
                        <span>Tue</span>
                        <span>27 Nov</span>
                      </div>
                    </th>
                    <th className="date-col ">
                      <div className="date-div">
                        <span>Wed</span>
                        <span>28 Nov</span>
                      </div>
                    </th>
                    <th className="date-col ">
                      <div className="date-div">
                        <span>Thu</span>
                        <span>29 Nov</span>
                      </div>
                    </th>
                    <th className="date-col weekend-bg">
                      <div className="date-div">
                        <span>Fri</span>
                        <span>30 Nov</span>
                      </div>
                    </th>
                    <th className="date-col weekend-bg">
                      <div className="date-div">
                        <span>Sat</span>
                        <span>31 Nov</span>
                      </div>
                    </th>
                    <th>Total</th>
                  </tr>
                  {/* <tr>
                      <th></th>
                      <th className="head-col">BOB</th>
                      <th className="head-col">BUDGET</th>
                      <th className="head-col">LY</th>
                      <th className="head-col">STLY</th>
                      <th className="head-col">Vs.BUD</th>
                      <th className="head-col">Vs.LY</th>
                      <th className="head-col">Vs.STLY</th>
                    </tr> */}
                </thead>
                <tbody>
                  {data && data.length
                    ? data.map((list: any, index: number) => {
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
                                        } ${data.isWeekend ? "bg-2" : ""} `}
                                        key={i}
                                      >
                                        {data.num}{" "}
                                      </td>
                                    );
                                  })}
                                  <td className="total-col  "> {key.total}</td>
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
