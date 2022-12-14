import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestBookingChannelMonthlyData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
// import Loader from "../../../components/Loader/Loader";

const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);




const BookingChannel = () => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.BookingChannelMonthlyReducer
  );
  useEffect(() => {
    dispatch(requestBookingChannelMonthlyData());
    // eslint-disable-next-line
  }, []);


  const labeltemplate = (args:any) => {
    return (<div  style={{fontSize: '11px'}}>
      <span>{args.point.y}</span>
    </div>);
};

  const Charts = [
    {
      dataSource: data,
      xName: "name",
      yName: "RoomNtsTY",
      type: "Column",
      fill: "#b9c9dd",
      name: "Room Nts TY",
      yAxisName:'yAxis1',
      width: 1,
      cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
      marker: {
        dataLabel: {
          visible: true,
          position: "Middle",
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
      yName: "RoomNtsLY",
      type: "Column",
      fill: "#4f81bc",
      name: "Room Nts LY",
     yAxisName:'yAxis1',
      width: 1,
      cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
      marker: {
        dataLabel: {
          visible: true,
          position: "Middle",
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
      fill: "#b73632",
      name: "ADR TY",
      width: 2,
      dashArray:'4',
      marker: {
        visible: true,
        width: 8,
        height: 8,
        fill: "#b73632",
        border: { width: 0, color: "#b73632" },
        dataLabel: {
          visible: true,
          position: "Top",
          font: {
            fontWeight: "600",
            color: "#b73632",
          
          },
        },
      },
    },
    {
      dataSource: data,
      xName: "name",
      yName: "ADRLY",
      type: "Spline",
      fill: "#202c47",
      name: "ADR LY",
      width: 2,
      dashArray:'4',
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
            color: "#202c47",
          
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
            id={"BookingChannel"}
            legend = {true}
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

export default BookingChannel;
