import React from "react";
import { Card } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
const TableForm = React.lazy(() => import("../Tables/TableForm"));

const BOB: React.FC = (): JSX.Element => {
  return (
    <Card>
      <Card.Header className='d-flex align-items-center justify-content-between'>
        <Card.Title>Business on the Books</Card.Title>
        <div className='action-wrap'>
          <div className='action-btn active'>
            <span className='icon-grid'></span>
          </div>
          <div className='action-btn'>
            <span className='icon-pie-chart'></span>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <React.Suspense fallback={<Loader />}>
          <TableForm />
        </React.Suspense>
      </Card.Body>
    </Card>
  );
};

export default BOB;
