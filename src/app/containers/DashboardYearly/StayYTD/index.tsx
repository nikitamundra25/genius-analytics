import React,{useEffect} from "react";
import { Card } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestStayYTDData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);

const StayYTD = ({ graphdata = [] }: any) => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.StayYTDReducer
  );
  useEffect(() => {
    dispatch(requestStayYTDData());
    // eslint-disable-next-line
  }, []);

  const Charts = [
    {
      dataSource: data,
      xName: "x",
      yName: "y1",
      type: "Column",
      name: "Stay",
      width: 1,
      cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
      marker: {
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
      xName: "x",
      yName: "y2",
      type: "Spline",
      fill: "#5685c1",
      name: "ADR",
      width: 2,
      marker: {
        visible: true,
        width: 8,
        height: 8,
        fill:"#5685c1",
        border: { width: 0, color: "#5685c1" },
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

//   const pointRender = (args:any) => {
//     let seriesColor = ['#00bdae', '#404041', '#357cd2', '#e56590', '#f8b883',
//         '#70ad47', '#dd8abd', '#7f84e8', '#7bb4eb', '#ea7a57'];
//     args.fill = seriesColor[args.point.index];
// };
  return (
    <>
      <Card>
        <WidgetHeader title={"Length of Stay & ADR - YTD"} activeToggle={"graph"}   showToggle={false}/>
        <Card.Body>
           {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
            <MixedCharts
              id={"stay"}
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
                
              }}
              charts={Charts}
            />
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default StayYTD;
