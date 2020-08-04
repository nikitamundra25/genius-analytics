import React from "react";
import { Card, Table } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";

const MonthlyBOB = (props: any) => {
  const data = [
    {
      title: "Business on the Books",
      subData: [
        {
          title: "Room Nights",
          data: [
            249,
            269,
            293,
            196,
            367,
            308,
            277,
            190,
            167,
            372,
            217,
            312,
            311,
            197,
            329,
            291,
            250,
            175,
            251,
            320,
            204,
            151,
            233,
            173,
            371,
            393,
            277,
            220,
            196,
            191,
            185,
          ],
        },
        {
          title: "OCC%",
          data: [
            55,
            92,
            49,
            90,
            86,
            70,
            74,
            87,
            94,
            74,
            67,
            53,
            47,
            70,
            70,
            89,
            42,
            46,
            60,
            98,
            80,
            88,
            73,
            93,
            73,
            94,
            93,
            76,
            40,
            49,
            91,
          ],
          total: 73,
        },
        {
          title: "ADR",
          data: [
            254,
            219,
            394,
            326,
            376,
            201,
            250,
            391,
            362,
            374,
            313,
            216,
            322,
            283,
            392,
            319,
            385,
            208,
            371,
            380,
            221,
            338,
            359,
            310,
            238,
            297,
            395,
            330,
            327,
            425,
            390,
          ],
          total: 321.5,
        },
      ],
    },
    {
      title: "Pick up since Yesterday",
      subData: [
        {
          title: "Room Nights",
          data: [
            39,
            28,
            33,
            30,
            49,
            18,
            10,
            11,
            10,
            20,
            48,
            46,
            46,
            35,
            14,
            43,
            15,
            15,
            31,
            14,
            49,
            38,
            43,
            27,
            11,
            29,
            29,
            46,
            21,
            33,
            11,
          ],
          total: 892,
        },
        {
          title: "ADR",
          data: [
            8,
            6,
            2,
            -1,
            2,
            6,
            9,
            -3,
            5,
            8,
            2,
            7,
            3,
            4,
            -1.4,
            7,
            5,
            7,
            4,
            7,
            9,
            8,
            2 - 2.5,
            6,
            7,
            2,
            -4,
            8,
            2,
            2,
          ],
          total: 4.1,
        },
      ],
    },
  ];

  return (
    <>
      <Card>
        <Card.Body>
          <React.Suspense
            fallback={
              <div className="card-loader">
                <Loader />
              </div>
            }
          >
            <div className="dashboard-monthly-table">
              <Table responsive className="mb-0">
                <thead>
                  <tr className="business-top-row">
                    <th></th>
                    <th></th>
                    <th className="date-col">
                      <div className="date-div">
                        <span>Thu</span>
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
                        <span>Sat</span>
                        <span>3 Nov</span>
                      </div>
                    </th>
                    <th className="date-col weekend-bg">
                      <div className="date-div">
                        <span>Sun</span>
                        <span>4 Nov</span>
                      </div>
                    </th>
                    <th className="date-col">
                      <div className="date-div">
                        <span>Mon</span>
                        <span>5 Nov</span>
                      </div>
                    </th>
                    <th className="date-col">
                      <div className="date-div">
                        <span>Tue</span>
                        <span>6 Nov</span>
                      </div>
                    </th>
                    <th className="date-col">
                      <div className="date-div">
                        <span>Wed</span>
                        <span>7 Nov</span>
                      </div>
                    </th>
                    <th className="date-col ">
                      <div className="date-div">
                        <span>Thu</span>
                        <span>8 Nov</span>
                      </div>
                    </th>
                    <th className="date-col weekend-bg">
                      <div className="date-div">
                        <span>Fri</span>
                        <span>9 Nov</span>
                      </div>
                    </th>
                    <th className="date-col weekend-bg">
                      <div className="date-div">
                        <span>Sat</span>
                        <span>10 Nov</span>
                      </div>
                    </th>
                    <th className="date-col weekend-bg">
                      <div className="date-div">
                        <span>Sun</span>
                        <span>11 Nov</span>
                      </div>
                    </th>
                    <th className="date-col">
                      <div className="date-div">
                        <span>Mon</span>
                        <span>12 Nov</span>
                      </div>
                    </th>
                    <th className="date-col">
                      <div className="date-div">
                        <span>Tue</span>
                        <span>13 Nov</span>
                      </div>
                    </th>
                    <th className="date-col">
                      <div className="date-div">
                        <span>Wed</span>
                        <span>14 Nov</span>
                      </div>
                    </th>
                    <th className="date-col ">
                      <div className="date-div">
                        <span>Thu</span>
                        <span>15 Nov</span>
                      </div>
                    </th>
                    <th className="date-col weekend-bg">
                      <div className="date-div">
                        <span>Fri</span>
                        <span>16 Nov</span>
                      </div>
                    </th>
                    <th className="date-col weekend-bg">
                      <div className="date-div">
                        <span>Sat</span>
                        <span>17 Nov</span>
                      </div>
                    </th>
                    <th className="date-col weekend-bg">
                      <div className="date-div">
                        <span>Sun</span>
                        <span>18 Nov</span>
                      </div>
                    </th>
                    <th className="date-col ">
                      <div className="date-div">
                        <span>Mon</span>
                        <span>19 Nov</span>
                      </div>
                    </th>
                    <th className="date-col">
                      <div className="date-div">
                        <span>Tue</span>
                        <span>20 Nov</span>
                      </div>
                    </th>
                    <th className="date-col ">
                      <div className="date-div">
                        <span>Wed</span>
                        <span>21 Nov</span>
                      </div>
                    </th>
                    <th className="date-col">
                      <div className="date-div">
                        <span>Thu</span>
                        <span>22 Nov</span>
                      </div>
                    </th>
                    <th className="date-col weekend-bg">
                      <div className="date-div">
                        <span>Fri</span>
                        <span>23 Nov</span>
                      </div>
                    </th>
                    <th className="date-col weekend-bg">
                      <div className="date-div">
                        <span>Sat</span>
                        <span>24 Nov</span>
                      </div>
                    </th>
                    <th className="date-col weekend-bg">
                      <div className="date-div">
                        <span>Sun</span>
                        <span>25 Nov</span>
                      </div>
                    </th>
                    <th className="date-col">
                      <div className="date-div">
                        <span>Mon</span>
                        <span>26 Nov</span>
                      </div>
                    </th>
                    <th className="date-col">
                      <div className="date-div">
                        <span>Tue</span>
                        <span>27 Nov</span>
                      </div>
                    </th>
                    <th className="date-col ">
                      <div className="date-div">
                        <span>Wed</span>
                        <span>28 Nov</span>
                      </div>
                    </th>
                    <th className="date-col ">
                      <div className="date-div">
                        <span>Thu</span>
                        <span>29 Nov</span>
                      </div>
                    </th>
                    <th className="date-col weekend-bg">
                      <div className="date-div">
                        <span>Fri</span>
                        <span>30 Nov</span>
                      </div>
                    </th>
                    {/* <th className='date-col weekend-bg'>
                        <div className='date-div'>
                          <span>Sat</span>
                          <span>31 Nov</span>
                        </div>
                      </th> */}
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
                  {data && data.length
                    ? data.map(( list: any, index: number) => {
                        return (
                          <>
                          {list.subData.map((key: any, ind: number) => {
                                return (
                            <tr>
                              {ind === 0 ? 
                              <td
                                rowSpan={key.length}
                                className="title-col bg-1 text-center"
                              >
                                {list.title}
                              </td>
                              :null}
                                  <tr>
                                    <td className="title-col white-nowrap">
                                      {key.title}{" "}
                                    </td>
                                    {key.data.map((data: any, i: number) => {
                                      return (
                                        <td className="content-col">{data} </td>
                                      );
                                    })}
                                  </tr>
                            </tr>
                                );
                              })}
                          </>
                        );
                      })
                    : null}

                  {/* <tr>
                    <td rowSpan={2} className="title-col bg-1 text-center">
                      Pick up since Yesterday
                    </td>
                    <td className="title-col white-nowrap">Room Nights</td>
                    <td className="content-col">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col  text-danger">-25</td>
                    <td className="content-col ">55</td>
                    <td className="content-col ">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col  text-danger">-25</td>
                    <td className="content-col  ">55</td>
                    <td className="content-col ">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col text-danger">-25</td>
                    <td className="content-col ">55</td>
                    <td className="content-col ">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col text-danger">-25</td>
                    <td className="content-col ">55</td>
                    <td className="content-col ">13</td>
                    <td className="content-col  bg-2 text-danger">-25</td>

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
                    <td className="content-col ">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col  text-danger">-25</td>
                    <td className="content-col  ">55</td>
                    <td className="content-col ">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col text-danger">-25</td>
                    <td className="content-col ">55</td>
                    <td className="content-col ">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col text-danger">-25</td>
                    <td className="content-col ">55</td>
                    <td className="content-col ">13</td>
                    <td className="content-col  bg-2 text-danger">-25</td>

                    <td className="total-col  ">4960</td>
                  </tr>

                  <tr>
                    <td rowSpan={3} className="title-col bg-1 text-center">
                      Availability & Rates
                    </td>
                    <td className="title-col white-nowrap">Available Rooms</td>
                    <td className="content-col">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col  text-danger">-25</td>
                    <td className="content-col ">55</td>
                    <td className="content-col ">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col  text-danger">-25</td>
                    <td className="content-col  ">55</td>
                    <td className="content-col ">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col text-danger">-25</td>
                    <td className="content-col ">55</td>
                    <td className="content-col ">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col text-danger">-25</td>
                    <td className="content-col ">55</td>
                    <td className="content-col ">13</td>
                    <td className="content-col  bg-2 text-danger">-25</td>
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
                    <td className="content-col ">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col  text-danger">-25</td>
                    <td className="content-col  ">55</td>
                    <td className="content-col ">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col text-danger">-25</td>
                    <td className="content-col ">55</td>
                    <td className="content-col ">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col text-danger">-25</td>
                    <td className="content-col ">55</td>
                    <td className="content-col ">13</td>
                    <td className="content-col  bg-2 text-danger">-25</td>
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
                    <td className="content-col ">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col  text-danger">-25</td>
                    <td className="content-col  ">55</td>
                    <td className="content-col ">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col text-danger">-25</td>
                    <td className="content-col ">55</td>
                    <td className="content-col ">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col text-danger">-25</td>
                    <td className="content-col ">55</td>
                    <td className="content-col ">13</td>
                    <td className="content-col  bg-2 text-danger">-25</td>
                  </tr>

                  <tr>
                    <td rowSpan={5} className="title-col bg-1 text-center">
                      Room Type Availability{" "}
                    </td>
                    <td className="title-col white-nowrap">Classic</td>
                    <td className="content-col">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col  text-danger">-25</td>
                    <td className="content-col ">55</td>
                    <td className="content-col ">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col  text-danger">-25</td>
                    <td className="content-col  ">55</td>
                    <td className="content-col ">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col text-danger">-25</td>
                    <td className="content-col ">55</td>
                    <td className="content-col ">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col text-danger">-25</td>
                    <td className="content-col ">55</td>
                    <td className="content-col ">13</td>
                    <td className="content-col  bg-2 text-danger">-25</td>
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
                    <td className="content-col ">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col  text-danger">-25</td>
                    <td className="content-col  ">55</td>
                    <td className="content-col ">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col text-danger">-25</td>
                    <td className="content-col ">55</td>
                    <td className="content-col ">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col text-danger">-25</td>
                    <td className="content-col ">55</td>
                    <td className="content-col ">13</td>
                    <td className="content-col  bg-2 text-danger">-25</td>
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
                    <td className="content-col ">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col  text-danger">-25</td>
                    <td className="content-col  ">55</td>
                    <td className="content-col ">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col text-danger">-25</td>
                    <td className="content-col ">55</td>
                    <td className="content-col ">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col text-danger">-25</td>
                    <td className="content-col ">55</td>
                    <td className="content-col ">13</td>
                    <td className="content-col  bg-2 text-danger">-25</td>
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
                    <td className="content-col ">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col  text-danger">-25</td>
                    <td className="content-col  ">55</td>
                    <td className="content-col ">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col text-danger">-25</td>
                    <td className="content-col ">55</td>
                    <td className="content-col ">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col text-danger">-25</td>
                    <td className="content-col ">55</td>
                    <td className="content-col ">13</td>
                    <td className="content-col  bg-2 text-danger">-25</td>
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
                    <td className="content-col ">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col  text-danger">-25</td>
                    <td className="content-col  ">55</td>
                    <td className="content-col ">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col text-danger">-25</td>
                    <td className="content-col ">55</td>
                    <td className="content-col ">18</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col bg-2">3</td>
                    <td className="content-col bg-2">8</td>
                    <td className="content-col ">13</td>
                    <td className="content-col text-danger">-25</td>
                    <td className="content-col ">55</td>
                    <td className="content-col ">13</td>
                    <td className="content-col  bg-2 text-danger">-25</td>
                  </tr> */}
                </tbody>
              </Table>
            </div>
          </React.Suspense>
        </Card.Body>
      </Card>
    </>
  );
};

export default MonthlyBOB;
