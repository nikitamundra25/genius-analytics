import React, {useEffect} from "react";
import { useLocation } from 'react-router';
import { Col, Card, Row } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { ErrorComponent } from "../../../components/Error";
import { requestKeyBusinessMetricsData } from "../../../../actions";
import Loader from "../../../components/Loader/Loader";
const BarChartComponent = React.lazy(() =>
  import("../../../components/Charts/BarChart")
);


const KeyBusinessMetrics = ({ graphdata = [] }:any) => {

  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.KeyBusinessMetricsReducer
  );
  useEffect(() => {
    dispatch(requestKeyBusinessMetricsData());
    // eslint-disable-next-line
  }, []);

 
 

  const barChartBusinessMetrics = [
    {
      id: "1",
      title: "OCC",
      color: "url(#occ-chart)",
      labelformat:"{value}%",
      data: data && data.length ? data : [],
    },
    {
      id: "2",
      title: "ADR",
      color: "url(#adr-chart)",
      // color: "#5398d9",
      labelformat:"n2",
      data: data && data.length ? data : [],
    },
    {
      id: "3",
      title: "Revenue",
      color: "url(#revnue-chart)",
      // color: "#1f4e79",
      labelformat:"c2",
      data: data && data.length ? data : [],
    },
    {
      id: "4",
      title: "Revpar",
      color: "url(#revpar-chart)",
      // color: "#9dc3e7",
      labelformat:"c2",
      data: data && data.length ? data : [],
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

 
  const location = useLocation();
  useEffect(() => {
   // const modalbtn: HTMLElement | null = document.getElementById(`language_dropmodal-${index}`);
    const modalbtn: HTMLElement | null = document.getElementById(`col-width0`);
    if (modalbtn) {
      const check = modalbtn.getBoundingClientRect();
      console.log("hello chart width");
      console.log("hello header", check);
      modalbtn.style.color = "red";
    }
 
     
  }, [location]);

  return (
    <>
     <style>
          {SAMPLE_CSS}
      </style>
    <Card>
      <WidgetHeader title={"Key Business Metrics"} activeToggle={"graph"} />
      <Card.Body>
      {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
             
      <Row className='row-inner' >
        {barChartBusinessMetrics && barChartBusinessMetrics.length ? 
        barChartBusinessMetrics.map((key: any, index: number) => {
          return (
            <Col key={index} sm={3} md={3} id={`col-width${index}`}>
              <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
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
                      visible:false,
                    },
                    title: key.title,
                    tooltip: { enable: false,  position: 'Top' },
                   
                  }}
                  {...key}
                />
              
              </React.Suspense>
            </Col>
          );
        }): null}
      </Row>
        )}
     </Card.Body>
    </Card>
     <svg style={{ height: '0' }}>
        <defs>
            <linearGradient id="occ-chart" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" />
                <stop offset="1" />
            </linearGradient>
        </defs>
    </svg>

    <svg style={{ height: '0' }}>
        <defs>
            <linearGradient id="adr-chart" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" />
                <stop offset="1" />
            </linearGradient>
        </defs>
    </svg>

    <svg style={{ height: '0' }}>
        <defs>
            <linearGradient id="revnue-chart" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" />
                <stop offset="1" />
            </linearGradient>
        </defs>
    </svg>

    <svg style={{ height: '0' }}>
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
