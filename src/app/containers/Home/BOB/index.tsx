import React from "react";
import { Card } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import WidgetHeader from "../../../components/WidgetHeader";
const TableForm = React.lazy(() =>
  import("../../../components/Tables/TableForm")
);

const BOB = () => {
  return (
    <Card>
      <WidgetHeader title={"Business on the Books"} activeToggle={"grid"} />
      <Card.Body>
        <React.Suspense fallback={<Loader />}>
          <TableForm />
        </React.Suspense>
      </Card.Body>
    </Card>
  );
};

export default BOB;
