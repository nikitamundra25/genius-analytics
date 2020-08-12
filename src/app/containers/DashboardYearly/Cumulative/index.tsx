import React from "react";
import moment from "moment";
import {
  Card,
  Table,
  OverlayTrigger,
  Tooltip,
  ProgressBar,
} from "react-bootstrap";
import { getMonths } from "../../../../helper";
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
    lyData: [232, 191, 169, 268, 289, 272, 214, 152, 302, 154, 204, 383, 2830],
    budData: [362, 387, 340, 326, 304, 396, 319, 380, 283, 213, 204, 285, 3799],
    vsLy: [94, -7, 133, -39, 87, -20, 128, 146, -103, 213, 149, -101, 680],
    vsBud: [-36, -203, -38, -97, 72, -144, 23, -82, -84, 154, 149, -3, -289],
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
    vsLy: [
      "0%",
      "-30%",
      "-43%",
      -"38%",
      "40%",
      "	1%",
      "-49%",
      "	3%",
      "31%",
      "-25%",
      "-28%",
      "-42%",
      "-15%",
    ],
    vsBud: [
      " 0%",
      "-36%",
      "-18%",
      "-14%",
      "	8%",
      "	0%",
      "-6%",
      "-25%",
      "36%",
      "-17%",
      "-2%",
      "-46%",
      "-10%",
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
    vsLy: [83, -26, -119, -95, -74, 70, -195, 159, -7, 69, 3, -31, -13.6],
    vsBud: [132, 62, -158, 116, 91, -6, -192, 5, 153, -115, 118, -70, 11.3],
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
    vsLy: [
      51028,
      -7570,
      14203,
      -37823,
      4105,
      11400,
      -15362,
      85050,
      -43623,
      70266,
      61106,
      -34598,
      158182,
    ],
    vsBud: [
      35616,
      -51522,
      -63524,
      7067,
      48760,
      -57384,
      -56510,
      -32294,
      9447,
      18625,
      84566,
      -20625,
      -77778,
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
    vsLy: [
      45.65,
      -133.96,
      -214.47,
      -211.66,
      81.68,
      59.82,
      -293.99,
      107.91,
      120.73,
      -21.01,
      -110.98,
      -122.09,
      -57.7,
    ],
    vsBud: [
      72.6,
      -76.88,
      -144.4,
      39.14,
      96.24,
      -4.86,
      -119.88,
      -99.85,
      229.23,
      -120.05,
      67.4,
      -168.6,
      -19.2,
    ],
  },
];


const SecondtableData = [
  {
    type: "label",
    title:  "Pick-up",
    subData:[
      {
      name: "Rooms Nights",
      value: [ ""	,""	,55,	-11	,12	,0,	29,	49,	43,	30,	20,	53,	280
      ]
    },
    {
      name: "ADR",
    value: [	"", "" ,	-1,	2,	1,	-1,	8	,-2,	2	,-3	,1,	0	,0.7
    ]
    },
    {
      name: "Revenue",
      value: [	"","" ,	-599,	-3804	,7800	,3022,	1655,	5696,	-2538	,6155,	-1297,	7519,	23609
      ]
    }
  ]
  },
  {
    type: "progressBar",
    title: "Business Mix",
    subData: [
      {
        name: "Bar",
        value: [26,	20,	26,	24,	24,	24,	24,	23,	20,	26,	20,	26,	24
        ]
      },
      {
        name: "Discount",
        value: [11,	14,	11,	15,	16,	19,	18,	18,	11,	11,	12,	11,	14
          ,
        ]
      },
      {
        name: "COR Discount",
        value: [12,	 9,	 10,	10,	 8,	 10,	10,	 12,	10,	 11,	8,	8,	10
      
        ]
      },
      {
        name: "Meetings",
        value: [25	,20,	20,	19,	19,	19,	19,	29,	19,	19,	23,	27,	22

        ]
      },
      {
        name: "Corporate",
        value: [16,	16,	18,	18,	17,	17,	20,	17,	16,	17,	16,	20,	17

        ]
      },
      {
        name: "Cor Group",
        value: [10,	14,	14,	12,	11,	12,	14,	10,	12,	10,	10,	11,	12

        ]
      },
      {
        name: "Leisure Group",
        value: [13, 	13,	 8,	 12,	8,	11,	 11,	13, 	10,	 12,	12, 	8, 	11

        ]
      },
      {
        name: "FIT",
        value: [6,	5,	7,	9,	6,	6,	5,	6,	9,	8,	5,	8,	7
        ]
      },
    ]
  }
]



