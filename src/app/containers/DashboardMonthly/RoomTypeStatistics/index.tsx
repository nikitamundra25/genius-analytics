import React,{useEffect} from "react";
import { Card } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestMonthlyRoomTypeStaticsData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);


const RoomTypeStatistics = ({ graphdata = [] }:any) => {

  
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.MonthlyRoomTypeStatsReducer
  );
  useEffect(() => {
    dispatch(requestMonthlyRoomTypeStaticsData());
    // eslint-disable-next-line
  }, []);
  const Charts = [
    {
      dataSource: data,
      xName: "name",
      yName: "OCCTY",
      type: "Column",
      fill: "#9ec2d2",
      name: "OCC TY",
      width: 1,
      marker: {
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
      fill: "#61a7c0",
      name: "OCC LY",
      width: 1,
      marker: {
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
      fill: "#202c47",
      name: "ADR TY",
      width: 3,
      marker: {
        visible: true,
        width: 8,
        height: 8,
        fill: "#202c47",
        border: { width: 0, color: "#202c47" },
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
      fill: "#81cbe8",
      name: "ADR LY",
      width: 3,
      dashArray:'5',
      marker: {
        visible: true,
        width: 8,
        height: 8,
        fill: "#81cbe8",
        border: { width: 0, color: "#81cbe8" },
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
        title={"Room Type Statistics"}
        activeToggle={"graph"}
      />
        {/* <Card.Body> */}
        {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
            <MixedCharts
              id={"RoomChart"}
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
              charts={Charts}
            />
          )}
      
        {/* </Card.Body> */}
      </Card>
    
  );
};

export default RoomTypeStatistics;
