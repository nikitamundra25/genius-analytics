import React ,{useEffect} from "react";
import { Card } from "react-bootstrap";
// import data from "./datasource.json";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { ErrorComponent } from "../../../components/Error";
import { requestGeographicOriginData, requestGeographicOriginFutureData, requestGeographicOriginPastData } from "../../../../actions";
import moment from "moment";
import { checkDateFormat } from "../../../../config";

const WorldMap = React.lazy(() =>
  import("../../../components/Charts/WorldMap")
);


const GeoBusiness  =  ({ graphdata = {},date }:any) => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.GeographicOriginReducer
  );
  // useEffect(() => {
  //   dispatch(requestGeographicOriginData());
  //   // eslint-disable-next-line
  // }, []);

  useEffect(() => {

    let selectedDate = moment(date).format(checkDateFormat);
    // const selectedDate: any = new Date(date);
    let currentDate = moment(new Date()).format(checkDateFormat);
    if (selectedDate > currentDate) {
      dispatch(requestGeographicOriginFutureData());
    } else if (selectedDate < currentDate) {
      dispatch(requestGeographicOriginPastData());
    } else if (selectedDate === currentDate) {
      dispatch(requestGeographicOriginData());
    }

    // eslint-disable-next-line
  }, [date]);
 

  return (
    <>
      <Card id="map-card">
        <WidgetHeader
          title={"Geographic Origin of business"}
          activeToggle={"graph"}
          showToggle={false} 
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
            <WorldMap data={data} />
            </React.Suspense>
            )}
        </Card.Body>
      </Card>
    </>
  );
};
export default GeoBusiness;
