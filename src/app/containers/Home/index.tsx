import React, { Component } from "react";
import { Card, Col, Row, Table, Form } from "react-bootstrap";
// import { Pie, Line, } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import {
  ResponsiveContainer, PieChart, Pie, Legend, ReferenceLine, Cell, Tooltip,   BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line, AreaChart, Area,ComposedChart, Scatter,
} from 'recharts';




import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { AppRoutes } from "../../../config";

const bookingChannel = [
  { name: 'Brand.com', value: 400 },
  { name: 'OTA', value: 300 },
  { name: 'GDS', value: 300 },
  { name: 'Direct', value: 200 },
];

const GeographicBusiness = [
  { name: 'United kingdom', value: 500 },
  { name: 'United States', value: 300 },
  { name: 'Australia', value: 200 },
  { name: 'France', value: 200 },
  { name: 'Argentina', value: 100 },
  { name: 'Germany', value: 70 },
  { name: 'Spain', value: 60 },
  { name: 'Switzerland', value: 50 },
  { name: 'Netherlanda', value: 50 }
];
const CHANNELCOLORS = ['#4d94d4', '#f48138', '#a5a5a5', '#fcc400'];
const GEOGRAPHICCOLORS = ['#3a71b4', '#c03c38', '#9bc24b', '#7856a0', '#35a8c5', '#ff932e', '#234d7f', '#872522', '#69862a'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
} : any) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const options = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: ''
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
      }
    }
  },
  series: [{
    name: 'Brands',
    colorByPoint: true,
    data: [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Internet Explorer',
      y: 11.84
    }, {
      name: 'Firefox',
      y: 10.85
    }, {
      name: 'Edge',
      y: 4.67
    }, {
      name: 'Safari',
      y: 4.18
    }, {
      name: 'Sogou Explorer',
      y: 1.64
    }, {
      name: 'Opera',
      y: 1.6
    }, {
      name: 'QQ',
      y: 1.2
    }, {
      name: 'Other',
      y: 2.61
    }]
  }]
};

const OCCdata = [
  {
    name: 'BOB', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'BUD', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'LY', uv: 2000, pv: 8, amt: 2290,
  },
  {
    name: 'STLY', uv: 2780, pv: 3908, amt: 2000,
  },
  
];

const ADRdata = [
  {
    name: 'BOB', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'BUD', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'LY', uv: 2000, pv: 8, amt: 2290,
  },
  {
    name: 'STLY', uv: 2780, pv: 3908, amt: 2000,
  },
  
];

const Revenuedata = [
  {
    name: 'BOB', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'BUD', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'LY', uv: 2000, pv: 8, amt: 2290,
  },
  {
    name: 'STLY', uv: 2780, pv: 3908, amt: 2000,
  },
  
];

const RevPardata = [
  {
    name: 'BOB', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'BUD', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'LY', uv: 2000, pv: 8, amt: 2290,
  },
  {
    name: 'STLY', uv: 2780, pv: 3908, amt: 2000,
  },
  
];

const Roomnightsdata = [
  {
    name: 'Bar', uv: 64, 
  },
  {
    name: 'COR', uv: 32,
  },
  {
    name: 'PROMO', uv: 46, 
  },
  {
    name: 'FIT', uv: 28,
  },
  {
    name: 'GROUPS', uv: -12, 
  },
  
];

const ADRydata = [
  {
    name: 'Bar', uv: 2.8, 
  },
  {
    name: 'COR', uv: 1.3,
  },
  {
    name: 'PROMO', uv: -2.2, 
  },
  {
    name: 'FIT', uv: 1.1,
  },
  {
    name: 'GROUPS', uv: -1.1, 
  },
  
];

const RevenueYsdata = [
  {
    name: 'Bar', uv: 15.5, 
  },
  {
    name: 'COR', uv: 1.3,
  },
  {
    name: 'PROMO', uv: -1.2, 
  },
  {
    name: 'FIT', uv: 2.8,
  },
  {
    name: 'GROUPS', uv: -1.4, 
  },
  
];

const ngdata = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

/* const brandPrimary = getStyle('--primary') */
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
//const brandDanger = getStyle('--danger')

//Random Numbers
function random(min:number, max:number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(15000, 25000));
  data3.push(15000);
}

