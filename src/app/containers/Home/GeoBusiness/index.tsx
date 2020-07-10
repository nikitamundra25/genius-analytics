import React from "react";
import { Card } from "react-bootstrap";
import data from "./datasource.json";
import Loader from "../../../components/Loader/Loader";
import WidgetHeader from "../../../components/WidgetHeader";
const WorldMap = React.lazy(() =>
  import("../../../components/Charts/WorldMap")
);

export default (props: any) => {
  return (
    <>
      <Card>
        <WidgetHeader
          title={"Geographic Origin of business"}
          activeToggle={"graph"}
        />
        <Card.Body>
          <React.Suspense fallback={<Loader />}>
            <WorldMap data={data} />
          </React.Suspense>
        </Card.Body>
      </Card>
    </>
  );
};