const CumulativeTable = ({ selectedDate }: any) => {
 

  return (
    <>
      <Card>
        <Card.Body>
          <div className="dashboard-yearly-table mb-3">
            <Table className="yearly-table mb-0" responsive>
              <thead>
                <tr className="business-top-row">
                  <th></th>
                  {months.map((month: string, indx: number) => (
                    <th key={month} className="head-col">
                      {month}
                      <br />{" "}
                      {month === "Total"
                        ? moment(selectedDate).format("YYYY")
                        : indx === 9
                        ? "BOB/Actual"
                        : indx >= 10 && indx <= 11
                        ? "BOB"
                        : "Actual"}
                      <div className="header-sub-title">
                        <span>BUD</span>
                        <span>LY</span>
                        {/* <span>VS.BUD</span>
                        <span>VS.LY</span> */}
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
                                <img
                                  src={
                                    parseInt(table.monthData[index]) <=
                                    parseInt(table.budData[index])
                                      ? caretup
                                      : caretdown
                                  }
                                  alt="increase"
                                  width="12"
                                />
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
                                  src={
                                    parseInt(table.monthData[index]) <=
                                    parseInt(table.lyData[index])
                                      ? caretup
                                      : caretdown
                                  }
                                  alt="decrease"
                                  width="12"
                                />
                              </div>
                            </OverlayTrigger>

                            {/* <OverlayTrigger
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
                            </OverlayTrigger> */}
                          </div>
                        </td>
                      ))}
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </Table>
          </div>

          <div className="dashboard-yearly-table ">
            <Table className="yearly-table mb-0" responsive>
              <thead>
                <tr className="business-top-row">
                  <th></th>
                  <th></th>
                  {months.map((month: string, index: number) => (
                    <th key={month} className="head-col min-wauto pb-1">
                      {month}
                      <br />{" "}
                      {month === "Total"
                        ? moment(selectedDate).format("YYYY")
                        : index === 9
                        ? "BOB/Actual"
                        : index >= 10 && index <= 11
                        ? "BOB"
                        : "Actual"}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
              {SecondtableData && SecondtableData.length ? 
              SecondtableData.map((list:any,index:number)=>{
                // let newArr:any = []
                // for (let index = 0; index < list.subData.length; index++) {
                //   const element: any = list.subData[index].value;
                //   newArr.push(element)
                // }
                // let maxArr = newArr.reduce(function(final:any, current:any) {
                //   for (let i = 0; i < final.length; ++i) {
                //     if (current[i] > final[i]) {
                //       final[i] = current[i];
                //     }
                //   }
                //   return final;
                // });
               return ( list.subData.map((subdata : any, ind:number)=>{      
               return <tr key={ind} >
                 {ind === 0 ? (
                <td className="row-title" rowSpan={list.subData.length}>
                  {list.title}
                </td>
                   ) : null}
                  <>
                  <td className="row-title sub-bg"> {subdata.name} </td>
                 { subdata.value.map((value: any, i: number) => (
                      list.type === "label" ?
                    <td key={`${i}`}  className={`content-col  
                    ${
                      parseInt(value) < 0
                        ? "bg-negative"
                        : ""
                    }`}>
                      {value ? value : "-"}
                    </td>
                    : <td
                    key={`${i}`}
                    className="content-col bg-white"
                  >
                    <ProgressBar
                      now={value}
                      className="custom-bar"
                      label={`${value}%`}
                    />
                  </td>
                  ))}
                  </>
              </tr>
              }))
              })
            : null
            }
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CumulativeTable;
