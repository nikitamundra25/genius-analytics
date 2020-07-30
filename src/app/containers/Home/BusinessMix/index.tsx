import React, { useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestBusinessMixData } from "../../../../actions";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { ErrorComponent } from "../../../components/Error";
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
      //color: "#5b9cd6",
      color: "url(#mix-chart)",
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
      color: "url(#mixadr-chart)",
     // color: "#4473c5",
      data: data && data.length && data[1] ? data[1].data : [],
    },
  ];

  
  const SAMPLE_CSS = `
      #mix-chart stop {
      stop-color: #5b9cd6;
    }
    #mix-chart stop[offset="0"] {
      stop-opacity: 1;
    }
    #mix-chart stop[offset="1"] {
      stop-opacity: 1;
    }

    #mixadr-chart stop {
      stop-color: #4473c5;
    }
    #mixadr-chart stop[offset="0"] {
      stop-opacity: 1;
    }
    #mixadr-chart stop[offset="1"] {
      stop-opacity: 1;
    }

    `;

  return (
    <>
    <style>
          {SAMPLE_CSS}
      </style>
      <Card>
        <WidgetHeader title={"Business Mix"} activeToggle={"graph"} showToggle={false}  />
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
                         <React.Suspense fallback={<div className="card-loader"><WidgetLoader /></div>}>
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
      <svg style={{ height: '0' }}>
        <defs>
            <linearGradient id="mix-chart" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" />
                <stop offset="1" />
            </linearGradient>
        </defs>
    </svg>

    <svg style={{ height: '0' }}>
        <defs>
            <linearGradient id="mixadr-chart" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" />
                <stop offset="1" />
            </linearGradient>
        </defs>
    </svg>
    </>
  );
};
