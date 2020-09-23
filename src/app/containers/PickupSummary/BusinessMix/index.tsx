import React, { useEffect, useState } from "react";
import { ApiHelper } from "../../../../helper";
import { Table, ProgressBar } from "react-bootstrap";
import { IBookingChannelModel } from "../../../../interfaces";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import moment from "moment";

// const MixedCharts = React.lazy(() =>
//   import("../../../components/Charts/MixedCharts")
// );

const PickupBusinessMix = (props: any) => {
  const { date} = props;

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

  // const labeltemplate = (args: any) => {
  //   return (
  //     <div
  //       style={{
  //         fontSize: "10px",
  //         padding: "2px 2px 2px 2px",
  //         borderRadius: "2px",
  //         background: '#2b72b5',
  //       }}>
  //       <span>{args.point.y}%</span>
  //     </div>
  //   );
  // };
  // const labeltemplate1 = (args: any) => {
  //   return (
  //     <div
  //       style={{
  //         fontSize: "10px",
  //         padding: "2px 2px 2px 2px",
  //         borderRadius: "2px",
  //         background: '#ee792b',
  //       }}>
  //       <span>{args.point.y}</span>
  //     </div>
  //   );
  // };
  const {
    isLoading: DowDataLoading,
    data: DowData,
    isError: DowDataError,
  } = state;

  // const Charts = [
  //   {
  //     dataSource: DowData,
  //     xName: "name",
  //     yName: "RoomNts",
  //     type: "Area",
  //     //fill: "#4684bd",
  //     fill: "url(#pickupmix-chart)",
  //     name: "Room Nts",
  //     width: 1,
  //     marker: {
  //       dataLabel: {
  //         visible: true,
  //         position: "Bottom",
  //        // fill: "#2b72b5",
  //        template: labeltemplate,
  //         font: {
  //           fontWeight: "600",
  //           color: "#fff",
  //         },
  //       },
  //     },
  //   },

  //   {
  //     dataSource: DowData,
  //     xName: "name",
  //     yName: "ADR",
  //     type: "Spline",
  //     fill: "#ee792b",
  //     name: "ADR",
  //     width: 3,
  //     yAxisName: "yAxis1",
  //     marker: {
  //       visible: true,
  //       width: 8,
  //       height: 8,
  //       fill: "#ee792b",
       
  //       border: { width: 0, color: "#ee792b" },
  //       dataLabel: {
  //         visible: true,
  //         position: "Top",
  //        // fill: "#ee792b",
  //         template: labeltemplate1,
  //         font: {
  //           fontWeight: "600",
  //           color: "#ffffff",
  //         },
  //       },
  //     },
  //   },
  // ];

  // const SAMPLE_CSS = `
  //     #pickupmix-chart stop {
  //     stop-color: #4684bd;
  //   }
  //   #pickupmix-chart stop[offset="0"] {
  //     stop-opacity: 1;
  //   }
  //   #pickupmix-chart stop[offset="1"] {
  //     stop-opacity: 0.3;
  //   }
  //   `;

  return (
    <>
      {/* <style>{SAMPLE_CSS}</style> */}
      {DowDataLoading ? (
        <WidgetLoader />
      ) : DowDataError ? (
        <ErrorComponent message={"An error occured while fetching details "} />
      ) : (
        <>
        {DowData && DowData.length ? 
          <React.Suspense
            fallback={
              <div className='card-loader'>
                <WidgetLoader />
              </div>
            }>
              <div className='sub-title mb-2'>Business Mix</div>
               <Table responsive striped  className='businessmix-table mb-2 '>
              <thead>
                <tr>
                  <th className="head-col bg1">Segment</th>
                  <th className="head-col bg2">Rooms</th>
                  <th className="head-col bg3">ADR</th>
                </tr>
              </thead>
              <tbody>
                {DowData.map((list:any,i:number)=>{
                  
               const maxPeak=  Math.max.apply(Math, DowData.map(function(key:any) { return key.ADR; }))
                          
                  return <tr key= {i}>
                  <td className="row-title">{list.name} </td>
                  <td className="content-col">
                    <ProgressBar
                      now={list.RoomNts}
                      className="custom-bar-mix"
                      max={100}
                    />
                    <span className="progressbar-value-mix">
                      {`${list.RoomNts}%`}
                    </span>
                  </td>
                  <td className="content-col">
                  <ProgressBar
                      now={list.ADR}
                      className="custom-bar-mix bg-2"
                      max={maxPeak}
                    />
                    <span className="progressbar-value-mix">
                      {list.ADR}
                    </span>
                  </td>
                </tr>
                }) }
              </tbody>
              </Table>
            {/* <MixedCharts
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
                  
                  rangePadding: 'None',
                 
                },
                tooltip: { enable: true },
                
                height:"250px"
              }}
              charts={Charts}
            /> */}

            
          </React.Suspense>
          :null}
        </>
      )}

      {/* <svg style={{ height: "0" }} >
        <defs>
          <linearGradient  id='pickupmix-chart' x1='0' x2='0' y1='0' y2='1'>
            <stop offset='0' />
            <stop offset='1' />
          </linearGradient>
        </defs>
      </svg> */}
    </>
  );
};

export default PickupBusinessMix;
