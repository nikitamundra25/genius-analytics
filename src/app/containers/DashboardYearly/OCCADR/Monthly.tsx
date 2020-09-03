import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestMOCCADRData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);



const MonthlyOCCADR = ({ id,  graphdata = [] }: any) => {

  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.MOCCADRReducer
  );
  useEffect(() => {
    dispatch(requestMOCCADRData());
    // eslint-disable-next-line
  }, []);

  

  const labeltemplate = (args:any) => {
    return (<div  style={{fontSize: '11px'}}>
      <span>{args.point.y}%</span>
    </div>);
};


  const Charts1 = [
    {
      dataSource: data,
      xName: "name",
      yName: "OCC",
      type: "Column",
      fill: "#3a71b4",
      name: "OCC %",
      width: 1,
      yAxisName:'yAxis1',
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
      yName: "ADR",
      type: "Spline",
      fill: "#bb423d",
      name: "ADR",
      width: 2,
      marker: {
        visible: true,
        width: 8,
        height: 8,
        fill: "#bb423d",
        border: { width: 0, color: "#bb423d" },
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
      yName: "Room Nights",
      type: "Spline",
      fill: "#01224e",
      name: "Room Nights",
      width: 2,
      marker: {
        visible: true,
        width: 8,
        height: 8,
        fill: "#01224e",
        border: { width: 0, color: "#01224e" },
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
              id={id}
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
                // width:"100%",
                // height:"100%"
              }}
              charts={Charts1}
            />
            </React.Suspense>
          )}
    </>
  );
};

export default MonthlyOCCADR;
