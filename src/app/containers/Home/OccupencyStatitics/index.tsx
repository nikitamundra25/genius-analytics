import React,{useEffect} from "react";
import { Row, Card, Col } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { ErrorComponent } from "../../../components/Error";
import { requestOccupacyStaticsData } from "../../../../actions";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);

const OccupencyStatitics = ({ graphdata = [] }:any) => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.OccupacyStaticsReducer
  );



  useEffect(() => {
    dispatch(requestOccupacyStaticsData());
    // eslint-disable-next-line
  }, []);

    const Charts1 = [
        {
          dataSource: data && data.length && data[0] ? data[0].data : [],
          xName: "name",
          yName: "OCCTY",
          type: "Column",
          // fill: "#244d81",
          fill: "url(#occty-chart)",
          name: "OCC TY",
          cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
          marker: {
            visible: false,
            width: 8,
            height: 8,
            border: { width: 2, color: "#2bb5ec" },
            dataLabel: {
              visible: true,
              position: "Middle",
              font: {
                fontWeight: "600",
                color: "#ffffff",
                fontSize:"7px",
              },
            },
          },
        },
        {
          dataSource: data && data.length && data[0] ? data[0].data : [],
          xName: "name",
          yName: "OCCLY",
          type: "Column",
          //fill: "#4f81bc",
          fill: "url(#occly-chart)",
          name: "OCC LY",
          cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
          marker: {
            visible: false,
            width: 10,
            height: 10,
            border: { width: 2, color: "#2bb5ec" },
            dataLabel: {
              visible: true,
              position: "Top",
              font: {
                fontWeight: "600",
                color: "#fff",
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
            visible: false,
            width: 8,
            height: 8,
            border: { width: 2, color: "#2bb5ec" },
            dataLabel: {
              visible: true,
              position: "Top",
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
          yName: "ADRLY",
          type: "Spline",
          fill: "#293046",
          name: "ADR LY",
          dashArray: "20 10",
          width: 2,
          marker: {
            visible: false,
            width: 8,
            height: 8,
            border: { width: 2, color: "#293046" },
            dataLabel: {
              visible: true,
              position: "Bottom",
              font: {
                fontWeight: "600",
                color: "#000000",
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
          type: "Column",
          //fill: "#8293b1",
          fill: "url(#ty-chart)",
          name: "TY",
          width: 1,
          cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
        },
        {
          dataSource: data && data.length && data[1] ? data[1].data : [],
          xName: "name",
          yName: "LY",
          type: "Column",
          //fill: "#3269aa",
          fill: "url(#ly-chart)",
          name: "LY",
          width: 1,
          cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
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
          
          marker: {
            visible: true,
            width: 8,
            height: 8,
            fill: "#2f5891",
            border: { width: 1, color: "#ddd" },
            dataLabel: {
              visible: true,
              position: "Top",
              fill: "#26405d",
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
      stop-color: #244d81;
    }
    #occty-chart stop[offset="0"] {
      stop-opacity: 1;
    }
    #occty-chart stop[offset="1"] {
      stop-opacity: 1;
    }

    #occly-chart stop {
      stop-color: #4f81bc;
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
  return (
    <>
    <style>
          {SAMPLE_CSS}
      </style>
      <Card>
        <WidgetHeader title={"Occupancy Statistics"} activeToggle={"graph"} showToggle={false} />
        <Card.Body>
        {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
        <Row className='row-inner'>
          <Col sm={8}>
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
                  },
                  tooltip: { enable: true },
                }}
                charts={Charts1}
              />
          </React.Suspense>
          </Col>
          <Col sm={4}>
          <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
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
                  majorTickLines: { width: 0 },
                  lineStyle: { width: 0 },
                  labelStyle: {
                    color: "transparent",
                  },
                  visible:false,
                },
                tooltip: { enable: true },
              }}
            />       
               </React.Suspense>   
          </Col>
        </Row>
         )} 
       </Card.Body>
      </Card>

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
