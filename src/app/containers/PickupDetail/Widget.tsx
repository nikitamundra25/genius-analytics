import React from "react";
import { Card } from "react-bootstrap";
import { IDashboardWidgetProps } from "../../../interfaces";
import TableForm from "./MonthlyTable";

const PickupDetailWidget = ({ graphList }: IDashboardWidgetProps) => {
  
  const getChart = (chartType: any, index: number) => {
    // switch (chartType.name) {
    //   case "Month":

    return (
      <div>
        <Card className="bg-white h-auto mb-3 pickup-section-card">
          <Card.Body>
            
              <div className="sub-title text-left  mb-3 ">{chartType.name}</div>
              <TableForm index={index} date={chartType.date} />
           
          </Card.Body>
        </Card>
      </div>
    );
    // default:
    //   return null;
    // }
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

export default PickupDetailWidget;
