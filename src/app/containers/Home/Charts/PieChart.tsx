import React from "react";
import { Card } from "react-bootstrap";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  PieSeries,
  AccumulationTooltip,
  AccumulationDataLabel,
} from "@syncfusion/ej2-react-charts";

export const PieChartComponent = (props: any) => {
  const data1 = [
    { x: "Brand.com", y: 27, text: "27%" },
    { x: "OTA", y: 38, text: "38%" },
    { x: "GDS", y: 20, text: "20%" },
    { x: "Direct", y: 15, text: "15%" },
  ];

  return (
    <Card>
      <Card.Header className='d-flex align-items-center justify-content-between'>
        <Card.Title>Booking Channel Mix </Card.Title>
        <div className='action-wrap'>
          <div className='action-btn '>
            <span className='icon-grid'></span>
          </div>
          <div className='action-btn active'>
            <span className='icon-pie-chart'></span>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <AccumulationChartComponent
          id='pie-chart'
          legendSettings={{ visible: false }}
          enableSmartLabels={true}
          enableAnimation={false}
          center={{ x: "50%", y: "50%" }}
          tooltip={{
            enable: true,
            // eslint-disable-next-line
            format: "${point.x} : <b>${point.y}%</b>",
          }}>
          <Inject
            services={[
              AccumulationLegend,
              PieSeries,
              AccumulationTooltip,
              AccumulationDataLabel,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={data1}
              name='Browser'
              xName='x'
              yName='y'
              explode={true}
              explodeAll={true}
              explodeOffset='5%'
              explodeIndex={0}
              dataLabel={{
                visible: true,
                position: "Inside",
                name: "text",
                font: {
                  fontWeight: "600",
                },
              }}
              radius='70%'></AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </Card.Body>
    </Card>
  );
};

export default PieChartComponent;
