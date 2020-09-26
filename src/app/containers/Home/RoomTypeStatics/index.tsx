import React, { useEffect } from "react";
import {  Table  } from "react-bootstrap";
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
const MixedCharts = React.lazy(
  () => import("../../../components/Charts/MixedCharts")
);

const RoomTypeStatics =  ({date }:Date|any) => {
  const [activeToggle, setactiveToggle] = React.useState<ToggleType>("graph");
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

    const handleWidgetView = (str: ToggleType) => {
      setactiveToggle(str);
    };

  return (
    <>
      <style>{SAMPLE_CSS}</style>
      <div style={{  "position": "absolute", "left": "0px", "top": "0px", "width": "100%"}} >
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
              <div className="d-flex h-100" style={{ "paddingTop": "62px" }} > 
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

          <div className="room-table-section " style={{ "paddingTop": "62px" }}>
                  <Table responsive striped className="room-table mt-3 mb-0">
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
                    
                      <tr>
                      <td className="title-col">OCC TY</td>
                      <td className="content-col">90%</td>
                      <td className="content-col">77%</td>
                      <td className="content-col">88%</td>
                      <td className="content-col">55%</td>
                      <td className="content-col">66%</td>
                      
                    </tr>

                    <tr>
                      <td className="title-col">OCC LY</td>
                      <td className="content-col">92%</td>
                      <td className="content-col">70%</td>
                      <td className="content-col">82%</td>
                      <td className="content-col">58%</td>
                      <td className="content-col">52%</td>
                      
                    </tr>

                    <tr>
                      <td className="title-col">ADR TY</td>
                      <td className="content-col">205.0</td>
                      <td className="content-col">233.0</td>
                      <td className="content-col">256.1</td>
                      <td className="content-col">301.3</td>
                      <td className="content-col">356.5</td>
                      
                    </tr>

                    <tr>
                      <td className="title-col">ADR LY</td>
                      <td className="content-col">195.0</td>
                      <td className="content-col">235.0</td>
                      <td className="content-col">242.0</td>
                      <td className="content-col">300.0</td>
                      <td className="content-col">333.3</td>
                      
                    </tr>
                    
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

export default RoomTypeStatics