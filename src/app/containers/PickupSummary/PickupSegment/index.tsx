import React, { useEffect, useState } from "react";
import { ApiHelper } from "../../../../helper";
import { IBookingChannelModel } from "../../../../interfaces";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import moment from "moment";

const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);

const PickupSegment = ({ index, date }: any) => {
  //const setHeight1 = setHeight + 140;
  const [state, setState] = useState<IBookingChannelModel>({
    isLoading: true,
    isError: true,
    data: [],
  });
  const getData = async () => {
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Pickup",
      "/pickupSummarySegmentData.json",
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
      return list.month === moment(date).format("MMMM-YY");
    })[0];
    
    setState({
      isLoading: false,
      data: filterData && filterData.segmentData && filterData.segmentData.length ? filterData.segmentData : [],
      isError: false,
    });
  };
  useEffect(() => {
    // dispatch(requestPickupSummarySegmentData({ month }));
    getData();
    // eslint-disable-next-line
  }, []);
  const { isLoading, data, isError } = state;
  const Charts = [
    // {
    //   dataSource: data,
    //   xName: "name",
    //   yName: "OCC",
    //   type: "Column",
    //   fill: "#4684bd",
    //   name: "OCC%",
    //   yAxisName: "yAxis1",
    //   visible: false,
    //   width: 1,
    //   cornerRadius: { bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
    //   marker: {
    //     dataLabel: {
    //       visible: true,
    //       rx: 10,
    //       ry: 10,
    //       font: {
    //         fontWeight: "600",
    //         color: "#000",
    //       },
    //     },
    //   },
    // },

    {
      dataSource: data,
      xName: "name",
      yName: "RoomNts",
      type: "Column",
      fill: "#4684bd",
      name: "Room Nts",
      width: 1,
      yAxisName: "yAxis1",
      cornerRadius: { bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
      marker: {
        dataLabel: {
          visible: true,
          rx: 10,
          ry: 10,
          font: {
            fontWeight: "600",
            color: "#000",
          },
        },
      },
    },

    {
      dataSource: data,
      xName: "name",
      yName: "ADR",
      type: "Spline",
      fill: "#ee792b",
      name: "ADR",
      width: 3,
      marker: {
        visible: false,
        width: 8,
        height: 8,
        fill: "#ee792b",
        border: { width: 0, color: "#ee792b" },
        dataLabel: {
          visible: true,
          position: "Top",
          fill: "#ee792b",
          border: { width: 1, color: "#4684bd" },
          font: {
            fontWeight: "600",
            color: "#ffffff",
          },
        },
      },
    },
  ];

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
          <MixedCharts
            id={`PickupChart-${index}`}
            legend={false}
            chartSettings={{
              primaryXAxis: {
                valueType: "Category",
                interval: 1,
                enableTrim: false,
                majorGridLines: { width: 0 },
                maximumLabelWidth: '100',
                
              },
              primaryYAxis: {
                labelFormat: "{value}",
                edgeLabelPlacement: "Shift",
                majorGridLines: { width: 0 },
                majorTickLines: { width: 0 },
                lineStyle: { width: 0 },
                labelStyle: {
                  color: "transparent",
                },
                visible: false,
              },
              tooltip: { enable: true },
              height:"395px"
              //height: `${setHeight1}px`,
            }}
            charts={Charts}
          />
          <div className='sub-title'>Pick up by segment</div>
        </React.Suspense>
      )}
    </>
  );
};

export default PickupSegment;
