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
      fill: "#c4e6ef",
      name: "OCC %",
      width: 1,
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
      type: "Line",
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
      type: "Line",
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
  return (
    <>
      <Card>
        <WidgetHeader title={"RevPAR Vs. NrevPAR - YTD"} activeToggle={"graph"} />
        {/* <Card.Body> */}
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
        {/* </Card.Body> */}
      </Card>
    </>
  );
};

export default RevparYTD;
