import React, { useEffect, useState } from "react";
import { ApiHelper } from "../../../../helper";
import { IBookingChannelModel } from "../../../../interfaces";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import moment from "moment";

const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);

const PickupBusinessMix = (props: any) => {
  const { index ,date} = props;

  const [state, setState] = useState<IBookingChannelModel>({
    isLoading: true,
    isError: true,
    data: [],
  });
  const getData = async () => {
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Pickup",
      "/pickupSummaryBusinessMix.json",
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
      data:  filterData && filterData.businessMixData && filterData.businessMixData.length ? filterData.businessMixData : [],
      isError: false,
    });
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const labeltemplate = (args: any) => {
    return (
      <div
        style={{
          fontSize: "11px",
          padding: "3px 3px 3px 3px",
          borderRadius: "3px",
          background: '#2b72b5',
        }}>
        <span>{args.point.y}%</span>
      </div>
    );
  };
  const {
    isLoading: DowDataLoading,
    data: DowData,
    isError: DowDataError,
  } = state;

  const Charts = [
    {
      dataSource: DowData,
      xName: "name",
      yName: "RoomNts",
      type: "Area",
      //fill: "#4684bd",
      fill: "url(#pickupmix-chart)",
      name: "Room Nts",
      yAxisName: "yAxis1",
      width: 1,
      marker: {
        dataLabel: {
          visible: true,
          position: "Bottom",
         // fill: "#2b72b5",
          template: labeltemplate,
          font: {
            fontWeight: "600",
            color: "#fff",
          },
        },
      },
    },

    {
      dataSource: DowData,
      xName: "name",
      yName: "ADR",
      type: "Spline",
      fill: "#ee792b",
      name: "ADR",
      width: 3,
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

  const SAMPLE_CSS = `
      #pickupmix-chart stop {
      stop-color: #4684bd;
    }
    #pickupmix-chart stop[offset="0"] {
      stop-opacity: 1;
    }
    #pickupmix-chart stop[offset="1"] {
      stop-opacity: 0.3;
    }
    `;

  return (
    <>
      <style>{SAMPLE_CSS}</style>
      {DowDataLoading ? (
        <WidgetLoader />
      ) : DowDataError ? (
        <ErrorComponent message={"An error occured while fetching details "} />
      ) : (
        <>
          <React.Suspense
            fallback={
              <div className='card-loader'>
                <WidgetLoader />
              </div>
            }>
            <MixedCharts
              id={`PickupBusinessChart-${index}`}
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
                //height: `${setHeight}px`,
                height:"180px"
              }}
              charts={Charts}
            />

            <div className='sub-title'>Business Mix</div>
          </React.Suspense>
        </>
      )}

      <svg style={{ height: "0" }} >
        <defs>
          <linearGradient  id='pickupmix-chart' x1='0' x2='0' y1='0' y2='1'>
            <stop offset='0' />
            <stop offset='1' />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default PickupBusinessMix;
