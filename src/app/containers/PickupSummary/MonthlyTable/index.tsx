import React from "react";
import { Table } from "react-bootstrap";

const MonthlyTable = () => {
  return (
    <>
     <Table className='business-table'>
      <thead>
        <tr className='business-top-row'>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th colSpan={3} className='variance-col'>
            VARIANCES
          </th>
        </tr>
        <tr>
          <th></th>
          <th className='head-col'>Pick-up</th>
          <th className='head-col'>BOB</th>
          <th className='head-col'>BUDGET</th>
          <th className='head-col'>LY</th>
          <th className='head-col'>STLY</th>
          <th className='head-col'>Vs.BUD</th>
          <th className='head-col'>Vs.LY</th>
          <th className='head-col'>Vs.STLY</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='title-col'>Rm Nts</td>
          <td className='content-col'>174</td>
          <td className='content-col'>3454</td>
          <td className='content-col'>43543</td>
          <td className='content-col'>54345</td>
          <td className='content-col'>43543</td>
          <td className='content-col bg-2'>15</td>
          <td className='content-col bg-2 text-danger'>-25</td>
          <td className='content-col bg-2'>55</td>
        </tr>
        <tr>
          <td className='title-col'>OCC</td>
          <td className='content-col'></td>
          <td className='content-col'>3454</td>
          <td className='content-col'>43543</td>
          <td className='content-col'>54345</td>
          <td className='content-col'>43543</td>
          <td className='content-col bg-2'>15</td>
          <td className='content-col bg-2 text-danger'>-25</td>
          <td className='content-col bg-2'>55</td>
        </tr>
        <tr>
          <td className='title-col'>Revenue</td>
          <td className='content-col'>39359</td>
          <td className='content-col'>3454</td>
          <td className='content-col'>43543</td>
          <td className='content-col'>54345</td>
          <td className='content-col'>43543</td>
          <td className='content-col bg-2'>15</td>
          <td className='content-col bg-2 text-danger'>-25</td>
          <td className='content-col bg-2'>55</td>
        </tr>
        <tr>
          <td className='title-col'>ARR</td>
          <td className='content-col'>1.4</td>
          <td className='content-col'>3454</td>
          <td className='content-col'>43543</td>
          <td className='content-col'>54345</td>
          <td className='content-col'>43543</td>
          <td className='content-col bg-2'>15</td>
          <td className='content-col bg-2 text-danger'>-25</td>
          <td className='content-col bg-2'>55</td>
        </tr>
        <tr>
          <td className='title-col'>RevPAR</td>
          <td className='content-col'></td>
          <td className='content-col'>3454</td>
          <td className='content-col'>43543</td>
          <td className='content-col'>54345</td>
          <td className='content-col'>43543</td>
          <td className='content-col bg-2'>15</td>
          <td className='content-col bg-2 text-danger'>-25</td>
          <td className='content-col bg-2'>55</td>
        </tr>
      </tbody>
    </Table>
        
    </>
  );
};

export default MonthlyTable;
