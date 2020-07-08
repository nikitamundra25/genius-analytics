import React from "react";
import { Card,Col} from "react-bootstrap";
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Legend,
    Cell,
    Tooltip,
  } from "recharts";
  import {
    AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,
    Inject, AccumulationLegend, PieSeries, AccumulationTooltip, IAccLoadedEventArgs, AccumulationTheme,
    AccumulationDataLabel
  } from '@syncfusion/ej2-react-charts';

export const PieChartComponent = (props:any) => {
 
  const data1 = [
    { 'x': 'Brand.com', y: 27, text: '27%' },
    { 'x': 'OTA', y: 38, text: '38%' },
    { 'x': 'GDS', y: 20, text: '20%' },
    { 'x': 'Direct', y: 15, text: '15%' },
];
      
const {chartDetails} = props;
  return (
   
    <Card>
      <Card.Header className="d-flex align-items-center justify-content-between">
        <Card.Title>Booking Channel Mix </Card.Title>
        <div className="action-wrap">
          <div className="action-btn ">
            <span className="icon-grid"></span>
          </div>
          <div className="action-btn active">
            <span className="icon-pie-chart"></span>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        {/* <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <PieChart>
              <Tooltip />
              <Legend />
              <Pie
                data={chartDetails.data}
                // cx={400}
                // cy={400}
                // midAngle={20}
                labelLine={false}
                label={renderCustomizedLabel}
                // outerRadius={90}
                innerRadius={5}
                fill="#8884d8"
                dataKey="value"
                paddingAngle={5}
              >
                {chartDetails.data.map((entry:any, index:any) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      chartDetails.color[index % chartDetails.color.length]
                    }
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div> */}
         <AccumulationChartComponent id='pie-chart'   legendSettings={{ visible: false }} enableSmartLabels={true} enableAnimation={false} center={{ x: '50%', y: '50%' }} tooltip={{ enable: true, format: '${point.x} : <b>${point.y}%</b>' }} >
              <Inject services={[AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]}/>
              <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective dataSource={data1} name='Browser' xName='x' yName='y' explode={true} explodeAll={true} explodeOffset='5%' explodeIndex={0} dataLabel={{
            visible: true,
            position: 'Inside', name: 'text',
            font: {
                fontWeight: '600'
            }
        }} radius='70%'>
                </AccumulationSeriesDirective>
              </AccumulationSeriesCollectionDirective>
            </AccumulationChartComponent>
          
      </Card.Body>
    </Card>
 
   
  );
}
