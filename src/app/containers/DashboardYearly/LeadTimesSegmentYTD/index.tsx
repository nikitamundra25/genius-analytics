import React,{useEffect} from "react";
import { Card } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestLeadTimeYTDSegmentData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
const PieChartComponent = React.lazy(() =>
  import("../../../components/Charts/PieChart")
);

export default ({graphdata = []}: any) => {

  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.LeadTimesYTDSegmentReducer
  );
  useEffect(() => {
    dispatch(requestLeadTimeYTDSegmentData());
    // eslint-disable-next-line
  }, []);


  const [setHeight, setsetHeight] = React.useState<string>("250px");

 useEffect(() => {
    const modalbtn: HTMLElement | null = document.getElementById(`leadtime-card`);
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
        `leadtime-card`
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
    <Card id="leadtime-card">
      <WidgetHeader
        title={"Lead Times YTD by Segment"}
        activeToggle={"graph"}
        showToggle={false}
        showdropdownlead={true}
      />
      <Card.Body>
      {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
          <PieChartComponent
            id={"leadtimesSegment"}
            //height={"270px"}
            height= {setHeight}
            data={data}
            chartSettings={{
              SeriesDirective: {
                innerRadius: "40%",
                radius: "70%",
                palettes: [
                  "#4f81bc",
                  "#c0504e",
                  "#9bbb58",
                  "#8165a2",
                  "#4cacc5",
                  "#e79645",
                  "#2c4e74",
                ],
              },
              chartComponent: {
                enableAnimation: false,
                center: { x: "50%", y: "50%" },
              },
            }}
          />
          )}
      </Card.Body>
    </Card>
  );
};
