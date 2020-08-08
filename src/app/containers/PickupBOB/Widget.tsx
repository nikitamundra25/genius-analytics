import React from "react";
import {  Card } from "react-bootstrap";
import { IDashboardWidgetProps } from "../../../interfaces";
import BOBMonthlyTable from "./BOBMonthlyTable";

const DashboardWidget = ({ graphList }: IDashboardWidgetProps) => {



  const getChart = (
    chartType: any,
    index: number
  ) => {
    // switch (chartType.name) {
    //   case "Month":

    return (
     <div>
          
          <Card>
            <Card.Body>
          
                <>
                  <div className="sub-title text-left  mb-3 ">
                    {chartType.name}
                  </div>
                  <BOBMonthlyTable
                  index={index}
                  />
                  </>
             
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
