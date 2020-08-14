import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { ApiHelper } from "../../../../helper";
import { IBookingChannelModel } from "../../../../interfaces";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import moment from "moment";

const MonthlyTable = (props: any) => {
  const [state, setState] = useState<IBookingChannelModel>({
    isLoading: true,
    isError: true,
    data: [],
  });
  const getData = async () => {
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Pickup",
      "/pickupSummaryTable.json",
      "GET"
    );
    if (isError) {
      setState({
        isLoading: false,
        data: [],
        isError: true,
      });
      return;
    }
    let filterData:any =  data.data.filter((list:any) => {
      return list.month === moment(props.date).format("MMMM-YY");
    })[0];
    setState({
      isLoading: false,
      data: filterData && filterData.summaryTableData && filterData.summaryTableData.length ? filterData.summaryTableData : [],
      isError: false,
    });
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
  const { isLoading, data, isError } = state;

  return (
    <>
      {isLoading ? (
        <WidgetLoader />
      ) : isError ? (
        <ErrorComponent message={"An error occured while fetching details "} />
      ) : (
        <React.Suspense
          fallback={
            <div className='card-loader'>
              <WidgetLoader />
            </div>
          }>
          <div className='pickup-table-section'>
            <Table responsive className='pickup-table mb-0'>
              <thead>
                <tr className='business-top-row'>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th colSpan={3} className='variance-col'>
                    VARIANCES
                  </th>
                </tr>
                <tr>
                  <th></th>
                  <th className='head-col'>Pick-up</th>
                  <th className='head-col'>BOB</th>
                  <th className='head-col'>Budget</th>
                  <th className='head-col'>LY</th>
                  <th className='head-col'>STLY</th>
                  <th className='head-col'>Vs.BUD</th>
                  <th className='head-col'>Vs.LY</th>
                  <th className='head-col'>Vs.STLY</th>
                </tr>
              </thead>
              <tbody>
                {data && data.length
                  ? data.map((list: any, index: number) => {
                      return (
                        <tr key={index}>
                          <td className='title-col'>{list.title} </td>
                          <td
                            className={`content-col ${
                              list.pickupValue && parseInt(list.pickupValue) < 0
                                ? "text-danger"
                                : ""
                            }`}>
                            {list.pickupValue ? list.pickupValue : "-"}{" "}
                          </td>
                          <td
                            className={`content-col ${
                              list.bob && parseInt(list.bob) < 0
                                ? "text-danger"
                                : ""
                            }`}>
                            {list.bob ? list.bob : "-"}
                          </td>
                          <td
                            className={`content-col ${
                              list.budget && parseInt(list.budget) < 0
                                ? "text-danger"
                                : ""
                            }`}>
                            {list.budget ? list.budget : "-"}
                          </td>
                          <td
                            className={`content-col ${
                              list.ly && parseInt(list.ly) < 0
                                ? "text-danger"
                                : ""
                            }`}>
                            {list.ly ? list.ly : "-"}
                          </td>
                          <td
                            className={`content-col ${
                              list.stly && parseInt(list.stly) < 0
                                ? "text-danger"
                                : ""
                            }`}>
                            {list.stly ? list.stly : "-"}
                          </td>
                          <td
                            className={`content-col bg-2 ${
                              list.vsBud && parseInt(list.vsBud) < 0
                                ? "text-danger"
                                : ""
                            }`}>
                            {list.vsBud ? list.vsBud : "-"}
                          </td>
                          <td
                            className={`content-col bg-2 ${
                              list.vsLy && parseInt(list.vsLy) < 0
                                ? "text-danger"
                                : ""
                            }`}>
                            {list.vsLy ? list.vsLy : "-"}
                          </td>
                          <td
                            className={`content-col bg-2 ${
                              list.vsStly && parseInt(list.vsStly) < 0
                                ? "text-danger"
                                : ""
                            }`}>
                            {list.vsStly ? list.vsStly : "-"}
                          </td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </Table>
          </div>
        </React.Suspense>
      )}
    </>
  );
};

export default MonthlyTable;
