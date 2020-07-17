import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { IDashboardWidgetProps } from "../../../interfaces";
import PickupSegment from "./PickupSegment";
import PickupDOWOCCSegment from "./DOWOCC";
import PickupBusinessMix from "./BusinessMix";
import TableForm from "./MonthlyTable";

const getChart = (chartType: any, index: number) => {
  // switch (chartType.name) {
  //   case "Month":
  const rowId = index;
  return (
    <div
      id={chartType.idNum}
      className="e-panel "
      data-row={rowId}
      data-col="0"
      data-sizex="1"
      data-sizey="0"
    >
      <span id="close" className="e-template-icon e-clear-icon" />
      <div className="e-panel-container">
        {/* <Col xs={12} md={12}> */}
        <Card>
          <Card.Body>
            <Row>
              <Col xs={12} md={4}>
                <div className="sub-title text-left">{chartType.name}</div>
              </Col>
              <Col xs={12} md={8}>
                <TableForm  index={index} 
                tabledata={chartType.tabledata}
                />
              </Col>
              <Col xs={12} md={4}>
                <PickupSegment index={index} 
                 segmentData = {chartType.segmentData}
                />
              </Col>
              <Col xs={12} md={4}>
                <PickupDOWOCCSegment index={index} 
                OccData = {chartType.OccData}
                />
              </Col>
              <Col xs={12} md={4}>
                <PickupBusinessMix index={index} 
                DowData = {chartType.DowData}
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
        {/* </Col> */}
      </div>
    </div>
  );
  // default:
  //   return null;
  // }
};

const DashboardWidget = ({ graphList }: IDashboardWidgetProps) => {
  return (
    <Row>
      {graphList.map((chartConfig: any, index: number) => {
        return (
          <React.Fragment key={index}>
            {getChart(chartConfig, index)}
          </React.Fragment>
        );
      })}
    </Row>
  );
};

export default DashboardWidget;
