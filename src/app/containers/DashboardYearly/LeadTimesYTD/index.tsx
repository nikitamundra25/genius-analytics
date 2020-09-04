import React, { useEffect } from "react";
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



  return (

        isLoading ? (
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
            //  height= {setHeight}
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
                  enableAnimation: true,
                  center: { x: "50%", y: "50%" },
                },
                dataLabel: {
                  position: 'Inside'
                }
              }}
            />
          </React.Suspense>
        )
  );
};
