import React, { Component } from "react";

import { Card, Col, Row, Table } from "react-bootstrap";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DataLabel,
  ColumnSeries,
  Category,
  Tooltip,
  Legend,
  LineSeries 
} from "@syncfusion/ej2-react-charts";
import { Browser } from "@syncfusion/ej2-base";
import "./index.scss";


class DashbordMonthlyComponent extends Component<any, any> {
  render() {
    const Ratecode = [
      {
        name: "BAR",
        RoomNts: 250,
        ARR: 199,
      },
      {
        name: "PRM",
        RoomNts: 210,
        ARR: 144,
      },
      {
        name: "COR1",
        RoomNts: 100,
        ARR: 168,
      },
      {
        name: "COR2",
        RoomNts: 70,
        ARR: 154,
      },
      {
        name: "FIT",
        RoomNts: 165,
        ARR: 149,
      },
      {
        name: "FLS",
        RoomNts: 50,
        ARR: 138,
      },
      {
        name: "GRP",
        RoomNts: 169,
        ARR: 166,
      },
    ];
    const BookingChannel = [
      {
        name: "Direct",
        RoomNts: 180,
        ARR: 228,
      },
      {
        name: "GDS",
        RoomNts: 110,
        ARR: 203,
      },
      {
        name: "OTAs",
        RoomNts: 200,
        ARR: 158,
      },
      {
        name: "Brand Website",
        RoomNts: 120,
        ARR: 161,
      },
      {
        name: "Corporate Website",
        RoomNts: 50,
        ARR: 198,
      },
    ];
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
    const RoomData = [
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
        name: "1",
        OCC: 50,
        ADR: 64,
      },
      {
        name: "2",
        OCC: 88,
        ADR: 80,
      },
      {
        name: "3",
        OCC: 74,
        ADR: 76,
      },
      {
        name: "4",
        OCC: 50,
        ADR: 64,
      },
      {
        name: "5",
        OCC: 88,
        ADR: 80,
      },
      {
        name: "6",
        OCC: 74,
        ADR: 76,
      },
      {
        name: "7",
        OCC: 50,
        ADR: 64,
      },
      {
        name: "8",
        OCC: 88,
        ADR: 80,
      },
      {
        name: "9",
        OCC: 74,
        ADR: 76,
      },
      {
        name: "10",
        OCC: 50,
        ADR: 64,
      },
      {
        name: "11",
        OCC: 88,
        ADR: 80,
      },
      {
        name: "12",
        OCC: 74,
        ADR: 76,
      },
      {
        name: "13",
        OCC: 50,
        ADR: 64,
      },
      {
        name: "14",
        OCC: 88,
        ADR: 80,
      },
      {
        name: "15",
        OCC: 74,
        ADR: 76,
      },
      {
        name: "16",
        OCC: 50,
        ADR: 64,
      },
      {
        name: "17",
        OCC: 88,
        ADR: 80,
      },
      {
        name: "18",
        OCC: 74,
        ADR: 76,
      },
      {
        name: "19",
        OCC: 50,
        ADR: 64,
      },
      {
        name: "20",
        OCC: 88,
        ADR: 80,
      },
      {
        name: "21",
        OCC: 74,
        ADR: 76,
      },
      {
        name: "22",
        OCC: 74,
        ADR: 76,
      },
      {
        name: "23",
        OCC: 50,
        ADR: 64,
      },
      {
        name: "24",
        OCC: 88,
        ADR: 80,
      },
      {
        name: "25",
        OCC: 74,
        ADR: 76,
      },
      {
        name: "26",
        OCC: 50,
        ADR: 64,
      },
      {
        name: "27",
        OCC: 88,
        ADR: 80,
      },
      {
        name: "28",
        OCC: 74,
        ADR: 76,
      },
      {
        name: "29",
        OCC: 50,
        ADR: 64,
      },
      {
        name: "30",
        OCC: 88,
        ADR: 80,
      },
    ];

    const Monthlydailytotaldata = [
      {
        name: "WE",
        OCC: 90,
        ADR: 64,
      },
      {
        name: "WD",
        OCC: 86,
        ADR: 80,
      },
      {
        name: "Total",
        OCC: 88,
        ADR: 76,
      },
    ];

