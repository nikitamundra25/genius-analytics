import React, { useEffect } from "react";
import { Col, Row, Table } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState, ToggleType } from "../../../../interfaces";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { ErrorComponent } from "../../../components/Error";
import { requestKeyBusinessMetricsData, requestKeyBusinessMetricsFutureData, requestKeyBusinessMetricsPastData } from "../../../../actions";
import moment from "moment";
import { checkDateFormat } from "../../../../config";

const BarChartComponent = React.lazy(() =>
  import("../../../components/Charts/BarChart")
);

const KeyBusinessMetrics = ({ date }: Date|any) => {
  const [activeToggle, setactiveToggle] = React.useState<ToggleType>("graph");

  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.KeyBusinessMetricsReducer
  );


  // useEffect(() => {
  //   dispatch(requestKeyBusinessMetricsData());
  //   // eslint-disable-next-line
  // }, []);

  useEffect(() => {

    let selectedDate = moment(date).format(checkDateFormat);
    // const selectedDate: any = new Date(date);
    let currentDate = moment(new Date()).format(checkDateFormat);
    if (selectedDate > currentDate) {
      dispatch(requestKeyBusinessMetricsFutureData());
    } else if (selectedDate < currentDate) {
      dispatch(requestKeyBusinessMetricsPastData());
    } else if (selectedDate === currentDate) {
      dispatch(requestKeyBusinessMetricsData());
    }

    // eslint-disable-next-line
  }, [date]);


  const barChartBusinessMetrics = [
    {
      id: "1",
      title: "OCC",
      color: "#2e75b7",
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
        title: "OCC",
        tooltip: { enable: true,  position: "Top" },
         height: "100%",
      },
      data: data&&  data.graph && data.graph.length ? data.graph[0].OCC : [],
     
    },
    {
      id: "2",
      title: "ADR",
      color: "#5398d9",
      chartSettings: { 
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
          visible: false,
        },
        title: "ADR",
        tooltip: { enable: true,  position: "Top" },
        height: "100%",
      },
      data: data &&  data.graph && data.graph.length ? data.graph[1].ADR : [],
      
    },
    {
      id: "3",
      title: "RevPAR",
      color: "#1f4e79",
      chartSettings: { 
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
          visible: false,
        },
        title: "RevPAR",
        tooltip: { enable: true,  position: "Top" },
        height: "100%",
        
      },
      data: data &&  data.graph && data.graph.length ? data.graph[2].Revpar : [],
      
    },
    {
      id: "4",
      title: "Revenue",
      color: "#6197ca",
      // color: "#9dc3e7",
      chartSettings: { 
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
          visible: false,
        },
        title: "Revenue",
        tooltip: { enable: true,  position: "Top" },
        height: "100%",
      },
      data: data &&  data.graph && data.graph.length ? data.graph[3].Revenue : [],
      
    },
  ];

 

  const handleWidgetView = (str: ToggleType) => {
    setactiveToggle(str);
  };

  
  return (
    <>
     
      <div style={{  "position": "absolute", "left": "0px", "top": "0px", "width": "100%"}} >
        <WidgetHeader
          title={"Key Business Metrics"}
          activeToggle={activeToggle}
          onToggle={(str: ToggleType) => handleWidgetView(str)}
        />
          </div>
        {activeToggle === "graph" ? (
        
            <>
        {isLoading ? (
              <WidgetLoader />
            ) : isError ? (
              <ErrorComponent
                message={"An error occured while fetching details "}
              />
            ) : (
              <>
                <Row className="row-inner h-100" style={{ "paddingTop": "62px" }}>
                  {barChartBusinessMetrics && barChartBusinessMetrics.length ? (
                   
                      barChartBusinessMetrics.map((key: any, index: number) => {
                        return (
                          <Col key={index} sm={3} md={3} id={`col-width${index}`} className= "h-100">
                            <React.Suspense
                              fallback={
                                <div className="card-loader">
                                  {" "}
                                  <WidgetLoader />
                                </div>
                              }
                            >
                              <BarChartComponent
                                chartSettings={key.chartSettings}
                                title={key.title}
                                {...key}
                              />
                            </React.Suspense>
                          </Col>
                        );
                      })
                  ) : null}
                </Row>
              </>
            )}
            </>
         
        ) : (
          <div className="business-table-section"  style={{ "paddingTop": "62px" }}>
            <Table responsive className="business-table mt-3 mb-0">
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
              {data && data.grid ? 
              data.grid.map((list:any,index:number)=>{
                return <tr key={index} >
                <td className="title-col">{list.title} </td>
                <td className="content-col">{list.OCC ? `${list.OCC}%` : "-" }</td>
                <td className="content-col">{list.ADR ? parseFloat(list.ADR).toLocaleString() : "-"} </td>
                <td className="content-col">{list.revpar ? parseFloat(list.revpar).toLocaleString() : "-"} </td>
                <td className="content-col">{list.revenue ? parseFloat(list.revenue).toLocaleString() : "-"} </td>
              </tr>
              })
                : null}
              </tbody>
            </Table>
          </div>
        ) 
        }
        
     
      
    </>
  );
};

export default KeyBusinessMetrics;
