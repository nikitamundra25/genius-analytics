import React, { useEffect, useState } from "react";
import { ApiHelper } from "../../../../helper";
import { IBookingChannelModel } from "../../../../interfaces";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import moment from "moment";

const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);

const PickupDOWOCCSegment = (props: any) => {
  const { index,date } = props;
  const [state, setState] = useState<IBookingChannelModel>({
    isLoading: true,
    isError: true,
    data: [],
  });
  const getData = async () => {
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Pickup",
      "/pickupSummaryDowData.json",
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
      data: filterData && filterData.dowData && filterData.dowData.length ? filterData.dowData : [],
      isError: false,
    });
  };

  const labeltemplate = (args: any) => {
    return (
      <div style={{ fontSize: "11px" }}>
        <span>{args.point.y}%</span>
      </div>
    );
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
  const { isLoading: OCCLoading, data: OccData, isError: OCCError } = state;

  const Charts = [
    {
      dataSource: OccData,
      xName: "name",
      yName: "OCC",
      type: "Column",
      fill: "#4684bd",
      name: "OCC",
      yAxisName: "yAxis1",
      width: 1,
      animation:{enable:false},
      cornerRadius: { bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
      marker: {
        dataLabel: {
          visible: true,
          position: "Bottom",
          template: labeltemplate,
          font: {
            fontWeight: "600",
            color: "#fff",
          },
        },
      },
    },

    {
      dataSource: OccData,
      xName: "name",
      yName: "ADR",
      type: "Spline",
      fill: "#ee792b",
      name: "ADR",
      width: 3,
      dashArray: "8 5",
      animation:{enable:false},
      marker: {
        visible: true,
        width: 8,
        height: 8,
        fill: "#ee792b",
        border: { width: 0, color: "#ee792b" },
        dataLabel: {
          visible: true,
          position: "Top",
          fill: "#ee792b",
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
      {OCCLoading ? (
        <WidgetLoader />
      ) : OCCError ? (
        <ErrorComponent message={"An error occured while fetching details "} />
      ) : (
        OccData && OccData.length ?
        <React.Suspense
          fallback={
            <div className='card-loader'>
              <WidgetLoader />
            </div>
          }>
          <div className='sub-title  mb-1'>DOW OCC</div>
          <MixedCharts
            id={`DOWChart-${index}`}
            
            chartSettings={{
              primaryXAxis: {
                valueType: "Category",
                interval: 1,
                majorGridLines: { width: 0 },
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
              height:"180px"
             // height: `${setHeight}px`,
            }}
            charts={Charts}
          />
         
        </React.Suspense>
        : null
      )}
    </>
  );
};

export default PickupDOWOCCSegment;
