import React from "react";
import { Card } from "react-bootstrap";
import data from "./datasource.json";
import Loader from "../../../components/Loader/Loader";
const WorldMap = React.lazy(() => import("../Charts/WorldMap"));

export default (props: any) => {
  return (
    <>
      <Card>
        <Card.Header className='d-flex align-items-center justify-content-between'>
          <Card.Title>Geographic Origin of business</Card.Title>
        </Card.Header>
        <Card.Body>
          <React.Suspense fallback={<Loader />}>
            <WorldMap data={data} />
          </React.Suspense>
        </Card.Body>
      </Card>
    </>
  );
};
