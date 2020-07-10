import React from "react";
import { Card } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
const SeriesChart = React.lazy(() => import("./../Charts/Series"));

const RommTypeData = [
  {
    name: "0BRM",
    OCCTY: 50,
    OCCLY: 64,
    ADRTY: 134,
    ADRLY: 111,
  },
  {
    name: "1BRM",
    OCCTY: 88,
    OCCLY: 80,
    ADRTY: 157,
    ADRLY: 169,
  },
  {
    name: "2BRM",
    OCCTY: 74,
    OCCLY: 76,
    ADRTY: 257,
    ADRLY: 231,
  },
];
export default (props: any) => {
  return (
    <>
      <Card>
        <Card.Header className='d-flex align-items-center justify-content-between'>
          <Card.Title>Room Type Statics</Card.Title>
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
            <SeriesChart data={RommTypeData} />
          </React.Suspense>
        </Card.Body>
      </Card>
    </>
  );
};
