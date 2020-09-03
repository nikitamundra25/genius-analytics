import React, { useEffect } from "react";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestDailyOccupacyBudLyData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { getMonthsData } from "../../../../helper";
// import Loader from "../../../components/Loader/Loader";

const MixedCharts = React.lazy(
  () => import("../../../components/Charts/MixedCharts")
);

const DailyOccupacy = ({ graphdata = [],selectedDate }: any) => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.DailyOccupacyBudLyReducer
  );
  const months = getMonthsData(selectedDate, "dashboard");

  useEffect(() => {
    dispatch(requestDailyOccupacyBudLyData());
    // eslint-disable-next-line
  }, []);

  const [selectedValue, setselectedValue] = React.useState<string>("OCC");
  const [occupacyList, setoccupacyList] = React.useState<any>([]);

  useEffect(() => {
 
    let stemp: any = [];
    if(months && months.length){  
    data.map((key: any, index: number) => {
      return index > months.length - 1 ? null : stemp.push({
        name: key.name,
        OCC: key[selectedValue].data,
        Budget: key[selectedValue].Budget,
        LY: key[selectedValue].LY,
      });
    });
  }

  let totalDataExist: any =  stemp.filter((occuData: any) => occuData.name === "Total")[0];
  if(!totalDataExist){
    let TotalData:any= data.filter((occuData: any) => occuData.name === "Total")[0]
    if(TotalData && TotalData.name){
      stemp.push({
        name: TotalData.name,
        OCC: TotalData[selectedValue].data,
        Budget: TotalData[selectedValue].Budget,
        LY: TotalData[selectedValue].LY,
      })
    }
  }
  
    setoccupacyList(stemp);
    // eslint-disable-next-line
  }, [data]);


  const handleChange = (event: any) => {
    setselectedValue(event.target.value);
    let stemp: any = [];
    data.map((key: any, index: number) => {
      return index > months.length - 1 ? null : stemp.push({
        name: key.name,
        [event.target.value]: key[event.target.value].data,
        Budget: key[event.target.value].Budget,
        LY: key[event.target.value].LY,
      });
    });

    let totalDataExist: any =  stemp.filter((occuData: any) => occuData.name === "Total")[0];
    if(!totalDataExist){
      let TotalData:any= data.filter((occuData: any) => occuData.name === "Total")[0]
      if(TotalData && TotalData.name){
        stemp.push({
          name: TotalData.name,
          [event.target.value]: TotalData[event.target.value].data,
          Budget: TotalData[event.target.value].Budget,
          LY: TotalData[event.target.value].LY,
        })
      }
    }
    
    setoccupacyList(stemp);
  };

  const Charts = [
    {
      dataSource: occupacyList,
      xName: "name",
      yName: selectedValue,
      type: "SplineArea",
     // fill: "url(#gradient-daily)",
      // fill: "#c0d2e8",
      name: selectedValue,
      width: 3,
      opacity: 0.6,
      //fill: "#7cccca",
      fill:"rgb(149 171 199)",
     
      marker: {
        visible: false,
        width: 10,
        height: 10,
        fill: "rgb(149 171 199)",
        border: { width: 1, color: "rgb(149 171 199)" },
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
      type: "SplineArea",
      // fill: "#b82f2c",
      opacity: 0.6,
      fill:"rgb(247 218 228)",
      name: "Budget",
      width: 2,
      dashArray: "3",
      yAxisName: "yAxis1",
      marker: {
        visible: false,
        width: 6,
        height: 6,
        fill: "rgb(247 218 228)",
        border: { width: 1, color: "rgb(247 218 228)" },
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
      yName: "LY",
      type: "SplineArea",
      opacity: 0.6,
      fill:"rgb(130 223 215)",
     
      //fill: "#94b54e",
      name: "LY",
      width: 2,
      dashArray: "3",
      yAxisName: "yAxis1",
      marker: {
        visible: false,
        width: 6,
        height: 6,
        fill: "rgb(130 223 215)",
        border: { width: 1, color: "rgb(130 223 215)" },
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
        <style>{SAMPLE_CSS}</style>
        <div style={{  "position": "absolute", "left": "0px", "top": "0px", "width": "100%"}} > 
        <WidgetHeader
          // title={"Daily Occupacy Vs. BUD Vs. LY"}
          title={`${
            selectedValue === "OCC"
              ? "Daily Occupacy"
              : selectedValue === "ADR"
              ? "ADR"
              : "RevPAR"
          } Vs. BUD Vs. LY`}
          activeToggle={"graph"}
          showToggle={false}
          showdropdowndaily={true}
          selectedMonthlyData={selectedValue}
          handleChange={handleChange}
        />
        </div>

       
          {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
            <div className="d-flex h-100" style={{ "paddingTop": "62px" }} > 
            <React.Suspense
              fallback={
                <div className="card-loader">
                  <WidgetLoader />
                </div>
              }
            >
              <MixedCharts
                id={"dailyocc"}
                chartSettings={{
                  primaryXAxis: {
                    valueType: "Category",
                    interval: 1,
                    majorGridLines: { width: 0 },
                  },
                  primaryYAxis: {
                    labelFormat: `${
                      selectedValue === "OCC" ? "{value}%" : "{value}"
                    } `,
                    edgeLabelPlacement: "Shift",
                    majorGridLines: { width: 0 },
                    majorTickLines: { width: 0 },
                    lineStyle: { width: 0 },
                    labelStyle: {
                      color: "transparent",
                    },
                    visible: false,
                    //interval: 30,
                    //rangePadding: 'None',
                  },
                  tooltip: { enable: true },
                  Legend: { enable: false },
                }}
                charts={Charts}
              />
            </React.Suspense>
            </div>
          )}
      <svg style={{ height: "0" }}>
        <defs>
          <linearGradient id="gradient-daily" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default DailyOccupacy;
