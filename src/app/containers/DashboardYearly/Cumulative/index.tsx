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
    lyData: [
      232,
      191,
      169,
      268,
      289,
      272,
      214,
      152,
      302,
      154,
      204,
      383,
      2830,
    ],
    budData: [362, 387, 340, 326, 304, 396, 319, 380, 283, 213, 204, 285, 3799],
    vsLy:[94,	-7,	133	,-39,	87,	-20	,128,	146	,-103,	213,	149,	-101	,680 ],
    vsBud:[-36,	-203,	-38	,-97,	72	,-144	,23,	-82	,-84,	154	,149,	-3,	-289]
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
    lyData: [
      "55%",
      "86%",
      "87%",
      "96%",
      "48%",
      "80%",
      "99%",
      "60%",
      "60%",
      "71%",
      "90%",
      "89%",
      "77%",
    ],
    budData: [
      "55%",
      "92%",
      "62%",
      "72%",
      "80%",
      "81%",
      "56%",
      "88%",
      "55%",
      "63%",
      "64%",
      "93%",
      "72%",
    ],
    vsLy:["0%",	-"30%",	-"43%",	-"38%",	"40%","	1%",	-"49%","	3%",	"31%",	-"25%",	-"28%",	-"42%",	-"15%"
    ],
    vsBud:[" 0%",	-"36%",	-"18%",	-"14%",  "	8%",  "	0%", 	"-6%",	  -"25%",	 "36%",	 -"17%","-2%",	 -"46%", -"10%"
    ]
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
    lyData: [255, 398, 377, 412, 367, 312, 401, 258, 410, 211, 403, 256, 338.3],
    budData: [
      206,
      310,
      416,
      201,
      202,
      388,
      398,
      412,
      250,
      395,
      288,
      295,
      313.4,
    ],
    vsLy:[83,	-26	,-119	,-95,	-74	,70,	-195,	159,	-7,	69,	3	,-31,	-13.6
    ],
    vsBud:[132,	62	,-158,	116	,91,	-6,	-192,	5	,153,	-115,	118	,-70,	11.3
    ]
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
    lyData: [
      "59,160",
      "76,018",
      "63,713",
      "1,10,416",
      "1,06,063",
      "84,864",
      "85,814",
      "39,216",
      "1,23,820",
      "32,494",
      " 82,212",
      "98,048",
      "9,61,838",
    ],
    budData: [
      74572,
      119970,
      141440,
      65526,
      61408,
      153648,
      126962,
      156560,
      70750,
      84135,
      58752,
      84075,
      1197798,
    ],
    vsLy:[51028,	-7570,	14203	,-37823,	4105,	11400,	-15362,	85050	,-43623,	70266,	61106,	-34598,	158182
    ],
    vsBud:[35616,	-51522,	-63524,	7067,	48760	,-57384	,-56510	,-32294	,9447,	18625,	84566,	-20625,	-77778
    ]
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
    lyData: [
      140.25,
      342.28,
      327.99,
      395.52,
      176.16,
      249.6,
      396.99,
      154.8,
      246,
      149.81,
      362.7,
      227,
      84,
      264.2,
    ],
    budData: [
      113.3,
      285.2,
      257.92,
      144.72,
      161.6,
      314.28,
      222.88,
      362.56,
      137.5,
      248.85,
      184.32,
      274.35,
      225.6,
    ],
    vsLy:[45.65	,-133.96,	-214.47	,-211.66,	81.68	,59.82,	-293.99,	107.91,	120.73,	-21.01,	-110.98,	-122.09,	-57.7
    ],
    vsBud:[72.6,	-76.88,	-144.4,	39.14	,96.24	,-4.86,	-119.88	,-99.85,	229.23	,-120.05,	67.4,	-168.6	,-19.2
    ]
  },
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

