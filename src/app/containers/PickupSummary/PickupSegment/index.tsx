import React, { useEffect, useState } from "react";
import { ApiHelper } from "../../../../helper";
import { IBookingChannelModel } from "../../../../interfaces";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import moment from "moment";
import { monthYearFormat } from "../../../../config";

const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);
  

const PickupSegment = ({ index, date = new Date() }: any) => {
  //const setHeight1 = setHeight + 140;
  const [setHeight, setsetHeight] = React.useState<string>("230px");
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
      return list.month === moment(date).format(monthYearFormat);
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

  
  useEffect(() => {
    const window_width = window.innerWidth;
    console.log("window_width",  window_width);
    if (window_width < 1200) {
      setsetHeight(`230`)
      console.log("window_width lesss 1200",  window_width);
    }
    else{
      setsetHeight(`375`)
      console.log("window_width mx 1200",  window_width);
    }
 
  
  // eslint-disable-next-line
}, []);

useEffect(() => {

  const resizeListener = () => {

    // // change width from the state object
   const window_width = window.innerWidth;
    //console.log("window_width",  window_width);
    if (window_width < 1200) {
      setsetHeight(`230`)
      //console.log("window_width lesss 1200",  window_width);
    }
    else{
      setsetHeight(`375`)
      //console.log("window_width mx 1200",  window_width);
    }
    
  };
  // set resize listener
  window.addEventListener("resize", resizeListener);

  // clean up function
  return () => {
    // remove resize listener
    window.removeEventListener("resize", resizeListener);
  };
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
        data && data.length ?  
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
                //interval: 1,
                enableTrim: false,
                majorGridLines: { width: 0 },
                // maximumLabelWidth: '100',
                // labelPlacement: 'OnTicks' ,
               // labelIntersectAction: 'None',
               // edgeLabelPlacement: 'Shift',
                // labelStyle: {
                //   fontStyle: 'bold',
                //   size: '8px',
                //   color:'black'
                // },
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
             // height:"375px"
             height: `${setHeight}px`,
            }}
            charts={Charts}
          />
          <div className='sub-title mb-1'>Pick up by segment</div>
         </React.Suspense>
         : null
      )} 
    </>
  );
};

export default PickupSegment;
