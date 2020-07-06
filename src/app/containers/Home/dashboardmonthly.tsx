import React, { Component, PureComponent } from "react";

import { Card, Col, Row, Table, Form } from "react-bootstrap";
// import { Pie, Line, } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import {
  ResponsiveContainer, PieChart, Pie, Legend, ReferenceLine, Cell, Tooltip,   BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line, AreaChart, Area,ComposedChart, Scatter,LabelList
} from 'recharts';
import './index.scss';


import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { AppRoutes } from "../../../config";

class CustomizedLabel extends PureComponent<any, any> {
  render() {
    const {
      x, y, stroke, value,
    } = this.props;

    return <text x={x} y={y} dy={-15} fill={stroke} fontSize={11} textAnchor="middle">{value}</text>;
  }
}

class DashbordMonthlyComponent extends Component<any, any> {
  render() {

    const Ratecode = [
      {
        name: 'BAR', RoomNts: 250, ARR: 199,
      },
      {
        name: 'PRM', RoomNts: 210, ARR: 144, 
      },
      {
        name: 'COR1', RoomNts: 100, ARR: 168, 
      },
      {
        name: 'COR2', RoomNts: 70, ARR: 154, 
      },
      {
        name: 'FIT', RoomNts: 165, ARR: 149, 
      },
      {
        name: 'FLS', RoomNts: 50, ARR: 138,
      },
      {
        name: 'GRP', RoomNts: 169, ARR: 166, 
      },
      
    ];
    const BookingChannel = [
      {
        name: 'Direct', RoomNts: 180, ARR: 228,
      },
      {
        name: 'GDS', RoomNts: 110, ARR: 203, 
      },
      {
        name: 'OTAs', RoomNts: 200, ARR: 158, 
      },
      {
        name: 'Brand Website', RoomNts: 120, ARR: 161, 
      },
      {
        name: 'Corporate Website', RoomNts: 50, ARR: 198, 
      },
      
      
    ];
    const compdata1 = [ 
      {
        name: 'BAR', RMS2018: 50, RMS2017: 64, ADR2018: 185, ADR2017: 195,
      },
      {
        name: 'MTG', RMS2018: 88, RMS2017: 80, ADR2018: 202,  ADR2017: 207, 
      },
      {
        name: 'COR', RMS2018: 74, RMS2017: 76, ADR2018: 184,  ADR2017: 194,
      },
      {
        name: 'CON', RMS2018: 68, RMS2017: 73, ADR2018: 176, ADR2017: 196,
      },
      {
        name: 'GRP', RMS2018: 67, RMS2017: 64, ADR2018: 155, ADR2017: 156,
      },
      {
        name: 'FIT', RMS2018: 74, RMS2017: 76, ADR2018: 143, ADR2017: 150,
      },
      {
        name: 'DIS', RMS2018: 63, RMS2017: 43, ADR2018: 157, ADR2017: 172,
      },
      
      
    ];
    const compdata2 = [ 
      {
        name: '0BRM', OCCTY: 50, OCCLY: 64, ADRLY: 134, ADRTY: 111,
      },
      {
        name: '1BRM', OCCTY: 88, OCCLY: 80, ADRLY: 157,  ADRTY: 169, 
      },
      {
        name: '2BRM', OCCTY: 74, OCCLY: 76, ADRLY: 257,  ADRTY: 231,
      },
      
      
    ];

    const dailyocc = [
      {
        name: '1', OCC: 50, Budget: 64, LY: 134,
      },
      {
        name: '2', OCC: 88, Budget: 80, LY: 157,  
      },
      {
        name: '3', OCC: 74, Budget: 76, LY: 257,
      },
      {
        name: '4', OCC: 50, Budget: 64, LY: 134,
      },
      {
        name: '5', OCC: 88, Budget: 80, LY: 157,  
      },
      {
        name: '6', OCC: 74, Budget: 76, LY: 257,
      },
      {
        name: '7', OCC: 50, Budget: 64, LY: 134,
      },
      {
        name: '8', OCC: 88, Budget: 80, LY: 157,  
      },
      {
        name: '9', OCC: 74, Budget: 76, LY: 257,
      },
      {
        name: '10', OCC: 50, Budget: 64, LY: 134,
      },
      {
        name: '11', OCC: 88, Budget: 80, LY: 157,  
      },
      {
        name: '12', OCC: 74, Budget: 76, LY: 257,
      },
      {
        name: '13', OCC: 50, Budget: 64, LY: 134,
      },
      {
        name: '14', OCC: 88, Budget: 80, LY: 157,  
      },
      {
        name: '15', OCC: 74, Budget: 76, LY: 257,
      },
      {
        name: '16', OCC: 50, Budget: 64, LY: 134,
      },
      {
        name: '17', OCC: 88, Budget: 80, LY: 157,  
      },
      {
        name: '18', OCC: 74, Budget: 76, LY: 257,
      },
      {
        name: '19', OCC: 50, Budget: 64, LY: 134,
      },
      {
        name: '20', OCC: 88, Budget: 80, LY: 157,  
      },
      {
        name: '21', OCC: 74, Budget: 76, LY: 257,
      },
      {
        name: '22', OCC: 74, Budget: 76, LY: 257,
      },
      {
        name: '23', OCC: 50, Budget: 64, LY: 134,
      },
      {
        name: '24', OCC: 88, Budget: 80, LY: 157,  
      },
      {
        name: '25', OCC: 74, Budget: 76, LY: 257,
      },
      {
        name: '26', OCC: 50, Budget: 64, LY: 134,
      },
      {
        name: '27', OCC: 88, Budget: 80, LY: 157,  
      },
      {
        name: '28', OCC: 74, Budget: 76, LY: 257,
      },
      {
        name: '29', OCC: 50, Budget: 64, LY: 134,
      },
      {
        name: '30', OCC: 88, Budget: 80, LY: 157,  
      },
      {
        name: 'Total', OCC: 74, Budget: 76, LY: 257,
      },
    ];

    const Monthlydailydata = [
      {
        name: '1', OCC: 50, ADR: 64, 
      },
      {
        name: '2', OCC: 88, ADR: 80, 
      },
      {
        name: '3', OCC: 74, ADR: 76, 
      },
      {
        name: '4', OCC: 50, ADR: 64, 
      },
      {
        name: '5', OCC: 88, ADR: 80, 
      },
      {
        name: '6', OCC: 74, ADR: 76, 
      },
      {
        name: '7', OCC: 50, ADR: 64, 
      },
      {
        name: '8', OCC: 88, ADR: 80, 
      },
      {
        name: '9', OCC: 74, ADR: 76, 
      },
      {
        name: '10', OCC: 50, ADR: 64, 
      },
      {
        name: '11', OCC: 88, ADR: 80,
      },
      {
        name: '12', OCC: 74, ADR: 76, 
      },
      {
        name: '13', OCC: 50, ADR: 64, 
      },
      {
        name: '14', OCC: 88, ADR: 80, 
      },
      {
        name: '15', OCC: 74, ADR: 76, 
      },
      {
        name: '16', OCC: 50, ADR: 64, 
      },
      {
        name: '17', OCC: 88, ADR: 80, 
      },
      {
        name: '18', OCC: 74, ADR: 76, 
      },
      {
        name: '19', OCC: 50, ADR: 64, 
      },
      {
        name: '20', OCC: 88, ADR: 80, 
      },
      {
        name: '21', OCC: 74, ADR: 76, 
      },
      {
        name: '22', OCC: 74, ADR: 76, 
      },
      {
        name: '23', OCC: 50, ADR: 64,
      },
      {
        name: '24', OCC: 88, ADR: 80,
      },
      {
        name: '25', OCC: 74, ADR: 76, 
      },
      {
        name: '26', OCC: 50, ADR: 64,
      },
      {
        name: '27', OCC: 88, ADR: 80, 
      },
      {
        name: '28', OCC: 74, ADR: 76, 
      },
      {
        name: '29', OCC: 50, ADR: 64,
      },
      {
        name: '30', OCC: 88, ADR: 80,
      },
      
    ];

    const Monthlydailytotaldata = [
      {
        name: 'WE', OCC: 90, ADR: 64,
      },
      {
        name: 'WD', OCC: 86, ADR: 80,
      },
      {
        name: 'Total', OCC: 88, ADR: 76, 
      },
    ];

    

    return (
      <div className="animated fadeIn">
        <Row>
              <Col  xs={12} md={12}>
                <Card >
                  <Card.Header className="d-flex align-items-center justify-content-between">
                    <Card.Title>Business on the Books</Card.Title>
                    <div className="action-wrap">
                      <div className="action-btn active"><span className="icon-grid"></span></div>
                      <div className="action-btn"><span className="icon-pie-chart"></span></div>
                    </div>
                  </Card.Header>
                  <Card.Body>
                  <Table  responsive className="business-table">
                  <thead>
                    <tr className="business-top-row">
                      <th></th>
                      <th></th>
                      <th className="date-col">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>1 Nov</span>
                        </div>
                      </th>
                      <th className="date-col weekend-bg">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>2 Nov</span>
                        </div>
                      </th>
                      <th className="date-col weekend-bg">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>3 Nov</span>
                        </div>
                      </th>
                      <th className="date-col weekend-bg">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>4 Nov</span>
                        </div>
                      </th><th className="date-col">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>5 Nov</span>
                        </div>
                      </th>
                      <th className="date-col">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>6 Nov</span>
                        </div>
                      </th><th className="date-col">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>7 Nov</span>
                        </div>
                      </th>
                      <th className="date-col weekend-bg">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>8 Nov</span>
                        </div>
                      </th><th className="date-col weekend-bg">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>9 Nov</span>
                        </div>
                      </th>
                      <th className="date-col weekend-bg">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>10 Nov</span>
                        </div>
                      </th><th className="date-col">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>11 Nov</span>
                        </div>
                      </th>
                      <th className="date-col">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>12 Nov</span>
                        </div>
                      </th><th className="date-col">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>13 Nov</span>
                        </div>
                      </th>
                      <th className="date-col">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>14 Nov</span>
                        </div>
                      </th><th className="date-col weekend-bg">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>15 Nov</span>
                        </div>
                      </th>
                      <th className="date-col weekend-bg">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>16 Nov</span>
                        </div>
                      </th><th className="date-col weekend-bg">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>17 Nov</span>
                        </div>
                      </th>
                      <th className="date-col">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>18 Nov</span>
                        </div>
                      </th><th className="date-col weekend-bg">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>19 Nov</span>
                        </div>
                      </th>
                      <th className="date-col weekend-bg">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>20 Nov</span>
                        </div>
                      </th><th className="date-col weekend-bg">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>21 Nov</span>
                        </div>
                      </th>
                      <th className="date-col">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>22 Nov</span>
                        </div>
                      </th><th className="date-col">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>23 Nov</span>
                        </div>
                      </th>
                      <th className="date-col">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>24 Nov</span>
                        </div>
                      </th>
                      <th className="date-col">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>25 Nov</span>
                        </div>
                      </th>
                      <th className="date-col">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>26 Nov</span>
                        </div>
                      </th>
                      <th className="date-col">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>27 Nov</span>
                        </div>
                      </th>
                      <th className="date-col weekend-bg">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>28 Nov</span>
                        </div>
                      </th>
                      <th className="date-col ">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>29 Nov</span>
                        </div>
                      </th>
                      <th className="date-col ">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>30 Nov</span>
                        </div>
                      </th>
                      <th className="date-col">
                        <div className="date-div">
                          <span>Fri</span>
                          <span>31 Nov</span>
                        </div>
                      </th>
                      <th >Total</th>
                      
                    </tr>
                    {/* <tr>
                      <th></th>
                      <th className="head-col">BOB</th>
                      <th className="head-col">BUDGET</th>
                      <th className="head-col">LY</th>
                      <th className="head-col">STLY</th>
                      <th className="head-col">Vs.BUD</th>
                      <th className="head-col">Vs.LY</th>
                      <th className="head-col">Vs.STLY</th>
                    </tr> */}
                  </thead>
                  <tbody>
                    <tr>
                      <td rowSpan={6} className="title-col bg-1 text-center">Business on the Books</td>
                      <td className="title-col white-nowrap">Room Nights</td>
                      <td className="content-col">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col  bg-2">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col">8</td>
                      <td className="content-col">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col bg-2">13</td>
                      <td className="content-col  bg-2 text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      <td className="total-col  ">4960</td>
                    </tr>
                   
                    <tr >
                      <td  className="title-col white-nowrap">OCC%</td>
                      
                      <td className="content-col">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col  bg-2">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col">8</td>
                      <td className="content-col">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col bg-2">13</td>
                      <td className="content-col  bg-2 text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      <td className="total-col  ">4960</td>
                    </tr>
                    <tr>
                      <td  className="title-col white-nowrap">ADR</td>
                     
                      <td className="content-col">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col  bg-2">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col">8</td>
                      <td className="content-col">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col bg-2">13</td>
                      <td className="content-col  bg-2 text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      <td className="total-col  ">4960</td>
                    </tr>
                    <tr>
                      <td  className="title-col white-nowrap">Rooms Revenue</td>
                      
                      <td className="content-col">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col  bg-2">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col">8</td>
                      <td className="content-col">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col bg-2">13</td>
                      <td className="content-col  bg-2 text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      <td className="total-col  ">4960</td>
                    </tr>
                    
                    <tr>
                      <td  className="title-col white-nowrap">RevPAR</td>
                     
                      <td className="content-col">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col  bg-2">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col">8</td>
                      <td className="content-col">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col bg-2">13</td>
                      <td className="content-col  bg-2 text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      <td className="total-col  ">4960</td>
                    </tr>

                    <tr>
                      <td  className="title-col white-nowrap">NRevPAR</td>
                     
                      <td className="content-col">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col  bg-2">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col">8</td>
                      <td className="content-col">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col bg-2">13</td>
                      <td className="content-col  bg-2 text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      <td className="total-col  ">4960</td>
                    </tr>
                    <tr>
                      <td rowSpan={3} className="title-col bg-1 text-center">Pick up since Yesterday</td>
                      <td className="title-col white-nowrap">Room Nights</td>
                      <td className="content-col">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col  bg-2">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col">8</td>
                      <td className="content-col">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col bg-2">13</td>
                      <td className="content-col  bg-2 text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      <td className="total-col  ">4960</td>
                    </tr>
                    <tr>
                      
                      <td className="title-col white-nowrap">ADR</td>
                      <td className="content-col">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col  bg-2">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col">8</td>
                      <td className="content-col">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col bg-2">13</td>
                      <td className="content-col  bg-2 text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      <td className="total-col  ">4960</td>
                    </tr>
                    <tr>
                      
                      <td className="title-col white-nowrap">Revenue</td>
                      <td className="content-col">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col  bg-2">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col">8</td>
                      <td className="content-col">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col bg-2">13</td>
                      <td className="content-col  bg-2 text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      <td className="total-col  ">4960</td>
                    </tr>
                   
                    <tr>
                      <td rowSpan={3} className="title-col bg-1 text-center">Availability & Rates</td>
                      <td className="title-col white-nowrap">Available Rooms</td>
                      <td className="content-col">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col  bg-2">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col">8</td>
                      <td className="content-col">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col bg-2">13</td>
                      <td className="content-col  bg-2 text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                     
                    </tr>
                    <tr>
                      
                      <td className="title-col white-nowrap">Selling Rate</td>
                      <td className="content-col">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col  bg-2">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col">8</td>
                      <td className="content-col">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col bg-2">13</td>
                      <td className="content-col  bg-2 text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                     
                    </tr>
                    <tr>
                      
                      <td className="title-col white-nowrap">Market Rate</td>
                      <td className="content-col">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col  bg-2">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col">8</td>
                      <td className="content-col">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col bg-2">13</td>
                      <td className="content-col  bg-2 text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                     
                    </tr>


                    <tr>
                      <td rowSpan={5} className="title-col bg-1 text-center">Room Type Availability </td>
                      <td className="title-col white-nowrap">Classic</td>
                      <td className="content-col">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col  bg-2">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col">8</td>
                      <td className="content-col">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col bg-2">13</td>
                      <td className="content-col  bg-2 text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      
                    </tr>
                    <tr>
                      
                      <td className="title-col white-nowrap">Executive</td>
                      <td className="content-col">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col  bg-2">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col">8</td>
                      <td className="content-col">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col bg-2">13</td>
                      <td className="content-col  bg-2 text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      
                    </tr>
                    <tr>
                      
                      <td className="title-col white-nowrap">Delux</td>
                      <td className="content-col">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col  bg-2">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col">8</td>
                      <td className="content-col">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col bg-2">13</td>
                      <td className="content-col  bg-2 text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      
                    </tr>

                    <tr>
                      
                      <td className="title-col white-nowrap">Junior Suite</td>
                      <td className="content-col">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col  bg-2">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col">8</td>
                      <td className="content-col">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col bg-2">13</td>
                      <td className="content-col  bg-2 text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      
                    </tr>

                    <tr>
                      
                      <td className="title-col white-nowrap">Suite</td>
                      <td className="content-col">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col  bg-2">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col bg-2">8</td>
                      <td className="content-col bg-2">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col ">55</td>
                      <td className="content-col bg-2">18</td>
                      <td className="content-col">8</td>
                      <td className="content-col">3</td>
                      <td className="content-col">8</td>
                      <td className="content-col bg-2">13</td>
                      <td className="content-col  bg-2 text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      <td className="content-col ">13</td>
                      <td className="content-col  text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                      
                    </tr>
                   
                  </tbody>
                </Table>
            
              </Card.Body>
            </Card>
          </Col>

          <Col  xs={12} md={12}>
            <Card >
              
                <Card.Header  className="d-flex align-items-center justify-content-between">
                  <Card.Title>Monthly Daily Occupacy & ADR</Card.Title>
                  <div className="action-wrap">
                    <div className="action-btn "><span className="icon-grid"></span></div>
                    <div className="action-btn active"><span className="icon-pie-chart"></span></div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col  xs={12} md={9}>
                    <div style={{ width: '100%', height: 300 }}>
                  <ResponsiveContainer>
                      <ComposedChart
                        // width={500}
                        height={300}
                        data={Monthlydailydata}
                        margin={{
                          top: 20, right: 20, bottom: 20, left: 20,
                        }}
                      >
                        {/* <CartesianGrid stroke="#f5f5f5" /> */}
                        <XAxis dataKey="name" />
                        {/* <YAxis /> */}
                        <Tooltip />
                        {/* <Legend /> */}
                        <Bar dataKey="OCC" barSize={20} fill="#2b588f"/>
                        <Line type="monotone" dataKey="ADR" stroke="#e46d09"  strokeWidth={2}/>
                       
                      </ComposedChart>
                      </ResponsiveContainer>
                      </div>
                    </Col>
                    <Col  xs={12} md={3}>
                    <div style={{ width: '100%', height: 300 }}>
                  <ResponsiveContainer>
                      <ComposedChart
                        // width={500}
                        height={300}
                        data={Monthlydailytotaldata}
                        margin={{
                          top: 20, right: 20, bottom: 20, left: 20,
                        }}
                      >
                        {/* <CartesianGrid stroke="#f5f5f5" /> */}
                        <XAxis dataKey="name" />
                        {/* <YAxis /> */}
                        <Tooltip />
                        {/* <Legend /> */}
                        <Bar dataKey="OCC" barSize={20} fill="#2b588f"/>
                        <Line type="monotone" dataKey="ADR" stroke="#e46d09" strokeWidth={2} label={<CustomizedLabel />}/>
                       
                      </ComposedChart>
                      </ResponsiveContainer>
                      </div>
                    </Col>
                  </Row>
                  
                 
                </Card.Body>
              </Card>
          </Col>

          <Col  xs={12} md={12}>
            <Card >
            <Row>
                <Col  xs={12} md={8}>
                <Card.Header  className="d-flex align-items-center justify-content-between">
                  <Card.Title>Daily Occupacy Vs. BUD Vs, LY</Card.Title>
                  <div className="action-wrap">
                    <div className="action-btn "><span className="icon-grid"></span></div>
                    <div className="action-btn active"><span className="icon-pie-chart"></span></div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                      <ComposedChart
                        height={300}
                        data={dailyocc}
                        margin={{
                          top: 20, right: 20, bottom: 20, left: 20,
                        }}
                      >
                        <XAxis dataKey="name" />
                        {/* <YAxis /> */}
                        <Tooltip />
                        <Legend />
                        
                        <Line type="monotone" dataKey="OCC" stroke="#4176b9"  fill="#4176b9"strokeWidth={3} />
                        <Line type="monotone" dataKey="Budget" stroke="#b82f2c" fill="#b82f2c" strokeDasharray="6 6" strokeWidth={2} label={<CustomizedLabel />}/>
                        <Line type="monotone" dataKey="LY" stroke="#94b54e" fill="#94b54e" strokeDasharray="6 6" strokeWidth={2} label={<CustomizedLabel />}/>
                        
                      </ComposedChart>
                      </ResponsiveContainer>
                      </div>
                    </Card.Body>
                </Col>
                <Col  xs={12} md={4}>
                <Card.Header  className="d-flex align-items-center justify-content-between">
                  <Card.Title>Rate Code Statics</Card.Title>
                  <div className="action-wrap">
                    <div className="action-btn "><span className="icon-grid"></span></div>
                    <div className="action-btn active"><span className="icon-pie-chart"></span></div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                      <ComposedChart
                        height={300}
                        data={Ratecode}
                        margin={{
                          top: 20, right: 20, bottom: 20, left: 20,
                        }}
                      >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar  name="Room Nts" dataKey="RoomNts" barSize={20} fill="#386fb0"/>
                        <Line  name="ARR" type="monotone" dataKey="ARR" stroke="#b73632"  fill="#b73632" strokeDasharray="4 4" strokeWidth={2}  label={<CustomizedLabel />}/>
                        
                      </ComposedChart>
                      </ResponsiveContainer>
                      </div>
                    </Card.Body>
                </Col>
              </Row>
                
              </Card>
          </Col>

          

          <Col  xs={12} md={6}>
            <Card >
                <Card.Header  className="d-flex align-items-center justify-content-between">
                  <Card.Title>Market Segmentation</Card.Title>
                  <div className="action-wrap">
                    <div className="action-btn "><span className="icon-grid"></span></div>
                    <div className="action-btn active"><span className="icon-pie-chart"></span></div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                      <ComposedChart
                        // width={500}
                        height={300}
                        data={compdata1}
                        // margin={{
                        //   top: 20, right: 20, bottom: 20, left: 20,
                        // }}
                      >
                        {/* <CartesianGrid stroke="#f5f5f5" /> */}
                        <XAxis dataKey="name" />
                        {/* <YAxis /> */}
                        <Tooltip />
                        <Legend />
                        {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
                        <Bar  name="RMS 2018" dataKey="RMS2018" barSize={20} fill="#3d78c0" padding={{ left: 10, right: 10 }}/>
                        <Bar   name="RMS 2017"  dataKey="RMS2017" barSize={20} fill="#98c0e3" padding={{ left: 10, right: 10 }}/>
                        <Line  name="ADR 2018"  type="monotone" dataKey="ADR2018" stroke="#50aec7"  strokeWidth={2} label={<CustomizedLabel />}/>
                        <Line  name="ADR 2017"  type="monotone" dataKey="ADR2017" stroke="#24446e"  strokeWidth={2} label={<CustomizedLabel />}/>
                        {/* <Scatter dataKey="cnt" fill="red" /> */}
                      </ComposedChart>
                      </ResponsiveContainer>
                      </div>
                </Card.Body>
              </Card>
          </Col>

          <Col  xs={12} md={6}>
            <Card >
                <Card.Header  className="d-flex align-items-center justify-content-between">
                  <Card.Title>Room Type Statistics</Card.Title>
                  <div className="action-wrap">
                    <div className="action-btn "><span className="icon-grid"></span></div>
                    <div className="action-btn active"><span className="icon-pie-chart"></span></div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div style={{ width: '100%', height: 300 }}>
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
                        <XAxis dataKey="name" />
                        {/* <YAxis /> */}
                        <Tooltip />
                        <Legend />
                        {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
                        <Bar name="OCC TY" dataKey="OCCTY" barSize={20} fill="#9ec2d2" padding={{ left: 10, right: 10 }}/>
                        <Bar name="OCC LY" dataKey="OCCLY" barSize={20} fill="#61a7c0" padding={{ left: 10, right: 10 }}/>
                        <Line  name="ADR TY" type="monotone" dataKey="ADRTY" stroke="#202c47" strokeDasharray="2 2" fill="#202c47" label={<CustomizedLabel />}/>
                        <Line  name="ADR LY" type="monotone" dataKey="ADRLY" stroke="#81cbe8" strokeWidth={2} fill="#81cbe8" label={<CustomizedLabel />}/>
                        {/* <Scatter dataKey="cnt" fill="red" /> */}
                      </ComposedChart>
                      </ResponsiveContainer>
                      </div>
                </Card.Body>
              </Card>
          </Col>
           
          <Col  xs={12} md={6}>
            <Card >
                <Card.Header  className="d-flex align-items-center justify-content-between">
                  <Card.Title>Booking Channel</Card.Title>
                  <div className="action-wrap">
                    <div className="action-btn "><span className="icon-grid"></span></div>
                    <div className="action-btn active"><span className="icon-pie-chart"></span></div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                      <ComposedChart
                        // width={500}
                        height={300}
                        data={BookingChannel}
                        margin={{
                          top: 20, right: 20, bottom: 20, left: 20,
                        }}
                      >
                        {/* <CartesianGrid stroke="#f5f5f5" /> */}
                        <XAxis dataKey="name" />
                        {/* <YAxis /> */}
                        <Tooltip />
                        {/* <Legend /> */}
                        <Bar dataKey="RoomNts" barSize={20} fill="#4f81bc"/>
                        <Line type="monotone" dataKey="ARR" stroke="#b73632" strokeDasharray="4 4" strokeWidth={2} fill="#b73632" label={<CustomizedLabel />}/>
                       
                      </ComposedChart>
                      </ResponsiveContainer>
                      </div>
                </Card.Body>
              </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DashbordMonthlyComponent;
