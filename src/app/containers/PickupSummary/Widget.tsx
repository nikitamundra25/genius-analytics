import React, { useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { IDashboardWidgetProps } from "../../../interfaces";
import PickupSegment from "./PickupSegment";
import PickupDOWOCCSegment from "./DOWOCC";
import PickupBusinessMix from "./BusinessMix";
import TableForm from "./MonthlyTable";


const DashboardWidget = ({ graphList }: IDashboardWidgetProps) => {
  console.log("graphList", graphList);
 // const [setHeight, setsetHeight] = React.useState<number>(250);

  // useEffect(() => {
  //   const modalbtn: HTMLElement | null = document.getElementById(
  //     `summary-card0`
  //   );
  //   if (modalbtn) {
  //     setTimeout(() => {
  //       const check = modalbtn.getBoundingClientRect();
  //       const getHeight = check.height;
  //       const setgraphHeight = getHeight - 225;
  //       setsetHeight(setgraphHeight);
  //     }, 100);
  //   }
  //   // eslint-disable-next-line
  // }, []);

  // useEffect(() => {
  //   const resizeListener = () => {
  //     // // change width from the state object
  //     const modalbtn: HTMLElement | null = document.getElementById(
  //       `summary-card0`
  //     );
  //     // console.log("modalbtn", modalbtn);

  //     if (modalbtn) {
  //       setTimeout(() => {
  //         const check = modalbtn.getBoundingClientRect();
  //         const getHeight = check.height;
  //         const setgraphHeight = getHeight - 225;

  //         setsetHeight(setgraphHeight);
  //       }, 100);
  //     }
  //   };
  //   // set resize listener
  //   window.addEventListener("resize", resizeListener);

  //   // clean up function
  //   return () => {
  //     // remove resize listener
  //     window.removeEventListener("resize", resizeListener);
  //   };
  //   // eslint-disable-next-line
  // }, []);

  const getChart = (chartType: any, index: number) => {
    const rowId = index;
    return (
      // <div
      //   id={chartType.idNum}
      //   className='e-panel '
      //   data-row={rowId}
      //   data-col='0'
      //   data-sizex='1'
      //   data-sizey='0'>
      //   <span id='close' className='e-template-icon e-clear-icon' />
      //   <div className='e-panel-container template'>
          <Card id={`summary-card${rowId}`} className="bg-white h-auto mb-3">
            <Card.Body className="pb-0">
              <Row className='row-inner'>
                <Col xs={12} md={5}>
                  <div className='sub-title text-left'>{chartType.name}</div>
                  <div >
                    <PickupSegment
                       month={chartType.id}
                      index={rowId}
                      //setHeight={setHeight}
                    />
                  </div>
                </Col>
                <Col xs={12} md={7}>
                  <TableForm
                    index={rowId}
                    month={chartType.id}
                    tabledata={chartType.tabledata}
                  />
                  <Row className='row-inner'>
                    <Col xs={12} md={6}>
                      <div > 
                      <PickupDOWOCCSegment
                        month={chartType.id}
                        index={rowId}
                        //setHeight={setHeight}
                      />
                      </div>
                    </Col>
                    <Col xs={12} md={6}>
                      <div >
                        <PickupBusinessMix
                          month={chartType.id}
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
        // </div>
      // </div>
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
