import React,{useEffect} from "react";
import { Card } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
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
  return (
    <Card>
      <WidgetHeader
        title={"Lead Times YTD by Segment"}
        activeToggle={"graph"}
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
            height={"285px"}
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
