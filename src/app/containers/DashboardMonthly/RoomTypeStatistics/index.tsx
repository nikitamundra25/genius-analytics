import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestMonthlyRoomTypeStaticsData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
// import Loader from "../../../components/Loader/Loader";
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

  const labeltemplate = (args:any) => {
    return (<div  style={{fontSize: '11px'}}>
      <span>{args.point.y}%</span>
    </div>);
};

  const Charts = [
    {
      dataSource: data,
      xName: "name",
      yName: "Rm Nts TY",
      type: "Column",
      fill: "#9ec2d2",
      name: "Rm Nts TY",
      yAxisName:'yAxis1',
      width: 1,
      cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
      marker: {
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
      yName: "Rm Nts LY",
      type: "Column",
      fill: "#61a7c0",
      name: "Rm Nts LY",
      yAxisName:'yAxis1',
      width: 1,
      cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
      marker: {
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
        isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
            <React.Suspense fallback={<div className="card-loader"><WidgetLoader /></div>}>
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
                // height: setHeight,
              }}
              charts={Charts}
            />
            </React.Suspense>
          )
      
  );
};

export default RoomTypeStatistics;
