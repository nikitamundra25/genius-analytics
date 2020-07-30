import React,{useEffect} from "react";
import { Card } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestMonthlyRoomTypeStaticsData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import Loader from "../../../components/Loader/Loader";
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
      cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
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
      cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
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
        fill: "#3fabc9",
        border: { width: 0, color: "#3fabc9" },
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
        fill: "#3fabc9",
        border: { width: 0, color: "#3fabc9" },
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
            <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
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
            </React.Suspense>
          )}
      
        </Card.Body>
      </Card>
    
  );
};

export default RoomTypeStatistics;
