import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState, ToggleType } from "../../../../interfaces";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { ErrorComponent } from "../../../components/Error";
import {
  requestRoomTypeStaticsData,
  requestRoomTypeStaticsFutureData,
  requestRoomTypeStaticsPastData,
} from "../../../../actions";
import moment from "moment";
import { checkDateFormat } from "../../../../config";

import occty from "../../../../assets/img/bob.svg";
import occly from "../../../../assets/img/occly.svg";
import adrty from "../../../../assets/img/adrty.svg";
import adrly from "../../../../assets/img/adrly.svg";


const MixedCharts = React.lazy(
  () => import("../../../components/Charts/MixedCharts")
);

const RoomTypeStatics = ({ date }: Date | any) => {
  const [activeToggle, setactiveToggle] = React.useState<ToggleType>("grid");
  const dispatch = useDispatch();
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
      dataSource: data && data.graph && data.graph.length ? data.graph : [],
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
      dataSource: data && data.graph && data.graph.length ? data.graph : [],
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
      dataSource: data && data.graph && data.graph.length ? data.graph : [],
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
      dataSource: data && data.graph && data.graph.length ? data.graph : [],
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

  const handleWidgetView = (str: ToggleType) => {
    setactiveToggle(str);
  };

  return (
    <>
      <style>{SAMPLE_CSS}</style>
      <div
        style={{ position: "absolute", left: "0px", top: "0px", width: "100%" }}
      >
        <WidgetHeader
          title={"Room Type Statistics"}
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
            <React.Suspense
              fallback={
                <div className="card-loader">
                  <WidgetLoader />
                </div>
              }
            >
              <div className="d-flex h-100" style={{ paddingTop: "62px" }}>
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
                  }}
                />
              </div>
            </React.Suspense>
          )}
        </>
      ) : (
        <div className="room-table-section " style={{ paddingTop: "62px" }}>
          <Table responsive striped hover className="room-table mt-3 mb-0">
            <thead>
              <tr>
                <th className="transparent-border"></th>
                <th className="head-col">0BRM</th>
                <th className="head-col">1BRM</th>
                <th className="head-col">2BRM</th>
                <th className="head-col">3BRM</th>
                <th className="head-col">4BRM</th>
              </tr>
            </thead>
            <tbody>
              {data && data.grid && data.grid.length
                ? data.grid.map((list: any, index: number) => {
                    return (
                      <tr key={index}>
                        <td className="title-col">
                        <div className="d-flex align-items-center subtitle-section">
                          {list.title ===
                          "OCC TY" ? (
                            <img
                              src={occty}
                              width="20px"
                              alt={list.title}
                            />
                          ) : list.title ===
                            "OCC LY" ? (
                            <img
                              src={occly}
                              width="20px"
                              alt={list.title}
                            />
                          ) : list.title ===
                            "ADR TY" ? (
                            <img
                              src={adrty}
                              width="20px"
                              alt={list.title}
                            />
                          ) : list.title ===
                            "ADR LY" ? (
                            <img
                              src={adrly}
                              width="20px"
                              alt={list.title}
                            />
                          ) : null}

                          <span>{list.title}</span>
                        </div>
                          
                          
                        </td>
                        <td className="content-col">
                          {list.data0BRM
                            ? list.type === "occ"
                              ? `${list.data0BRM}%`
                              : list.data0BRM.toFixed(1)
                            : "-"}
                        </td>
                        <td className="content-col">
                          {list.data1BRM
                            ? list.type === "occ"
                              ? `${list.data1BRM}%`
                              : list.data1BRM.toFixed(1)
                            : "-"}{" "}
                        </td>
                        <td className="content-col">
                          {list.data2BRM
                            ? list.type === "occ"
                              ? `${list.data2BRM}%`
                              : list.data2BRM.toFixed(1)
                            : "-"}{" "}
                        </td>
                        <td className="content-col">
                          {list.data3BRM
                            ? list.type === "occ"
                              ? `${list.data3BRM}%`
                              : list.data3BRM.toFixed(1)
                            : "-"}{" "}
                        </td>
                        <td className="content-col">
                          {list.data4BRM
                            ? list.type === "occ"
                              ? `${list.data4BRM}%`
                              : list.data4BRM.toFixed(1)
                            : "-"}{" "}
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </Table>
        </div>
      )}

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

export default RoomTypeStatics;
