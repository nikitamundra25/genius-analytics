import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { IDashboardWidgetProps } from "../../../interfaces";
import PickupSegment from "./PickupSegment";
import DOWOCC from "./DOWOCC";
import BusinessMix from "./BusinessMix";
import TableForm from "./MonthlyTable";

const getChart = (chartType: any) => {
  switch (chartType.name) {
    case "Month":
      return (
        <Col xs={12} md={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col xs={12} md={4}>
                  <div className="sub-title text-left">October</div>
                 </Col>
                 <Col xs={12} md={8}>
                  <TableForm />
                 </Col>
                 <Col xs={12} md={4}>
                  <PickupSegment />
                 </Col>
                 <Col xs={12} md={4}>
                 <DOWOCC />
                 </Col>
                 <Col xs={12} md={4}>
                 <BusinessMix />
                 </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      );
    
    default:
      return null;
  }
};

const DashboardWidget = ({ graphList }: IDashboardWidgetProps) => {
  return (
    <Row>
      {graphList.map((chartConfig: any, index: number) => {
        return (
          <React.Fragment key={index}>{getChart(chartConfig)}</React.Fragment>
        );
      })}
    </Row>
  );
};

export default DashboardWidget;
