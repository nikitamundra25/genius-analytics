import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { IDashboardWidgetProps } from "../../../interfaces";
import PickupSegment from "./PickupSegment";
import PickupDOWOCCSegment from "./DOWOCC";
import PickupBusinessMix from "./BusinessMix";
import TableForm from "./MonthlyTable";
import SummaryTable from "./SummaryTable";
import { generateArrayOfMonths } from "../../../helper";

const DashboardWidget = ({ graphList,date }: IDashboardWidgetProps) => {
  const months =generateArrayOfMonths(date,17)
  const getChart = (chartType: any, index: number) => {
    const rowId = index;
    
    return (
      <>
      {index === 0 && months && months.length ?  
      <Card
        id={`summary-card${rowId}`}
        className='bg-white h-auto mb-3 pickup-section-card'>
        <Card.Body className=''>
          <div className='sub-title mb-3'>Pickup Summary</div>
          <SummaryTable
            index={rowId}
            date={date}
          />
        </Card.Body>
      </Card>
      :null}
      <Card
        id={`summary-card${rowId}`}
        className='bg-white h-auto mb-3 pickup-section-card'>
        <Card.Body >
          <Row className='no-gutters'>
            <Col xs={12} xl={5} lg={6} >
              <div className='sub-title text-left'>{chartType.name}</div>
              <div>
                <PickupSegment
                  index={rowId}
                  date={chartType.date}
                />
              </div>
            </Col>
            <Col xs={12} xl={7} lg={6}>
              <TableForm index={rowId} tabledata={chartType.tabledata} date={chartType.date}/>
              <Row className='no-gutters' >
                <Col xs={12} lg={6} md={6}  className="graph-sec">
                  <div>
                    <PickupDOWOCCSegment
                      index={`${rowId}-mob`}
                      date={chartType.date}
                    />
                  </div>
                </Col>
                <Col xs={12} lg={6} md={6} className="table-sec">
                  <div>
                    <PickupBusinessMix
                      index={`${rowId}-mob`}
                      date={chartType.date}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
            
          </Row>
        </Card.Body>
      </Card>
      </>
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
