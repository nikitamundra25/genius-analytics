import React from "react";
import { Card } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import WidgetHeader from "../../../components/WidgetHeader";
const PieChartComponent = React.lazy(() =>
  import("../../../components/Charts/DonutChart")
);
const data = [
  { x: "90+", y: 2, text: "2%"  },
  { x: "60+", y: 5 , text: "5%" },
  { x: "30+", y: 11 , text: "11%" },
  { x: "14+", y: 17 , text: "17%" },
  { x: "7+", y: 23 , text: "23%" },
  { x: "1+", y: 28 , text: "28%" },
  { x: "One Day", y: 14 , text: "14%" },
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
      <WidgetHeader title={"Lead Times YTD by Segment"} activeToggle={"graph"} />
      <Card.Body >
        <React.Suspense fallback={<Loader />}>
          <PieChartComponent id={"leadtimesSegment"} height={"350px"} data={data} />
        </React.Suspense>
      </Card.Body>
    </Card>
  );
};
