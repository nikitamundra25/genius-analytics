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
export default (props: any) => {
  return (
    <Card>
      <WidgetHeader title={"Booking Channel Mix"} activeToggle={"graph"} />
      <Card.Body>
        <React.Suspense fallback={<Loader />}>
          <PieChartComponent id={"booking-mix"} data={data} />
        </React.Suspense>
      </Card.Body>
    </Card>
  );
};
