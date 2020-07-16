import React from "react";
import { Card } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import WidgetHeader from "../../../components/WidgetHeader";
const PieChartComponent = React.lazy(() =>
  import("../../../components/Charts/PieChart")
);
const data = [
  { x: "90+", y: 35, text: "35%" },
  { x: "60+", y: 19, text: "19%" },
  { x: "30+", y: 22, text: "22%" },
  { x: "14+", y: 3, text: "3%" },
  { x: "7+", y: 2, text: "2%" },
  { x: "1+", y: 16, text: "16%" },
  { x: "One Day", y: 3, text: "3%" },
];

export default (props: any) => {
  return (
    <Card>
      <WidgetHeader title={"Lead Times YTD"} activeToggle={"graph"} />
      <Card.Body>
        <React.Suspense fallback={<Loader />}>
          <PieChartComponent
            id={"leadtimes"}
            height={"285px"}
            data={data}
            chartSettings={{
              SeriesDirective: {
                innerRadius: "40%",
                radius: "70%",
                palettes: [
                  "#4f81bc",
                  "#c0504e",
                  "#9bbb58",
                  "#8165a2",
                  "#4cacc5",
                  "#e79645",
                  "#2c4e74",
                ],
              },
              chartComponent: {
                enableAnimation: false,
                center: { x: "50%", y: "50%" },
              },
            }}
          />
        </React.Suspense>
      </Card.Body>
    </Card>
  );
};
