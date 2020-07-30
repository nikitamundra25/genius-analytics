import React,{useEffect} from "react";
import { Card } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
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
  const Charts = [
    {
      dataSource: data,
      xName: "name",
      yName: "OCC",
      type: "SplineArea",
      fill: "url(#gradient-chart)",
      name: "OCC %",
      width: 2,
      dashArray: '5,5',
      border:{
         color: '#78a3c7', 
         width: 2 ,
      },
      opacity: '0.6',
      marker: {
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
      yName: "RevPAR",
      type: "Spline",
      fill: "#76923c",
      name: "RevPAR",
      width: 2,
      
      marker: {
        visible: false,
        width: 8,
        height: 8,
        fill:"#76923c",
        border: { width: 0, color: "#76923c" },
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
      yName: "NrevPAR",
      type: "Spline",
      fill: "#bf0b0b",
      name: "NrevPAR",
      width: 2,
      marker: {
        visible: false,
        width: 8,
        height: 8,
        fill: "#bf0b0b",
        border: { width: 0, color: "#bf0b0b" },
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
      <Card>
        <WidgetHeader title={"RevPAR Vs. NrevPAR - YTD"} activeToggle={"graph"}  showToggle={false} />
        <Card.Body>
        {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
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
          )}
        </Card.Body>
      </Card>
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
