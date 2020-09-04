import React, { useEffect } from "react";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestLeadTimeYTDSegmentData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
const PieChartComponent = React.lazy(() =>
  import("../../../components/Charts/PieChart")
);

export default ({ graphdata = [] }: any) => {
  const [selectedValue, setselectedValue] = React.useState<string>("bar");
  const [segmentList, setsegmentList] = React.useState<any>([]);

  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.LeadTimesYTDSegmentReducer
  );
  useEffect(() => {
    dispatch(requestLeadTimeYTDSegmentData());
    // eslint-disable-next-line
  }, []);


  useEffect(() => {
    if (data && data.length) {
      let temp = data.filter((x: any) => x.type === selectedValue)[0].data;
      setsegmentList(temp);
    }
    // eslint-disable-next-line
  }, [data]);



  const handleChange = (event: any) => {
    setselectedValue(event.target.value);
    let temp = data.filter((x: any) => x.type === event.target.value)[0];
    if (temp && temp.data.length) {
      setsegmentList(temp.data);
    }
  };

  return (
  
    <>
     <div style={{  "position": "absolute", "left": "0px", "top": "0px", "width": "100%"}} > 
    <WidgetHeader
      title={"Lead Times YTD by Segment"}
      activeToggle={"graph"}
      showToggle={false}
      showdropdownlead={true}
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
          <div className="d-flex h-100" style={{ "paddingTop": "60px" }} > 
          <React.Suspense
            fallback={
              <div className="card-loader">
                <WidgetLoader />
              </div>
            }
          >
            <PieChartComponent
              id={"leadtimesSegment"}
              //height={"270px"}
              // height={setHeight}
              data={segmentList}
              chartSettings={{
                SeriesDirective: {
                  palettes: [
                    "#4f81bc",
                    "#c0504e",
                    "#9bbb58",
                    "#8165a2",
                    "#4cacc5",
                    "#e79645",
                    "#2c4d75",
                    "#f07623",
                  ],
                  innerRadius: "40%",
                  startAngle: "0",
                  endAngle: "360",
                  explode: false,
                  explodeOffset: "10%",
                  explodeIndex: "3",
                  radius:'100%'
                },
                chartComponent: {
                  enableAnimation: false,
                  center: { x: "50%", y: "50%" },
                },
                dataLabel: {
                  position: 'Inside'
                }
              }}
            />
          </React.Suspense>
          </div>
        )}
        </>
  );
};
