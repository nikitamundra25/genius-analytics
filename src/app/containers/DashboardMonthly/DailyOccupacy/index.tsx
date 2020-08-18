import React,{useEffect} from "react";
import { Card } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestDailyOccupacyBudLyData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
// import Loader from "../../../components/Loader/Loader";

const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);

const DailyOccupacy = ({ graphdata = [] }:any) => {

  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.DailyOccupacyBudLyReducer
  );
  useEffect(() => {
    dispatch(requestDailyOccupacyBudLyData());
    // eslint-disable-next-line
  }, []);

  const [setHeight, setsetHeight] = React.useState<string>("250px");
  const [selectedValue, setselectedValue] = React.useState<string>("OCC");
  const [occupacyList, setoccupacyList] = React.useState<any>([]);

 useEffect(() => {
    const modalbtn: HTMLElement | null = document.getElementById(`daily-occ-card`);
    if (modalbtn) {
      setTimeout(() => {
        const check = modalbtn.getBoundingClientRect();
        const getHeight =check.height;
        const setgraphHeight = getHeight - 83 ;
        //console.log("hello chart height on resize",check, getHeight, setgraphHeight);
        setsetHeight(`${setgraphHeight}px`)
      }, 100);
    }

    let stemp:any = []
       data.map((key:any,index:number)=>{
        return stemp.push({
             name: key.name,
             OCC: key[selectedValue].data,
             Budget: key[selectedValue].Budget,
             LY: key[selectedValue].LY
           })
       })
  setoccupacyList(stemp)
    // eslint-disable-next-line
  }, [data]);

  useEffect(() => {
    const resizeListener = () => {
      // // change width from the state object
      const modalbtn: HTMLElement | null = document.getElementById(
        `daily-occ-card`
      );
     // console.log("modalbtn", modalbtn);

      if (modalbtn) {
        setTimeout(() => {
          const check = modalbtn.getBoundingClientRect();
          const getHeight =check.height;
          const setgraphHeight = getHeight - 83 ;
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

  const handleChange = (event:any)=>{
  setselectedValue(event.target.value)
   let stemp:any = []
       data.map((key:any,index:number)=>{
          return stemp.push({
             name: key.name,
             [event.target.value]: key[event.target.value].data,
             Budget: key[event.target.value].Budget,
             LY: key[event.target.value].LY
           })
       })
  setoccupacyList(stemp)
  }



  const Charts = [
    {
      dataSource: occupacyList,
      xName: "name",
      yName: selectedValue,
      type: "SplineArea",
      fill: "url(#gradient-daily)",
     // fill: "#c0d2e8",
      name: selectedValue,
      width: 3,
      yAxisName:'yAxis1',
      marker: {
        visible: false,
        width: 10,
        height: 10,
        fill: "#2f5891",
        border: { width: 1, color: "#4176b9" },
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
      dataSource: occupacyList,
      xName: "name",
      yName: "Budget",
      type: "Spline",
      fill: "#b82f2c",
      name: "Budget",
      width: 2,
      dashArray: "3",
      marker: {
        visible: true,
        width: 6,
        height: 6,
        fill: "#b82f2c",
        border: { width: 1, color: "#b82f2c" },
        dataLabel: {
          visible: false,
          position: "Top",
          font: {
            fontWeight: "600",
            color: "#000000",
          },
        },
      },
    },
    {
      dataSource: occupacyList,
      xName: "name",
      yName: "LY",
      type: "Spline",
      fill: "#94b54e",
      name: "LY",
      width: 2,
      dashArray: "3",
      marker: {
        visible: true,
        width: 6,
        height: 6,
        fill: "#94b54e",
        border: { width: 1, color: "#94b54e" },
        dataLabel: {
          visible: false,
          position: "Bottom",
          font: {
            fontWeight: "600",
            color: "#000000",
          },
        },
      },
    },
  ];

  const SAMPLE_CSS = `
  #gradient-daily stop {
  stop-color: #94a9c3;
}
#gradient-daily stop[offset="0"] {
  stop-opacity: 0.99;
}
#gradient-daily stop[offset="1"] {
  stop-opacity: 0.7;
}`;

  return (
    <>
    <Card id="daily-occ-card">
      <style>
          {SAMPLE_CSS}
      </style>
      <WidgetHeader
        title={"Daily Occupacy Vs. BUD Vs. LY"}
        activeToggle={"graph"}
        showToggle={false}
        showdropdowndaily={true}
        selectedMonthlyData = {selectedValue}
        handleChange={handleChange}
      />

      <Card.Body>
         {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
            <React.Suspense fallback={<div className="card-loader"><WidgetLoader /></div>}>
          <MixedCharts
            id={"dailyocc"}
            chartSettings={{
              primaryXAxis: {
                valueType: "Category",
                interval: 1,
                majorGridLines: { width: 0 },
              },
              primaryYAxis: {
                labelFormat: `${selectedValue === "OCC" ? '{value}%' : '{value}' } `,
                edgeLabelPlacement: "Shift",
                majorGridLines: { width: 0 },
                majorTickLines: { width: 0 },
                lineStyle: { width: 0 },
                labelStyle: {
                  color: "transparent",
                },
                visible:false,
               // interval: 12,
              },
              tooltip: { enable: true },
              Legend: { enable: false },
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
                        <linearGradient id="gradient-daily" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0"/>
                            <stop offset="1"/>
                        </linearGradient>
                    </defs>
                </svg>
   
    </>
  );
};

export default DailyOccupacy;
