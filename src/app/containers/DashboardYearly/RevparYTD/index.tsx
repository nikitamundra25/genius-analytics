import React,{useEffect} from "react";
import { Card } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestRevPARYTDData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);

const RevparYTD = ({ graphdata = [] }: any) => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.RevPARYTDReducer
  );
  useEffect(() => {
    dispatch(requestRevPARYTDData());
    // eslint-disable-next-line
  }, []);

  const [setHeight, setsetHeight] = React.useState<string>("250px");

 useEffect(() => {
    const modalbtn: HTMLElement | null = document.getElementById(`revpar-card`);
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
        `revpar-card`
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

  


  const labeltemplate = (args:any) => {
    return (<div  style={{fontSize: '11px'}}>
      <span>{args.point.y}%</span>
    </div>);
};
  const Charts = [
    {
      dataSource: data,
      xName: "name",
      yName: "OCC",
      type: "SplineArea",
     // fill: "url(#gradient-chart)",
      name: "OCC %",
      opacity:0.7,
      width:2,
      fill:"rgb(239, 183, 202)",
      
      yAxisName:'yAxis1',
      //dashArray: '5,5',
      // border:{
      //   color: 'rgb(0, 189, 174)',
      //    //color: '#78a3c7', 
      //    width: 2 ,
      // },
      //opacity: '0.6',
      marker: {
        dataLabel: {
          visible: true,
          position: "Top",
          template: labeltemplate,
          font: {
            fontWeight: "600",
            color: "#000000",
          },
        },
      },
    },
   
    {
      dataSource: data,
      xName: "name",
      yName: "RevPAR",
      type: "SplineArea",
      //fill: "#76923c",
      name: "RevPAR",
      width: 2,
      opacity:0.5,
      fill:"rgb(0, 43, 101)",
      marker: {
        visible: false,
        width: 8,
        height: 8,
        fill:"rgb(0, 43, 101)",
        border: { width: 0, color: "rgb(0, 43, 101)" },
        dataLabel: {
          visible: true,
          position: "Bottom",
          font: {
            fontWeight: "600",
            color: "#000000",
          },
        },
      },
    },
    {
      dataSource: data,
      xName: "name",
      yName: "NrevPAR",
      type: "SplineArea",
     // fill: "#bf0b0b",
      name: "NrevPAR",
      width: 2,
      opacity:0.4,
      fill:"rgb(0, 189, 174)",
      marker: {
        visible: false,
        width: 8,
        height: 8,
        fill: "rgb(0, 189, 174)",
        border: { width: 0, color: "rgb(0, 189, 174)" },
        dataLabel: {
          visible: true,
          position: "Top",
          font: {
            fontWeight: "600",
            color: "#000000",
          
          },
        },
      },
    },
  ];

  const SAMPLE_CSS = `
  #gradient-chart stop {
  stop-color: #c4e6ef;
}
#gradient-chart stop[offset="0"] {
  stop-opacity: 0.75;
}
#gradient-chart stop[offset="1"] {
  stop-opacity: 0.2;
}`;

  return (
    <>
     <style>
          {SAMPLE_CSS}
      </style>
      <Card id="revpar-card">
        <WidgetHeader title={"RevPAR Vs. NrevPAR - YTD"} activeToggle={"graph"}  showToggle={false} />
        <Card.Body>
        {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
            <React.Suspense
              fallback={
                <div className="card-loader">
                  <WidgetLoader />
                </div>
              }
            >
            <MixedCharts
              id={"RevPAR"}
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
                tooltip: { enable: true },
                height: setHeight,
              }}
              charts={Charts}
            />
            </React.Suspense>
          )}
        </Card.Body>
      </Card>
      <svg style={{ height: '0' }}>
                    <defs>
                        <linearGradient id="gradient-chart" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0"/>
                            <stop offset="1"/>
                        </linearGradient>
                    </defs>
                </svg>
    </>
  );
};

export default RevparYTD;
