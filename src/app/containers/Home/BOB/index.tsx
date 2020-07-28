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
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.BOBReducer
  );
  useEffect(() => {
    dispatch(requestBOBData());
    // eslint-disable-next-line
  }, []);
  console.log(isLoading, data, isError);
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
                  <td className='content-col'>43543</td>
                  <td className='content-col'>54345</td>
                  <td className='content-col'>43543</td>
                  <td className='content-col bg-2'>15</td>
                  <td className='content-col bg-2 text-danger'>-25</td>
                  <td className='content-col bg-2'>55</td>
                </tr>
                <tr>
                  <td className='title-col'>OCC</td>
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
                  <td className='content-col'>3454</td>
                  <td className='content-col'>43543</td>
                  <td className='content-col'>54345</td>
                  <td className='content-col'>43543</td>
                  <td className='content-col bg-2'>15</td>
                  <td className='content-col bg-2 text-danger'>-25</td>
                  <td className='content-col bg-2'>55</td>
                </tr>
                <tr>
                  <td className='title-col'>ADR</td>
                  <td className='content-col'>3454</td>
                  <td className='content-col'>43543</td>
                  <td className='content-col'>54345</td>
                  <td className='content-col'>43543</td>
                  <td className='content-col bg-2'>15</td>
                  <td className='content-col bg-2 text-danger'>-25</td>
                  <td className='content-col bg-2'>55</td>
                </tr>
                <tr>
                  <td className='title-col'>RevPar</td>
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
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default BOB;
