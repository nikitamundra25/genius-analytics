import React from "react";
import { Card, Table } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";

const MonthlyBOB = (props:any) => {

  return (
    <>
    <Card>
      <Card.Body>
        <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
          <div className='dashboard-monthly-table'>

         
            <Table responsive >
                  <thead>
                    <tr className='business-top-row'>
                      <th></th>
                      <th></th>
                      <th className='date-col'>
                        <div className='date-div'>
                          <span>Thu</span>
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
                          <span>Sat</span>
                          <span>3 Nov</span>
                        </div>
                      </th>
                      <th className='date-col weekend-bg'>
                        <div className='date-div'>
                          <span>Sun</span>
                          <span>4 Nov</span>
                        </div>
                      </th>
                      <th className='date-col'>
                        <div className='date-div'>
                          <span>Mon</span>
                          <span>5 Nov</span>
                        </div>
                      </th>
                      <th className='date-col'>
                        <div className='date-div'>
                          <span>Tue</span>
                          <span>6 Nov</span>
                        </div>
                      </th>
                      <th className='date-col'>
                        <div className='date-div'>
                          <span>Wed</span>
                          <span>7 Nov</span>
                        </div>
                      </th>
                      <th className='date-col '>
                        <div className='date-div'>
                          <span>Thu</span>
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
                          <span>Sat</span>
                          <span>10 Nov</span>
                        </div>
                      </th>
                      <th className='date-col weekend-bg'>
                        <div className='date-div'>
                          <span>Sun</span>
                          <span>11 Nov</span>
                        </div>
                      </th>
                      <th className='date-col'>
                        <div className='date-div'>
                          <span>Mon</span>
                          <span>12 Nov</span>
                        </div>
                      </th>
                      <th className='date-col'>
                        <div className='date-div'>
                          <span>Tue</span>
                          <span>13 Nov</span>
                        </div>
                      </th>
                      <th className='date-col'>
                        <div className='date-div'>
                          <span>Wed</span>
                          <span>14 Nov</span>
                        </div>
                      </th>
                      <th className='date-col '>
                        <div className='date-div'>
                          <span>Thu</span>
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
                          <span>Sat</span>
                          <span>17 Nov</span>
                        </div>
                      </th>
                      <th className='date-col weekend-bg'>
                        <div className='date-div'>
                          <span>Sun</span>
                          <span>18 Nov</span>
                        </div>
                      </th>
                      <th className='date-col '>
                        <div className='date-div'>
                          <span>Mon</span>
                          <span>19 Nov</span>
                        </div>
                      </th>
                      <th className='date-col'>
                        <div className='date-div'>
                          <span>Tue</span>
                          <span>20 Nov</span>
                        </div>
                      </th>
                      <th className='date-col '>
                        <div className='date-div'>
                          <span>Wed</span>
                          <span>21 Nov</span>
                        </div>
                      </th>
                      <th className='date-col'>
                        <div className='date-div'>
                          <span>Thu</span>
                          <span>22 Nov</span>
                        </div>
                      </th>
                      <th className='date-col weekend-bg'>
                        <div className='date-div'>
                          <span>Fri</span>
                          <span>23 Nov</span>
                        </div>
                      </th>
                      <th className='date-col weekend-bg'>
                        <div className='date-div'>
                          <span>Sat</span>
                          <span>24 Nov</span>
                        </div>
                      </th>
                      <th className='date-col weekend-bg'>
                        <div className='date-div'>
                          <span>Sun</span>
                          <span>25 Nov</span>
                        </div>
                      </th>
                      <th className='date-col'>
                        <div className='date-div'>
                          <span>Mon</span>
                          <span>26 Nov</span>
                        </div>
                      </th>
                      <th className='date-col'>
                        <div className='date-div'>
                          <span>Tue</span>
                          <span>27 Nov</span>
                        </div>
                      </th>
                      <th className='date-col '>
                        <div className='date-div'>
                          <span>Wed</span>
                          <span>28 Nov</span>
                        </div>
                      </th>
                      <th className='date-col '>
                        <div className='date-div'>
                          <span>Thu</span>
                          <span>29 Nov</span>
                        </div>
                      </th>
                      <th className='date-col weekend-bg'>
                        <div className='date-div'>
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
                    <tr>
                      <td rowSpan={3} className='title-col bg-1 text-center'>
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
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col  '>55</td>
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  bg-2 text-danger'>-25</td>
                     
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
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col  '>55</td>
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  bg-2 text-danger'>-25</td>
                     
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
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col  '>55</td>
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  bg-2 text-danger'>-25</td>
                     
                      <td className='total-col  '>4960</td>
                    </tr>
                     <tr>
                      <td rowSpan={2} className='title-col bg-1 text-center'>
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
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col  '>55</td>
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  bg-2 text-danger'>-25</td>
                     
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
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col  '>55</td>
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  bg-2 text-danger'>-25</td>
                     
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
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col  '>55</td>
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  bg-2 text-danger'>-25</td>
                     
                   
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
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col  '>55</td>
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  bg-2 text-danger'>-25</td>
                     
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
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col  '>55</td>
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  bg-2 text-danger'>-25</td>
                     
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
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col  '>55</td>
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  bg-2 text-danger'>-25</td>
                     
                     
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
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col  '>55</td>
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  bg-2 text-danger'>-25</td>
                     
                      
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
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col  '>55</td>
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  bg-2 text-danger'>-25</td>
                     
                     
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
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col  '>55</td>
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  bg-2 text-danger'>-25</td>
                     
                     
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
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  text-danger'>-25</td>
                      <td className='content-col  '>55</td>
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col '>18</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col bg-2'>3</td>
                      <td className='content-col bg-2'>8</td>
                      <td className='content-col '>13</td>
                      <td className='content-col text-danger'>-25</td>
                      <td className='content-col '>55</td>
                      <td className='content-col '>13</td>
                      <td className='content-col  bg-2 text-danger'>-25</td>
                     
                    </tr>
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


