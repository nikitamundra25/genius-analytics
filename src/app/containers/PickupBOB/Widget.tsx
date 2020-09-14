import React from "react";
import {  Card } from "react-bootstrap";
import { IDashboardWidgetProps } from "../../../interfaces";
import BOBMonthlyTable from "./BOBMonthlyTable";

const DashboardWidget = ({ graphList }: IDashboardWidgetProps) => {

  const getChart = (
    chartType: any,
    index: number
  ) => {

    return (
     <div>
          
          <Card className="bg-white h-auto mb-3 pickup-section-card">
            <Card.Body>
          
               
                  <div className="sub-title text-left  mb-3 ">
                    {chartType.name}
                  </div>
                  <BOBMonthlyTable
                   index={index}
                   date = {chartType.date}
                  />
                 
             
            </Card.Body>
          </Card>
          
        </div>
      
    );

  };

  return (
    <>
      {graphList && graphList.length
        ? graphList.map((chartConfig: any, index: number) => {
         
            return (
              <React.Fragment key={index}>
                {getChart(chartConfig, index)}
              </React.Fragment>
            );
          })
        : null}
    </>
  );
};

export default DashboardWidget;
