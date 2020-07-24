import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { IDashboardWidgetProps } from "../../../interfaces";
import BOBMonthlyTable from "./BOBMonthlyTable";






const DashboardWidget = ({ graphList }: IDashboardWidgetProps) => {
  let rowId:number = 0;
  let colId:number= 0;

  const GetDynamicRowCol = (index:number) => {
    if( index!==0 ){
      if(index %3 ===0 ){
       rowId += 1 
        colId = 0    
      }else{
        colId +=2
      }
    }
  }


  const getChart = (chartType: any, index: number, rowId:number, colId:number) => {
    // switch (chartType.name) {
    //   case "Month":
  
    return (
      <div
            id={chartType.idNum}
            className="e-panel "
            data-row={rowId}
            data-col={colId}
            data-sizex="2"
            data-sizey="0"
          >
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
      {/* <Col xs={12} md={12}> */}
        <Card>
          <Card.Body>
            <Row>
              <Col xs={12} md={12}>
                <div className="sub-title text-left  mb-3 ">{chartType.name}</div>
                <BOBMonthlyTable index={index} 
                graphdata={chartType.pivotData}
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

  return (
    <>
      { graphList && graphList.length ? graphList.map((chartConfig: any, index: number) => {
         GetDynamicRowCol(index)
        return (
          <React.Fragment key={index}>
            {getChart(chartConfig, index, rowId, colId)}
          </React.Fragment>
        );
      }) : null}
    </>
  );
};

export default DashboardWidget;
