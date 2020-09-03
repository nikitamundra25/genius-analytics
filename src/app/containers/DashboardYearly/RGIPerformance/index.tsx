import React,{useEffect} from "react";
import {  Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestRGIPerformanceData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
const ColumnChart = React.lazy(() =>
  import("../../../components/Charts/ColumnChart")
);

export default ({ graphdata = [] }: any) => {

  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.RGIPerformanceReducer
  );
  useEffect(() => {
    dispatch(requestRGIPerformanceData());
    // eslint-disable-next-line
  }, []);


  const RGIBarChart = [
    {
      id: "rgi-1",
      title: "OCC",
      color: "#244d7b",
      data:  data && data.length && data[0].data? data[0].data : [],
    },
    {
      id: "rgi-2",
      title: "ARR",
      color: "#3873b7",
      data: data && data.length && data[1].data? data[1].data : [],
    },
    {
      id: "rgi-3",
      title: "RevPAR",
      color: "#99c0eb",
      data: data && data.length && data[2].data? data[2].data : [],
    },
  ];

  return (
    <>
      {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
        <Row className="row-inner h-100">
          {RGIBarChart.map((key: any, index: number) => {
            return (
              <Col key={index} sm={4} md={4} className="h-100">
                <React.Suspense fallback={<div className="card-loader"><WidgetLoader /></div>}>
                  <ColumnChart
                    chartSettings={{
                      primaryXAxis: {
                        valueType: "Category",
                        interval: 1,
                        majorGridLines: { width: 0 },
                        labelStyle: {
                          fontStyle: 'bold',
                          size: '9px',
                          //color:'black'
                        },
                      },
                      primaryYAxis: {
                        labelFormat: "{value}",
                        edgeLabelPlacement: "Shift",
                        majorGridLines: { width: 0 },
                        majorTickLines: { width: 0 },
                        lineStyle: { width: 0 },
                        labelStyle: {
                          color: "transparent",
                        },
                        visible:false,
                      },
                      //title: key.title,
                      tooltip: { enable: true },
                      
                    }}
                    key={index}
                    {...key}
                  />
                </React.Suspense>
              </Col>
            );
          })}
        </Row>
          )}
    </>
  );
};