class HomeComponent extends Component<any, any> {
  render() {

    const mainChart = {
      labels: ['12-3-2019'],
      datasets: [
        {
          label: 'Total Amount',
          backgroundColor: hexToRgba(brandInfo, 10),
          borderColor: brandInfo,
          pointHoverBackgroundColor: '#fff',
          borderWidth: 2,
          data: [100],
        },
        {
          label: 'HogWork Amount',
          backgroundColor: 'transparent',
          borderColor: brandSuccess,
          pointHoverBackgroundColor: '#fff',
          borderWidth: 2,
          data: [100],
        },
        {
          label: 'Refunded Amount',
          backgroundColor: 'transparent',
          borderColor: brandWarning,
          pointHoverBackgroundColor: '#fff',
          borderWidth: 1,
          borderDash: [8, 5],
          data: [100],
        },
      ],
    };

    const mainChartOpts:any = {
      tooltips: {
        enabled: false,
        custom: CustomTooltips,
        intersect: true,
        mode: 'index',
        position: 'nearest',
        callbacks: {
          labelColor: function (tooltipItem:any, chart:any) {
            return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
          }
        }
      },
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              drawOnChartArea: false,
            },
          }],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              stepSize: Math.ceil(250 / 5),
              max: 25000,
            },
          }],
      },
      elements: {
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        },
      },
    };

    const pie = {
      labels: [`Active`, `Inactive`],
      datasets: [
        {
          data: [2, 4],
          backgroundColor: [
            '#359ece',
            '#f55346'
            //'#36A2EB',
          ],
        }],
    };

    const vendorPie = {
      labels: [`Active`, `Inactive`],
      datasets: [
        {
          data: [2, 4],
          backgroundColor: [
            '#359ece',
            '#f55346',
          ],
        }],
    };

    const linedata = [
      {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
      },
      {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
      },
      {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
      },
      {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
      },
      {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
      },
      {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
      },
      {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
      },
    ];

    const areadata = [
      {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
      },
      {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
      },
      {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
      },
      {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
      },
      {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
      },
      {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
      },
      {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
      },
    ];

    const compdata = [
      {
        name: 'Page A', uv: 590, pv: 800, amt: 1400, cnt: 490,
      },
      {
        name: 'Page B', uv: 868, pv: 967, amt: 1506, cnt: 590,
      },
      {
        name: 'Page C', uv: 1397, pv: 1098, amt: 989, cnt: 350,
      },
      {
        name: 'Page D', uv: 1480, pv: 1200, amt: 1228, cnt: 480,
      },
      {
        name: 'Page E', uv: 1520, pv: 1108, amt: 1100, cnt: 460,
      },
      {
        name: 'Page F', uv: 1400, pv: 680, amt: 1700, cnt: 380,
      },
    ];

    return (
      <div className="animated fadeIn">
        <Row>
          
           {/* <Col sm={"6"}>
                <Card>
                  <Card.Header>
                    <Card.Title>
                      <i className="fa fa-users" /> Vendors
                    </Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="chart-wrapper">
                      <Pie data={pie} options={{ legend: { display: true, position: "bottom" } }} />
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={"6"}>
                <Card>
                  <Card.Header>
                    <Card.Title>
                      <i className="fa fa-users" /> Vendors
                    </Card.Title>
                  </Card.Header>
                  <Card.Body>
                    {vendorPie ?
                      <div className="chart-wrapper">
                        <Pie data={vendorPie} options={{ legend: { display: true, position: "bottom" } }} />
                      </div>
                      : <div> No Vendors found </div>}
                  </Card.Body>
                </Card>
              </Col> */}


              <Col  xs={12} md={5}>
        <Card >
          <Card.Header className="d-flex align-items-center justify-content-between">
            <Card.Title>Business on the Books</Card.Title>
            <Form.Check 
              type="switch"
              id="custom-switch"
              label=""
              className="cursor-pointer"
            />
          </Card.Header>
          <Card.Body>
          {/* <Table striped bordered hover>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th colSpan={3}>VARIANCES</th>
            </tr>
            <tr>
              <th></th>
              <th>BOB</th>
              <th>BUDGET</th>
              <th>LY</th>
              <th>STLY</th>
              <th>Vs.BUD</th>
              <th>Vs.LY</th>
              <th>Vs.STLY</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Room Nights</td>
              <td>3454</td>
              <td>43543</td>
              <td>54345</td>
              <td>43543</td>
              <td>15</td>
              <td>-25</td>
              <td>55</td>
            </tr>
            <tr>
              <td>OCC</td>
              <td>3454</td>
              <td>43543</td>
              <td>54345</td>
              <td>43543</td>
              <td>15</td>
              <td>-25</td>
              <td>55</td>
            </tr>
            <tr>
              <td>Revenue</td>
              <td>3454</td>
              <td>43543</td>
              <td>54345</td>
              <td>43543</td>
              <td>15</td>
              <td>-25</td>
              <td>55</td>
            </tr>
            <tr>
              <td>ADR</td>
              <td>3454</td>
              <td>43543</td>
              <td>54345</td>
              <td>43543</td>
              <td>15</td>
              <td>-25</td>
              <td>55</td>
            </tr>
            <tr>
              <td>RevPar</td>
              <td>3454</td>
              <td>43543</td>
              <td>54345</td>
              <td>43543</td>
              <td>15</td>
              <td>-25</td>
              <td>55</td>
            </tr>
          </tbody>
        </Table> */}
         <LineChart
        width={500}
        height={300}
        data={linedata}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
          </Card.Body>
        </Card>
      </Col>
      <Col  xs={12} md={7}>
        <div className="main-title">Key Business Metrics</div>
        <Row>
          <Col  xs={12} md={3}>
            <Card >
              <Card.Header>
                <Card.Title>OCC</Card.Title>
              </Card.Header>
              <Card.Body>
                <div style={{ width: '100%', height: 300 }}>
                  <ResponsiveContainer>
                  <BarChart
                  // width={200}
                  // height={300}
                  data={OCCdata}
                  layout="vertical"
                  // margin={{
                  //   top: 5, right: 30, left: 20, bottom: 5,
                  // }}
                  barSize={20}
                >
                  {/* <CartesianGrid strokeDasharray="1 1" /> */}
                  <XAxis type="number"/>
                  <YAxis type="category" dataKey="name" />
                  <Tooltip />
                  <Bar dataKey="uv" fill="#2e75b7"  />
                </BarChart>
                  </ResponsiveContainer>
                </div>
               
              </Card.Body>
            </Card>
          </Col>
          <Col  xs={12} md={3}>
            <Card >
              <Card.Header>
                <Card.Title>ADR</Card.Title>
              </Card.Header>
              <Card.Body>
              <div style={{ width: '100%', height: 300 }}>
                  <ResponsiveContainer>
                  <BarChart
               
                  // width={200}
                  // height={300}
                  data={ADRdata}
                  layout="vertical"
                  
                  barSize={20}
                >
                  {/* <CartesianGrid strokeDasharray="1 1" /> */}
                  <XAxis type="number"/>
                  <YAxis type="category" dataKey="name" />
                  <Tooltip />
                  <Bar dataKey="uv" fill="#5398d9"  />
                </BarChart>
                </ResponsiveContainer>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col  xs={12} md={3}>
            <Card >
              <Card.Header>
                <Card.Title>Revenue</Card.Title>
              </Card.Header>
              <Card.Body>
              <div style={{ width: '100%', height: 300 }}>
                  <ResponsiveContainer>
                <BarChart
                  // width={200}
                  // height={300}
                  data={Revenuedata}
                  layout="vertical"
                  
                  barSize={20}
                >
                  {/* <CartesianGrid strokeDasharray="1 1" /> */}
                  <XAxis type="number"/>
                  <YAxis type="category" dataKey="name" />
                  <Tooltip />
                  <Bar dataKey="uv" fill="#1f4e78"  />
                </BarChart>
                </ResponsiveContainer>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col  xs={12} md={3}>
            <Card >
              <Card.Header>
                <Card.Title>RevPAR</Card.Title>
              </Card.Header>
              <Card.Body>
              <div style={{ width: '100%', height: 300 }}>
                  <ResponsiveContainer>
                <BarChart
                  // width={200}
                  // height={300}
                  data={RevPardata}
                  layout="vertical"
                  
                  barSize={20}
                >
                  {/* <CartesianGrid strokeDasharray="1 1" /> */}
                  <XAxis type="number"/>
                  <YAxis type="category" dataKey="name" />
                  <Tooltip />
                  <Bar dataKey="uv" fill="#9dc3e7"  />
                </BarChart>
                </ResponsiveContainer>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>

      <Col  xs={12} md={5}>
        <div className="main-title">Pick up Since Yesterday</div>
      <Row>
          <Col  xs={12} md={4}>
            <Card >
              <Card.Header>
                <Card.Title>Room Nights</Card.Title>
              </Card.Header>
              <Card.Body>
              <div style={{ width: '100%', height: 300 }}>
                  <ResponsiveContainer>
              <BarChart
                  // width={200}
                  // height={300}
                  data={Roomnightsdata}
                  
                  barSize={20}
                >
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  
                  <ReferenceLine y={0} stroke="#000" />
                
                  <Bar dataKey="uv" fill="#f47926" />
                </BarChart>
                </ResponsiveContainer>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col  xs={12} md={4}>
            <Card >
              <Card.Header>
                <Card.Title>ADR</Card.Title>
              </Card.Header>
              <Card.Body>
              <div style={{ width: '100%', height: 300 }}>
                  <ResponsiveContainer>
                <BarChart
                  // width={400}
                  // height={300}
                  data={ADRydata}
                  
                  barSize={20}
                >
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  
                  <ReferenceLine y={0} stroke="#000" />
                
                  <Bar dataKey="uv" fill="#f47926" />
                </BarChart>
                </ResponsiveContainer>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col  xs={12} md={4}>
            <Card >
              <Card.Header>
                <Card.Title>Revenue</Card.Title>
              </Card.Header>
              <Card.Body>
              <div style={{ width: '100%', height: 300 }}>
                  <ResponsiveContainer>
              <BarChart
                  width={400}
                  height={300}
                  data={RevenueYsdata}
                  
                  barSize={20}
                >
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  
                  <ReferenceLine y={0} stroke="#000" />
                
                  <Bar dataKey="uv" fill="#f47926" />
                </BarChart>
                </ResponsiveContainer>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
      <Col  xs={12} md={7}>
        <Row>
          {/* <Col  xs={12} md={6}>
            <Card >
              <Card.Header>
                <Card.Title>Occupacy Statics</Card.Title>
              </Card.Header>
              <Card.Body>
              </Card.Body>
            </Card>
          </Col> */}
          <Col  xs={12} md={12}>
            <Card >
              <Card.Header>
                <Card.Title>Occupacy Statics</Card.Title>
              </Card.Header>
              <Card.Body>
              <div style={{ width: '100%', height: 300 }}>
                  <ResponsiveContainer>
              <ComposedChart
        // width={500}
        height={300}
        data={compdata}
        // margin={{
        //   top: 20, right: 20, bottom: 20, left: 20,
        // }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        {/* <Scatter dataKey="cnt" fill="red" /> */}
      </ComposedChart>
      </ResponsiveContainer>
      </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>


      <Col  xs={12} md={5}>
        <Card >
          <Card.Header>
            <Card.Title>Business Mix</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col xs={12} md={6}>
              <div style={{ width: '100%', height: 300 }}>
                  <ResponsiveContainer>
                  <BarChart
                  // width={200}
                  // height={300}
                  data={OCCdata}
                  layout="vertical"
                  // margin={{
                  //   top: 5, right: 30, left: 20, bottom: 5,
                  // }}
                  barSize={20}
                >
                  {/* <CartesianGrid strokeDasharray="1 1" /> */}
                  <XAxis type="number"/>
                  <YAxis type="category" dataKey="name" />
                  <Tooltip />
                  <Bar dataKey="uv" fill="#2e75b7"  />
                </BarChart>
                  </ResponsiveContainer>
                </div>
              </Col>

              <Col xs={12} md={6}>
              <div style={{ width: '100%', height: 300 }}>
                  <ResponsiveContainer>
                  <BarChart
                  // width={200}
                  // height={300}
                  data={OCCdata}
                  layout="vertical"
                  // margin={{
                  //   top: 5, right: 30, left: 20, bottom: 5,
                  // }}
                  barSize={20}
                >
                  {/* <CartesianGrid strokeDasharray="1 1" /> */}
                  <XAxis type="number"/>
                  <YAxis type="category" dataKey="name" />
                  <Tooltip />
                  <Bar dataKey="uv" fill="#2e75b7"  />
                </BarChart>
                  </ResponsiveContainer>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col  xs={12} md={7}>
        <Row>
          <Col  xs={12} md={6}>
            <Card >
              <Card.Header>
                <Card.Title>Booking Channel Mix</Card.Title>
              </Card.Header>
              <Card.Body>
              <div style={{ width: '100%', height: 300 }}>
                  <ResponsiveContainer>
                <PieChart >
                <Tooltip />
                  <Legend />
                    <Pie
                      data={bookingChannel}
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
                      {
                        bookingChannel.map((entry, index) => <Cell key={`cell-${index}`} fill={CHANNELCOLORS[index % CHANNELCOLORS.length]} />)
                      }
                    </Pie>
                  </PieChart>
                  </ResponsiveContainer>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col  xs={12} md={6}>
            <Card >
              <Card.Header>
                <Card.Title>Geographic Origin of Business</Card.Title>
              </Card.Header>
              <Card.Body>
                <div style={{ width: '100%', height: 300 }}>
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie dataKey="value" data={GeographicBusiness} fill="#8884d8" label >
                      {
                        GeographicBusiness.map((entry, index) => <Cell key={`cell-${index}`} fill={GEOGRAPHICCOLORS[index % GEOGRAPHICCOLORS.length]} />)
                      }
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>


      <Col  xs={12} md={5}>
        <Card >
          <Card.Header>
            <Card.Title>Room Type Statics</Card.Title>
          </Card.Header>
          <Card.Body>
          <div style={{ width: '100%', height: 300 }}>
                  <ResponsiveContainer>
          <AreaChart
        // width={500}
        // height={400}
        data={areadata}
        // margin={{
        //   top: 10, right: 30, left: 0, bottom: 0,
        // }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
      </ResponsiveContainer>
      </div>
          </Card.Body>
        </Card>
      </Col>
      <Col  xs={12} md={7}>
        <Row>
          <Col  xs={12} md={6}>
            <Card >
              <Card.Header>
                <Card.Title>MTD RGI Performance</Card.Title>
              </Card.Header>
              <Card.Body>
              <div style={{ width: '100%', height: 300 }}>
                  <ResponsiveContainer>
              <BarChart
                  width={400}
                  height={300}
                  data={RevenueYsdata}
                  
                  barSize={20}
                >
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  
                  <ReferenceLine y={0} stroke="#000" />
                
                  <Bar dataKey="uv" fill="#f47926" />
                </BarChart>
                </ResponsiveContainer>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col  xs={12} md={6}>
            <Card >
              <Card.Header>
                <Card.Title>RGI YoY Variance</Card.Title>
              </Card.Header>
              <Card.Body>
              <div style={{ width: '100%', height: 300 }}>
                  <ResponsiveContainer>
              <BarChart
                  width={400}
                  height={300}
                  data={RevenueYsdata}
                  
                  barSize={20}
                >
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  
                  <ReferenceLine y={0} stroke="#000" />
                
                  <Bar dataKey="uv" fill="#f47926" />
                </BarChart>
                </ResponsiveContainer>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>


           

            <Col  xs={12} md={4}>
              <Card >
                <Card.Header>
                  <Card.Title>Pick up Since Yesterday</Card.Title>
                </Card.Header>
                <Card.Body>
                  
                <div>
                  <HighchartsReact highcharts={Highcharts} options={options} />
                </div>
                 
                </Card.Body>
              </Card>
            </Col>

           

            {/* <Col  xs={12} md={4}>
              <Card >
                <Card.Header>
                  <Card.Title>RGI YoY Variance</Card.Title>
                </Card.Header>
                <Card.Body>
                  
                <BarChart
                  width={400}
                  height={300}
                  data={ngdata}
                  
                  barSize={20}
                  layout="vertical"
                >
                  
                 
                  <Tooltip />
                  
                  <ReferenceLine x={0} stroke="#000" />
                
                  <Bar dataKey="uv" fill="#f47926" />
                </BarChart>
                 
                </Card.Body>
              </Card>
            </Col> */}
           
        </Row>
      </div>
    );
  }
}

export default HomeComponent;
