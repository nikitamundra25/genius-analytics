import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { IDashboardWidgetProps } from "../../../interfaces";
import TableForm from "./MonthlyTable";

const getChart = (chartType: any, index: number) => {
  // switch (chartType.name) {
  //   case "Month":
  const rowId = index 
  return (
    <div
          id={chartType.idNum}
          className="e-panel "
          data-row={rowId}
          data-col={2}
          data-sizex="2"
          data-sizey="2"
        >
          <span id="close" className="e-template-icon e-clear-icon" />
          <div className="e-panel-container">
    {/* <Col xs={12} md={12}> */}
      <Card>
        <Card.Body>
          <Row>
            <Col xs={12} md={12}>
              <div className="sub-title text-left">{chartType.name}</div>
              <TableForm index={index} />
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
