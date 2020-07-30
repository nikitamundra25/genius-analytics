import React, {useEffect}  from "react";
import { Card, Row, Col } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { ErrorComponent } from "../../../components/Error";
import { requestRoomNightsData } from "../../../../actions";
import caretup from "../../../../assets/img/caret-up.svg";
import caretdown from "../../../../assets/img/caret-down.svg"

const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);


const PickupSinceYesterday = () => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.RoomNightsReducer
  );
  useEffect(() => {
    dispatch(requestRoomNightsData());
    // eslint-disable-next-line
  }, []);


  const BarChartReferenceLine = [
    {
      id: "1",
      title: "Room Nights",
      range: "198",
      arrowClass: caretup,
      textClass: "text-green",
      charts: {
        dataSource:data && data.length && data[0] ? data[0].data : [],
        xName: "x",
        yName: "y",
        type: "Column",
        fill: "url(#pickup-chart)",
        //fill: "#f07623",
        name: "RGI",
        width: 1,
        cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 7, topRight: 7 },
        marker: {
          dataLabel: {
            visible: true,
            rx: 10,
            ry: 10,
            font: {
              fontWeight: "600",
              color: "#000",
            },
          },
        },
      },
    },
    {
      id: "2",
      title: "ADR",
      range: "2.6",
      arrowClass: caretdown,
      textClass: "text-red",
      charts: {
        dataSource: data && data.length && data[1] ? data[1].data : [],
        xName: "x",
        yName: "y",
        type: "Column",
        fill: "url(#pickup-chart)",
        //fill: "#f07623",
        name: "MPI",
        width: 1,
        cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 7, topRight: 7 },
        marker: {
          dataLabel: {
            visible: true,
            rx: 10,
            ry: 10,
            font: {
              fontWeight: "600",
              color: "#000",
            },
          },
        },
      },
    },
    {
      id: "3",
      title: "Revenue",
      range: "19.4 k",
      arrowClass: caretup,
      textClass: "text-green",
      charts: {
        dataSource: data && data.length && data[2] ? data[2].data : [],
        xName: "x",
        yName: "y",
        type: "Column",
        fill: "url(#pickup-chart)",
        //fill: "#f07623",
        name: "ARI",
        width: 1,
        cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 7, topRight: 7 },
        marker: {
          dataLabel: {
            visible: true,
            rx: 10,
            ry: 10,
            font: {
              fontWeight: "600",
              color: "#000",
            },
          },
        },
      },
    },
  ];

  const SAMPLE_CSS = `
  #pickup-chart stop {
  stop-color: #f07623;
}
#pickup-chart stop[offset="0"] {
  stop-opacity: 1;
}
#pickup-chart stop[offset="1"] {
  stop-opacity: 1;
}

`;

  return (
    <>
    <style>
          {SAMPLE_CSS}
      </style>
    <Card>
      <WidgetHeader title={"Pick up Since Yesterday"} activeToggle={"graph"} showToggle={false} />

      <Card.Body>
      {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
        <Row className='row-inner'>
          {BarChartReferenceLine && BarChartReferenceLine.length ? 
          BarChartReferenceLine.map((key: any, index: number) => {
            return (
              <Col xs={12} md={4} key={index}>
                <div className="pickup-card">
                  <div  className="text-left range-text">
                    <div className="sub-inner-title">{key.title}</div>
                    {key.range ? (
                      <div className={`${key.textClass} h3  pt-2 mb-0`}>
                         <img src={key.arrowClass} alt="success" width="20" className="mr-2"/>
                        {/* <i className={`${key.arrowClass}`}></i>  */}
                        {key.range}
                      </div>
                    ) : null}
                  </div>
 
                  <React.Suspense fallback={<div className="card-loader"><WidgetLoader /></div>}>
                    <MixedCharts
                        id={`pickup-${index}`}
                        charts={[key.charts]}
                        legend = {false}
                        chartSettings={{
                          width: "100%",
                          height: "200px",
                          
                          chartArea:{ border: { width: 0 } },
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
                            visible:false,
                          },
                         
                          tooltip: { enable: true },
                          //title: key.title,
                        }}
                      />
                    {/* <ColumnChart
                      {...key}
                      chartSettings={{
                        primaryXAxis: {
                          valueType: "Category",
                          interval: 1,
                          majorGridLines: { width: 0 },
                        },
                        primaryYAxis: {
                          majorGridLines: { width: 0 },
                          majorTickLines: { width: 0 },
                          lineStyle: { width: 0 },
                          labelStyle: { color: "transparent" },
                        },
                        tooltip: { enable: true },
                        marker: {
                          dataLabel: {
                            visible: true,
                            position:"Middle",
                            // rx: 10,
                            // ry: 10,
                            font: {
                              fontWeight: "600",
                              color: "#000",
                            },
                          },
                        },
                        //title: key.title,
                      }}
                    /> */}
                  </React.Suspense>
                </div>
              </Col>
            );
          }):null}
        </Row>
          )}
     </Card.Body>
    </Card>
    <svg style={{ height: '0' }}>
    <defs>
        <linearGradient id="pickup-chart" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" />
            <stop offset="1" />
        </linearGradient>
    </defs>
</svg>


    </>
  );
};

export default PickupSinceYesterday;
