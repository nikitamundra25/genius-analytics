import React, { useEffect } from "react";
import { Card, Table } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestBOBData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";

const BOB = () => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.BOBReducer
  );
  useEffect(() => {
    dispatch(requestBOBData());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Card>
        <WidgetHeader
          title={"Business on the Books"}
          activeToggle={"grid"}
          showToggle={false}
        />

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
                              ? list.title === "Revenue" ||
                                list.title === "ADR" ||
                                list.title === "RevPar"
                                ? `£${list.BOBValue}`
                                : list.BOBValue
                              : "-"}{" "}
                          </td>
                          <td
                            className={`content-col ${
                              list.budget && parseInt(list.budget) < 0
                                ? "text-danger"
                                : ""
                            }`}
                          >
                            {list.budget
                              ? list.title === "Revenue" ||
                                list.title === "ADR" ||
                                list.title === "RevPar"
                                ? `£${list.budget}`
                                : list.budget
                              : "-"}
                          </td>
                          <td
                            className={`content-col ${
                              list.ly && parseInt(list.ly) < 0
                                ? "text-danger"
                                : ""
                            }`}
                          >
                            {list.ly
                              ? list.title === "Revenue" ||
                                list.title === "ADR" ||
                                list.title === "RevPar"
                                ? `£${list.ly}`
                                : list.ly
                              : "-"}
                          </td>
                          <td
                            className={`content-col ${
                              list.stlyValue && parseInt(list.stlyValue) < 0
                                ? "text-danger"
                                : ""
                            }`}
                          >
                            {list.stlyValue
                              ? list.title === "Revenue" ||
                                list.title === "ADR" ||
                                list.title === "RevPar"
                                ? `£${list.stlyValue}`
                                : list.stlyValue
                              : "-"}
                          </td>
                          <td
                            className={`content-col ${
                              list.VSbud && parseInt(list.VSbud) < 0
                                ? "text-danger"
                                : ""
                            }`}
                          >
                            {list.VSbud
                              ?  list.VSbud
                              : "-"}
                          </td>
                          <td
                            className={`content-col bg-2 ${
                              list.VSly && parseInt(list.VSly) < 0
                                ? "text-danger"
                                : ""
                            }`}
                          >
                            {list.VSly
                              ? list.title === "Revenue" ||
                                list.title === "ADR" ||
                                list.title === "RevPar"
                                ? `£${list.VSly}`
                                : list.VSly
                              : "-"}
                          </td>
                          <td
                            className={`content-col bg-2 ${
                              list.VSstly && parseInt(list.VSstly) < 0
                                ? "text-danger"
                                : ""
                            }`}
                          >
                            {list.VSstly
                              ? list.title === "Revenue" ||
                                list.title === "ADR" ||
                                list.title === "RevPar"
                                ? `£${list.VSstly}`
                                : list.VSstly
                              : "-"}
                          </td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </Table>
          </div>
        )}
      </Card>
    </>
  );
};

export default BOB;
