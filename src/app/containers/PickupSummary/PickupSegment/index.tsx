import React, {useEffect} from "react";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { useDispatch, useSelector } from "react-redux";

import { IRootState } from "../../../../interfaces";
import { requestPickupSummarySegmentData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";

const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);


const PickupSegment = (props: any) => {
  const{index,setHeight} = props;
  const setHeight1 = setHeight  + 140;
  
  const dispatch = useDispatch();
  // const [setHeight, setsetHeight] = React.useState<string>("250px");

  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.pickupSummarySegmentReducer
  );

  useEffect(() => {
    dispatch(requestPickupSummarySegmentData());
    // eslint-disable-next-line
  }, []);

  const Charts = [
    {
      dataSource: data,
      xName: "name",
      yName: "RoomNts",
      type: "Column",
      fill: "#4684bd",
      name: "Room Nts",
      width: 1,
      cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
      marker: {
        dataLabel: {
          visible: true,
          rx: 10,
          ry: 10,
          font: {
            fontWeight: "600",
            color: "#000",
          },
        },
      },
    },
   
    {
      dataSource: data,
      xName: "name",
      yName: "ADR",
      type: "Spline",
      fill: "#ee792b",
      name: "ADR",
      width: 3,
      marker: {
        visible: false,
        width: 8,
        height: 8,
        fill:"#ee792b",
        border: { width: 0, color: "#ee792b" },
        dataLabel: {
          visible: true,
          position: "Top",
          fill:"#ee792b",
          border: { width: 1, color: "#4684bd" },
          font: {
            fontWeight: "600",
            color: "#ffffff",
          
          },
        },
      },
    },
  ];

  return (
    <>
          {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
           <React.Suspense fallback={<div className="card-loader"><WidgetLoader /></div>}>
            <MixedCharts
              id={`PickupChart-${index}`}
              legend = {false}
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
                //height:"200px"
                height: `${setHeight1}px`
              }}
              charts={Charts}
            />
          </React.Suspense>
           )} 
          <div className="sub-title">Pick up by segment</div>
    </>
  );
};

export default PickupSegment;
