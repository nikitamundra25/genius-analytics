import React from "react";
import { Card } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import WidgetHeader from "../../../components/WidgetHeader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);
const DailyOccupacy: React.FC = (): JSX.Element => {
  const dailyocc = [
    {
      name: "1",
      OCC: 50,
      Budget: 64,
      LY: 134,
    },
    {
      name: "2",
      OCC: 88,
      Budget: 80,
      LY: 157,
    },
    {
      name: "3",
      OCC: 74,
      Budget: 76,
      LY: 257,
    },
    {
      name: "4",
      OCC: 50,
      Budget: 64,
      LY: 134,
    },
    {
      name: "5",
      OCC: 88,
      Budget: 80,
      LY: 157,
    },
    {
      name: "6",
      OCC: 74,
      Budget: 76,
      LY: 257,
    },
    {
      name: "7",
      OCC: 50,
      Budget: 64,
      LY: 134,
    },
    {
      name: "8",
      OCC: 88,
      Budget: 80,
      LY: 157,
    },
    {
      name: "9",
      OCC: 74,
      Budget: 76,
      LY: 257,
    },
    {
      name: "10",
      OCC: 50,
      Budget: 64,
      LY: 134,
    },
    {
      name: "11",
      OCC: 88,
      Budget: 80,
      LY: 157,
    },
    {
      name: "12",
      OCC: 74,
      Budget: 76,
      LY: 257,
    },
    {
      name: "13",
      OCC: 50,
      Budget: 64,
      LY: 134,
    },
    {
      name: "14",
      OCC: 88,
      Budget: 80,
      LY: 157,
    },
    {
      name: "15",
      OCC: 74,
      Budget: 76,
      LY: 257,
    },
    {
      name: "16",
      OCC: 50,
      Budget: 64,
      LY: 134,
    },
    {
      name: "17",
      OCC: 88,
      Budget: 80,
      LY: 157,
    },
    {
      name: "18",
      OCC: 74,
      Budget: 76,
      LY: 257,
    },
    {
      name: "19",
      OCC: 50,
      Budget: 64,
      LY: 134,
    },
    {
      name: "20",
      OCC: 88,
      Budget: 80,
      LY: 157,
    },
    {
      name: "21",
      OCC: 74,
      Budget: 76,
      LY: 257,
    },
    {
      name: "22",
      OCC: 74,
      Budget: 76,
      LY: 257,
    },
    {
      name: "23",
      OCC: 50,
      Budget: 64,
      LY: 134,
    },
    {
      name: "24",
      OCC: 88,
      Budget: 80,
      LY: 157,
    },
    {
      name: "25",
      OCC: 74,
      Budget: 76,
      LY: 257,
    },
    {
      name: "26",
      OCC: 50,
      Budget: 64,
      LY: 134,
    },
    {
      name: "27",
      OCC: 88,
      Budget: 80,
      LY: 157,
    },
    {
      name: "28",
      OCC: 74,
      Budget: 76,
      LY: 257,
    },
    {
      name: "29",
      OCC: 50,
      Budget: 64,
      LY: 134,
    },
    {
      name: "30",
      OCC: 88,
      Budget: 80,
      LY: 157,
    },
    {
      name: "Total",
      OCC: 74,
      Budget: 76,
      LY: 257,
    },
  ];

  const Charts = [
    {
      dataSource: dailyocc,
      xName: "name",
      yName: "OCC",
      type: "Line",
      fill: "#4176b9",
      name: "Budget",
      width: 2,
      marker: {
        visible: false,
        width: 10,
        height: 10,
        fill: "#2f5891",
        border: { width: 1, color: "#4176b9" },
        dataLabel: {
          visible: false,
          position: "Bottom",
          font: {
            fontWeight: "600",
            color: "#ffffff",
          },
        },
      },
    },
    {
      dataSource: dailyocc,
      xName: "name",
      yName: "Budget",
      type: "Line",
      fill: "#b82f2c",
      name: "Budget",
      width: 2,
      dashArray:'5',
      marker: {
        visible: false,
        width: 10,
        height: 10,
        fill: "#b82f2c",
        border: { width: 1, color: "#b82f2c" },
        dataLabel: {
          visible: true,
          position: "Top",
          font: {
            fontWeight: "600",
            color: "#000000",
          },
        },
      },
    },
    {
      dataSource: dailyocc,
      xName: "name",
      yName: "LY",
      type: "Line",
      fill: "#94b54e",
      name: "LY",
      width: 2,
      dashArray:'5',
      marker: {
        visible: false,
        width: 10,
        height: 10,
        fill: "#94b54e",
        border: { width: 1, color: "#94b54e" },
        dataLabel: {
          visible: true,
          position: "Bottom",
          font: {
            fontWeight: "600",
            color: "#000000",
          },
        },
      },
    },
  ];

  return (
    <Card>
       <WidgetHeader
        title={"Daily Occupacy Vs. BUD Vs. LY"}
        activeToggle={"graph"}
      />
      
      <Card.Body>
      <React.Suspense fallback={<Loader />}>
      <MixedCharts
                id={"dailyocc"}
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
                  tooltip: { enable: true },
                  Legend: { enable: false },
                }}
                charts={Charts}
              />
       </React.Suspense>
      </Card.Body>
    </Card>
  );
};

export default DailyOccupacy;
