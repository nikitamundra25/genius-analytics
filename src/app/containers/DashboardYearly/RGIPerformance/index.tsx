import React,{useEffect} from "react";
import { Card, Row, Col } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import WidgetHeader from "../../../components/WidgetHeader";
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
      id: "r1",
      color: "#244d7b",
      data:  data && data.length && data[0].data? data[0].data : [],
    },
    {
      id: "r2",
      color: "#3873b7",
      data: data && data.length && data[1].data? data[1].data : [],
    },
    {
      id: "r3",
      color: "#99c0eb",
      data: data && data.length && data[2].data? data[2].data : [],
    },
  ];

  return (
    <Card>
      <WidgetHeader title={"RGI Performance - YTD"}  activeToggle={"graph"}/>
      <Card.Body>
      {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
        <Row className="row-inner">
          {RGIBarChart.map((key: any, index: number) => {
            return (
              <Col key={index} sm={4} md={4}>
                <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
                  <ColumnChart
                    chartSettings={{
                      primaryXAxis: {
                        valueType: "Category",
                        interval: 1,
                        majorGridLines: { width: 0 },
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
                      title: key.title,
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
     </Card.Body>
    </Card>
  );
};
