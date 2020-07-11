import React from "react";
import { Card } from "react-bootstrap";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DataLabel,
  ColumnSeries,
  Category,
  Tooltip,
  LineSeries,
  Legend,
} from "@syncfusion/ej2-react-charts";
import { Browser } from "@syncfusion/ej2-base";

const MarketSegmentation: React.FC = (): JSX.Element => {
  const MarketData = [
    {
      name: "BAR",
      RMS2018: 50,
      RMS2017: 64,
      ADR2018: 185,
      ADR2017: 195,
    },
    {
      name: "MTG",
      RMS2018: 88,
      RMS2017: 80,
      ADR2018: 202,
      ADR2017: 207,
    },
    {
      name: "COR",
      RMS2018: 74,
      RMS2017: 76,
      ADR2018: 184,
      ADR2017: 194,
    },
    {
      name: "CON",
      RMS2018: 68,
      RMS2017: 73,
      ADR2018: 176,
      ADR2017: 196,
    },
    {
      name: "GRP",
      RMS2018: 67,
      RMS2017: 64,
      ADR2018: 155,
      ADR2017: 156,
    },
    {
      name: "FIT",
      RMS2018: 74,
      RMS2017: 76,
      ADR2018: 143,
      ADR2017: 150,
    },
    {
      name: "DIS",
      RMS2018: 63,
      RMS2017: 43,
      ADR2018: 157,
      ADR2017: 172,
    },
  ];
  return (
    <Card>
      <Card.Header className='d-flex align-items-center justify-content-between'>
        <Card.Title>Market Segmentation</Card.Title>
        <div className='action-wrap'>
          <div className='action-btn active'>
            <span className='icon-grid'></span>
          </div>
          <div className='action-btn'>
            <span className='icon-pie-chart'></span>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <ChartComponent
          id={"MarketChart"}
          style={{ textAlign: "center" }}
          primaryXAxis={{
            valueType: "Category",
            interval: 1,
            majorGridLines: { width: 0 },
          }}
          primaryYAxis={{
            labelFormat: "{value}",
            edgeLabelPlacement: "Shift",
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            labelStyle: {
              color: "transparent",
            },
          }}
          chartArea={{ border: { width: 0 } }}
          width={Browser.isDevice ? "100%" : "100%"}
          height={"250px"}
          tooltip={{ enable: true }}>
          <Inject
            services={[
              ColumnSeries,
              LineSeries,
              DataLabel,
              Category,
              Tooltip,
              Legend,
            ]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={MarketData}
              xName='name'
              yName='RMS2018'
              type='Column'
              fill={"#3d78c0"}
              name={"RMS 2018"}
              width={1}
              marker={{
                dataLabel: {
                  visible: true,
                  position: "Bottom",
                  font: {
                    fontWeight: "600",
                    color: "#ffffff",
                  },
                },
              }}></SeriesDirective>
            <SeriesDirective
              dataSource={MarketData}
              xName='name'
              yName='RMS2017'
              type='Column'
              fill={"#98c0e3"}
              name={"RMS 2017"}
              width={1}
              marker={{
                dataLabel: {
                  visible: true,
                  position: "Bottom",
                  font: {
                    fontWeight: "600",
                    color: "#ffffff",
                  },
                },
              }}></SeriesDirective>
            <SeriesDirective
              dataSource={MarketData}
              xName='name'
              yName='ADR2018'
              type='Line'
              fill={"#50aec7"}
              name={"ADR 2018"}
              width={2}
              marker={{
                visible: true,
                width: 8,
                height: 8,
                fill: "#50aec7",
                border: { width: 0, color: "#50aec7" },
                dataLabel: {
                  visible: true,
                  position: "Top",
                  font: {
                    fontWeight: "600",
                    color: "#000000",
                  },
                },
              }}></SeriesDirective>
            <SeriesDirective
              dataSource={MarketData}
              xName='name'
              yName='ADR2017'
              type='Line'
              fill={"#24446e"}
              name={"ADR 2017"}
              width={2}
              marker={{
                visible: true,
                width: 8,
                height: 8,
                fill: "#24446e",
                border: { width: 0, color: "#24446e" },
                dataLabel: {
                  visible: true,
                  position: "Bottom",
                  font: {
                    fontWeight: "600",
                    color: "#000000",
                  },
                },
              }}></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </Card.Body>
    </Card>
  );
};

export default MarketSegmentation;
