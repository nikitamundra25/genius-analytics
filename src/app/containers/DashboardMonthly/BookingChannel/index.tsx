import React,{useEffect} from "react";
import { Card } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestBookingChannelMonthlyData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);




const BookingChannel = ({ graphdata = [] }:any) => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.BookingChannelMonthlyReducer
  );
  useEffect(() => {
    dispatch(requestBookingChannelMonthlyData());
    // eslint-disable-next-line
  }, []);
  const Charts = [
    {
      dataSource: data,
      xName: "name",
      yName: "RoomNts",
      type: "Column",
      fill: "#4f81bc",
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
  ];
  return (
    <Card>
    <WidgetHeader
      title={"Booking Channel"}
      activeToggle={"graph"}
    />
      {/* <Card.Body> */}
      {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
          <MixedCharts
            id={"BookingChannel"}
            legend = {false}
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
    
  );
};

export default BookingChannel;
