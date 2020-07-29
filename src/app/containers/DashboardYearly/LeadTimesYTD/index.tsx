import React,{useEffect} from "react";
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

  return (
    <Card>
      <WidgetHeader title={"Lead Times YTD"} activeToggle={"graph"} />
      <Card.Body>
      {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
          <PieChartComponent
            id={"leadtimes"}
            height={"285px"}
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
                innerRadius:'40%',
                startAngle:'0',
                endAngle:'360' ,
                radius:'70%' ,
                explode:false ,
                explodeOffset:'10%' ,
                explodeIndex:'3',
              },
              chartComponent: {
                enableAnimation: true,
                center: { x: "50%", y: "50%" },
               
              },
            }}
          />
          )}
      </Card.Body>
    </Card>
  );
};
