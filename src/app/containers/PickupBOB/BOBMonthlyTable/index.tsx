import React from "react";
import Loader from "../../../components/Loader/Loader";
import { Table } from "react-bootstrap";


const BOBMonthlyTable = (props:any) => {

  return (
    <>
     
      <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
      <div className="table-detail-section">
            <Table responsive className='pickup-detail-table'>
            <thead>
              
              <tr>
                <th></th>
                <th className='head-col'>Bar</th>
                <th className='head-col'>Leisure Break</th>
                <th className='head-col'>Corporate</th>
                <th className='head-col'>Consortia</th>
                <th className='head-col'>Promotions</th>
                <th className='head-col'>Groups</th>
                <th className='head-col'>OTAs</th>
                <th className='head-col'>Fit</th>
                <th className='head-col total-content'>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='title-col'>Mon 01 Oct</td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col '></td>
                <td className='content-col '></td>
                <td className='content-col '></td>
                <td className='content-col total-content'></td>
              </tr>
              <tr>
                <td className='title-col'>Tue 02 Oct</td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col '></td>
                <td className='content-col '></td>
                <td className='content-col '></td>
                <td className='content-col total-content'></td>
              </tr>
              <tr>
                <td className='title-col'>Wed 03 Oct</td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col '></td>
                <td className='content-col '></td>
                <td className='content-col '></td>
                <td className='content-col total-content'></td>
              </tr>
              <tr>
                <td className='title-col'>Thu 04 Oct</td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col '></td>
                <td className='content-col '></td>
                <td className='content-col '></td>
                <td className='content-col total-content'></td>
              </tr>
              <tr className="weekend-bg">
                <td className='title-col'>Fri 05 Oct</td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col '></td>
                <td className='content-col '></td>
                <td className='content-col '></td>
                <td className='content-col total-content'></td>
              </tr>
              <tr className="weekend-bg">
                <td className='title-col'>Sat 06 Oct</td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col '></td>
                <td className='content-col '></td>
                <td className='content-col '></td>
                <td className='content-col total-content'></td>
              </tr>
              <tr className="weekend-bg">
                <td className='title-col'>Sun 07 Oct</td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col '></td>
                <td className='content-col '></td>
                <td className='content-col '></td>
                <td className='content-col total-content'></td>
              </tr>
              <tr>
                <td className='title-col'>Mon 08 Oct</td>
                <td className='content-col text-danger'>-1</td>
                <td className='content-col'></td>
                <td className='content-col text-danger'>-1</td>
                <td className='content-col'>1</td>
                <td className='content-col'></td>
                <td className='content-col '></td>
                <td className='content-col text-danger'>-1</td>
                <td className='content-col '></td>
                <td className='content-col total-content text-danger'>-2</td>
              </tr>
              <tr>
                <td className='title-col'>Tue 09 Oct</td>
                <td className='content-col'>1</td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col'>1</td>
                <td className='content-col'>1</td>
                <td className='content-col '></td>
                <td className='content-col '>1</td>
                <td className='content-col '></td>
                <td className='content-col total-content'>4</td>
              </tr>
              <tr>
                <td className='title-col'>Wed 10 Oct</td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col'>1</td>
                <td className='content-col'></td>
                <td className='content-col'>1</td>
                <td className='content-col '></td>
                <td className='content-col '></td>
                <td className='content-col text-danger'>-3</td>
                <td className='content-col total-content text-danger'>-1</td>
              </tr>

              <tr>
                <td className='title-col'>Thu 11 Oct</td>
                <td className='content-col'>1</td>
                <td className='content-col'>0</td>
                <td className='content-col'>0</td>
                <td className='content-col'>0</td>
                <td className='content-col'>0</td>
                <td className='content-col '>0</td>
                <td className='content-col '>0</td>
                <td className='content-col '>0</td>
                <td className='content-col total-content'>1</td>
              </tr>
              <tr className="weekend-bg">
                <td className='title-col'>Fri 12 Oct</td>
                <td className='content-col'>1</td>
                <td className='content-col'>0</td>
                <td className='content-col text-danger'>-1</td>
                <td className='content-col'>1</td>
                <td className='content-col'>0</td>
                <td className='content-col '>0</td>
                <td className='content-col '>1</td>
                <td className='content-col '>0</td>
                <td className='content-col total-content'>2</td>
              </tr>
              <tr className="weekend-bg">
                <td className='title-col'>Sat 13 Oct</td>
                <td className='content-col'>1</td>
                <td className='content-col'>0</td>
                <td className='content-col'>0</td>
                <td className='content-col'>2</td>
                <td className='content-col'>0</td>
                <td className='content-col '>0</td>
                <td className='content-col '>1</td>
                <td className='content-col '>0</td>
                <td className='content-col total-content'>4</td>
              </tr>
              <tr className="weekend-bg">
                <td className='title-col'>Sun 14 Oct</td>
                <td className='content-col'>1</td>
                <td className='content-col'>0</td>
                <td className='content-col'>0</td>
                <td className='content-col'>2</td>
                <td className='content-col'>0</td>
                <td className='content-col '>0</td>
                <td className='content-col '>1</td>
                <td className='content-col '>0</td>
                <td className='content-col total-content'>4</td>
              </tr>
              <tr>
                <td className='title-col'>Mon 15 Oct</td>
                <td className='content-col'></td>
                <td className='content-col'>1</td>
                <td className='content-col'>2</td>
                <td className='content-col'>2</td>
                <td className='content-col'></td>
                <td className='content-col '></td>
                <td className='content-col '>7</td>
                <td className='content-col '>3</td>
                <td className='content-col total-content'>15</td>
              </tr>
              <tr>
                <td className='title-col'>Tue 16 Oct</td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col text-danger'>-1</td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col '></td>
                <td className='content-col '>1</td>
                <td className='content-col '>2</td>
                <td className='content-col total-content'>2</td>
              </tr>
              <tr>
                <td className='title-col'>Wed 17 Oct</td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col'>1</td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col '></td>
                <td className='content-col '></td>
                <td className='content-col '>1</td>
                <td className='content-col total-content'>2</td>
              </tr>
              <tr>
                <td className='title-col'>Thu 18 Oct</td>
                <td className='content-col'>1</td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col '></td>
                <td className='content-col '>1</td>
                <td className='content-col '>1</td>
                <td className='content-col total-content'>3</td>
              </tr>
              <tr className="weekend-bg">
                <td className='title-col'>Fri 19 Oct</td>
                <td className='content-col'>1</td>
                <td className='content-col'>0</td>
                <td className='content-col'>1</td>
                <td className='content-col'>0</td>
                <td className='content-col'>0</td>
                <td className='content-col '>0</td>
                <td className='content-col '>1</td>
                <td className='content-col '>1</td>
                <td className='content-col total-content'>4</td>
              </tr>
              <tr className="weekend-bg">
                <td className='title-col'>Sat 20 Oct</td>
                <td className='content-col'>0</td>
                <td className='content-col'>0</td>
                <td className='content-col'>3</td>
                <td className='content-col text-danger'>-1</td>
                <td className='content-col'>0</td>
                <td className='content-col '>0</td>
                <td className='content-col '>2</td>
                <td className='content-col '>1</td>
                <td className='content-col total-content'>5</td>
              </tr>

              <tr className="weekend-bg">
                <td className='title-col'>Sun 21 Oct</td>
                <td className='content-col'>0</td>
                <td className='content-col'>0</td>
                <td className='content-col'>5</td>
                <td className='content-col'>0</td>
                <td className='content-col'>0</td>
                <td className='content-col '>0</td>
                <td className='content-col '>2</td>
                <td className='content-col '>1</td>
                <td className='content-col total-content'>8</td>
              </tr>
              <tr>
                <td className='title-col'>Mon 22 Oct</td>
                <td className='content-col'>1</td>
                <td className='content-col'>3</td>
                <td className='content-col'>5</td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col '></td>
                <td className='content-col '>1</td>
                <td className='content-col '></td>
                <td className='content-col total-content'>10</td>
              </tr>
              <tr>
                <td className='title-col'>Tue 23 Oct</td>
                <td className='content-col'></td>
                <td className='content-col'>4</td>
                <td className='content-col'>3</td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col '></td>
                <td className='content-col '></td>
                <td className='content-col '>1</td>
                <td className='content-col total-content '>8</td>
              </tr>
              <tr>
                <td className='title-col'>Wed 24 Oct</td>
                <td className='content-col'></td>
                <td className='content-col'>3</td>
                <td className='content-col'>1</td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col '></td>
                <td className='content-col '></td>
                <td className='content-col '></td>
                <td className='content-col total-content'>4</td>
              </tr>
              <tr>
                <td className='title-col'>Thu 25 Oct</td>
                <td className='content-col'></td>
                <td className='content-col'>2</td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col '></td>
                <td className='content-col '></td>
                <td className='content-col '></td>
                <td className='content-col total-content'>2</td>
              </tr>
              <tr className="weekend-bg">
                <td className='title-col'>Fri 26 Oct</td>
                <td className='content-col'>0</td>
                <td className='content-col'>0</td>
                <td className='content-col'>0</td>
                <td className='content-col'>0</td>
                <td className='content-col'>0</td>
                <td className='content-col '>0</td>
                <td className='content-col text-danger'>-1</td>
                <td className='content-col '>0</td>
                <td className='content-col total-content'>-1</td>
              </tr>
              <tr className="weekend-bg">
                <td className='title-col'>Sat 27 Oct</td>
                <td className='content-col'>0</td>
                <td className='content-col'>0</td>
                <td className='content-col'>0</td>
                <td className='content-col'>1</td>
                <td className='content-col'>0</td>
                <td className='content-col '>0</td>
                <td className='content-col '>0</td>
                <td className='content-col '>0</td>
                <td className='content-col total-content'>1</td>
              </tr>
              <tr className="weekend-bg">
                <td className='title-col'>Sun 28 Oct</td>
                <td className='content-col'>0</td>
                <td className='content-col'>0</td>
                <td className='content-col'>1</td>
                <td className='content-col'>2</td>
                <td className='content-col'>0</td>
                <td className='content-col '>0</td>
                <td className='content-col '>0</td>
                <td className='content-col '>1</td>
                <td className='content-col total-content'>4</td>
              </tr>
              <tr>
                <td className='title-col'>Mon 29 Oct</td>
                <td className='content-col'></td>
                <td className='content-col'>1</td>
                <td className='content-col'>1</td>
                <td className='content-col'>2</td>
                <td className='content-col'></td>
                <td className='content-col '></td>
                <td className='content-col '></td>
                <td className='content-col '></td>
                <td className='content-col total-content'>4</td>
              </tr>
              <tr>
                <td className='title-col'>Tue 30 Oct</td>
                <td className='content-col'></td>
                <td className='content-col'>1</td>
                <td className='content-col'>1</td>
                <td className='content-col'></td>
                <td className='content-col'></td>
                <td className='content-col '></td>
                <td className='content-col '>1</td>
                <td className='content-col '></td>
                <td className='content-col total-content'>3</td>
              </tr>
              <tr>
                <td className='title-col'>Wed 31 Oct</td>
                <td className='content-col'></td>
                <td className='content-col'>3</td>
                <td className='content-col'>1</td>
                <td className='content-col'>1</td>
                <td className='content-col'>1</td>
                <td className='content-col '></td>
                <td className='content-col text-danger'>-1</td>
                <td className='content-col '></td>
                <td className='content-col total-content'>5</td>
              </tr>
              
            </tbody>
            <tfoot>
              <tr>
                <td ></td>
                <td className='total-col'>5</td>
                <td className='total-col'>19</td>
                <td className='total-col'>23</td>
                <td className='total-col'>12</td>
                <td className='total-col'>3</td>
                <td className='total-col '>0</td>
                <td className='total-col '>17</td>
                <td className='total-col '>7</td>
                <td className='total-col total-content'>86</td>
              </tr>
            </tfoot>
          </Table>
          
         
          </div>
         
          
      
      </React.Suspense>
      
    </>
  );
};

export default BOBMonthlyTable;
