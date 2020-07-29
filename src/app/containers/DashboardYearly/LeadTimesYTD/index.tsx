import React from "react";
import { Card } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import WidgetHeader from "../../../components/WidgetHeader";
const PieChartComponent = React.lazy(() =>
  import("../../../components/Charts/PieChart")
);

export default ({ graphdata = [] }: any) => {
  return (
    <Card>
      <WidgetHeader title={"Lead Times YTD"} activeToggle={"graph"} />
      <Card.Body>
        <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
          <PieChartComponent
            id={"leadtimes"}
            height={"250px"}
            data={graphdata}
            chartSettings={{
              SeriesDirective: {
                // innerRadius: "70%",
                // radius: "70%",
                palettes: [
                  "#4f81bc",
                  "#c0504e",
                  "#9bbb58",
                  "#8165a2",
                  "#4cacc5",
                  "#e79645",
                  "#2c4e74",
                ],
                innerRadius:'40%',
                startAngle:'0',
                endAngle:'360' ,
                radius:'70%' ,
                explode:false ,
                explodeOffset:'10%' ,
                explodeIndex:'3',
              },
              chartComponent: {
                enableAnimation: true,
                center: { x: "50%", y: "50%" },
               
              },
            }}
          />
        </React.Suspense>
      </Card.Body>
    </Card>
  );
};
