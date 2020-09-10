import React, {useEffect}  from "react";
import {  Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { ErrorComponent } from "../../../components/Error";
import { requestRoomNightsData,requestRoomNightsPastData,requestRoomNightsFutureData } from "../../../../actions";
import caretup from "../../../../assets/img/caret-up.svg";
import caretdown from "../../../../assets/img/caret-down.svg"
import { checkDateFormat } from "../../../../config";

import moment from "moment";

const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);


const PickupSinceYesterday = ({date }:Date|any) => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.RoomNightsReducer
  );
  // useEffect(() => {
  //   dispatch(requestRoomNightsData());
  //   // eslint-disable-next-line
  // }, []);
  useEffect(() => {

    let selectedDate = moment(date).format(checkDateFormat);
    // const selectedDate: any = new Date(date);
    let currentDate = moment(new Date()).format(checkDateFormat);
    
    if (selectedDate > currentDate) {
      dispatch(requestRoomNightsFutureData());
    } else if (selectedDate < currentDate) {
      dispatch(requestRoomNightsPastData());
    } else if (selectedDate === currentDate) {
      dispatch(requestRoomNightsData());
    }

    // eslint-disable-next-line
  }, [date]);

  

  const BarChartReferenceLine = [
    {
      id: "1",
      title: "Room Nights",
      range: data && data.range ? data.range.roomNights : 0 ,
      arrowClass: caretup,
      textClass: "text-green",
      charts: {
        dataSource:data && data.graph && data.graph.length && data.graph[0] ? data.graph[0].data : [],
        xName: "x",
        yName: "y",
        type: "Column",
        fill: "url(#pickup-chart)",
        //fill: "#f07623",
        name: "Room Nights",
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
      range: data && data.range ? data.range.ADR : 0 ,
      arrowClass: caretdown,
      textClass: "text-red",
      charts: {
        dataSource: data && data.graph && data.graph.length && data.graph[1] ? data.graph[1].data : [],
        xName: "x",
        yName: "y",
        type: "Column",
        fill: "url(#pickup-chart)",
        //fill: "#f07623",
        name: "ADR",
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
      range: data && data.range ? data.range.revenue : 0 ,
      arrowClass: caretup,
      textClass: "text-green",
      charts: {
        dataSource: data && data.graph && data.graph.length && data.graph[2] ? data.graph[2].data : [],
        xName: "x",
        yName: "y",
        type: "Column",
        fill: "url(#pickup-chart)",
        //fill: "#f07623",
        name: "Revenue",
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
   
      {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
        <Row className='row-inner h-100'>
          {BarChartReferenceLine && BarChartReferenceLine.length ? 
          BarChartReferenceLine.map((key: any, index: number) => {
            return (
              <Col xs={12} md={4} key={index} className="h-100" >
               
                  <div  className="text-left range-text" style={{  "position": "absolute", "left": "25px", "top": "0px", "width": "100%"}} >
                    <div className="sub-inner-title">{key.title}</div>
                    {key.range ? (
                      <div className={`${key.textClass} h3  pt-2 mb-0`}>
                         <img src={key.arrowClass} alt="success" width="20" className="mr-2"/>
                        {key.range}
                      </div>
                    ) : null}
                  </div>
                  <div className="h-100 d-flex" style={{ "paddingTop": "62px" }} >
                  <React.Suspense fallback={<div className="card-loader"><WidgetLoader /></div>}>
                    <MixedCharts
                        id={`pickup-${index}`}
                        charts={[key.charts]}
                       legend = {false}
                        chartSettings={{
                        
                          chartArea:{ border: { width: 0 } },
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
                         
                          tooltip: { enable: true },
                      
                          height: "100%"
                        }}
                      />
                   
                  </React.Suspense>
                  </div>
               
              </Col>
            );
          }):null}
        </Row>
          )}
    
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
