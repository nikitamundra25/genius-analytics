import React from "react";
import { Card, Table, OverlayTrigger, Tooltip } from "react-bootstrap";
import { getMonths } from "../../../../helper";
import BarChartComponent from "../../../components/Charts/BarChart";
// import PieChartComponent from "../../../components/Charts/PieChart";
import caretup from "../../../../assets/img/caret-up.svg";
import caretdown from "../../../../assets/img/caret-down.svg";
const months = getMonths();
months.push("Total");

let data = months.map((month: string, index: number) => ({
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
          overlay={<Tooltip id={`tooltip-increase`}>Increase 2%</Tooltip>}
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
          overlay={<Tooltip id={`tooltip-decrease`}>Decrease 2%</Tooltip>}
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
    monthData: [
      326,
      184,
      302,
      229,
      376,
      252,
      342,
      298,
      199,
      367,
      353,
      282,
      3510,
    ],
  },
  {
    type: "occ",
    name: "OCC %",
    months: data,
    monthData: [
      "55%",
      "56%",
      "44%",
      "58%",
      "88%",
      "81%",
      "50%",
      "63%",
      "91%",
      "46%",
      "62%",
      "47%",
      "62%",
    ],
  },
  {
    type: "adr",
    name: "ADR",
    months: data,
    monthData: [
      338,
      372,
      258,
      317,
      293,
      382,
      206,
      417,
      403,
      280,
      406,
      225,
      324.8,
    ],
  },
  {
    type: "revenue",
    name: "Revenue",
    months: data,
    monthData: [
      "1,10,188",
      "68,448",
      "77,916",
      "72,593 ",
      "1,10,168",
      "96,264",
      "70,452",
      "1,24,266",
      "80,197",
      "1,02,760",
      "1,43,318",
      " 63,450",
      "11,20,020",
    ],
  },
  {
    type: "room-dev",
    name: "Rev Par",
    months: data,
    monthData: [
      185.9,
      208.32,
      113.52,
      183.86,
      257.84,
      309.42,
      103,
      262.71,
      366.73,
      128.8,
      251.72,
      105.75,
      206.5,
    ],
  },
  // {
  //   type: "label",
  //   name: "Room Nights Ly",
  //   months: data,
  //   monthData: [
  //     232	,191,	169	,268,	289	,272,	214,152	,302,	154	,204,	383,	2830

  //   ],
  // },
  // {
  //   type: "label",
  //   name: "OCC% LY",
  //   months: data,
  //   monthData: [
  //     "55%",	"86%",	"87%",	"96%",	"48%",	"80%",	"99%",	"60%",	"60%",	"71%",	"90%",	"89%",	"77%",
  //   ],
  // },
  // {
  //   type: "label",
  //   name: "ADR LY",
  //   months: data,
  //   monthData: [
  //     255,	398,	377,	412,	367	,312,	401,	258,	410	,211	,403,	256,	338.3

  //   ],
  // },
  // {
  //   type: "label",
  //   name: "Revenue LY",
  //   months: data,
  //   monthData: [
  //     "59,160" ,	 "76,018" ,	 "63,713" ,	 "1,10,416" ,	 "1,06,063" ,	 "84,864" ,	 "85,814", 	 "39,216" ,	 "1,23,820" ,	"32,494" ,	" 82,212" 	, "98,048" ,	 "9,61,838"
  //   ],
  // },
  // {
  //   type: "revpar",
  //   name: "RevPAR Ly",
  //   months: data,
  //   monthData: [
  //     140.25,	342.28,	327.99,	395.52,	176.16,	249.6	,396.99	,154.8,	246	,149.81	,362.7,	227.,84,	264.2
  //   ],
  // },

  // {
  //   type: "label",
  //   name: "Room Nights BUD",
  //   months: data,
  //   monthData: [
  //     362,	387	,340,	326,	304	,396	,319,	380,	283,	213,	204	,285	,3799
  //   ],
  // },
  // {
  //   type: "label",
  //   name: "OCC% BUD",
  //   months: data,
  //   monthData: [
  //     "55%",	"92%",	"62%",	"72%",	"80%",	"81%",	"56%",	"88%",	"55%",	"63%",	"64%",	"93%",	"72%",

  //   ],
  // },
  // {
  //   type: "label",
  //   name: "ADR BUD",
  //   months: data,
  //   monthData: [
  //     206,	310	,416	,201	,202	,388,	398,	412	,250,	395	,288,	295,	313.4

  //   ],
  // },
  // {
  //   type: "label",
  //   name: "Revenue BUD",
  //   months: data,
  //   monthData: [
  //     74572 ,	 119970 ,	 141440 ,	 65526 ,	 61408 ,	 153648 ,	 126962 ,	 156560 ,	 70750, 	 84135 	, 58752 ,	 84075 	, 1197798

  //   ],
  // },
  // {
  //   type: "revpar",
  //   name: "RevPAR BUD",
  //   months: data,
  //   monthData: [
  //     113.3	,285.2,	257.92	,144.72,	161.6	,314.28	,222.88	,362.56,	137.5,	248.85,	184.32,	274.35,	225.6

  //   ],
  // },
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

const pickupChartData = [
  [],
  [],
  [
    { x: "Room Nights", y: 55 },
    { x: "ADR", y: -1 },
    { x: "Revenue", y: -599 },
  ],
  [
    { x: "Room Nights", y: -11 },
    { x: "ADR", y: 2 },
    { x: "Revenue", y: -3804 },
  ],
  [
    { x: "Room Nights", y: 12 },
    { x: "ADR", y: 1 },
    { x: "Revenue", y: 7800 },
  ],
  [
    { x: "Room Nights", y: 0 },
    { x: "ADR", y: -1 },
    { x: "Revenue", y: 3022 },
  ],
  [
    { x: "Room Nights", y: 29 },
    { x: "ADR", y: 8 },
    { x: "Revenue", y: 1655 },
  ],
  [
    { x: "Room Nights", y: 49 },
    { x: "ADR", y: -2 },
    { x: "Revenue", y: -2538 },
  ],
  [
    { x: "Room Nights", y: 43 },
    { x: "ADR", y: -2 },
    { x: "Revenue", y: -2538 },
  ],
  [
    { x: "Room Nights", y: 30 },
    { x: "ADR", y: -3 },
    { x: "Revenue", y: 6155 },
  ],
  [
    { x: "Room Nights", y: 20 },
    { x: "ADR", y: 1 },
    { x: "Revenue", y: -1297 },
  ],
  [
    { x: "Room Nights", y: 53 },
    { x: "ADR", y: 0 },
    { x: "Revenue", y: 7519 },
  ],
  [
    { x: "Room Nights", y: 280 },
    { x: "ADR", y: 0.7 },
    { x: "Revenue", y: 23609 },
  ],
];


const mixdata = [[
  { x: "BAR", y: 26 },
  { x: "Discount", y: 11 },
  { x: "COR Discount", y: 12 },
  { x: "Meetings", y: 25 },
  { x: "Corporate", y: 16 },
  { x: "Cor Group", y: 10 },
  { x: "Leisure Group", y: 13 },
  { x: "FIT", y: 6 }
],
[
  { x: "BAR", y: 20 },
  { x: "Discount", y: 14 },
  { x: "COR Discount", y: 9 },
  { x: "Meetings", y: 20 },
  { x: "Corporate", y: 16 },
  { x: "Cor Group", y: 14 },
  { x: "Leisure Group", y: 13 },
  { x: "FIT", y: 5 },
],
[
  { x: "BAR", y: 26 },
  { x: "Discount", y: 11 },
  { x: "COR Discount", y: 10 },
  { x: "Meetings", y: 20 },
  { x: "Corporate", y: 18 },
  { x: "Cor Group", y: 14 },
  { x: "Leisure Group", y: 8 },
  { x: "FIT", y: 7 },
],
[
  { x: "BAR", y: 24 },
  { x: "Discount", y: 15 },
  { x: "COR Discount", y: 10 },
  { x: "Meetings", y: 19 },
  { x: "Corporate", y: 18 },
  { x: "Cor Group", y: 12 },
  { x: "Leisure Group", y: 12 },
  { x: "FIT", y: 9 },
],[
  { x: "BAR", y: 24 },
  { x: "Discount", y: 16 },
  { x: "COR Discount", y: 8 },
  { x: "Meetings", y: 19 },
  { x: "Corporate", y: 17 },
  { x: "Cor Group", y: 11 },
  { x: "Leisure Group", y: 8 },
  { x: "FIT", y: 6 },
],[
  { x: "BAR", y: 24 },
  { x: "Discount", y: 19 },
  { x: "COR Discount", y: 10 },
  { x: "Meetings", y: 19 },
  { x: "Corporate", y: 17 },
  { x: "Cor Group", y: 12 },
  { x: "Leisure Group", y: 11 },
  { x: "FIT", y: 6 },
],[
  { x: "BAR", y: 24 },
  { x: "Discount", y: 18 },
  { x: "COR Discount", y: 10 },
  { x: "Meetings", y: 19 },
  { x: "Corporate", y: 20 },
  { x: "Cor Group", y: 14 },
  { x: "Leisure Group", y: 11 },
  { x: "FIT", y: 5 },
],[
  { x: "BAR", y: 23 },
  { x: "Discount", y: 18 },
  { x: "COR Discount", y: 12 },
  { x: "Meetings", y: 29 },
  { x: "Corporate", y: 17 },
  { x: "Cor Group", y: 10 },
  { x: "Leisure Group", y: 13 },
  { x: "FIT", y: 6 },
],[
  { x: "BAR", y: 20 },
  { x: "Discount", y: 11 },
  { x: "COR Discount", y: 10 },
  { x: "Meetings", y: 19 },
  { x: "Corporate", y: 16 },
  { x: "Cor Group", y: 12 },
  { x: "Leisure Group", y: 10 },
  { x: "FIT", y: 9 },
],[
  { x: "BAR", y: 26 },
  { x: "Discount", y: 11 },
  { x: "COR Discount", y: 11 },
  { x: "Meetings", y: 19 },
  { x: "Corporate", y: 17 },
  { x: "Cor Group", y: 10 },
  { x: "Leisure Group", y:12 },
  { x: "FIT", y: 8 },
],[
  { x: "BAR", y: 20 },
  { x: "Discount", y: 12 },
  { x: "COR Discount", y: 8 },
  { x: "Meetings", y: 23 },
  { x: "Corporate", y: 16 },
  { x: "Cor Group", y: 10 },
  { x: "Leisure Group", y: 12 },
  { x: "FIT", y: 5 },
],
[
  { x: "BAR", y: 26 },
  { x: "Discount", y: 11 },
  { x: "COR Discount", y: 8 },
  { x: "Meetings", y: 27 },
  { x: "Corporate", y: 20 },
  { x: "Cor Group", y: 11 },
  { x: "Leisure Group", y: 8 },
  { x: "FIT", y: 8 },
],[
  { x: "BAR", y: 24 },
  { x: "Discount", y: 14 },
  { x: "COR Discount", y: 10 },
  { x: "Meetings", y: 22 },
  { x: "Corporate", y: 17 },
  { x: "Cor Group", y: 12 },
  { x: "Leisure Group", y: 11 },
  { x: "FIT", y: 7 },
],
]

const CumulativeTable = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <div className="dashboard-yearly-table mb-3">
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
                            <div className="text-col">
                              {" "}
                              {table.monthData && table.monthData.length
                                ? table.monthData[index]
                                : 0}
                            </div>
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
                                <img
                                  src={caretdown}
                                  alt="decrease"
                                  width="15"
                                />
                              </div>
                            </OverlayTrigger>
                            {/* {month.data.map((d: any, ind: number) => (
                              <React.Fragment
                              key={`${table.type}-${index}-${d.label}-${ind}`}
                              >
                                {month.type === "label" ? (
                                  console.log("++++++++++++++Month",d),
                                
                                  <>
                                   
                                    {table.monthData && table.monthData.length
                                      ? table.monthData[index]
                                      : 251}
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
                            ))} */}
                          </div>
                        </td>
                      ))}
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </Table>
          </div>

          <div className="dashboard-yearly-table">
            <Table className="yearly-table mb-0" responsive>
              <thead>
                <tr className="business-top-row">
                  <th></th>
                  {months.map((month: string, index: number) => (
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
                    <td key={`${month.type}-${index}`} className="content-col">
                      <div className="d-flex align-items-center flex-wrap">
                        {pickupChartData[index] && pickupChartData[index].length ? 
                        <BarChartComponent
                          id={`tablebar${month.type}-${index}`}
                          data={pickupChartData[index]}
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
                        : <div className="bg-white"  style={{ width: "250px", height: "150px" }}
                        ></div> }
                      </div>
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="row-title">Business Mix</td>
                  {months.map((month: any, index: number) => (
                    <td key={`${month.type}-${index}`} className="content-col">
                      <div className="d-flex align-items-center flex-wrap">
                        <BarChartComponent
                          id={`tablebar2${month.type}-${index}`}
                          data={mixdata[index]}
                          height={"250px"}
                          width={"250px"}
                          chartSettings={{
                            primaryXAxis: {
                              valueType: "Category",
                              interval: 1,
                              majorGridLines: { width: 0 },
                            },
                            primaryYAxis: {
                              labelFormat: "{value}%",
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
