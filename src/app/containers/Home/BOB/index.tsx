import React, { useEffect } from "react";
import { Card, Table } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestBOBData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";

const BOB = () => {
  const dispatch = useDispatch();
  const { isLoading, /* data */ isError } = useSelector(
    (state: IRootState) => state.BOBReducer
  );
  useEffect(() => {
    dispatch(requestBOBData());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Card>
        <WidgetHeader title={"Business on the Books"} activeToggle={"grid"} />
        <Card.Body>
          {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
            <Table responsive className='business-table'>
              <thead>
                <tr className='business-top-row'>
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
                  <td className='title-col'>Room Nights</td>
                  <td className='content-col'>3454</td>
                  <td className='content-col'>4836</td>
                  <td className='content-col'>4347</td>
                  <td className='content-col'>5120</td>
                  <td className='content-col bg-2'>15</td>
                  <td className='content-col bg-2 text-danger'>-25</td>
                  <td className='content-col bg-2'>55</td>
                </tr>
                <tr>
                  <td className='title-col'>OCC</td>
                  <td className='content-col'>76.01%</td>
                  <td className='content-col'>67.8%</td>
                  <td className='content-col'>61.0%</td>
                  <td className='content-col'>71.0%</td>
                  <td className='content-col bg-2 text-danger'>-0.8%</td>
                  <td className='content-col bg-2 text-danger'>-0.8%</td>
                  <td className='content-col bg-2'>5.1%</td>
                </tr>
                <tr>
                  <td className='title-col'>Revenue</td>
                  <td className='content-col'>$970,365</td>
                  <td className='content-col'>$845,365</td>
                  <td className='content-col'>$733,395</td>
                  <td className='content-col'>$852,333</td>
                  <td className='content-col bg-2'>$75,965</td>
                  <td className='content-col bg-2 '>$15,965</td>
                  <td className='content-col bg-2'>$118,032</td>
                </tr>
                <tr>
                  <td className='title-col'>ADR</td>
                  <td className='content-col'>$178.9</td>
                  <td className='content-col'>$174.9</td>
                  <td className='content-col'>$168.7</td>
                  <td className='content-col'>$166.5</td>
                  <td className='content-col bg-2'>$14.9</td>
                  <td className='content-col bg-2 '>$14.9</td>
                  <td className='content-col bg-2'>$11.2</td>
                </tr>
                <tr>
                  <td className='title-col'>RevPar</td>
                  <td className='content-col'>$136.1</td>
                  <td className='content-col'>$118.9</td>
                  <td className='content-col'>$102.9</td>
                  <td className='content-col'>$118.9</td>
                  <td className='content-col bg-2'>$8.6</td>
                  <td className='content-col bg-2 '>$3.6</td>
                  <td className='content-col bg-2'>$17.9</td>
                </tr>
              </tbody>
            </Table>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default BOB;
