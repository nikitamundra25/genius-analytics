import React, { useEffect } from "react";
import { Row, Card, Col } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestMonthlyDailyOccupacyData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
// import Loader from "../../../components/Loader/Loader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);

const MonthlyDailyOccupacy = ({ graphdata = [] }: any) => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.MonthlyDailyOccupacyReducer
  );
  useEffect(() => {
    dispatch(requestMonthlyDailyOccupacyData());
    // eslint-disable-next-line
  }, []);

  const labeltemplate = (args:any) => {
    return (<div  style={{fontSize: '11px'}}>
      <span>{args.point.y}%</span>
    </div>);
};
const labeltemplateline = (args:any) => {
  return (<div  style={{fontSize: '11px'}}>
    <span>{args.point.y}</span>
  </div>);
};

  const Charts1 = [
    {
      dataSource: data && data.length && data[0] ? data[0].data : [],
      xName: "name",
      yName: "OCC",
      type: "StackingColumn100",
      fill: "#2b588f",
      name: "Occupied Rooms",
      width: 1,
      marker: {
        dataLabel: {
          visible: true,
          position: "Middle",
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
      dataSource: data && data.length && data[0] ? data[0].data : [],
      xName: "name",
      yName: "EMPTY",
      type: "StackingColumn100",
      fill: "#dce8fc",
      name: "Empty Rooms",
      width: 1,
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
      dataSource: data && data.length && data[0] ? data[0].data : [],
      xName: "name",
      yName: "ADR",
      type: "Spline",
      fill: "#e46d09",
      name: "ADR",
      width: 3,
      marker: {
        visible: false,
        width: 10,
        height: 10,
        fill: "#2f5891",
        border: { width: 1, color: "#e46d09" },
        dataLabel: {
          visible: false,
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
      dataSource: data && data.length && data[1] ? data[1].data : [],
      xName: "name",
      yName: "OCC",
      type: "StackingColumn100",
      fill: "#2b588f",
      name: "Occupied Rooms",
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
      dataSource: data && data.length && data[1] ? data[1].data : [],
      xName: "name",
      yName: "EMPTY",
      type: "StackingColumn100",
      fill: "#dce8fc",
      name: "Empty Rooms",
      width: 1,
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
      dataSource: data && data.length && data[1] ? data[1].data : [],
      xName: "name",
      yName: "ADR",
      type: "Spline",
      fill: "#e46d09",
      name: "ADR",
      width: 3,
      marker: {
        visible: false,
        width: 10,
        height: 10,
        fill: "#2f5891",
        border: { width: 1, color: "#e46d09" },
        dataLabel: {
          visible: true,
          position: "Bottom",
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
    <Card>
      <WidgetHeader
        title={"Monthly Daily Occupacy & ADR"}
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
          <Row className="row-inner">
            <Col xs={12} md={9}>
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
                  }}
                  charts={Charts1}
                />
              </React.Suspense>
            </Col>
            <Col xs={12} md={3}>
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
                  }}
                  charts={Charts2}
                />
              </React.Suspense>
            </Col>
          </Row>
        )}
      </Card.Body>
    </Card>
  );
};

export default MonthlyDailyOccupacy;
