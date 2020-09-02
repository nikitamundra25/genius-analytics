import React, { useEffect } from "react";
import { Row, Card, Col } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestMonthlyDailyOccupacyData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { getMonthsData } from "../../../../helper";
// import Loader from "../../../components/Loader/Loader";
const MixedCharts = React.lazy(
  () => import("../../../components/Charts/MixedCharts")
);

const MonthlyDailyOccupacy = ({ graphdata = [], selectedDate }: any) => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.MonthlyDailyOccupacyReducer
  );
  const months = getMonthsData(selectedDate, "dashboard");

  useEffect(() => {
    dispatch(requestMonthlyDailyOccupacyData());
    // eslint-disable-next-line
  }, []);

  const [dailyOccupacyList, setdailyOccupacyList] = React.useState<any>([]);
  const [setHeight, setsetHeight] = React.useState<string>("250px");

  useEffect(() => {
    const modalbtn: HTMLElement | null = document.getElementById(
      `monthly-occ-card`
    );
    if (modalbtn) {
      setTimeout(() => {
        const check = modalbtn.getBoundingClientRect();
        const getHeight = check.height;
        const setgraphHeight = getHeight - 75;
        //console.log("hello chart height on resize",check, getHeight, setgraphHeight);
        setsetHeight(`${setgraphHeight}px`);
      }, 100);
    }
    let newData: any = [{ data: [] }, { data: [] }];
    if (months && months.length) {
      data.map((occdata: any, index: number) => {
        return occdata.data.map((key: any, i: number) =>
          i > months.length - 1 ? null : (newData[index].data[i] = key)
        );
      });
    }

    setdailyOccupacyList(newData);
    // eslint-disable-next-line
  }, [data]);

  useEffect(() => {
    const resizeListener = () => {
      // // change width from the state object
      const modalbtn: HTMLElement | null = document.getElementById(
        `monthly-occ-card`
      );
      // console.log("modalbtn", modalbtn);

      if (modalbtn) {
        setTimeout(() => {
          const check = modalbtn.getBoundingClientRect();
          const getHeight = check.height;
          const setgraphHeight = getHeight - 75;
          //console.log("hello chart height on resize",check, getHeight, setgraphHeight);
          setsetHeight(`${setgraphHeight}px`);
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
      <div
        style={{
          fontSize: "10px",
          background: "#e46d09",
          padding: "3px 3px",
          borderRadius: "3px",
        }}
      >
        <span>{args.point.y}</span>
      </div>
    );
  };

  const Charts1 = [
    {
      dataSource:
        dailyOccupacyList && dailyOccupacyList.length && dailyOccupacyList[0]
          ? dailyOccupacyList[0].data
          : [],
      xName: "name",
      yName: "OCC",
      type: "StackingColumn100",
      fill: "#2b588f",
      name: "Occupied Rooms",
      width: 1,
      cornerRadius: { bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
      yAxisName: "yAxis1",
      marker: {
        dataLabel: {
          visible: true,
          position: "Bottom",
          template: labeltemplate,
          font: {
            fontWeight: "600",
            color: "#ffffff",
            fontSize: "12px",
          },
        },
      },
    },
    {
      dataSource:
        dailyOccupacyList && dailyOccupacyList.length && dailyOccupacyList[0]
          ? dailyOccupacyList[0].data
          : [],
      xName: "name",
      yName: "EMPTY",
      type: "StackingColumn100",
      fill: "#dce8fc",
      name: "Empty Rooms",
      width: 1,
      cornerRadius: { bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
      yAxisName: "yAxis1",
      marker: {
        dataLabel: {
          visible: false,
          position: "Bottom",
          template: labeltemplate,
          font: {
            fontWeight: "600",
            color: "#ffffff",
            fontSize: "12px",
          },
        },
      },
    },
    {
      dataSource:
        dailyOccupacyList && dailyOccupacyList.length && dailyOccupacyList[0]
          ? dailyOccupacyList[0].data
          : [],
      xName: "name",
      yName: "ADR",
      type: "Spline",
      fill: "#e46d09",
      name: "ADR",
      width: 3,
      dashArray: "5",
      marker: {
        visible: false,
        width: 8,
        height: 8,
        fill: "#2f5891",
        border: { width: 1, color: "#e46d09" },
        dataLabel: {
          visible: true,
          position: "Top",

          template: labeltemplateline,
          font: {
            fontWeight: "600",
            color: "#000000",
            fontSize: "12px",
          },
        },
      },
    },
  ];

  const Charts2 = [
    {
      dataSource:
        dailyOccupacyList && dailyOccupacyList.length && dailyOccupacyList[1]
          ? dailyOccupacyList[1].data
          : [],
      xName: "name",
      yName: "OCC",
      type: "StackingColumn100",
      fill: "#2b588f",
      name: "Occupied Rooms",
      cornerRadius: { bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
      yAxisName: "yAxis1",
      width: 1,
      marker: {
        dataLabel: {
          visible: true,
          position: "Bottom",
          template: labeltemplate,
          font: {
            fontWeight: "600",
            color: "#ffffff",
            fontSize: "12px",
          },
        },
      },
    },
    {
      dataSource:
        dailyOccupacyList && dailyOccupacyList.length && dailyOccupacyList[1]
          ? dailyOccupacyList[1].data
          : [],
      xName: "name",
      yName: "EMPTY",
      type: "StackingColumn100",
      fill: "#dce8fc",
      name: "Empty Rooms",
      width: 1,
      yAxisName: "yAxis1",
      cornerRadius: { bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
      marker: {
        dataLabel: {
          visible: false,
          position: "Bottom",
          template: labeltemplate,
          font: {
            fontWeight: "600",
            color: "#ffffff",
            fontSize: "12px",
          },
        },
      },
    },
    {
      dataSource:
        dailyOccupacyList && dailyOccupacyList.length && dailyOccupacyList[1]
          ? dailyOccupacyList[1].data
          : [],
      xName: "name",
      yName: "ADR",
      type: "Spline",
      fill: "#e46d09",
      name: "ADR",
      width: 3,
      dashArray: "5",
      marker: {
        visible: false,
        width: 10,
        height: 10,
        fill: "#e46d09",
        border: { width: 1, color: "#e46d09" },
        dataLabel: {
          visible: true,
          position: "Top",
          template: labeltemplateline,
          font: {
            fontWeight: "600",
            color: "#000000",
            fontSize: "12px",
          },
        },
      },
    },
  ];
  return (
    // <Card id="monthly-occ-card">
    //   <WidgetHeader
    //     title={"Monthly Daily Occupacy & ADR"}
    //     activeToggle={"graph"}
    //     showToggle={false}
    //   />
    //   <Card.Body>
        isLoading ? (
          <WidgetLoader />
        ) : isError ? (
          <ErrorComponent
            message={"An error occured while fetching details "}
          />
        ) : (
          <Row className="row-inner h-100">
            <Col xs={12} md={9} className="h-100" >
              <React.Suspense
                fallback={
                  <div className="card-loader">
                    <WidgetLoader />
                  </div>
                }
              >
                <MixedCharts
                  id={"occChart1"}
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
                    Legend: { enable: false },
                    // height: setHeight,
                  }}
                  charts={Charts1}
                />
              </React.Suspense>
            </Col>
            <Col xs={12} md={3} className="h-100" >
              <React.Suspense
                fallback={
                  <div className="card-loader">
                    <WidgetLoader />
                  </div>
                }
              >
                <MixedCharts
                  id={"occChart2"}
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
                    // height: setHeight,
                  }}
                  charts={Charts2}
                />
              </React.Suspense>
            </Col>
          </Row>
        )
    //   </Card.Body>
    // </Card>
  );
};

export default MonthlyDailyOccupacy;
