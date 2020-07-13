import React from "react";
import { Card } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import WidgetHeader from "../../../components/WidgetHeader";
const PieChartComponent = React.lazy(() =>
  import("../../../components/Charts/DonutChart")
);
const data = [
  { x: "90+", y: 35, text: "35%"  },
  { x: "60+", y: 19 , text: "19%" },
  { x: "30+", y: 22 , text: "22%" },
  { x: "14+", y: 3 , text: "3%" },
  { x: "7+", y: 2 , text: "2%" },
  { x: "1+", y: 16 , text: "16%" },
  { x: "One Day", y: 3 , text: "3%" },
];

// const DonutChart = [
//   {
//     dataSource: data,
//     xName: "x",
//     yName: "y",
//     innerRadius:'30%' ,
//     radius:'70%',
//     startAngle:0,
//     endAngle:360,
//     explodeAll: false,
//     marker: {
//       dataLabel: {
//         visible: true,
//         position: "Inside",
//         name: "text",
//         font: {
//           fontWeight: "600",
//           color: "#ffffff",
//         },
//       },
//     },
//   },
//   {
//     dataSource: data,
//     xName: "name",
//     yName: "ADR",
//     type: "Line",
//     fill: "#bb423d",
//     name: "ADR",
//     width: 2,
//     marker: {
//       visible: true,
//       width: 8,
//       height: 8,
//       fill: "#bb423d",
//       border: { width: 0, color: "#bb423d" },
//       dataLabel: {
//         visible: false,
//         position: "Top",
//         font: {
//           fontWeight: "600",
//           color: "#000000",
//         },
//       },
//     },
//   },
// ];


export default (props: any) => {
  return (
    <Card>
      <WidgetHeader title={"Lead Times YTD"} activeToggle={"graph"} />
      <Card.Body>
        <React.Suspense fallback={<Loader />}>
          <PieChartComponent id={"leadtimes"} height={"350px"} data={data} />
        </React.Suspense>
      </Card.Body>
    </Card>
  );
};
