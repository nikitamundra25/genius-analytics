import React,{useEffect} from "react";
import { Row, Col, Table  } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import Loader from "../../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState, ToggleType } from "../../../../interfaces";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { ErrorComponent } from "../../../components/Error";
import { requestOccupacyStaticsData, requestOccupacyStaticsFutureData, requestOccupacyStaticsPastData } from "../../../../actions";
import moment from "moment";
import { checkDateFormat } from "../../../../config";

const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);

const OccupencyStatitics = ({ date}:Date|any) => {
  const [activeToggle, setactiveToggle] = React.useState<ToggleType>("graph");
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.OccupacyStaticsReducer
  );


  const labeltemplate = (args:any) => {
    return (<div  style={{fontSize: '9px'}}>
      <span>{args.point.y}%</span>
    </div>);
};
const labeltemplate1 = (args: any) => {
  return (
    <div
      style={{
        fontSize: "10px",
        padding: "3px 3px 3px 3px",
        background: '#26405d',
        borderRadius: "3px"
      }}>
      <span>{args.point.y}</span>
    </div>
  );
};
const labeltemplate2 = (args: any) => {
  return (
    <div
      style={{
        fontSize: "10px",
        padding: "4px 5px 4px 5px",
        background: '#26405d',
        borderRadius: "3px",
        color: parseInt(args.point.y) < 0 ? 'red' : ''
      }}>
      <span>{args.point.y}%</span>
    </div>
  );
};

  // useEffect(() => {
  //   dispatch(requestOccupacyStaticsData());
  //   // eslint-disable-next-line
  // }, []);

  useEffect(() => {
    let selectedDate = moment(date).format(checkDateFormat);
    // const selectedDate: any = new Date(date);
    let currentDate = moment(new Date()).format(checkDateFormat);
    if (selectedDate > currentDate) {
      dispatch(requestOccupacyStaticsFutureData());
    } else if (selectedDate < currentDate) {
      dispatch(requestOccupacyStaticsPastData());
    } else if (selectedDate === currentDate) {
      dispatch(requestOccupacyStaticsData());
    }

    // eslint-disable-next-line
  }, [date]);



    const Charts1 = [
        {
          dataSource: data && data.length && data[0] ? data[0].data : [],
          xName: "name",
          yName: "OCCTY",
          type: "SplineArea",
          width: 3,
          opacity: 0.4,
          fill:"rgb(43, 88, 143)",
          name: "OCC TY",
          yAxisName:'yAxis1',
          cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
          marker: {
            visible: true,
            width: 6,
            height: 6,
            fill: "rgb(43, 88, 143)",
            border: { width: 1, color: "rgb(43, 88, 143)" },
            dataLabel: {
              visible: false,
              position: "Bottom",
              font: {
                fontWeight: "600",
                color: "#000000",
              },
            },
          },
          
        },
        {
          dataSource: data && data.length && data[0] ? data[0].data : [],
          xName: "name",
          yName: "OCCLY",
          type: "SplineArea",
          width: 3,
          opacity: 0.4,
          fill:"rgb(247 218 228)",
          name: "OCC LY",
          yAxisName:'yAxis1',
          cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
          marker: {
            visible: true,
            width: 6,
            height: 6,
            fill: "rgb(94 193 185)",
            border: { width: 1, color: "rgb(94 193 185)" },
            dataLabel: {
              visible: false,
              position: "Bottom",
              font: {
                fontWeight: "600",
                color: "#000000",
              },
            },
          },

          
        },
        {
          dataSource: data && data.length && data[0] ? data[0].data : [],
          xName: "name",
          yName: "ADRTY",
          type: "Spline",
          fill: "#2bb5ec",
          name: "ADR TY",
          dashArray: "5",
          width: 2,
          marker: {
            visible: true,
            width: 8,
            height: 8,
            fill: "#2bb5ec",
            border: { width: 1, color: "#ddd" },
            dataLabel: {
              visible: true,
              position: "Top",
              //fill: "#26405d",
              template: labeltemplate1,
              font: {
                fontWeight: "600",
                color: "#ffffff",
                
              },
            },
          },

          
        },
        {
          dataSource: data && data.length && data[0] ? data[0].data : [],
          xName: "name",
          yName: "ADRLY",
          type: "Spline",
          fill: "#293046",
          name: "ADR LY",
          dashArray: "20 10",
          width: 2,
          marker: {
            visible: true,
            width: 8,
            height: 8,
            fill: "#293046",
            border: { width: 1, color: "#ddd" },
            dataLabel: {
              visible: true,
              position: "Bottom",
              //fill: "#26405d",
              template: labeltemplate1,
              font: {
                fontWeight: "600",
                color: "#ffffff",
                
              },
            },
          },
          
        },
      ];
      const Charts2 = [
        {
          dataSource: data && data.length && data[1] ? data[1].data : [],
          xName: "name",
          yName: "TY",
          type: "SplineArea",
          //fill: "#8293b1",
          //fill: "url(#ty-chart)",
          name: "TY",
          width: 3,
          opacity: 0.8,
          fill:"rgb(247 218 228)",
          cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
          marker: {
            visible: true,
            width: 6,
            height: 6,
            fill: "rgb(247 218 228)",
            border: { width: 1, color: "rgb(247 218 228)" },
            dataLabel: {
              visible: false,
              position: "Middle",
              template: labeltemplate,
              font: {
                fontWeight: "600",
                color: "#000",
              },
            },
          },
        },
        {
          dataSource: data && data.length && data[1] ? data[1].data : [],
          xName: "name",
          yName: "LY",
          //type: "Column",
          //fill: "#3269aa",
         // fill: "url(#ly-chart)",
          name: "LY",
          type: "SplineArea",
          width: 3,
          opacity: 0.4,
          fill:"rgb(43, 88, 143)",
          
          cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
          marker: {
            visible: true,
            width: 6,
            height: 6,
            fill: "rgb(43, 88, 143)",
            border: { width: 1, color: "rgb(43, 88, 143)" },
            dataLabel: {
              visible: false,
              position: "Middle",
              template: labeltemplate,
              font: {
                fontWeight: "600",
                color: "#000",
              },
            },
          },
        },
        {
          dataSource: data && data.length && data[1] ? data[1].data : [],
          xName: "name",
          yName: "Var",
          type: "Spline",
          fill: "#2f5891",
          name: "Var",
          dashArray: "5",
          width: 2,
          yAxisName:'yAxis1',
          marker: {
            visible: true,
            width: 8,
            height: 8,
            fill: "#2f5891",
            border: { width: 1, color: "#ddd" },
            dataLabel: {
              visible: true,
              position: "Top",
              //fill: "#26405d",
              template: labeltemplate2,
              font: {
                fontWeight: "600",
                color: "#ffffff",
              },
            },
          },
        },
      ];

  const SAMPLE_CSS = `
      #occty-chart stop {
      stop-color: #8293b1;
    }
    #occty-chart stop[offset="0"] {
      stop-opacity: 1;
    }
    #occty-chart stop[offset="1"] {
      stop-opacity: 1;
    }

    #occly-chart stop {
      stop-color: #3269aa;
    }
    #occly-chart stop[offset="0"] {
      stop-opacity: 1;
    }
    #occly-chart stop[offset="1"] {
      stop-opacity: 1;
    }

    #ty-chart stop {
      stop-color: #8293b1;
    }
    #ty-chart stop[offset="0"] {
      stop-opacity: 1;
    }
    #ty-chart stop[offset="1"] {
      stop-opacity: 1;
    }

    #ly-chart stop {
      stop-color: #3269aa;
    }
    #ly-chart stop[offset="0"] {
      stop-opacity: 1;
    }
    #ly-chart stop[offset="1"] {
      stop-opacity: 1;
    }
    `;

    const handleWidgetView = (str: ToggleType) => {
      setactiveToggle(str);
    };

  return (
    <>
    <style>
          {SAMPLE_CSS}
      </style>
      <div style={{  "position": "absolute", "left": "0px", "top": "0px", "width": "100%"}} >
        <WidgetHeader
          title={"Occupancy Statistics"}
          activeToggle={activeToggle}
          onToggle={(str: ToggleType) => handleWidgetView(str)}
        />
          </div>

        {activeToggle === "graph" ? (
        
        <>
        
        {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
        <Row className='row-inner h-100' style={{ "paddingTop": "62px" }}>
          <Col sm={8} className="h-100" >
          <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
              <MixedCharts
                id={"line-and-column"}
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
                    visible:false,
                    maximum:  210,
                    interval: 25,
                  },
                  tooltip: { enable: true },
                }}
                charts={Charts1}
                
              />
          </React.Suspense>
          </Col>
          <Col sm={4} className="h-100">
          <React.Suspense fallback={<div className="card-loader"><WidgetLoader /></div>}>
            <MixedCharts
              id={"line-and-bar"}
              charts={Charts2}
              chartSettings={{
                primaryXAxis: {
                  valueType: "Category",
                  interval: 1,
                  majorGridLines: { width: 0 },
                  
                },
                primaryYAxis: {
                  labelFormat: "{value}%",
                  edgeLabelPlacement: "Shift",
                  majorGridLines: { width: 0 },
                  majorTickLines: { width: 0},
                  lineStyle: { width: 0 },
                  labelStyle: {
                    color: "transparent",
                  },
                  visible:false,
                },
                tooltip: { enable: true },
                // height: setHeight,
              }}
            />       
               </React.Suspense>   
          </Col>
        </Row>
         )} 

        </>
         
         ) : (
            <Row className='no-gutters h-100' style={{ "paddingTop": "62px" }}>
              <Col sm={8} className="h-100" >
                <div className="occupancy-table-section mx-2 d-flex align-items-center" >
                  <Table responsive striped hover className="occupancy-table mt-3 mb-0">
                    <thead>
                      <tr>
                        <th className="transparent-border"></th>
                        <th className="head-col">Mon</th>
                        <th className="head-col">Tue</th>
                        <th className="head-col">Wed</th>
                        <th className="head-col">Thu</th>
                        <th className="head-col">Fri</th>
                        <th className="head-col">Sat</th>
                        <th className="head-col">Sun</th>
                      </tr>
                    </thead>
                    <tbody>
                    
                      <tr>
                      <td className="title-col">OCC TY</td>
                      <td className="content-col">66.0%</td>
                      <td className="content-col">89.0%</td>
                      <td className="content-col">93.0%</td>
                      <td className="content-col">75.0%</td>
                      <td className="content-col">79.0%</td>
                      <td className="content-col">99.0%</td>
                      <td className="content-col">64.0%</td>
                    </tr>

                    <tr>
                      <td className="title-col">OCC LY</td>
                      <td className="content-col">73.0%</td>
                      <td className="content-col">84.0%</td>
                      <td className="content-col">95.0%</td>
                      <td className="content-col">81.0%</td>
                      <td className="content-col">86.0%</td>
                      <td className="content-col">89.0%</td>
                      <td className="content-col">68.0%</td>
                    </tr>

                    <tr>
                      <td className="title-col">ADR TY</td>
                      <td className="content-col">166.0</td>
                      <td className="content-col">188.0</td>
                      <td className="content-col">192.3</td>
                      <td className="content-col">183.2</td>
                      <td className="content-col">155.0</td>
                      <td className="content-col">171.2</td>
                      <td className="content-col">144.0</td>
                    </tr>

                    <tr>
                      <td className="title-col">ADR LY</td>
                      <td className="content-col">165.1</td>
                      <td className="content-col">190.2</td>
                      <td className="content-col">188.0</td>
                      <td className="content-col">180.0</td>
                      <td className="content-col">158.3</td>
                      <td className="content-col">170.2</td>
                      <td className="content-col">145.2</td>
                    </tr>
                    
                    </tbody>
                  </Table>
                </div>
              </Col>
              <Col sm={4} className="h-100" >
                <div className="occupancy-table-section ml-0 mr-2 d-flex align-items-center"  >
                <Table responsive striped hover className="occupancy-table o mt-3 mb-0">
                  <thead>
                    <tr>
                      <th className="transparent-border"></th>
                      <th className="head-col">Midweek</th>
                      <th className="head-col">weekend</th>
                      <th className="head-col">Total</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                  
                    <tr>
                    <td className="title-col">OCC TY</td>
                    <td className="content-col">66.0%</td>
                    <td className="content-col">99.0%</td>
                    <td className="content-col">64.0%</td>
                  </tr>

                  <tr>
                    <td className="title-col">OCC LY</td>
                    <td className="content-col">73.0%</td>
                    <td className="content-col">89.0%</td>
                    <td className="content-col">68.0%</td>
                    
                  </tr>

                  <tr>
                    <td className="title-col">ADR TY</td>
                    <td className="content-col">166.0</td>
                    <td className="content-col">171.2</td>
                    <td className="content-col">144.0</td>
                    
                  </tr>

                  <tr>
                    <td className="title-col">ADR LY</td>
                    <td className="content-col">165.1</td>
                    <td className="content-col">170.2</td>
                    <td className="content-col">145.2</td>
                    
                  </tr>
                  
                  </tbody>
                </Table>
                </div>
              </Col>
            </Row>
           
       ) 
        }
   

      <svg style={{ height: '0' }}>
        <defs>
            <linearGradient id="ty-chart" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" />
                <stop offset="1" />
            </linearGradient>
        </defs>
    </svg>

    <svg style={{ height: '0' }}>
        <defs>
            <linearGradient id="ly-chart" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" />
                <stop offset="1" />
            </linearGradient>
        </defs>
    </svg>

    <svg style={{ height: '0' }}>
        <defs>
            <linearGradient id="occty-chart" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" />
                <stop offset="1" />
            </linearGradient>
        </defs>
    </svg>

    <svg style={{ height: '0' }}>
        <defs>
            <linearGradient id="occly-chart" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" />
                <stop offset="1" />
            </linearGradient>
        </defs>
    </svg>
    </>
  );
};

export default OccupencyStatitics;
