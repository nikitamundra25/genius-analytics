import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { ErrorComponent } from "../../../components/Error";
import {
  requestRoomTypeStaticsData,
  requestRoomTypeStaticsFutureData,
  requestRoomTypeStaticsPastData,
} from "../../../../actions";
import moment from "moment";
import { checkDateFormat } from "../../../../config";
const MixedCharts = React.lazy(
  () => import("../../../components/Charts/MixedCharts")
);

export default (date: any) => {
  const dispatch = useDispatch();
  const [setHeight, setsetHeight] = React.useState<string>("250px");
  const { isLoading, data = [], isError } = useSelector(
    (state: IRootState) => state.RoomTypeStaticsReducer
  );
  // useEffect(() => {
  //   dispatch(requestRoomTypeStaticsData());
  //   // eslint-disable-next-line
  // }, []);

  useEffect(() => {
    let selectedDate = moment(date).format(checkDateFormat);
    // const selectedDate: any = new Date(date);
    let currentDate = moment(new Date()).format(checkDateFormat);
    if (selectedDate > currentDate) {
      dispatch(requestRoomTypeStaticsFutureData());
    } else if (selectedDate < currentDate) {
      dispatch(requestRoomTypeStaticsPastData());
    } else if (selectedDate === currentDate) {
      dispatch(requestRoomTypeStaticsData());
    }

    // eslint-disable-next-line
  }, [date]);

  useEffect(() => {
    const modalbtn: HTMLElement | null = document.getElementById(`room-card`);
    if (modalbtn) {
      setTimeout(() => {
        const check = modalbtn.getBoundingClientRect();
        const getHeight = check.height;
        const setgraphHeight = getHeight - 75;
        //console.log("hello chart height on resize",check, getHeight, setgraphHeight);
        if (setgraphHeight >= 0) {
          setsetHeight(`${setgraphHeight}px`);
        }
      }, 100);
    }
    // eslint-disable-next-line
  }, [data]);

  useEffect(() => {
    const resizeListener = () => {
      // // change width from the state object
      const modalbtn: HTMLElement | null = document.getElementById(`room-card`);
      // console.log("modalbtn", modalbtn);

      if (modalbtn) {
        setTimeout(() => {
          const check = modalbtn.getBoundingClientRect();
          const getHeight = check.height;
          const setgraphHeight = getHeight - 75;
          //console.log("hello chart height on resize",check, getHeight, setgraphHeight);
          if (setgraphHeight >= 0) {
            setsetHeight(`${setgraphHeight}px`);
          }
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

  const labeltemplate = (args: any) => {
    return (
      <div style={{ fontSize: "11px" }}>
        <span>{args.point.y}%</span>
      </div>
    );
  };
  const labeltemplateline = (args: any) => {
    return (
      <div style={{ fontSize: "11px" }}>
        <span>{args.point.y}</span>
      </div>
    );
  };

  const Charts = [
    {
      dataSource: data,
      xName: "name",
      yName: "OCCTY",
      type: "Column",
      //fill: "#a1c6d6",
      fill: "url(#roccty-chart)",
      name: "OCC TY",
      yAxisName: "yAxis1",
      width: 1,
      cornerRadius: { bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
      marker: {
        visible: false,
        border: { width: 0, color: "#288096" },
        dataLabel: {
          visible: true,
          position: "Bottom",
          template: labeltemplate,
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
      yAxisName: "yAxis1",
      width: 1,
      cornerRadius: { bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
      marker: {
        visible: false,
        border: { width: 0, color: "#288096" },
        dataLabel: {
          visible: true,
          position: "Bottom",
          template: labeltemplate,
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
          template: labeltemplateline,
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
          template: labeltemplateline,
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
      stop-opacity: 1;
    }

    #roccly-chart stop {
      stop-color: #65adc5;
    }
    #roccly-chart stop[offset="0"] {
      stop-opacity: 1;
    }
    #roccly-chart stop[offset="1"] {
      stop-opacity: 1;
    }

    `;

  return (
    <>
      <style>{SAMPLE_CSS}</style>
      <Card id="room-card">
        <WidgetHeader
          title={"Room Type Statics"}
          activeToggle={"graph"}
          showToggle={false}
        />
        <Card.Body>
          {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
            <React.Suspense
              fallback={
                <div className="card-loader">
                  <WidgetLoader />
                </div>
              }
            >
              <MixedCharts
                id="room-type"
                charts={Charts}
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
                  height: setHeight,
                }}
              />
            </React.Suspense>
          )}
        </Card.Body>
      </Card>
      <svg style={{ height: "0" }}>
        <defs>
          <linearGradient id="roccty-chart" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>

      <svg style={{ height: "0" }}>
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
