import React from "react";
import { Row, Card, Col } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import WidgetHeader from "../../../components/WidgetHeader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);


const OccupencyStatitics = ({ graphdata = [] }:any) => {
  return (
    <>
      <Card>
        <WidgetHeader title={"Occupacy Statics"} activeToggle={"graph"} />
        <Card.Body>
        <Row className='row-inner'>

      {graphdata && graphdata.length ? 
      graphdata.map((key:any, index:number)=>{
       return <Col  sm={ key.id === "line-and-column" ? 7 : 5} key={index} >
        <div className="w-100">
        <React.Suspense fallback={<Loader />}>
          <MixedCharts
            id={key.id}
            chartSettings={{
              primaryXAxis: {
                valueType: "Category",
                interval: 1,
                majorGridLines: { width: 0 },
              },
              primaryYAxis: {
                labelFormat: "{value}%",
                edgeLabelPlacement: "Shift",
                majorGridLines: { width: 0 },
                majorTickLines: { width: 0 },
                lineStyle: { width: 0 },
                labelStyle: {
                  color: "transparent",
                },
              },
              tooltip: { enable: true },
            }}
            charts={key.data}
          />
        </React.Suspense>
        </div>
      </Col>
      })
      : null}
        </Row>
       </Card.Body>
      </Card>
    </>
  );
};

export default OccupencyStatitics;
