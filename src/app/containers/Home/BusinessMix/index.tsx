import React, { useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestBusinessMixData } from "../../../../actions";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { ErrorComponent } from "../../../components/Error";
import Loader from "../../../components/Loader/Loader";
const BarChartComponent = React.lazy(() =>
  import("../../../components/Charts/BarChart")
);

export default (props: any) => {
  // const {graphdata}= props;
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.BusinessMixReducer
  );
  useEffect(() => {
    dispatch(requestBusinessMixData());
    // eslint-disable-next-line
  }, []);
  const BarChartData = [
    {
      id: "business-card-percent",
      chartSettings: {
        primaryXAxis: {
          valueType: "Category",
          interval: 1,
          majorGridLines: { width: 0 },
        },
        primaryYAxis: {
          labelFormat: "{value}%",
          edgeLabelPlacement: "Shift",
          majorGridLines: { width: 0 },
          majorTickLines: { width: 0 },
          lineStyle: { width: 0 },
          labelStyle: {
            color: "transparent",
          },
          visible: false,
        },
        title: "Business Mix %",
        tooltip: { enable: false },
      },
      title: "Business Mix %",
      color: "#5b9cd6",
      data: data && data.length && data[0] ? data[0].data : [],
    },
    {
      id: "business-card-adr",
      chartSettings: {
        primaryXAxis: {
          valueType: "Category",
          interval: 1,
          majorGridLines: { width: 0 },
        },
        primaryYAxis: {
          labelFormat: "{value}%",
          edgeLabelPlacement: "Shift",
          majorGridLines: { width: 0 },
          majorTickLines: { width: 0 },
          lineStyle: { width: 0 },
          labelStyle: {
            color: "transparent",
          },
          visible: false,
        },
        title: "Business Mix ADR",
        tooltip: { enable: false },
      },
      title: "Business Mix ADR",
      color: "#4473c5",
      data: data && data.length && data[1] ? data[1].data : [],
    },
  ];

  return (
    <>
      <Card>
        <WidgetHeader title={"Business Mix"} activeToggle={"graph"} />
        <Card.Body>
          {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
            <Row className="row-inner">
              {BarChartData && BarChartData.length
                ? BarChartData.map((key: any, index: number) => {
                    return (
                      <Col xs={12} md={6} key={index}>
                         <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
                        <BarChartComponent
                          id={key.id}
                          chartSettings={key.chartSettings}
                          title={key.title}
                          color={key.color}
                          data={key.data}
                        />
                        </React.Suspense>
                      </Col>
                    );
                  })
                : null}
            </Row>
          )}
        </Card.Body>
      </Card>
    </>
  );
};
