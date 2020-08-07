import React,{useEffect} from "react";
import { Card } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestQOCCADRData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";

const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);



const QuarterlyOCCADR = ({ id,graphdata = []  }: any) => {

  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.QOCCADRReducer
  );
  useEffect(() => {
    dispatch(requestQOCCADRData());
    // eslint-disable-next-line
  }, []);

  const [setHeight, setsetHeight] = React.useState<string>("250px");

 useEffect(() => {
    const modalbtn: HTMLElement | null = document.getElementById(`dy-quarterly-card`);
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
        `dy-quarterly-card`
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

  const Charts1 = [
    {
      dataSource: data,
      xName: "name",
      yName: "OCC",
      type: "Column",
      fill: "#3a71b4",
      name: "OCC %",
      yAxisName:'yAxis1',
      width: 1,
      cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
      marker: {
        dataLabel: {
          visible: true,
          position: "Bottom",
          template: labeltemplate,
          font: {
            fontWeight: "600",
            color: "#ffffff",
          },
        },
      },
    },
     
    {
      dataSource: data,
      xName: "name",
      yName: "ADR",
      type: "Spline",
      fill: "#bb423d",
      name: "ADR",
      width: 2,
      marker: {
        visible: true,
        width: 8,
        height: 8,
        fill: "#bb423d",
        border: { width: 0, color: "#bb423d" },
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
    {
      dataSource: data,
      xName: "name",
      yName: "RoomNights",
      type: "Spline",
      fill: "#01224e",
      name: "Room Nights",
      width: 2,
      marker: {
        visible: true,
        width: 8,
        height: 8,
        fill: "#01224e",
        border: { width: 0, color: "#01224e" },
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
  ];
  return (
    <>
      {" "}
      <Card id="dy-quarterly-card">
        <WidgetHeader title={"Quarterly OCC & ADR"} showToggle={false}  />
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
              id={id}
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
              charts={Charts1}
            />
            </React.Suspense>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default QuarterlyOCCADR;
