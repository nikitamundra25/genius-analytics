import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestRateCodeStatisticsData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
// import Loader from "../../../components/Loader/Loader";

const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);


const RateCodeStatistics = ({ graphdata = [] }:any) => {

  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.RateCodeStatisticsReducer
  );
  useEffect(() => {
    dispatch(requestRateCodeStatisticsData());
    // eslint-disable-next-line
  }, []);

  const Charts = [
    {
      dataSource: data,
      xName: "name",
      yName: "RoomNts",
      type: "Column",
      fill: "#386fb0",
      name: "Room Nts",
      width: 1,
      cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
      marker: {
        dataLabel: {
          visible: true,
          position: "Middle",
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
      yName: "ARR",
      type: "Spline",
      fill: "#b73632",
      name: "ARR",
      width: 2,
      dashArray:'3',
      marker: {
        visible: true,
        width: 8,
        height: 8,
       fill: "#b73632",
        border: { width: 1, color: "#b73632" },
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
        {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
            <React.Suspense fallback={<div className="card-loader"><WidgetLoader /></div>}>
            <MixedCharts
              id={"Ratecode"}
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

export default RateCodeStatistics;
