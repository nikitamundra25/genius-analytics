import React, { useEffect } from "react";
import { Col, Card, Row, Table } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState, ToggleType } from "../../../../interfaces";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { ErrorComponent } from "../../../components/Error";
import { requestKeyBusinessMetricsData } from "../../../../actions";
import { getCurrentHeight } from "../../../../helper";
const BarChartComponent = React.lazy(() =>
  import("../../../components/Charts/BarChart")
);

const KeyBusinessMetrics = ({ graphdata = [] }: any) => {
  const [setHeight, setsetHeight] = React.useState<string>("250px");
  const [activeToggle, setactiveToggle] = React.useState<ToggleType>("graph");

  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.KeyBusinessMetricsReducer
  );
  useEffect(() => {
    dispatch(requestKeyBusinessMetricsData());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // const modalbtn: HTMLElement | null = document.getElementById(`language_dropmodal-${index}`);
    const modalbtn: HTMLElement | null = document.getElementById(`card-height`);
    if (modalbtn) {
      setTimeout(() => {
        const check = modalbtn.getBoundingClientRect();
        const getHeight = check.height;
        const setgraphHeight = getHeight - 75;
        console.log(
          "hello chart height on resize",
          check,
          getHeight,
          setgraphHeight
        );
        setsetHeight(`${setgraphHeight}px`);
      }, 100);
    }
    // eslint-disable-next-line
  }, [data]);

  useEffect(() => {
    const resizeListener = () => {
      // const height =  getCurrentHeight(`col-width0`)
      // console.log("height++++++++++++",height);

      // // change width from the state object
      const modalbtn: HTMLElement | null = document.getElementById(
        `card-height`
      );
      console.log("modalbtn", modalbtn);

      if (modalbtn) {
        setTimeout(() => {
          const check = modalbtn.getBoundingClientRect();
          const getHeight = check.height;
          const setgraphHeight = getHeight - 75;
          console.log(
            "hello chart height on resize",
            check,
            getHeight,
            setgraphHeight
          );
          setsetHeight(`${setgraphHeight}px`);
        }, 100);
      }
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
    // eslint-disable-next-line
  }, []);

  const barChartBusinessMetrics = [
    {
      id: "1",
      title: "OCC",
      color: "url(#occ-chart)",
      labelformat: "{value}%",
      data: data && data.graph && data.graph.length ? data.graph[0].OCC : [],
      height: setHeight,
    },
    {
      id: "2",
      title: "ADR",
      color: "url(#adr-chart)",
      // color: "#5398d9",
      labelformat: "n2",
      data: data && data.graph && data.graph.length ? data.graph[1].ADR : [],
      height: setHeight,
    },
    {
      id: "3",
      title: "Revenue",
      color: "url(#revnue-chart)",
      // color: "#1f4e79",
      labelformat: "c2",
      data: data && data.graph && data.graph.length ? data.graph[2].Revpar : [],
      height: setHeight,
    },
    {
      id: "4",
      title: "Revpar",
      color: "url(#revpar-chart)",
      // color: "#9dc3e7",
      labelformat: "c2",
      data:
        data && data.graph && data.graph.length ? data.graph[3].Revenue : [],
      height: setHeight,
    },
  ];

  const SAMPLE_CSS = `
    #occ-chart stop {
		stop-color: #2e75b7;
	}
	#occ-chart stop[offset="0"] {
		stop-opacity: 1;
	}
	#occ-chart stop[offset="1"] {
		stop-opacity: 1;
  }

  #adr-chart stop {
		stop-color: #5398d9;
	}
	#adr-chart stop[offset="0"] {
		stop-opacity: 1;
	}
	#adr-chart stop[offset="1"] {
    stop-opacity: 1;
  }

  #revnue-chart stop {
		stop-color: #1f4e79;
	}
	#revnue-chart stop[offset="0"] {
		stop-opacity: 1;
	}
	#revnue-chart stop[offset="1"] {
		stop-opacity: 1;
  }

  #revpar-chart stop {
		stop-color: #6197ca;
	}
	#revpar-chart stop[offset="0"] {
		stop-opacity: 1;
	}
	#revpar-chart stop[offset="1"] {
		stop-opacity: 1;
  }
  
  `;

  const handleWidgetView = (str: ToggleType) => {
    setactiveToggle(str);
  };

  return (
    <>
      <style>{SAMPLE_CSS}</style>
      <Card id={`card-height`}>
        <WidgetHeader
          title={"Key Business Metrics"}
          activeToggle={activeToggle}
          onToggle={(str: ToggleType) => handleWidgetView(str)}
        />
        <Card.Body>
          {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
            <>
              <Row className="row-inner">
                {barChartBusinessMetrics && barChartBusinessMetrics.length ? (
                  activeToggle === "graph" ? (
                    barChartBusinessMetrics.map((key: any, index: number) => {
                      return (
                        <Col key={index} sm={3} md={3} id={`col-width${index}`}>
                          <React.Suspense
                            fallback={
                              <div className="card-loader">
                                {" "}
                                <WidgetLoader />
                              </div>
                            }
                          >
                            <BarChartComponent
                              chartSettings={{
                                primaryXAxis: {
                                  valueType: "Category",
                                  interval: 1,
                                  majorGridLines: { width: 0 },
                                },
                                primaryYAxis: {
                                  labelFormat: key.labelformat,
                                  edgeLabelPlacement: "Shift",
                                  majorGridLines: { width: 0 },
                                  majorTickLines: { width: 0 },
                                  lineStyle: { width: 0 },
                                  labelStyle: {
                                    color: "transparent",
                                  },
                                  visible: false,
                                },
                                title: key.title,
                                tooltip: { enable: false, position: "Top" },
                                height: setHeight,
                              }}
                              {...key}
                            />
                          </React.Suspense>
                        </Col>
                      );
                    })
                  ) : (
                    <div className="business-table-section">
                      <Table responsive className="business-table mb-0">
                        <thead>
                          <tr>
                            <th></th>
                            <th className="head-col">OCC</th>
                            <th className="head-col">ADR</th>
                            <th className="head-col">RevPAR</th>
                            <th className="head-col">Revenue</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data && data.grid && data.grid.length
                            ? data.grid.map((list: any, index: number) => {
                                return (
                                  <tr key={index}>
                                    <td className="title-col">{list.title} </td>
                                    <td className="content-col">
                                      {`${list.OCC}%`}{" "}
                                    </td>
                                    <td className="content-col">{`${list.ADR}%`}</td>
                                    <td className="content-col">
                                      &pound;{`${list.revpar}`}{" "}
                                    </td>
                                    <td className="content-col">
                                      &pound;{`${list.revenue}`}
                                    </td>
                                  </tr>
                                );
                              })
                            : null}
                        </tbody>
                      </Table>
                    </div>
                  )
                ) : null}
              </Row>
            </>
          )}
        </Card.Body>
      </Card>
      <svg style={{ height: "0" }}>
        <defs>
          <linearGradient id="occ-chart" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>

      <svg style={{ height: "0" }}>
        <defs>
          <linearGradient id="adr-chart" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>

      <svg style={{ height: "0" }}>
        <defs>
          <linearGradient id="revnue-chart" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>

      <svg style={{ height: "0" }}>
        <defs>
          <linearGradient id="revpar-chart" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default KeyBusinessMetrics;
