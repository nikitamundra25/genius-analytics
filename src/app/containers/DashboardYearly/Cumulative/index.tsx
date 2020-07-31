import React from "react";
import { Card, Table ,OverlayTrigger, Tooltip } from "react-bootstrap";
import { getMonths } from "../../../../helper";
import BarChartComponent from "../../../components/Charts/BarChart";
import PieChartComponent from "../../../components/Charts/PieChart";
import caretup from "../../../../assets/img/caret-up.svg";
import caretdown from "../../../../assets/img/caret-down.svg"
const months = getMonths();
  months.push("Total")
let data = months.map((month: string) => ({
  name: month,
  type: "label",
  data: [
    {
      // label: "",
      value: <div className="text-col">2051</div>,
    },
    {
      // label: "BUD",
      value: (
        <OverlayTrigger
      key={"top"}
      placement={"top"}
      overlay={
        <Tooltip id={`tooltip-increase`}>
          Increase 2%
        </Tooltip>
      }
    >
      <div className="icon-col">
          <img src={caretup} alt="increase" width="15" />
        </div>
    </OverlayTrigger>
        
      ),
    },
    {
      // label: "LY",
      value: (
        <OverlayTrigger
      key={"top"}
      placement={"top"}
      overlay={
        <Tooltip id={`tooltip-decrease`}>
          Decrease 2%
        </Tooltip>
      }
    >
      <div className="icon-col">
          <img src={caretdown} alt="decrease" width="15" />
        </div>
    </OverlayTrigger>
        
      ),
    },
  ],
}));


const tableData = [
  {
    type: "label",
    name: "Room Nights",
    months: data,
  },
  {
    type: "occ",
    name: "OCC %",
    months: data,
  },
  {
    type: "room-dev",
    name: "Room Rev",
    months: data,
  },
  {
    type: "label",
    name: "Room Nights",
    months: data,
  },
  {
    type: "adr",
    name: "ADR",
    months: data,
  },
  {
    type: "revpar",
    name: "RevPAR",
    months: data,
  },
  // {
  //   type: "trev-par",
  //   name: "TrevPAR",
  //   months: data,
  // },
  // {
  //   type: "fnbrevenue",
  //   name: "F&B Revenue",
  //   months: data,
  // },
  // {
  //   type: "mnerevenue",
  //   name: "M&E Revenue",
  //   months: data,
  // },
  // {
  //   type: "otherrevenue",
  //   name: "Other Revenue",
  //   months: data,
  // },
  // {
  //   type: "totalrevenue",
  //   name: "Total Revenue",
  //   months: data,
  // },
  // {
  //   type: "pick-up",
  //   name: "Pick-up",
  //   months: months.map((month) => ({
  //     name: month,
  //     type: "graph",
  //     data: [
  //       {
  //         type: "bar",
  //         data: [
  //           { x: "Room Nights", y: 23 },
  //           { x: "Revenue", y: 27 },
  //           { x: "ARR", y: -15 },
  //         ],
  //       },
  //     ],
  //   })),
  // },
  // {
  //   type: "graph",
  //   name: "Business Mix",
  //   months: months.map((month) => ({
  //     name: month,
  //     type: "graph",
  //     data: [
  //       {
  //         type: "bar",
  //         data: [
  //           { x: "BAR", y: 23 },
  //           { x: "Discount", y: 27 },
  //           { x: "Corporate", y: -15 },
  //           { x: "Cor Group", y: 8 },
  //           { x: "Leisure Group", y: -13 },
  //           { x: "FIT", y: 14 },
  //         ],
  //       },
  //       // {
  //       //   type: "pie",
  //       //   data: [
  //       //     { x: "Brand.com", y: 27, text: "27%" },
  //       //     { x: "OTA", y: 38, text: "38%" },
  //       //     { x: "GDS", y: 20, text: "20%" },
  //       //     { x: "Direct", y: 15, text: "15%" },
  //       //   ],
  //       // },
  //     ],
  //   })),
  // },
];

const pickupdata = [

  { x: "Room Nights", y: 23 },
  { x: "Revenue", y: 27 },
  { x: "ADR", y: -15 },
  
];

const mixdata = [
  { x: "BAR", y: "23" },
  { x: "Discount", y: 27 },
  { x: "Corporate", y: -15 },
  { x: "Cor Group", y: 8 },
  { x: "Leisure Group", y: -13 },
  { x: "FIT", y: 14 },
  
];

