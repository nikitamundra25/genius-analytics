import React ,{useEffect} from "react";
import { Card } from "react-bootstrap";
import MixedCharts from "../../../components/Charts/MixedCharts";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { ErrorComponent } from "../../../components/Error";
import { requestRGIYOYVarianceData } from "../../../../actions";
import Loader from "../../../components/Loader/Loader";

export default () => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.RGIYOYVarianceReducer
  );
  useEffect(() => {
    dispatch(requestRGIYOYVarianceData());
    // eslint-disable-next-line
  }, []);
  const Charts = [
    {
      dataSource: data,
      xName: "x",
      yName: "y1",
      type: "Bar",
      fill: "#3467a6",
      name: "HOTEL",
      width: 1,
      cornerRadius:{ bottomLeft: 0, bottomRight: 4, topLeft: 0, topRight: 4 },
      marker: {
        dataLabel: {
          visible: true,
          rx: 10,
          ry: 10,
          font: {
            fontWeight: "600",
            color: "#000",
          },
        },
      },
    },
    {
      dataSource: data,
      xName: "x",
      yName: "y2",
      type: "Bar",
      fill: "#819bc6",
      name: "MARKET",
      width: 1,
      cornerRadius:{ bottomLeft: 0, bottomRight: 4, topLeft: 0, topRight: 4 },
      marker: {
        dataLabel: {
          visible: true,
          rx: 10,
          ry: 10,
          font: {
            fontWeight: "600",
            color: "#000",
          },
        },
      },
    },
  ];

  return (
    <Card>
      <WidgetHeader title={"RGI YoY Variance"} activeToggle={"graph"} />
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
          id='adfdsf'
          charts={Charts}
          // legend = {false}
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
            },
            tooltip: { enable: false },
          }}
        />
          </React.Suspense>
        )}
      </Card.Body>
    </Card>
  );
};
