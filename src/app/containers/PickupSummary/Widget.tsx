import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { IDashboardWidgetProps } from "../../../interfaces";
import PickupSegment from "./PickupSegment";
import PickupDOWOCCSegment from "./DOWOCC";
import PickupBusinessMix from "./BusinessMix";
import TableForm from "./MonthlyTable";

const DashboardWidget = ({ graphList }: IDashboardWidgetProps) => {
  const getChart = (chartType: any, index: number) => {
    const rowId = index;
    return (
      <Card
        id={`summary-card${rowId}`}
        className='bg-white h-auto mb-3 pickup-section-card'>
        <Card.Body className='pb-0'>
          <Row className='row-inner'>
            <Col xs={12} md={5}>
              <div className='sub-title text-left'>{chartType.name}</div>
              <div>
                <PickupSegment
                  index={rowId}
                  //setHeight={setHeight}
                />
              </div>
            </Col>
            <Col xs={12} md={7}>
              <TableForm index={rowId} tabledata={chartType.tabledata} />
              <Row className='row-inner'>
                <Col xs={12} md={6}>
                  <div>
                    <PickupDOWOCCSegment
                      index={rowId}
                      //setHeight={setHeight}
                    />
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div>
                    <PickupBusinessMix
                      index={rowId}
                      //setHeight={setHeight}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  };

  return (
    <>
      {graphList.map((chartConfig: any, index: number) => {
        return (
          <React.Fragment key={index}>
            {getChart(chartConfig, index)}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default DashboardWidget;
