import React, { FC } from "react";
import { Card, Table ,Col} from "react-bootstrap";

export const TableForm: FC = props => {

  return (
    <Col xs={12} md={6}>
    <Card>
              <Card.Header className="d-flex align-items-center justify-content-between">
                <Card.Title>Business on the Books</Card.Title>
                <div className="action-wrap">
                  <div className="action-btn active">
                    <span className="icon-grid"></span>
                  </div>
                  <div className="action-btn">
                    <span className="icon-pie-chart"></span>
                  </div>
                </div>
              </Card.Header>
              <Card.Body>
                <Table className="business-table">
                  <thead>
                    <tr className="business-top-row">
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th colSpan={3} className="variance-col">
                        VARIANCES
                      </th>
                    </tr>
                    <tr>
                      <th></th>
                      <th className="head-col">BOB</th>
                      <th className="head-col">BUDGET</th>
                      <th className="head-col">LY</th>
                      <th className="head-col">STLY</th>
                      <th className="head-col">Vs.BUD</th>
                      <th className="head-col">Vs.LY</th>
                      <th className="head-col">Vs.STLY</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="title-col">Room Nights</td>
                      <td className="content-col">3454</td>
                      <td className="content-col">43543</td>
                      <td className="content-col">54345</td>
                      <td className="content-col">43543</td>
                      <td className="content-col bg-2">15</td>
                      <td className="content-col bg-2 text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                    </tr>
                    <tr>
                      <td className="title-col">OCC</td>
                      <td className="content-col">3454</td>
                      <td className="content-col">43543</td>
                      <td className="content-col">54345</td>
                      <td className="content-col">43543</td>
                      <td className="content-col bg-2">15</td>
                      <td className="content-col bg-2 text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                    </tr>
                    <tr>
                      <td className="title-col">Revenue</td>
                      <td className="content-col">3454</td>
                      <td className="content-col">43543</td>
                      <td className="content-col">54345</td>
                      <td className="content-col">43543</td>
                      <td className="content-col bg-2">15</td>
                      <td className="content-col bg-2 text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                    </tr>
                    <tr>
                      <td className="title-col">ADR</td>
                      <td className="content-col">3454</td>
                      <td className="content-col">43543</td>
                      <td className="content-col">54345</td>
                      <td className="content-col">43543</td>
                      <td className="content-col bg-2">15</td>
                      <td className="content-col bg-2 text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                    </tr>
                    <tr>
                      <td className="title-col">RevPar</td>
                      <td className="content-col">3454</td>
                      <td className="content-col">43543</td>
                      <td className="content-col">54345</td>
                      <td className="content-col">43543</td>
                      <td className="content-col bg-2">15</td>
                      <td className="content-col bg-2 text-danger">-25</td>
                      <td className="content-col bg-2">55</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
            </Col>
  );
};