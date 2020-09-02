import React, { useEffect } from "react";
import {  Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestBOBData ,requestBOBPastData,requestBOBFutureData} from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import moment from "moment";
import { checkDateFormat } from "../../../../config";

const BOB = () => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.BOBReducer
  );
  const {  selectedDate : date} = useSelector(
    (state: IRootState) => state.DateSelectionReducer
  );
  // useEffect(() => {      
  //   dispatch(requestBOBData());
  //   // eslint-disable-next-line
  // }, []);

  useEffect(() => {

    let selectedDate = moment(date).format(checkDateFormat);
    // const selectedDate: any = new Date(date);
    let currentDate = moment(new Date()).format(checkDateFormat);
    if (selectedDate > currentDate) {
      dispatch(requestBOBFutureData());
    } else if (selectedDate < currentDate) {
      dispatch(requestBOBPastData());
    } else if (selectedDate === currentDate) {
      dispatch(requestBOBData());
    }

    // eslint-disable-next-line
  }, [date]);

  return (
    <>
      {/* <Card> */}
        

        {isLoading ? (
          <WidgetLoader />
        ) : isError ? (
          <ErrorComponent
            message={"An error occured while fetching details "}
          />
        ) : (
          <div className="business-table-section">
            <Table responsive className="business-table mb-0">
              <thead>
                <tr className="business-top-row">
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th colSpan={3} className="variance-col">
                    VARIANCES
                  </th>
                </tr>
                <tr>
                  <th></th>
                  <th className="head-col">BOB</th>
                  <th className="head-col">BUDGET</th>
                  <th className="head-col">2016</th>
                  <th className="head-col">STLY</th>
                  <th className="head-col">Vs.BUD</th>
                  <th className="head-col">Vs.LY</th>
                  <th className="head-col">Vs.STLY</th>
                </tr>
              </thead>
              <tbody>
                {data && data.length
                  ? data.map((list: any, index: number) => {
                      return (
                        <tr key={index}>
                          <td className="title-col">{list.title} </td>
                          <td
                            className={`content-col ${
                              
                              list.BOBValue && parseInt(list.BOBValue) < 0
                                  ? "text-danger"
                                  : ""
                            }`}
                          >
                            {list.BOBValue
                              ?  parseFloat(list.BOBValue).toLocaleString()
                              : "-"}{ list.title === "OCC" && list.BOBValue ? "%" : ""}  
                              
                          </td>
                          <td
                            className={`content-col ${
                              list.budget && parseInt(list.budget) < 0
                                ? "text-danger"
                                : ""
                            }`}
                          >
                            {list.budget
                              ?  parseFloat(list.budget).toLocaleString()
                              : "-"}{ list.title === "OCC" && list.budget ? "%" : ""}
                          </td>
                          <td
                            className={`content-col ${
                              list.ly && parseInt(list.ly) < 0
                                ? "text-danger"
                                : ""
                            }`}
                          >
                            {list.ly
                              ?  parseFloat(list.ly).toLocaleString()
                              : "-"}{ list.title === "OCC" && list.ly ? "%" : ""}
                          </td>
                          <td
                            className={`content-col ${
                              list.stlyValue && parseInt(list.stlyValue) < 0
                                ? "text-danger"
                                : ""
                            }`}
                          >
                            {list.stlyValue
                              ? parseFloat(list.stlyValue).toLocaleString()
                              : "-"}{ list.title === "OCC"  && list.stlyValue? "%" : ""}
                              
                          </td>
                          <td
                            className={`content-col bg-2 ${
                              list.VSbud && parseInt(list.VSbud) < 0
                                  ? "text-danger"
                                  : ""
                            }`}
                          >
                            {list.VSbud ? parseFloat(list.VSbud).toLocaleString() : "-"}{ list.title === "OCC" && list.VSbud ? "%" : ""}
                          </td>
                          <td
                            className={`content-col bg-2 ${
                                list.VSly && parseInt(list.VSly) < 0
                                  ? "text-danger"
                                  : ""
                            }`}
                          >
                            {list.VSly
                              ? parseFloat(list.VSly).toLocaleString()
                              : "-"}{ list.title === "OCC"   && list.VSly  ? "%" : ""}
                          </td>
                          <td
                            className={`content-col bg-2 ${
                              list.VSstly && parseInt(list.VSstly) < 0
                                ? "text-danger"
                                : ""
                            }`}
                          >
                            {list.VSstly
                              ? parseInt(list.VSstly).toLocaleString()
                              : "-"}{ list.title === "OCC" && list.VSstly ? "%" : ""}
                          </td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </Table>
          </div>
        )}
      {/* </Card> */}
    </>
  );
};

export default BOB;
