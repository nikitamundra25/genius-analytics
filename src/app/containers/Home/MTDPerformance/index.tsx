import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { ErrorComponent } from "../../../components/Error";
import { requestMTRDRGIPerformanceData, requestMTRDRGIPerformanceFutureData, requestMTRDRGIPerformancePastData } from "../../../../actions";
import moment from "moment";
import { checkDateFormat } from "../../../../config";

const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);

const MTDPerformance  = ({ graphdata = [] , date}: any) => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.MTRDRGIPerformanceReducer
  );
  // useEffect(() => {
  //   dispatch(requestMTRDRGIPerformanceData());
  //   // eslint-disable-next-line
  // }, []);

  useEffect(() => {

    let selectedDate = moment(date).format(checkDateFormat);
    // const selectedDate: any = new Date(date);
    let currentDate = moment(new Date()).format(checkDateFormat);
    if (selectedDate > currentDate) {
      dispatch(requestMTRDRGIPerformanceFutureData());
    } else if (selectedDate < currentDate) {
      dispatch(requestMTRDRGIPerformancePastData());
    } else if (selectedDate === currentDate) {
      dispatch(requestMTRDRGIPerformanceData());
    }


    // eslint-disable-next-line
  }, [date]);


  const labeltemplate = (args:any) => {
    return (<div  style={{fontSize: '11px'}}>
      <span>{args.point.y}</span>
    </div>);
};

  const RGICharts = [
    {
        dataSource: data && data.length && data[0] ? data[0].data : [],
        xName: "x",
        yName: "y1",
        type: "Bar",
        //fill: "#2e75b7",
        fill: "url(#rgi-chart)",
        name: "RGI",
        width: 2,
        cornerRadius: {
          bottomLeft: 0,
          bottomRight: 4,
          topLeft: 0,
          topRight: 4,
        },
        marker: {
          dataLabel: {
            visible: true,
            position: "Middle",
            
            // rx: 10,
            // ry: 10,
            font: {
              fontWeight: "600",
              color: "#fff",
            },
          },
        },
    },
    {
      dataSource: data && data.length && data[0] ? data[0].data : [],
        xName: "x",
        yName: "y2",
        type: "Bar",
        //fill: "#2e75b7",
        fill: "url(#rgi-chart)",
        name: "RGI",
        yAxisName:'yAxis2',
        width: 2,
        cornerRadius: {
          bottomLeft: 0,
          bottomRight: 4,
          topLeft: 0,
          topRight: 4,
        },
        marker: {
          dataLabel: {
            visible: true,
            position: "Middle",
            // rx: 10,
            // ry: 10,
            template: labeltemplate,
            font: {
              fontWeight: "600",
              color: "#fff",
            },
          },
        },
    },
  ];

  const MPICharts = [
    {
      dataSource: data && data.length && data[1] ? data[1].data : [],
      xName: "x",
      yName: "y1",
      type: "Bar",
      //fill: "#5398d9",
      fill: "url(#mpi-chart)",
      name: "MPI",
      width: 2,
      cornerRadius: {
        bottomLeft: 0,
        bottomRight: 4,
        topLeft: 0,
        topRight: 4,
      },
      marker: {
        dataLabel: {
          visible: true,
          position: "Middle",
          // rx: 10,
          // ry: 10,
          font: {
            fontWeight: "600",
            color: "#fff",
          },
        },
      },
    },
    {
      dataSource: data && data.length && data[1] ? data[1].data : [],
        xName: "x",
        yName: "y2",
        type: "Bar",
        //fill: "#5398d9",
        fill: "url(#mpi-chart)",
        name: "MPI",
        yAxisName:'yAxis2',
        width: 2,
        cornerRadius: {
          bottomLeft: 0,
          bottomRight: 4,
          topLeft: 0,
          topRight: 4,
        },
        marker: {
          dataLabel: {
            visible: true,
            position: "Middle",
            // rx: 10,
            // ry: 10,
            template: labeltemplate,
            font: {
              fontWeight: "600",
              color: "#fff",
            },
          },
        },
    },
  ];

  const ARICharts = [
    {
      dataSource: data && data.length && data[2] ? data[2].data : [],
          xName: "x",
          yName: "y1",
          type: "Bar",
          cornerRadius: {
            bottomLeft: 0,
            bottomRight: 4,
            topLeft: 0,
            topRight: 4,
          },
          //fill: "#1f4e79",
          fill: "url(#ari-chart)",
          name: "ARI",
          width: 2,
          marker: {
            dataLabel: {
              visible: true,
              position: "Middle",
              // rx: 10,
              // ry: 10,
              font: {
                fontWeight: "600",
                color: "#fff",
              },
            },
          },
    },
    {
      dataSource: data && data.length && data[2] ? data[2].data : [],
          xName: "x",
          yName: "y2",
          type: "Bar",
          cornerRadius: {
            bottomLeft: 0,
            bottomRight: 4,
            topLeft: 0,
            topRight: 4,
          },
          //fill: "#1f4e79",
          fill: "url(#ari-chart)",
          yAxisName:'yAxis2',
          name: "ARI",
          width: 2,
          marker: {
            dataLabel: {
              visible: true,
              position: "Middle",
              // rx: 10,
              // ry: 10,
              template: labeltemplate,
              font: {
                fontWeight: "600",
                color: "#fff",
              },
            },
          },
    },
  ];


  // const RTGBarChart = [
  //   {
     
  //     title: "RGI",
      
  //     charts: {
  //       dataSource: data && data.length && data[0] ? data[0].data : [],
  //       xName: "x",
  //       yName: "y1",
  //       type: "Bar",
  //       //fill: "#2e75b7",
  //       fill: "url(#rgi-chart)",
  //       name: "RGI",
  //       width: 1,
  //       cornerRadius: {
  //         bottomLeft: 0,
  //         bottomRight: 4,
  //         topLeft: 0,
  //         topRight: 4,
  //       },
  //       marker: {
  //         dataLabel: {
  //           visible: true,
  //           position: "Middle",
  //           // rx: 10,
  //           // ry: 10,
  //           font: {
  //             fontWeight: "600",
  //             color: "#fff",
  //           },
  //         },
  //       },
  //     },
  //   },
  //   {
  //     // id: "r2",
  //     title: "MPI",
  //     // color: "#5398d9",
  //     // data: graphdata[1].data,
  //     charts: {
  //       dataSource: data && data.length && data[1] ? data[1].data : [],
  //       xName: "x",
  //       yName: "y1",
  //       type: "Bar",
  //       //fill: "#5398d9",
  //       fill: "url(#mpi-chart)",
  //       name: "MPI",
  //       width: 1,
  //       cornerRadius: {
  //         bottomLeft: 0,
  //         bottomRight: 4,
  //         topLeft: 0,
  //         topRight: 4,
  //       },
  //       marker: {
  //         dataLabel: {
  //           visible: true,
  //           position: "Middle",
  //           // rx: 10,
  //           // ry: 10,
  //           font: {
  //             fontWeight: "600",
  //             color: "#fff",
  //           },
  //         },
  //       },
  //     },
  //   },
  //   {
  //     // id: "r3",
  //     title: "ARI",
  //     // color: "#1f4e79",
  //     // data: graphdata[2].data,
  //     charts: {
  //         dataSource: data && data.length && data[2] ? data[2].data : [],
  //         xName: "x",
  //         yName: "y1",
  //         type: "Bar",
  //         cornerRadius: {
  //           bottomLeft: 0,
  //           bottomRight: 4,
  //           topLeft: 0,
  //           topRight: 4,
  //         },
  //         //fill: "#1f4e79",
  //         fill: "url(#ari-chart)",
  //         name: "ARI",
  //         width: 1,
  //         marker: {
  //           dataLabel: {
  //             visible: true,
  //             position: "Middle",
  //             // rx: 10,
  //             // ry: 10,
  //             font: {
  //               fontWeight: "600",
  //               color: "#fff",
  //             },
  //           },
  //         },
  //       },
        
  //   },
  // ];

  const SAMPLE_CSS = `
  #rgi-chart stop {
  stop-color: #2e75b7;
}
#rgi-chart stop[offset="0"] {
  stop-opacity: 1;
}
#rgi-chart stop[offset="1"] {
  stop-opacity: 1;
}

#mpi-chart stop {
  stop-color: #5398d9;
}
#mpi-chart stop[offset="0"] {
  stop-opacity: 1;
}
#mpi-chart stop[offset="1"] {
  stop-opacity: 1;
}

#ari-chart stop {
  stop-color: #1f4e79;
}
#ari-chart stop[offset="0"] {
  stop-opacity: 1;
}
#ari-chart stop[offset="1"] {
  stop-opacity: 1;
}

`;

  return (
    <>
    <style>
          {SAMPLE_CSS}
      </style>
  
        {isLoading ? (
          <WidgetLoader />
        ) : isError ? (
          <ErrorComponent
            message={"An error occured while fetching details "}
          />
        ) : (
          <Row className="row-inner h-100">
         
                    <Col sm={4} md={4} className="h-100" >
                      <React.Suspense
                        fallback={
                          <div className="card-loader">
                            <WidgetLoader />
                          </div>
                        }
                      >
                        <MixedCharts
                          id={`RGICharts`}
                          charts={RGICharts}
                          legend={false}
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
                            title: "RGI",
                          }}
                        />
                      </React.Suspense>
                      
                    </Col>
                    <Col sm={4} md={4} className="h-100">
                      <React.Suspense
                        fallback={
                          <div className="card-loader">
                            <WidgetLoader />
                          </div>
                        }
                      >
                        <MixedCharts
                          id={`MPICharts`}
                          charts={MPICharts}
                          legend={false}
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
                            title: "MPI",
                          }}
                        />
                      </React.Suspense>
                      
                    </Col>
                    <Col sm={4} md={4} >
                      <React.Suspense
                        fallback={
                          <div className="card-loader">
                            <WidgetLoader />
                          </div>
                        }
                      >
                        <MixedCharts
                          id={`ARICharts`}
                          charts={ARICharts}
                          legend={false}
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
                            title: "ARI",
                          }}
                        />
                      </React.Suspense>
                      
                    </Col>
              
          </Row>
        )}
    
     <svg style={{ height: '0' }}>
     <defs>
         <linearGradient id="rgi-chart" x1="0" x2="0" y1="0" y2="1">
             <stop offset="0" />
             <stop offset="1" />
         </linearGradient>
     </defs>
 </svg>

 <svg style={{ height: '0' }}>
     <defs>
         <linearGradient id="mpi-chart" x1="0" x2="0" y1="0" y2="1">
             <stop offset="0" />
             <stop offset="1" />
         </linearGradient>
     </defs>
 </svg>
 <svg style={{ height: '0' }}>
 <defs>
     <linearGradient id="ari-chart" x1="0" x2="0" y1="0" y2="1">
         <stop offset="0" />
         <stop offset="1" />
     </linearGradient>
 </defs>
</svg>
    </>
  );
};

export default MTDPerformance