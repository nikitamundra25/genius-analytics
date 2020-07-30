import React from "react";
import Loader from "../../../components/Loader/Loader";
import { Table } from "react-bootstrap";

const BOBMonthlyTable = ({ graphdata = [] }: any) => {
  return (
    <>
     
      <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
      <div className="table-detail-section">
            <Table responsive className='pickup-detail-table mb-0'>
            <thead>
              <tr>
                <th></th>
                <th className="head-col">Bar</th>
                <th className="head-col">Leisure Break</th>
                <th className="head-col">Corporate</th>
                <th className="head-col">Consortia</th>
                <th className="head-col">Promotions</th>
                <th className="head-col">Groups</th>
                <th className="head-col">OTAs</th>
                <th className="head-col">Fit</th>
                <th className="head-col total-content">Total</th>
              </tr>
            </thead>
            <tbody>
              {graphdata && graphdata.length
                ? graphdata.map((list: any, index: number) => {
                    return (
                      <tr
                        key={index}
                        className={list.isWeekend ? "weekend-bg" : ""}
                      >
                        <td className="title-col">{list.title} </td>
                        <td
                          className={`content-col ${
                            list.barValue && parseInt(list.barValue) < 0
                              ? "text-danger"
                              : ""
                          }`}
                        >
                          {" "}
                          {list.barValue ? list.barValue : ""}{" "}
                        </td>
                        <td
                          className={`content-col ${
                            list.leisureBreak && parseInt(list.leisureBreak) < 0
                              ? "text-danger"
                              : ""
                          }`}
                        >
                          {list.leisureBreak ? list.leisureBreak : ""}{" "}
                        </td>
                        <td
                          className={`content-col ${
                            list.corporate && parseInt(list.corporate) < 0
                              ? "text-danger"
                              : ""
                          }`}
                        >
                          {list.corporate ? list.corporate : ""}
                        </td>
                        <td
                          className={`content-col ${
                            list.consortia && parseInt(list.consortia) < 0
                              ? "text-danger"
                              : ""
                          }`}
                        >
                          {list.consortia ? list.consortia : ""}
                        </td>
                        <td
                          className={`content-col ${
                            list.promotions && parseInt(list.promotions) < 0
                              ? "text-danger"
                              : ""
                          }`}
                        >
                          {list.promotions ? list.promotions : ""}
                        </td>
                        <td
                          className={`content-col ${
                            list.groups && parseInt(list.groups) < 0
                              ? "text-danger"
                              : ""
                          }`}
                        >
                          {list.groups ? list.groups : ""}
                        </td>
                        <td
                          className={`content-col ${
                            list.ota && parseInt(list.ota) < 0
                              ? "text-danger"
                              : ""
                          }`}
                        >
                          {list.ota ? list.ota : ""}
                        </td>
                        <td
                          className={`content-col ${
                            list.fit && parseInt(list.fit) < 0
                              ? "text-danger"
                              : ""
                          }`}
                        >
                          {list.fit ? list.fit : ""}
                        </td>
                        <td
                          className={`content-col total-content  ${
                            list.total && parseInt(list.total) < 0
                              ? "text-danger"
                              : ""
                          }`}
                        >
                          {list.total ? list.total : ""}
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td className="total-col">5</td>
                <td className="total-col">19</td>
                <td className="total-col">23</td>
                <td className="total-col">12</td>
                <td className="total-col">3</td>
                <td className="total-col ">0</td>
                <td className="total-col ">17</td>
                <td className="total-col ">7</td>
                <td className="total-col total-content">86</td>
              </tr>
            </tfoot>
          </Table>
        </div>
      </React.Suspense>
    </>
  );
};

export default BOBMonthlyTable;
