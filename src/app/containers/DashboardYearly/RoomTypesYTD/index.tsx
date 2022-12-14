import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestROOMTYPESData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);




const RoomTypesYTD = () => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.ROOMTYPESReducer
  );
  useEffect(() => {
    dispatch(requestROOMTYPESData());
    // eslint-disable-next-line
  }, []);


  const labeltemplate = (args:any) => {
    return (<div  style={{fontSize: '11px'}}>
      <span>{args.point.y}%</span>
    </div>);
};
const labeltemplateline = (args:any) => {
  return (<div  style={{fontSize: '11px', padding: '3px 3px 3px 3px'}}>
    <span>{args.point.y}</span>
  </div>);
};

  const Charts = [
    {
      dataSource: data,
      xName: "name",
      yName: "OCCTY",
      type: "Column",
      fill: "#99bac9",
      name: "OCC TY",
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
      yName: "OCCLY",
      type: "Column",
      fill: "#64acc4",
      name: "OCC LY",
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
      fill: "#101238",
      name: "ADR TY",
      width: 2,
      dashArray: 4,
      marker: {
        visible: true,
        width: 8,
        height: 8,
        fill:"#57b9d5",
        border: { width: 0, color: "#57b9d5" },
        dataLabel: {
          fill:"#01224e",
          visible: true,
          position: "Top",
          template: labeltemplateline,
          font: {
            fontWeight: "600",
            color: "#fff",
          },
        },
      },
    },
    {
      dataSource: data,
      xName: "name",
      yName: "ADRLY",
      type: "Spline",
      fill: "#8f2826",
      name: "ADR LY",
      width: 2,
      dashArray: 4,
      marker: {
        visible: true,
        width: 8,
        height: 8,
        fill:"#57b9d5",
        border: { width: 0, color: "#57b9d5" },
        dataLabel: {
          visible: true,
          position: "Bottom",
          template: labeltemplateline,
          fill:"#c50000",
          font: {
            fontWeight: "600",
            color: "#ffffff",
          
          },
        },
      },
    },
  ];
  return (
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
            <MixedCharts
              id={"RoomTypes"}
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
    </>
  );
};

export default RoomTypesYTD;
