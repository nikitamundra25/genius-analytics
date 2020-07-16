import React from "react";
import { Card } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import WidgetHeader from "../../../components/WidgetHeader";
const PieChartComponent = React.lazy(() =>
  import("../../../components/Charts/PieChart")
);
const data = [
  { x: "90+", y: 2, text: "2%" },
  { x: "60+", y: 5, text: "5%" },
  { x: "30+", y: 11, text: "11%" },
  { x: "14+", y: 17, text: "17%" },
  { x: "7+", y: 23, text: "23%" },
  { x: "1+", y: 28, text: "28%" },
  { x: "One Day", y: 14, text: "14%" },
];

export default (props: any) => {
  return (
    <Card>
      <WidgetHeader
        title={"Lead Times YTD by Segment"}
        activeToggle={"graph"}
      />
      <Card.Body>
        <React.Suspense fallback={<Loader />}>
          <PieChartComponent
            id={"leadtimesSegment"}
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
