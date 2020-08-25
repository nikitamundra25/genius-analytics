import React from "react";
import { Row, Col, Card, Table } from "react-bootstrap";
import { IDashboardWidgetProps } from "../../../interfaces";
import PickupSegment from "./PickupSegment";
import PickupDOWOCCSegment from "./DOWOCC";
import PickupBusinessMix from "./BusinessMix";
import TableForm from "./MonthlyTable";
import caretup from "../../../assets/img/caret-up.svg";
import caretdown from "../../../assets/img/caret-down.svg";

const DashboardWidget = ({ graphList }: IDashboardWidgetProps) => {
  const getChart = (chartType: any, index: number) => {
    const rowId = index;
    
    return (
      <>
      <Card
        id={`summary-card${rowId}`}
        className='bg-white h-auto mb-3 pickup-section-card d-none'>
        <Card.Body className=''>
          <div className='sub-title mb-3'>Pickup Summary</div>
          <Row className=''>
            <Col xs={12} md={6}>
            
            <Table responsive striped  className='summary-table mb-0'>
              <thead>
                <tr>
                  <th className="empty-col"></th>
                  <th className="head-col">Rooms</th>
                  <th className="head-col">ADR</th>
                  <th className="head-col">Revenue</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="row-title">Aug 20 </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">72</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">11</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">9062</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="row-title">Sep 20 </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">95</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">-5</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">7416</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                </tr>


                <tr>
                  <td className="row-title">Oct 20 </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">-42</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">-4</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">-4505</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                </tr>


                <tr>
                  <td className="row-title">Nov 20 </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">51</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">9</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">7529</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="row-title">Dec 20 </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">43</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">10</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">792</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="row-title">Jan 21 </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">-4</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">-5</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">-1179</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="row-title">Feb 21 </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">90</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">11</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">3843</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="row-title">Mar 21 </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">2</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">-2</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">-5023</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="row-title">Apr 21 </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">80</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">9</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">8158</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                </tr>
                

              </tbody>
            </Table>
               
            </Col>
            <Col xs={12} md={6}>
            <Table responsive striped  className='summary-table mb-0'>
              <thead>
                <tr>
                  <th className="empty-col"></th>
                  <th className="head-col">Rooms</th>
                  <th className="head-col">ADR</th>
                  <th className="head-col">Revenue</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="row-title">May 21 </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">52</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">2</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">3040</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="row-title">Jun 21 </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">64</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">-4</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">-4457</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                </tr>


                <tr>
                  <td className="row-title">Jul 21 </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">-42</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">-2</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">5165</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                </tr>


                <tr>
                  <td className="row-title">Aug 21 </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">15</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">3</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">4465</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="row-title">Sep 21 </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">4</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">1</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">345</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="row-title">Oct 21 </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">-4</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">-6</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">1366</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="row-title">Nov 21 </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">77</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">3</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">4444</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="row-title">Dec 21 </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">46</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">1</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">2312</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="row-title">Jan 22 </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">55</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">1</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                  <td className="content-col">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-col">4599</div>
                      <div className="icon-col">
                         <img
                           src={caretdown}
                           alt="increase"
                           width="12"
                         />
                       </div>
                    </div>
                  </td>
                </tr>
                

              </tbody>
            </Table>
            </Col>
          </Row>
          </Card.Body>
      </Card>
      <Card
        id={`summary-card${rowId}`}
        className='bg-white h-auto mb-3 pickup-section-card'>
        <Card.Body className='pb-0'>
          <Row className='no-gutters'>
            <Col xs={12} md={5}>
              <div className='sub-title text-left'>{chartType.name}</div>
              <div>
                <PickupSegment
                  index={rowId}
                  date={chartType.date}
                />
              </div>
            </Col>
            <Col xs={12} md={7}>
              <TableForm index={rowId} tabledata={chartType.tabledata} date={chartType.date}/>
              <Row className='no-gutters'>
                <Col xs={12} md={6}>
                  <div>
                    <PickupDOWOCCSegment
                      index={rowId}
                      date={chartType.date}
                    />
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div>
                    <PickupBusinessMix
                      index={rowId}
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