const mixdata = [
  [
    { x: "BAR", y: 26 },
    { x: "Discount", y: 11 },
    { x: "COR Discount", y: 12 },
    { x: "Meetings", y: 25 },
    { x: "Corporate", y: 16 },
    { x: "Cor Group", y: 10 },
    { x: "Leisure Group", y: 13 },
    { x: "FIT", y: 6 },
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
  ],
  [
    { x: "BAR", y: 24 },
    { x: "Discount", y: 16 },
    { x: "COR Discount", y: 8 },
    { x: "Meetings", y: 19 },
    { x: "Corporate", y: 17 },
    { x: "Cor Group", y: 11 },
    { x: "Leisure Group", y: 8 },
    { x: "FIT", y: 6 },
  ],
  [
    { x: "BAR", y: 24 },
    { x: "Discount", y: 19 },
    { x: "COR Discount", y: 10 },
    { x: "Meetings", y: 19 },
    { x: "Corporate", y: 17 },
    { x: "Cor Group", y: 12 },
    { x: "Leisure Group", y: 11 },
    { x: "FIT", y: 6 },
  ],
  [
    { x: "BAR", y: 24 },
    { x: "Discount", y: 18 },
    { x: "COR Discount", y: 10 },
    { x: "Meetings", y: 19 },
    { x: "Corporate", y: 20 },
    { x: "Cor Group", y: 14 },
    { x: "Leisure Group", y: 11 },
    { x: "FIT", y: 5 },
  ],
  [
    { x: "BAR", y: 23 },
    { x: "Discount", y: 18 },
    { x: "COR Discount", y: 12 },
    { x: "Meetings", y: 29 },
    { x: "Corporate", y: 17 },
    { x: "Cor Group", y: 10 },
    { x: "Leisure Group", y: 13 },
    { x: "FIT", y: 6 },
  ],
  [
    { x: "BAR", y: 20 },
    { x: "Discount", y: 11 },
    { x: "COR Discount", y: 10 },
    { x: "Meetings", y: 19 },
    { x: "Corporate", y: 16 },
    { x: "Cor Group", y: 12 },
    { x: "Leisure Group", y: 10 },
    { x: "FIT", y: 9 },
  ],
  [
    { x: "BAR", y: 26 },
    { x: "Discount", y: 11 },
    { x: "COR Discount", y: 11 },
    { x: "Meetings", y: 19 },
    { x: "Corporate", y: 17 },
    { x: "Cor Group", y: 10 },
    { x: "Leisure Group", y: 12 },
    { x: "FIT", y: 8 },
  ],
  [
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
  ],
  [
    { x: "BAR", y: 24 },
    { x: "Discount", y: 14 },
    { x: "COR Discount", y: 10 },
    { x: "Meetings", y: 22 },
    { x: "Corporate", y: 17 },
    { x: "Cor Group", y: 12 },
    { x: "Leisure Group", y: 11 },
    { x: "FIT", y: 7 },
  ],
];

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
                  {months.map((month: string,indx:number) => (
                    <th key={month} className="head-col">
                      {month}
                      <br /> { month === "Total" ? "2018" : indx === 9 ? "BOB/Actual" : indx >= 10 && indx <=11 ? "BOB": "Actual" }  
                      <div className="header-sub-title">
                        <span>BUD</span>
                        <span>LY</span>
                        <span>VS.BUD</span>
                        <span>VS.LY</span>
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
                              key={"top1"}
                              placement={"top"}
                              overlay={
                                <Tooltip id={`tooltip-increase`}>
                                  {table.budData && table.budData.length
                                ? table.budData[index]
                                : 0}
                                </Tooltip>
                              }
                            >
                              <div className="icon-col">
                                <img src= {parseInt(table.monthData[index]) <= parseInt (table.budData[index]) ? caretup : caretdown } alt="increase" width="15" />
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger
                              key={"top2"}
                              placement={"top"}
                              overlay={
                                <Tooltip id={`tooltip-decrease`}>
                                {table.lyData && table.lyData.length
                                ? table.lyData[index]
                                : 0}
                                </Tooltip>
                              }
                            >
                              <div className="icon-col">
                                <img
                                  src={parseInt(table.monthData[index]) <= parseInt(table.lyData[index]) ? caretup : caretdown } 
                                  alt="decrease"
                                  width="15"
                                />
                              </div>
                            </OverlayTrigger>

                            <OverlayTrigger
                              key={"top3"}
                              placement={"top"}
                              overlay={
                                <Tooltip id={`tooltip-decrease`}>
                                {table.vsBud && table.vsBud.length
                                ? table.vsBud[index]
                                : 0}
                                </Tooltip>
                              }
                            >
                              <div className="icon-col">
                                <img
                                  src={parseInt(table.monthData[index]) <= parseInt(table.vsBud[index]) ? caretup : caretdown } 
                                  alt="decrease"
                                  width="15"
                                />
                              </div>
                            </OverlayTrigger>

                            <OverlayTrigger
                              key={"top4"}
                              placement={"top"}
                              overlay={
                                <Tooltip id={`tooltip-decrease`}>
                                {table.vsLy && table.vsLy.length
                                ? table.vsLy[index]
                                : 0}
                                </Tooltip>
                              }
                            >
                              <div className="icon-col">
                                <img
                                  src={parseInt(table.monthData[index]) <= parseInt(table.vsLy[index]) ? caretup : caretdown } 
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
                      <br /> { month === "Total" ? "2018" : index === 9 ? "BOB/Actual" : index >= 10 && index <=11 ? "BOB": "Actual" }
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
                        {pickupChartData[index] &&
                        pickupChartData[index].length ? (
                          <BarChartComponent
                            id={`tablebar${month.type}-${index}`}
                            data={pickupChartData[index]}
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
                              height: "150px",
                              width: "250px",
                            }}
                            title={"Business Mix ADR"}
                            color="#4473c5"
                          />
                        ) : (
                          <div
                            className="bg-white"
                            style={{ width: "250px", height: "150px" }}
                          ></div>
                        )}
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
                          // height={"250px"}
                          // width={"250px"}
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
                            height: "250px",
                            width: "250px",
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
