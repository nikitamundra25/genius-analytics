import React from "react";
import { Row, Card } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
const ComposedChartComponent = React.lazy(() =>
  import("../Charts/ComposedChart")
);

const OccupencyStatitics = () => {
  return (
    <>
      <Card>
        <Card.Header className='d-flex align-items-center justify-content-between'>
          <Card.Title>Occupacy Statics</Card.Title>
          <div className='action-wrap'>
            <div className='action-btn '>
              <span className='icon-grid'></span>
            </div>
            <div className='action-btn active'>
              <span className='icon-pie-chart'></span>
            </div>
          </div>
        </Card.Header>
        <Row className='row-inner'>
          <React.Suspense fallback={<Loader />}>
            <ComposedChartComponent />
          </React.Suspense>
        </Row>
      </Card>
    </>
  );
};

export default OccupencyStatitics;
