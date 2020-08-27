import React, { useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
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

export default ({ graphdata = [] , date= new Date()}: any) => {
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

  const [setHeight, setsetHeight] = React.useState<string>("250px");

 useEffect(() => {
    const modalbtn: HTMLElement | null = document.getElementById(`mtd-card`);
    if (modalbtn) {
      setTimeout(() => {
        const check = modalbtn.getBoundingClientRect();
        const getHeight =check.height;
        const setgraphHeight = getHeight - 75 ;
        //console.log("hello chart height on resize",check, getHeight, setgraphHeight);
        setsetHeight(`${setgraphHeight}px`)
      }, 100);
      
    }
    // eslint-disable-next-line
  }, [data]);

  useEffect(() => {

    const resizeListener = () => {

      // // change width from the state object
      const modalbtn: HTMLElement | null = document.getElementById(
        `mtd-card`
      );
     // console.log("modalbtn", modalbtn);

      if (modalbtn) {
        setTimeout(() => {
          const check = modalbtn.getBoundingClientRect();
          const getHeight =check.height;
          const setgraphHeight = getHeight - 75 ;
          //console.log("hello chart height on resize",check, getHeight, setgraphHeight);
          setsetHeight(`${setgraphHeight}px`)
        }, 100);
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
    <Card id="mtd-card">
      <WidgetHeader title={"MTD RGI Performance"} showToggle={false} />
      <Card.Body>
        {isLoading ? (
          <WidgetLoader />
        ) : isError ? (
          <ErrorComponent
            message={"An error occured while fetching details "}
          />
        ) : (
          <Row className="row-inner">
            {/* {RTGBarChart && RTGBarChart.length
              ? RTGBarChart.map((key: any, index: number) => {
                  return ( */}
                    <Col sm={4} md={4} >
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
                            height: setHeight,
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
                            height: setHeight,
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
                            height: setHeight,
                          }}
                        />
                      </React.Suspense>
                      
                    </Col>
                  {/* );
                })
              : null} */}
          </Row>
        )}
      </Card.Body>
    </Card>
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
