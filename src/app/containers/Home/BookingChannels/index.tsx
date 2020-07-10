import React from "react";
import { Card } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
const PieChartComponent = React.lazy(() => import("../Charts/PieChart"));

const data = [
  { x: "Brand.com", y: 27, text: "27%" },
  { x: "OTA", y: 38, text: "38%" },
  { x: "GDS", y: 20, text: "20%" },
  { x: "Direct", y: 15, text: "15%" },
];
export default (props: any) => {
  return (
    <Card>
      <Card.Header className='d-flex align-items-center justify-content-between'>
        <Card.Title>Booking Channel Mix </Card.Title>
        <div className='action-wrap'>
          <div className='action-btn '>
            <span className='icon-grid'></span>
          </div>
          <div className='action-btn active'>
            <span className='icon-pie-chart'></span>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <React.Suspense fallback={<Loader />}>
          <PieChartComponent id={"booking-mix"} data={data} />
        </React.Suspense>
      </Card.Body>
    </Card>
  );
};
