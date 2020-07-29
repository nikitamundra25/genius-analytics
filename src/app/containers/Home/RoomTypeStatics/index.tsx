import React,{useEffect} from "react";
import { Card } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { ErrorComponent } from "../../../components/Error";
import { requestRoomTypeStaticsData } from "../../../../actions";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);


export default () => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
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
      fill: "#a1c6d6",
      name: "OCC TY",
      width: 1,
      cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
    },
    {
      dataSource: data,
      xName: "name",
      yName: "OCCLY",
      type: "Column",
      fill: "#65adc5",
      name: "OCC LY",
      width: 1,
      cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
    },
    {
      dataSource: data,
      xName: "name",
      yName: "ADRTY",
      type: "Line",
      fill: "#1f487c",
      name: "ADR TY",
      width: 2,
      marker: {
        visible: true,
        width: 8,
        height: 8,
        fill: "#1f487c",
        border: { width: 0, color: "#1f487c" },
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
      type: "Line",
      fill: "#05234e",
      name: "ADR LY",
      width: 2,
      dashArray: 5,
      marker: {
        visible: true,
        width: 8,
        height: 8,
        fill: "#1f487c",
        border: { width: 0, color: "#1f487c" },
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
  ];

  return (
    <>
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
            
          )}
        </Card.Body>
      </Card>
    </>
  );
};
