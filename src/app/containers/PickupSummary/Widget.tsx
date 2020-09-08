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

      <div className="pickup-month-section mb-3 " id={`summary-card${rowId}`}>
        <div className='sub-title text-left pickup-month-card mb-2 py-2'>{chartType.name}</div>
        <Row >
          <Col xs={12} xl={8} lg={7} >
            <div className="pickup-month-card mb-1">
              <TableForm index={rowId} tabledata={chartType.tabledata} date={chartType.date}/>
              <div>
                <PickupSegment
                  index={rowId}
                  date={chartType.date}
                />
              </div> 
            </div>
          </Col>
          <Col xs={12} xl={4} lg={5} >
            <div className="pickup-month-card mb-1">
              <div>
                <PickupDOWOCCSegment
                  index={`${rowId}-mob`}
                  date={chartType.date}
                />
              </div>
              <div>
                <PickupBusinessMix
                  index={`${rowId}-mob`}
                  date={chartType.date}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      
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