    return (
      <div className='animated fadeIn'>
        <Row>
          <Col xs={12} md={12}>
            <Card>
              <Card.Header className='d-flex align-items-center justify-content-between'>
                <Card.Title>Business on the Books</Card.Title>
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
                <Table responsive className='business-table'>
                  <thead>
                    <tr className='business-top-row'>
                      <th></th>
                      <th></th>
                      <th className='date-col'>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>1 Nov</span>
                        </div>
                      </th>
                      <th className='date-col weekend-bg'>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>2 Nov</span>
                        </div>
                      </th>
                      <th className='date-col weekend-bg'>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>3 Nov</span>
                        </div>
                      </th>
                      <th className='date-col weekend-bg'>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>4 Nov</span>
                        </div>
                      </th>
                      <th className='date-col'>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>5 Nov</span>
                        </div>
                      </th>
                      <th className='date-col'>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>6 Nov</span>
                        </div>
                      </th>
                      <th className='date-col'>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>7 Nov</span>
                        </div>
                      </th>
                      <th className='date-col weekend-bg'>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>8 Nov</span>
                        </div>
                      </th>
                      <th className='date-col weekend-bg'>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>9 Nov</span>
                        </div>
                      </th>
                      <th className='date-col weekend-bg'>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>10 Nov</span>
                        </div>
                      </th>
                      <th className='date-col'>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>11 Nov</span>
                        </div>
                      </th>
                      <th className='date-col'>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>12 Nov</span>
                        </div>
                      </th>
                      <th className='date-col'>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>13 Nov</span>
                        </div>
                      </th>
                      <th className='date-col'>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>14 Nov</span>
                        </div>
                      </th>
                      <th className='date-col weekend-bg'>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>15 Nov</span>
                        </div>
                      </th>
                      <th className='date-col weekend-bg'>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>16 Nov</span>
                        </div>
                      </th>
                      <th className='date-col weekend-bg'>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>17 Nov</span>
                        </div>
                      </th>
                      <th className='date-col'>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>18 Nov</span>
                        </div>
                      </th>
                      <th className='date-col weekend-bg'>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>19 Nov</span>
                        </div>
                      </th>
                      <th className='date-col weekend-bg'>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>20 Nov</span>
                        </div>
                      </th>
                      <th className='date-col weekend-bg'>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>21 Nov</span>
                        </div>
                      </th>
                      <th className='date-col'>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>22 Nov</span>
                        </div>
                      </th>
                      <th className='date-col'>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>23 Nov</span>
                        </div>
                      </th>
                      <th className='date-col'>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>24 Nov</span>
                        </div>
                      </th>
                      <th className='date-col'>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>25 Nov</span>
                        </div>
                      </th>
                      <th className='date-col'>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>26 Nov</span>
                        </div>
                      </th>
                      <th className='date-col'>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>27 Nov</span>
                        </div>
                      </th>
                      <th className='date-col weekend-bg'>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>28 Nov</span>
                        </div>
                      </th>
                      <th className='date-col '>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>29 Nov</span>
                        </div>
                      </th>
                      <th className='date-col '>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>30 Nov</span>
                        </div>
                      </th>
                      <th className='date-col'>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>31 Nov</span>
                        </div>
                      </th>
                      <th>Total</th>
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
                      <td rowSpan={6} className='title-col bg-1 text-center'>
                        Business on the Books
                      </td>
                      <td className='title-col white-nowrap'>Room Nights</td>
                      <td className='content-col'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col  bg-2'>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col'>8</td>
                      <td className='content-col'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col bg-2'>13</td>
                      <td className='content-col  bg-2 text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                      <td className='total-col  '>4960</td>
                    </tr>

                    <tr>
                      <td className='title-col white-nowrap'>OCC%</td>

                      <td className='content-col'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col  bg-2'>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col'>8</td>
                      <td className='content-col'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col bg-2'>13</td>
                      <td className='content-col  bg-2 text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                      <td className='total-col  '>4960</td>
                    </tr>
                    <tr>
                      <td className='title-col white-nowrap'>ADR</td>

                      <td className='content-col'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col  bg-2'>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col'>8</td>
                      <td className='content-col'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col bg-2'>13</td>
                      <td className='content-col  bg-2 text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                      <td className='total-col  '>4960</td>
                    </tr>
                    <tr>
                      <td className='title-col white-nowrap'>Rooms Revenue</td>

                      <td className='content-col'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col  bg-2'>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col'>8</td>
                      <td className='content-col'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col bg-2'>13</td>
                      <td className='content-col  bg-2 text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                      <td className='total-col  '>4960</td>
                    </tr>

                    <tr>
                      <td className='title-col white-nowrap'>RevPAR</td>

                      <td className='content-col'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col  bg-2'>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col'>8</td>
                      <td className='content-col'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col bg-2'>13</td>
                      <td className='content-col  bg-2 text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                      <td className='total-col  '>4960</td>
                    </tr>

                    <tr>
                      <td className='title-col white-nowrap'>NRevPAR</td>

                      <td className='content-col'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col  bg-2'>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col'>8</td>
                      <td className='content-col'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col bg-2'>13</td>
                      <td className='content-col  bg-2 text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                      <td className='total-col  '>4960</td>
                    </tr>
                    <tr>
                      <td rowSpan={3} className='title-col bg-1 text-center'>
                        Pick up since Yesterday
                      </td>
                      <td className='title-col white-nowrap'>Room Nights</td>
                      <td className='content-col'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col  bg-2'>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col'>8</td>
                      <td className='content-col'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col bg-2'>13</td>
                      <td className='content-col  bg-2 text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                      <td className='total-col  '>4960</td>
                    </tr>
                    <tr>
                      <td className='title-col white-nowrap'>ADR</td>
                      <td className='content-col'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col  bg-2'>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col'>8</td>
                      <td className='content-col'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col bg-2'>13</td>
                      <td className='content-col  bg-2 text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                      <td className='total-col  '>4960</td>
                    </tr>
                    <tr>
                      <td className='title-col white-nowrap'>Revenue</td>
                      <td className='content-col'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col  bg-2'>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col'>8</td>
                      <td className='content-col'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col bg-2'>13</td>
                      <td className='content-col  bg-2 text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                      <td className='total-col  '>4960</td>
                    </tr>

                    <tr>
                      <td rowSpan={3} className='title-col bg-1 text-center'>
                        Availability & Rates
                      </td>
                      <td className='title-col white-nowrap'>
                        Available Rooms
                      </td>
                      <td className='content-col'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col  bg-2'>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col'>8</td>
                      <td className='content-col'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col bg-2'>13</td>
                      <td className='content-col  bg-2 text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                    </tr>
                    <tr>
                      <td className='title-col white-nowrap'>Selling Rate</td>
                      <td className='content-col'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col  bg-2'>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col'>8</td>
                      <td className='content-col'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col bg-2'>13</td>
                      <td className='content-col  bg-2 text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                    </tr>
                    <tr>
                      <td className='title-col white-nowrap'>Market Rate</td>
                      <td className='content-col'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col  bg-2'>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col'>8</td>
                      <td className='content-col'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col bg-2'>13</td>
                      <td className='content-col  bg-2 text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                    </tr>

                    <tr>
                      <td rowSpan={5} className='title-col bg-1 text-center'>
                        Room Type Availability{" "}
                      </td>
                      <td className='title-col white-nowrap'>Classic</td>
                      <td className='content-col'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col  bg-2'>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col'>8</td>
                      <td className='content-col'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col bg-2'>13</td>
                      <td className='content-col  bg-2 text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                    </tr>
                    <tr>
                      <td className='title-col white-nowrap'>Executive</td>
                      <td className='content-col'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col  bg-2'>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col'>8</td>
                      <td className='content-col'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col bg-2'>13</td>
                      <td className='content-col  bg-2 text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                    </tr>
                    <tr>
                      <td className='title-col white-nowrap'>Delux</td>
                      <td className='content-col'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col  bg-2'>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col'>8</td>
                      <td className='content-col'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col bg-2'>13</td>
                      <td className='content-col  bg-2 text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                    </tr>

                    <tr>
                      <td className='title-col white-nowrap'>Junior Suite</td>
                      <td className='content-col'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col  bg-2'>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col'>8</td>
                      <td className='content-col'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col bg-2'>13</td>
                      <td className='content-col  bg-2 text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                    </tr>

                    <tr>
                      <td className='title-col white-nowrap'>Suite</td>
                      <td className='content-col'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col  bg-2'>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col bg-2'>18</td>
                      <td className='content-col'>8</td>
                      <td className='content-col'>3</td>
                      <td className='content-col'>8</td>
                      <td className='content-col bg-2'>13</td>
                      <td className='content-col  bg-2 text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col bg-2'>55</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={12}>
            <Card>
              <Card.Header className='d-flex align-items-center justify-content-between'>
                <Card.Title>Monthly Daily Occupacy & ADR</Card.Title>
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
                <Row>
                  <Col xs={12} md={9}>
                    <div style={{ width: "100%", height: 300 }}>
                        <ChartComponent
                      id={"occChart1"}
                      style={{ textAlign: "center" }}
                      primaryXAxis={{
                        valueType: "Category",
                        interval: 1,
                        majorGridLines: { width: 0 },
                      }}
                      primaryYAxis={{
                        labelFormat: "{value}%",
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
                    
                      tooltip={{ enable: true }}>
                      <Inject services={[ColumnSeries, LineSeries ,DataLabel, Category, Tooltip]} />
                      <SeriesCollectionDirective>
                        <SeriesDirective
                          dataSource={Monthlydailydata}
                          xName='name'
                          yName='OCC'
                          type='Column'
                          fill={"#2b588f"}
                          name={"OCC"}
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
                          dataSource={Monthlydailydata}
                          xName='name'
                          yName='ADR'
                          type='Line'
                          fill={"#e46d09"}
                          name={"ADR"}
                          width={2}
                          marker={{
                            visible: true,
                            width: 10, 
                            height: 10, 
                            border: { width: 2, color: '#e46d09' } ,
                          }}></SeriesDirective>
                         
                         
                      </SeriesCollectionDirective>
                    </ChartComponent>
                   </div>
                  </Col>
                  <Col xs={12} md={3}>
                  <div style={{ width: "100%", height: 300 }}>
                        <ChartComponent
                      id={"occChart2"}
                      style={{ textAlign: "center" }}
                      primaryXAxis={{
                        valueType: "Category",
                        interval: 1,
                        majorGridLines: { width: 0 },
                      }}
                      primaryYAxis={{
                        labelFormat: "{value}%",
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
                    
                      tooltip={{ enable: true }}>
                      <Inject services={[ColumnSeries, LineSeries ,DataLabel, Category, Tooltip]} />
                      <SeriesCollectionDirective>
                        <SeriesDirective
                          dataSource={Monthlydailytotaldata}
                          xName='name'
                          yName='OCC'
                          type='Column'
                          fill={"#2b588f"}
                          name={"OCC "}
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
                          dataSource={Monthlydailytotaldata}
                          xName='name'
                          yName='ADR'
                          type='Line'
                          fill={"#e46d09"}
                          name={"ADR "}
                          width={2}
                          marker={{
                            visible: true,
                            width: 10, 
                            height: 10, 
                            border: { width: 2, color: '#e46d09' } ,
                          }}></SeriesDirective>
                         
                         
                      </SeriesCollectionDirective>
                    </ChartComponent>
                    
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={12}>
            <Card>
              <Row>
                <Col xs={12} md={8}>
                  <Card.Header className='d-flex align-items-center justify-content-between'>
                    <Card.Title>Daily Occupacy Vs. BUD Vs, LY</Card.Title>
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
                        <ChartComponent
                      id={"dailyocc"}
                      style={{ textAlign: "center" }}
                      primaryXAxis={{
                        valueType: "Category",
                        interval: 1,
                        majorGridLines: { width: 0 },
                      }}
                      primaryYAxis={{
                        labelFormat: "{value}%",
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
                    
                      tooltip={{ enable: true }}>
                      <Inject services={[ColumnSeries, LineSeries ,DataLabel, Category, Tooltip, Legend]} />
                      <SeriesCollectionDirective>
                        
                         
                          <SeriesDirective
                          dataSource={dailyocc}
                          xName='name'
                          yName='OCC'
                          type='Line'
                          fill={"#4176b9"}
                          name={"OCC"}
                          width={2}
                          marker={{
                            visible: true,
                            width: 10, 
                            height: 10, 
                            border: { width: 2, color: '#4176b9' } ,
                          }}></SeriesDirective>
                         <SeriesDirective
                          dataSource={dailyocc}
                          xName='name'
                          yName='Budget'
                          type='Line'
                          fill={"#b82f2c"}
                          name={"Budget"}
                          width={2}
                          dashArray='5'
                          marker={{
                            visible: true,
                            width: 10, 
                            height: 10, 
                            border: { width: 2, color: '#b82f2c' } ,
                          }}></SeriesDirective>
                          <SeriesDirective
                          dataSource={dailyocc}
                          xName='name'
                          yName='LY'
                          type='Line'
                          fill={"#94b54e"}
                          name={"LY"}
                          width={2}
                          dashArray='5'
                          marker={{
                            visible: true,
                            width: 10, 
                            height: 10, 
                            border: { width: 2, color: '#94b54e' } ,
                          }}></SeriesDirective>
                         
                      </SeriesCollectionDirective>
                    </ChartComponent>
                   </div>
                  
                  </Card.Body>
                </Col>
                <Col xs={12} md={4}>
                  <Card.Header className='d-flex align-items-center justify-content-between'>
                    <Card.Title>Rate Code Statics</Card.Title>
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
                        <ChartComponent
                      id={"occChart2"}
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
                    
                      tooltip={{ enable: true }}>
                      <Inject services={[ColumnSeries, LineSeries ,DataLabel, Category, Tooltip, Legend]} />
                      <SeriesCollectionDirective>
                        <SeriesDirective
                          dataSource={Ratecode}
                          xName='name'
                          yName='RoomNts'
                          type='Column'
                          fill={"#386fb0"}
                          name={"Room Nts"}
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
                          dataSource={Ratecode}
                          xName='name'
                          yName='ARR'
                          type='Line'
                          fill={"#b73632"}
                          name={"ARR "}
                          width={2}
                          dashArray='5'
                          marker={{
                            visible: true,
                            width: 10, 
                            height: 10, 
                            border: { width: 2, color: '#b73632' } ,
                          }}></SeriesDirective>
                         
                         
                      </SeriesCollectionDirective>
                    </ChartComponent>
                    
                    </div>
                    
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card>
              <Card.Header className='d-flex align-items-center justify-content-between'>
                <Card.Title>Market Segmentation</Card.Title>
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
                    
                      tooltip={{ enable: true }}>
                      <Inject services={[ColumnSeries, LineSeries ,DataLabel, Category, Tooltip, Legend]} />
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
                            width: 10, 
                            height: 10, 
                            border: { width: 2, color: '#b73632' } ,
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
                            width: 10, 
                            height: 10, 
                            border: { width: 2, color: '#b73632' } ,
                          }}></SeriesDirective>
                         
                      </SeriesCollectionDirective>
                    </ChartComponent>
                    
                    </div>
                
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card>
              <Card.Header className='d-flex align-items-center justify-content-between'>
                <Card.Title>Room Type Statistics</Card.Title>
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
               <div  style={{ width: "100%", height: 300 }}>
                        <ChartComponent
                      id={"RoomChart"}
                      style={{ textAlign: "center" }}
                      primaryXAxis={{
                        valueType: "Category",
                        interval: 1,
                        majorGridLines: { width: 0 },
                      }}
                      primaryYAxis={{
                        labelFormat: "{value}%",
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
                    
                      tooltip={{ enable: true }}>
                      <Inject services={[ColumnSeries, LineSeries ,DataLabel, Category, Tooltip, Legend]} />
                      <SeriesCollectionDirective>
                        <SeriesDirective
                          dataSource={RoomData}
                          xName='name'
                          yName='OCCTY'
                          type='Column'
                          fill={"#9ec2d2"}
                          name={"OCC TY"}
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
                          dataSource={RoomData}
                          xName='name'
                          yName='OCCLY'
                          type='Column'
                          fill={"#61a7c0"}
                          name={"OCC LY"}
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
                          dataSource={RoomData}
                          xName='name'
                          yName='ADRTY'
                          type='Line'
                          fill={"#202c47"}
                          name={"ADR TY"}
                          width={2}
                         
                          marker={{
                            visible: true,
                            width: 10, 
                            height: 10, 
                            border: { width: 2, color: '#202c47' } ,
                          }}></SeriesDirective>
                          <SeriesDirective
                          dataSource={RoomData}
                          xName='name'
                          yName='ADRLY'
                          type='Line'
                          fill={"#81cbe8"}
                          name={"ADR LY"}
                          width={2}
                          dashArray='5'
                          marker={{
                            visible: true,
                            width: 10, 
                            height: 10, 
                            border: { width: 2, color: '#81cbe8' } ,
                          }}></SeriesDirective>
                         
                      </SeriesCollectionDirective>
                    </ChartComponent>
                    
                    </div>
                
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card>
              <Card.Header className='d-flex align-items-center justify-content-between'>
                <Card.Title>Booking Channel</Card.Title>
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
               <div  style={{ width: "100%", height: 300 }}>
                        <ChartComponent
                      id={"BookingChannel"}
                      style={{ textAlign: "center" }}
                      primaryXAxis={{
                        valueType: "Category",
                        interval: 1,
                        majorGridLines: { width: 0 },
                      }}
                      primaryYAxis={{
                        labelFormat: "{value}%",
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
                    
                      tooltip={{ enable: true }}>
                      <Inject services={[ColumnSeries, LineSeries ,DataLabel, Category, Tooltip, Legend]} />
                      <SeriesCollectionDirective>
                        <SeriesDirective
                          dataSource={BookingChannel}
                          xName='name'
                          yName='RoomNts'
                          type='Column'
                          fill={"#4f81bc"}
                          name={"Room Nts"}
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
                          dataSource={BookingChannel}
                          xName='name'
                          yName='ARR'
                          type='Line'
                          fill={"#b73632"}
                          name={"ARR"}
                          width={2}
                          dashArray='5'
                          marker={{
                            visible: true,
                            width: 10, 
                            height: 10, 
                            border: { width: 2, color: '#b73632' } ,
                          }}></SeriesDirective>
                         
                      </SeriesCollectionDirective>
                    </ChartComponent>
                    
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
