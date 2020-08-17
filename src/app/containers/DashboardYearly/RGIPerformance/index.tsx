import React,{useEffect} from "react";
import { Card, Row, Col } from "react-bootstrap";
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

  const [setHeight, setsetHeight] = React.useState<string>("250px");

 useEffect(() => {
    const modalbtn: HTMLElement | null = document.getElementById(`dy-rgi-card`);
    if (modalbtn) {
      setTimeout(() => {
        const check = modalbtn.getBoundingClientRect();
        const getHeight =check.height;
        const setgraphHeight = getHeight - 75 ;
        //console.log("hello chart height on resize",check, getHeight, setgraphHeight);
        setsetHeight(`${setgraphHeight}px`)
      }, 100);
      
    }
    // eslint-disable-next-line
  }, [data]);

  useEffect(() => {

    const resizeListener = () => {

      // // change width from the state object
      const modalbtn: HTMLElement | null = document.getElementById(
        `dy-rgi-card`
      );
     // console.log("modalbtn", modalbtn);

      if (modalbtn) {
        setTimeout(() => {
          const check = modalbtn.getBoundingClientRect();
          const getHeight =check.height;
          const setgraphHeight = getHeight - 75 ;
          //console.log("hello chart height on resize",check, getHeight, setgraphHeight);
          setsetHeight(`${setgraphHeight}px`)
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

   


  const RGIBarChart = [
    {
      id: "rgi-1",
      color: "#244d7b",
      data:  data && data.length && data[0].data? data[0].data : [],
    },
    {
      id: "rgi-2",
      color: "#3873b7",
      data: data && data.length && data[1].data? data[1].data : [],
    },
    {
      id: "rgi-3",
      color: "#99c0eb",
      data: data && data.length && data[2].data? data[2].data : [],
    },
  ];

  return (
    <Card id="dy-rgi-card">
      <WidgetHeader title={"RGI Performance - YTD"}  activeToggle={"graph"}  showToggle={false}/>
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
                <React.Suspense fallback={<div className="card-loader"><WidgetLoader /></div>}>
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
                      height: setHeight,
                      
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
