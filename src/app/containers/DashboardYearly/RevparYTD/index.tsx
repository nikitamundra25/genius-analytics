import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestRevPARYTDData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);

const RevparYTD = ({ graphdata = [] }: any) => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.RevPARYTDReducer
  );
  useEffect(() => {
    dispatch(requestRevPARYTDData());
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
      yName: "OCC",
      type: "SplineArea",
     // fill: "url(#gradient-chart)",
      name: "OCC %",
      opacity:0.4,
      width:2,
      fill:"rgb(0, 189, 174)",
      
      yAxisName:'yAxis1',
      //dashArray: '5,5',
      // border:{
      //   color: 'rgb(0, 189, 174)',
      //    //color: '#78a3c7', 
      //    width: 2 ,
      // },
      //opacity: '0.6',
      marker: {
        dataLabel: {
          visible: true,
          position: "Top",
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
      xName: "name",
      yName: "RevPAR",
      type: "SplineArea",
      //fill: "#76923c",
      name: "RevPAR",
      width: 2,
      opacity:0.5,
      fill:"rgb(0, 43, 101)",
      marker: {
        visible: true,
        width: 6,
        height: 6,
        fill:"rgb(0, 43, 101)",
        border: { width: 0, color: "rgb(0, 43, 101)" },
        dataLabel: {
          visible: false,
          position: "Bottom",
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
      yName: "NrevPAR",
      type: "SplineArea",
     // fill: "#bf0b0b",
      name: "NrevPAR",
      width: 2,
      opacity:0.7,
      fill:"rgb(239, 183, 202)",
      marker: {
        visible: true,
        width: 6,
        height: 6,
        fill: "rgb(239, 183, 202)",
        border: { width: 0, color: "rgb(239, 183, 202)" },
        dataLabel: {
          visible: false,
          position: "Top",
          font: {
            fontWeight: "600",
            color: "#000000",
          
          },
        },
      },
    },
  ];

  const SAMPLE_CSS = `
  #gradient-chart stop {
  stop-color: #c4e6ef;
}
#gradient-chart stop[offset="0"] {
  stop-opacity: 0.75;
}
#gradient-chart stop[offset="1"] {
  stop-opacity: 0.2;
}`;

  return (
    <>
     <style>
          {SAMPLE_CSS}
      </style>
    
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
              id={"RevPAR"}
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
     
      <svg style={{ height: '0' }}>
                    <defs>
                        <linearGradient id="gradient-chart" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0"/>
                            <stop offset="1"/>
                        </linearGradient>
                    </defs>
                </svg>
    </>
  );
};

export default RevparYTD;
