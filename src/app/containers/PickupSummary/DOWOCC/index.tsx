import React, {useEffect} from "react";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { useDispatch, useSelector } from "react-redux";

import { IRootState } from "../../../../interfaces";
import {  requestPickupSummaryOCCDataData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";

const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);


const PickupDOWOCCSegment = (props:any) => {
  const{index, setHeight} = props;
  const dispatch = useDispatch();

  const labeltemplate = (args:any) => {
    return (<div  style={{fontSize: '11px'}}>
      <span>{args.point.y}%</span>
    </div>);
};


const {
  isLoading: OCCLoading,
  data: OccData,
  isError: OCCError,
} = useSelector((state: IRootState) => state.pickupSummaryOCCReducer);

useEffect(() => {
  // dispatch(requestPickupSummarySegmentData());
  dispatch(requestPickupSummaryOCCDataData());

  // eslint-disable-next-line
}, []);

  const Charts = [
    {
      dataSource: OccData,
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
          position: "Bottom",
          template: labeltemplate,
          font: {
            fontWeight: "600",
            color: "#fff",
          },
        },
      },
    },
   
    {
      dataSource: OccData,
      xName: "name",
      yName: "ADR",
      type: "Spline",
      fill: "#ee792b",
      name: "ADR",
      width: 3,
      dashArray: "8 5",
      marker: {
        visible: true,
        width: 8,
        height: 8,
        fill:"#ee792b",
        border: { width: 0, color: "#ee792b" },
        dataLabel: {
          visible: true,
          position: "Top",
          fill:"#ee792b",
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
     {OCCLoading ? (
                    <WidgetLoader />
                  ) : OCCError ? (
                    <ErrorComponent
                      message={"An error occured while fetching details "}
                    />
                  ) : (
          <React.Suspense fallback={<div className="card-loader"><WidgetLoader /></div>}>
            <MixedCharts
              id={`DOWChart-${index}`}
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
                height: setHeight,
              }}
              
              charts={Charts}
            />
          </React.Suspense>
      )}
      <div className="sub-title">DOW OCC</div>
    </>
  );
};

export default PickupDOWOCCSegment;
