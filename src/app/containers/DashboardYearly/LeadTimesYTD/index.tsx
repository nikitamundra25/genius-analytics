import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestKeyLeadTimesYTDData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
const PieChartComponent = React.lazy(() =>
  import("../../../components/Charts/PieChart")
);

export default ({ graphdata = [] }: any) => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.LeadTimesYTDReducer
  );
  useEffect(() => {
    dispatch(requestKeyLeadTimesYTDData());
    // eslint-disable-next-line
  }, []);

  const [setHeight, setsetHeight] = React.useState<string>("250px");

  useEffect(() => {
     const modalbtn: HTMLElement | null = document.getElementById(`lead-card`);
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
         `lead-card`
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

  return (
    <Card id="lead-card">
      <WidgetHeader
        title={"Lead Times YTD"}
        activeToggle={"graph"}
        showToggle={false}
      />
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
            <PieChartComponent
              id={"leadtimes"}
             // height={"270px"}
             height= {setHeight}
              data={data}
              chartSettings={{
                SeriesDirective: {
                  // innerRadius: "70%",
                  // radius: "70%",
                  palettes: [
                    "#4f81bc",
                    "#c0504e",
                    "#9bbb58",
                    "#8165a2",
                    "#4cacc5",
                    "#e79645",
                    "#2c4e74",
                  ],
                  innerRadius: "40%",
                  startAngle: "0",
                  endAngle: "360",
                  radius: "70%",
                  explode: false,
                  explodeOffset: "10%",
                  explodeIndex: "3",
                },
                chartComponent: {
                  enableAnimation: true,
                  center: { x: "50%", y: "50%" },
                },
              }}
            />
          </React.Suspense>
        )}
      </Card.Body>
    </Card>
  );
};
