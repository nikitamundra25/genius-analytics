import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { IDashboardWidgetProps } from "../../../interfaces";
import TableForm from "./MonthlyTable";

let rowId:number = 0;
  let colId:number= 0;
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

const DashboardWidget = ({ graphList }: IDashboardWidgetProps) => {
  
  return (
    <Row>
      {graphList.map((chartConfig: any, index: number) => {
         GetDynamicRowCol(index)
        return (
          <React.Fragment key={index}>
            {getChart(chartConfig, index, rowId, colId)}
          </React.Fragment>
        );
      })}
    </Row>
  );
};

export default DashboardWidget;
