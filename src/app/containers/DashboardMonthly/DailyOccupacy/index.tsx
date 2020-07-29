import React,{useEffect} from "react";
import { Card } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestDailyOccupacyBudLyData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import Loader from "../../../components/Loader/Loader";

const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);

const DailyOccupacy = ({ graphdata = [] }:any) => {

  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.DailyOccupacyBudLyReducer
  );
  useEffect(() => {
    dispatch(requestDailyOccupacyBudLyData());
    // eslint-disable-next-line
  }, []);

  const Charts = [
    {
      dataSource: data,
      xName: "name",
      yName: "OCC",
      type: "Spline",
      fill: "#4176b9",
      name: "Budget",
      width: 3,
      marker: {
        visible: false,
        width: 10,
        height: 10,
        fill: "#2f5891",
        border: { width: 1, color: "#4176b9" },
        dataLabel: {
          visible: false,
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
      yName: "Budget",
      type: "Spline",
      fill: "#b82f2c",
      name: "Budget",
      width: 2,
      dashArray: "3",
      marker: {
        visible: false,
        width: 10,
        height: 10,
        fill: "#b82f2c",
        border: { width: 1, color: "#b82f2c" },
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
      yName: "LY",
      type: "Spline",
      fill: "#94b54e",
      name: "LY",
      width: 2,
      dashArray: "3",
      marker: {
        visible: false,
        width: 10,
        height: 10,
        fill: "#94b54e",
        border: { width: 1, color: "#94b54e" },
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

  return (
    <Card>
      <WidgetHeader
        title={"Daily Occupacy Vs. BUD Vs. LY"}
        activeToggle={"graph"}
      />

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
            id={"dailyocc"}
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
              Legend: { enable: false },
            }}
            charts={Charts}
          />
          </React.Suspense>
          )}
      </Card.Body>
    </Card>
  );
};

export default DailyOccupacy;
