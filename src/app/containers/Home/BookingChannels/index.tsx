import React from "react";
import { Card } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import WidgetHeader from "../../../components/WidgetHeader";
const PieChartComponent = React.lazy(() =>
  import("../../../components/Charts/PieChart")
);

const data = [
  { x: "Brand.com", y: 27, text: "27%" },
  { x: "OTA", y: 38, text: "38%" },
  { x: "GDS", y: 20, text: "20%" },
  { x: "Direct", y: 15, text: "15%" },
];
export default (props:any) => {
  return (
    <Card>
      <WidgetHeader title={"Booking Channel Mix"} activeToggle={"graph"} />
      <Card.Body>
        <React.Suspense fallback={<Loader />}>
          <PieChartComponent id={"booking-mix"} height={"280px"} data={data}  
          chartSettings={{
            SeriesDirective : {
                explode: true,
                explodeAll: true,
                explodeOffset: '5%',
                explodeIndex: 0,
                radius: "70%",
                palettes: ['#4b90d1', '#f67b2b', '#a5a5a5', '#ffc60a']
        },
            chartComponent: {
              enableSmartLabels:true,
              enableAnimation:false,
              center:{ x: "50%", y: "50%" }
            }
          }}
          />
        </React.Suspense>
      </Card.Body>
    </Card>
  );
};
