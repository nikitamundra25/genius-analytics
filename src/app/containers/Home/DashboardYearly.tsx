import React, { Component, PureComponent } from "react";

import { Card, Col, Row } from "react-bootstrap";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  Line,
  ComposedChart,
} from "recharts";
import "./index.scss";

class CustomizedLabel extends PureComponent<any, any> {
  render() {
    const { x, y, stroke, value } = this.props;

    return (
      <text
        x={x}
        y={y}
        dy={-15}
        fill={stroke}
        fontSize={11}
        textAnchor='middle'>
        {value}
      </text>
    );
  }
}

class DashbordYearlyComponent extends Component<any, any> {
  render() {
    const compdata2 = [
      {
        name: "0BRM",
        OCCTY: 50,
        OCCLY: 64,
        ADRLY: 134,
        ADRTY: 111,
      },
      {
        name: "1BRM",
        OCCTY: 88,
        OCCLY: 80,
        ADRLY: 157,
        ADRTY: 169,
      },
      {
        name: "2BRM",
        OCCTY: 74,
        OCCLY: 76,
        ADRLY: 257,
        ADRTY: 231,
      },
    ];

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

    const Monthlydailydata = [
      {
        name: "Jan",
        OCC: 50,
        ADR: 64,
      },
      {
        name: "Feb",
        OCC: 88,
        ADR: 80,
      },
      {
        name: "Mar",
        OCC: 74,
        ADR: 76,
      },
      {
        name: "Apr",
        OCC: 50,
        ADR: 64,
      },
      {
        name: "May",
        OCC: 88,
        ADR: 80,
      },
      {
        name: "Jun",
        OCC: 74,
        ADR: 76,
      },
      {
        name: "Jul",
        OCC: 50,
        ADR: 64,
      },
      {
        name: "Aug",
        OCC: 88,
        ADR: 80,
      },
      {
        name: "Sep",
        OCC: 74,
        ADR: 76,
      },
      {
        name: "Oct",
        OCC: 50,
        ADR: 64,
      },
      {
        name: "Nov",
        OCC: 88,
        ADR: 80,
      },
      {
        name: "Dec",
        OCC: 74,
        ADR: 76,
      },
      {
        name: "Total",
        OCC: 88,
        ADR: 76,
      },
    ];

    const QuaterlyOccdata = [
      {
        name: "Q1",
        OCC: 90,
        ADR: 64,
      },
      {
        name: "Q2",
        OCC: 86,
        ADR: 80,
      },
      {
        name: "Q3",
        OCC: 88,
        ADR: 76,
      },
      {
        name: "Q4",
        OCC: 88,
        ADR: 76,
      },
    ];

    const leaddata = [
      { name: "90+", value: 25 },
      { name: "60+", value: 19 },
      { name: "30+", value: 22 },
      { name: "14+", value: 3 },
      { name: "7+", value: 2 },
      { name: "1+", value: 16 },
      { name: "One Day", value: 3 },
    ];
    const COLORS = [
      "#3e74b3",
      "#b93937",
      "#93b64b",
      "#8165a2",
      "#4aacc6",
      "#ec9546",
      "#2c4d76",
    ];

    const leaddatasegment = [
      { name: "90+", value: 2 },
      { name: "60+", value: 5 },
      { name: "30+", value: 11 },
      { name: "14+", value: 17 },
      { name: "7+", value: 23 },
      { name: "1+", value: 28 },
      { name: "One Day", value: 14 },
    ];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      percent,
      index,
    }: any) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
        <text
          x={x}
          y={y}
          dy={-5}
          fill='black'
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline='central'>
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };

    const RGIdata1 = [
      {
        name: "My OCC",
        uv: 65,
      },
      {
        name: "Occ Compact",
        uv: 68,
      },
      {
        name: "MPI",
        uv: 96,
      },
    ];

    const RGIdata2 = [
      {
        name: "My ARR",
        uv: 174,
      },
      {
        name: "ARR Compact",
        uv: 140,
      },
      {
        name: "AR1",
        uv: 124,
      },
    ];

    const RGIdata3 = [
      {
        name: "My RevPAR",
        uv: 115,
      },
      {
        name: "RevPAR Compact",
        uv: 96,
      },
      {
        name: "RG1",
        uv: 119,
      },
    ];

    return (
      <div className='animated fadeIn'>
        <Row>
          <Col xs={12} md={5}>
            <Card>
              <Card.Header className='d-flex align-items-center justify-content-between'>
                <Card.Title>Monthly OCC & ADR</Card.Title>
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
                <div style={{ width: "100%", height: 300 }}>
                  <ResponsiveContainer>
                    <ComposedChart
                      // width={500}
                      height={300}
                      data={Monthlydailydata}
                      margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                      }}>
                      {/* <CartesianGrid stroke="#f5f5f5" /> */}
                      <XAxis dataKey='name' />
                      {/* <YAxis /> */}
                      <Tooltip />
                      {/* <Legend /> */}
                      <Bar
                        name='OCC %'
                        dataKey='OCC'
                        barSize={20}
                        fill='#2b588f'
                      />
                      <Line
                        name='ADR'
                        type='monotone'
                        dataKey='ADR'
                        stroke='#be4c49'
                        strokeWidth={2}
                        label={<CustomizedLabel />}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={3}>
            <Card>
              <Card.Header className='d-flex align-items-center justify-content-between'>
                <Card.Title>Monthly OCC & ADR</Card.Title>
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
                <div style={{ width: "100%", height: 300 }}>
                  <ResponsiveContainer>
                    <ComposedChart
                      // width={500}
                      height={300}
                      data={QuaterlyOccdata}
                      margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                      }}>
                      {/* <CartesianGrid stroke="#f5f5f5" /> */}
                      <XAxis dataKey='name' />
                      {/* <YAxis /> */}
                      <Tooltip />
                      {/* <Legend /> */}
                      <Bar
                        name='OCC %'
                        dataKey='OCC'
                        barSize={20}
                        fill='#2b588f'
                      />
                      <Line
                        name='ADR'
                        type='monotone'
                        dataKey='ADR'
                        stroke='#be4c49'
                        strokeWidth={2}
                        label={<CustomizedLabel />}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card>
              <Card.Header className='d-flex align-items-center justify-content-between'>
                <Card.Title>Room Types - YTD</Card.Title>
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
                <div style={{ width: "100%", height: 300 }}>
                  <ResponsiveContainer>
                    <ComposedChart
                      // width={500}
                      height={300}
                      data={compdata2}
                      // margin={{
                      //   top: 20, right: 20, bottom: 20, left: 20,
                      // }}
                    >
                      {/* <CartesianGrid stroke="#f5f5f5" /> */}
                      <XAxis dataKey='name' />
                      {/* <YAxis /> */}
                      <Tooltip />
                      <Legend />
                      {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
                      <Bar
                        name='OCC TY'
                        dataKey='OCCTY'
                        barSize={20}
                        fill='#95b7c4'
                        padding={{ left: 10, right: 10 }}
                      />
                      <Bar
                        name='OCC LY'
                        dataKey='OCCLY'
                        barSize={20}
                        fill='#61a7c0'
                        padding={{ left: 10, right: 10 }}
                      />
                      <Line
                        name='ADR TY'
                        type='monotone'
                        dataKey='ADRTY'
                        stroke='#1b3d61'
                        strokeDasharray='2 2'
                        fill='#1b3d61'
                        label={<CustomizedLabel />}
                      />
                      <Line
                        name='ADR LY'
                        type='monotone'
                        dataKey='ADRLY'
                        stroke='#9e2d29'
                        strokeDasharray='2 2'
                        fill='#9e2d29'
                        label={<CustomizedLabel />}
                      />
                      {/* <Scatter dataKey="cnt" fill="red" /> */}
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card>
              <Card.Header className='d-flex align-items-center justify-content-between'>
                <Card.Title>Length of Stay & ADR - YTD</Card.Title>
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
                <div style={{ width: "100%", height: 300 }}>
                  <ResponsiveContainer>
                    <ComposedChart
                      height={300}
                      data={dailyocc}
                      margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                      }}>
                      <XAxis dataKey='name' />
                      {/* <YAxis /> */}
                      <Tooltip />
                      <Legend />

                      <Line
                        type='monotone'
                        dataKey='OCC'
                        stroke='#4176b9'
                        fill='#4176b9'
                        strokeWidth={3}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card>
              <Card.Header className='d-flex align-items-center justify-content-between'>
                <Card.Title>Lead Times YTD</Card.Title>
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
                <div style={{ width: "100%", height: 300 }}>
                  <ResponsiveContainer>
                    <PieChart>
                      <Tooltip />
                      <Legend />
                      <Pie
                        data={leaddata}
                        innerRadius={50}
                        outerRadius={130}
                        fill='#8884d8'
                        dataKey='value'
                        labelLine={false}
                        label={renderCustomizedLabel}>
                        {leaddata.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card>
              <Card.Header className='d-flex align-items-center justify-content-between'>
                <Card.Title>Lead Times YTD by Segment</Card.Title>
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
                <div style={{ width: "100%", height: 300 }}>
                  <ResponsiveContainer>
                    <PieChart>
                      <Tooltip />
                      <Legend />
                      <Pie
                        data={leaddatasegment}
                        innerRadius={50}
                        outerRadius={130}
                        fill='#8884d8'
                        dataKey='value'
                        labelLine={false}
                        label={renderCustomizedLabel}>
                        {leaddata.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card>
              <Card.Header className='d-flex align-items-center justify-content-between'>
                <Card.Title>RGI Performance - YTD</Card.Title>
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
                <Row className='row-inner'>
                  <Col xs={12} sm={4} md={6}>
                    <div style={{ width: "100%", height: 300 }}>
                      <ResponsiveContainer>
                        <BarChart
                          data={RGIdata1}
                          layout='vertical'
                          margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                          barSize={20}
                          barCategoryGap={40}>
                          <XAxis dataKey='name' />

                          <Tooltip />
                          <Bar dataKey='uv' fill='#254d7d' />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </Col>

                  <Col xs={12} sm={4} md={6}>
                    <div style={{ width: "100%", height: 300 }}>
                      <ResponsiveContainer>
                        <BarChart
                          data={RGIdata2}
                          layout='vertical'
                          margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                          barSize={20}
                          barCategoryGap={40}>
                          <XAxis dataKey='name' />

                          <Tooltip />
                          <Bar dataKey='uv' fill='#3669a9' />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </Col>

                  <Col xs={12} sm={4} md={6}>
                    <div style={{ width: "100%", height: 300 }}>
                      <ResponsiveContainer>
                        <BarChart
                          data={RGIdata3}
                          layout='vertical'
                          margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                          barSize={20}
                          barCategoryGap={40}>
                          <XAxis dataKey='name' />

                          <Tooltip />
                          <Bar dataKey='uv' fill='#99c0eb' />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DashbordYearlyComponent;
