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

    const yearDate :any = moment(date).format("YYYY");
    let d = new Date();
    const currentYear:any = d.getFullYear();
  
    if (yearDate > currentYear) {
      dispatch(requestGeographicOriginFutureData());
    } else if (yearDate < currentYear) {
      dispatch(requestGeographicOriginPastData())
    } else {
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
