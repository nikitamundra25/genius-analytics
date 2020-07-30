import React,{useEffect} from "react";
import { Card } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { ErrorComponent } from "../../../components/Error";
import { requestRoomTypeStaticsData } from "../../../../actions";
import Loader from "../../../components/Loader/Loader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);


export default () => {
  const dispatch = useDispatch();
  const { isLoading, data = [], isError } = useSelector(
    (state: IRootState) => state.RoomTypeStaticsReducer
  );
  useEffect(() => {
    dispatch(requestRoomTypeStaticsData());
    // eslint-disable-next-line
  }, []);
  const Charts = [
    {
      dataSource: data,
      xName: "name",
      yName: "OCCTY",
      type: "Column",
      //fill: "#a1c6d6",
      fill: "url(#roccty-chart)",
      name: "OCC TY",
      width: 1,
      cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
      marker: {
        visible: false,
        border: { width: 0, color: "#288096" },
        dataLabel: {
          visible: true,
          position: "Bottom",
          font: {
            fontWeight: "600",
            color: "#ffffff",
          },
        },
      },
    },
    {
      dataSource: data,
      xName: "name",
      yName: "OCCLY",
      type: "Column",
      //fill: "#65adc5",
      fill: "url(#roccly-chart)",
      name: "OCC LY",
      width: 1,
      cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
      marker: {
        visible: false,
        border: { width: 0, color: "#288096" },
        dataLabel: {
          visible: true,
          position: "Bottom",
          font: {
            fontWeight: "600",
            color: "#ffffff",
          },
        },
      },
    },
    {
      dataSource: data,
      xName: "name",
      yName: "ADRTY",
      type: "Spline",
      fill: "#1f487c",
      name: "ADR TY",
      width: 3,
      marker: {
        visible: true,
        width: 8,
        height: 8,
        fill: "#288096",
        border: { width: 0, color: "#288096" },
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
      dataSource: data,
      xName: "name",
      yName: "ADRLY",
      type: "Spline",
      fill: "#05234e",
      name: "ADR LY",
      width: 2,
      dashArray: 5,
      marker: {
        visible: true,
        width: 8,
        height: 8,
        fill: "#288096",
       
        border: { width: 0, color: "#288096" },
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

  const SAMPLE_CSS = `
      #roccty-chart stop {
      stop-color: #a1c6d6;
    }
    #roccty-chart stop[offset="0"] {
      stop-opacity: 1;
    }
    #roccty-chart stop[offset="1"] {
      stop-opacity: 0.4;
    }

    #roccly-chart stop {
      stop-color: #65adc5;
    }
    #roccly-chart stop[offset="0"] {
      stop-opacity: 1;
    }
    #roccly-chart stop[offset="1"] {
      stop-opacity: 0.4;
    }

    `;


  return (
    <>
    <style>
          {SAMPLE_CSS}
      </style>
      <Card>
        <WidgetHeader title={"Room Type Statics"} activeToggle={"graph"} />
        <Card.Body>
      {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
            <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
            <MixedCharts
              id='room-type'
              charts={Charts}
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
          )}  
        </Card.Body>
      </Card>
      <svg style={{ height: '0' }}>
        <defs>
            <linearGradient id="roccty-chart" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" />
                <stop offset="1" />
            </linearGradient>
        </defs>
    </svg>

    <svg style={{ height: '0' }}>
        <defs>
            <linearGradient id="roccly-chart" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" />
                <stop offset="1" />
            </linearGradient>
        </defs>
    </svg>
    </>
  );
};
