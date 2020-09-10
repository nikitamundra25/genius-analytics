import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestStayYTDData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);


const StayYTD = () => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.StayYTDReducer
  );
  useEffect(() => {
    dispatch(requestStayYTDData());
    // eslint-disable-next-line
  }, []);



  const labeltemplate = (args:any) => {
    return (<div  style={{fontSize: '11px'}}>
      <span>{args.point.y}</span>
    </div>);
};

const pointRender = (args:any) => {
  let materialColors = ['#6a94c8', '#c96a68', '#aac672', '#9a82b6', '#74c9de', '#f7b26d', '#577597'];
  
  if (args.shape ) {
    return
  }
  else {
      args.fill = materialColors[args.point.index];
  }
};


  const Charts = [
    {
      dataSource: data,
     // dataSource:  data && data.length && data[0].data? data[0].data : [],
      xName: "x",
      yName: "y1",
      type: "Column",
      name: "LOS",
      width: 1,
      yAxisName:'yAxis2',
     
      cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
      marker: {
        dataLabel: {
          visible: true,
          position: "Bottom",
          template: labeltemplate,
          font: {
            fontWeight: "600",
            color: "#000000",  
          },
        },
      },
    },
    {
      dataSource: data,
      xName: "x",
      yName: "y2",
      type: "Spline",
      fill: "#5685c1",
      name: "ADR",
      width: 2,
      marker: {
        visible: true,
        width: 8,
        height: 8,
        fill:"#5685c1",
        border: { width: 0, color: "#5685c1" },
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
              id={"stay"}
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
                pointRender:pointRender,
              }}
              charts={Charts}
            />
            </React.Suspense>
          )}
    </>
  );
};

export default StayYTD;