const CumulativeTable = () => {
  return (
    <>
      <Card>
        <Card.Body>
        <div className='dashboard-yearly-table mb-3'>

        
          <Table className="yearly-table mb-0" responsive>
            <thead>
              <tr className="business-top-row">
                <th></th>
                {months.map((month: string) => (
                  <th key={month} className="head-col">
                    {month}
                    <br /> Actual
                    <div className="header-sub-title">
                      <span>BUD</span>
                      <span>LY</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((table: any, index: number) => (
                <React.Fragment key={`${table.type}-${index}`}>
                  <tr>
                    <td className="row-title">{table.name}</td>
                    {table.months.map((month: any, index: number) => (
                      <td
                        key={`${month.type}-${index}`}
                        className="content-col"
                      >
                        <div className="d-flex align-items-center flex-wrap">
                          {month.data.map((d: any, ind: number) => (
                            <React.Fragment
                              key={`${table.type}-${index}-${d.label}-${ind}`}
                            >
                              {month.type === "label" ? (
                                <>
                                  {/* {d.label} <br /> */}
                                  {d.value}
                                </>
                              ) : d.type === "bar" ? (
                                <BarChartComponent
                                  id={`${table.name}-${d.type}-${index}-${ind}`}
                                  data={d.data}
                                  height={"250px"}
                                  width={"250px"}
                                  chartSettings={{
                                    primaryXAxis: {
                                      valueType: "Category",
                                      interval: 1,
                                      majorGridLines: { width: 0 },
                                    },
                                    primaryYAxis: {
                                      labelFormat: "{value}",
                                      edgeLabelPlacement: "Shift",
                                      majorGridLines: { width: 0 },
                                      majorTickLines: { width: 0 },
                                      lineStyle: { width: 0 },
                                      labelStyle: {
                                        color: "transparent",
                                      },
                                    },
                                    tooltip: { enable: false },
                                  }}
                                  title={"Business Mix ADR"}
                                  color="#4473c5"
                                />
                              ) : d.type === "pie" ? (
                                <PieChartComponent
                                  height={"250px"}
                                  width={"250px"}
                                  id={`${table.name}-${d.type}-${index}-${ind}`}
                                  data={d.data}
                                  chartSettings={{
                                    SeriesDirective: {
                                      explode: true,
                                      explodeAll: true,
                                      explodeOffset: "5%",
                                      explodeIndex: 0,
                                      radius: "70%",
                                      palettes: [
                                        "#5b9cd6",
                                        "#ed7d31",
                                        "#a5a5a5",
                                        "#ffbf00",
                                      ],
                                    },
                                    chartComponent: {
                                      enableSmartLabels: true,
                                      enableAnimation: false,
                                      center: { x: "50%", y: "50%" },
                                    },
                                  }}
                                />
                              ) : null}
                            </React.Fragment>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </Table>
          </div>

          <div className='dashboard-yearly-table'>
          <Table className="yearly-table mb-0" responsive>
          <thead>
              <tr className="business-top-row">
                <th></th>
                {months.map((month: string) => (
                  <th key={month} className="head-col">
                    {month}
                    <br /> Actual
                    
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
             
                
                  <tr>
                    <td className="row-title">Pick-up</td>
                    {months.map((month: any, index: number) => (
                      <td
                        key={`${month.type}-${index}`}
                        className="content-col"
                      >
                        <div className="d-flex align-items-center flex-wrap">
                          
                                <BarChartComponent
                                  id={`tablebar${month.type}-${index}`}
                                  data={pickupdata}
                                  height={"150px"}
                                  width={"250px"}
                                  chartSettings={{
                                    primaryXAxis: {
                                      valueType: "Category",
                                      interval: 1,
                                      majorGridLines: { width: 0 },
                                    },
                                    primaryYAxis: {
                                      labelFormat: "{value}",
                                      edgeLabelPlacement: "Shift",
                                      majorGridLines: { width: 0 },
                                      majorTickLines: { width: 0 },
                                      lineStyle: { width: 0 },
                                      labelStyle: {
                                        color: "transparent",
                                      },
                                    },
                                    tooltip: { enable: false },
                                  }}
                                  title={"Business Mix ADR"}
                                  color="#4473c5"
                                />
                              
                        </div>
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="row-title">Business Mix</td>
                    {months.map((month: any, index: number) => (
                      <td
                        key={`${month.type}-${index}`}
                        className="content-col"
                      >
                        <div className="d-flex align-items-center flex-wrap">
                          
                                <BarChartComponent
                                  id={`tablebar2${month.type}-${index}`}
                                  data={mixdata}
                                  height={"250px"}
                                  width={"250px"}
                                  chartSettings={{
                                    primaryXAxis: {
                                      valueType: "Category",
                                      interval: 1,
                                      majorGridLines: { width: 0 },
                                    },
                                    primaryYAxis: {
                                      labelFormat: "{value}",
                                      edgeLabelPlacement: "Shift",
                                      majorGridLines: { width: 0 },
                                      majorTickLines: { width: 0 },
                                      lineStyle: { width: 0 },
                                      labelStyle: {
                                        color: "transparent",
                                      },
                                    },
                                    tooltip: { enable: false },
                                  }}
                                  title={"Business Mix %"}
                                  color="#4473c5"
                                />
                              
                        </div>
                      </td>
                    ))}
                  </tr>
                
             
            </tbody>
          </Table>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CumulativeTable;
