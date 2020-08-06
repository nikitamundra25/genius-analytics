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
        <WidgetHeader title={"Business on the Books"} activeToggle={"grid"} showToggle={false} />
      
          {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
            <div className="business-table-section">

            
            <Table responsive className='business-table mb-0'>
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
                  <th className='head-col'>2016</th>
                  <th className='head-col'>STLY</th>
                  <th className='head-col'>Vs.BUD</th>
                  <th className='head-col'>Vs.LY</th>
                  <th className='head-col'>Vs.STLY</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='title-col'>Room Nights</td>
                  <td className='content-col'>8124</td>
                  <td className='content-col'>8,845</td>
                  <td className='content-col'>7,943</td>
                  <td className='content-col'>6,943</td>
                  <td className='content-col bg-2 text-danger'>-721</td>
                  <td className='content-col bg-2 '>181</td>
                  <td className='content-col bg-2'>1,181</td>
                </tr>
                <tr>
                  <td className='title-col'>OCC</td>
                  <td className='content-col'>75.7%</td>
                  <td className='content-col'>71.5%</td>
                  <td className='content-col'>64.2%</td>
                  <td className='content-col'>56.1%</td>
                  <td className='content-col bg-2 text-danger'>-6%</td>
                  <td className='content-col bg-2 text-danger'>1.5%</td>
                  <td className='content-col bg-2'>9.5%</td>
                </tr>
                <tr>
                  <td className='title-col'>Revenue</td>
                  <td className='content-col'>&pound;14,80,599</td>
                  <td className='content-col'>&pound;17,18,849</td>
                  <td className='content-col'>&pound;15,18,702</td>
                  <td className='content-col'>&pound;12,49,740</td>
                  <td className='content-col bg-2'>&pound;75,965</td>
                  <td className='content-col bg-2 text-danger'>-&pound;38,103</td>
                  <td className='content-col bg-2'>&pound;2,30,859</td>
                </tr>
                <tr>
                  <td className='title-col'>ARR</td>
                  <td className='content-col'>&pound;182.3</td>
                  <td className='content-col'>&pound;194.3</td>
                  <td className='content-col'>&pound;191.2</td>
                  <td className='content-col'>&pound;180.0</td>
                  <td className='content-col bg-2 text-danger'>-12</td>
                  <td className='content-col bg-2 text-danger'>-&pound;8.9</td>
                  <td className='content-col bg-2'>&pound;2.3</td>
                </tr>
                <tr>
                  <td className='title-col'>RevPar</td>
                  <td className='content-col'>&pound;119.7</td>
                  <td className='content-col'>&pound;139.0</td>
                  <td className='content-col'>&pound;122.8</td>
                  <td className='content-col'>&pound;101.04</td>
                  <td className='content-col bg-2 text-danger'>-19</td>
                  <td className='content-col bg-2 text-danger'>-&pound;3.1</td>
                  <td className='content-col bg-2'>&pound;18.7</td>
                </tr>
              </tbody>
            </Table>
            </div>
           )}  
        
      </Card>
    </>
  );
};

export default BOB;
