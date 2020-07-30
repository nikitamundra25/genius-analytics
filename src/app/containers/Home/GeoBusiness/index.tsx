import React ,{useEffect} from "react";
import { Card } from "react-bootstrap";
// import data from "./datasource.json";
import Loader from "../../../components/Loader/Loader";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { ErrorComponent } from "../../../components/Error";
import { requestGeographicOriginData } from "../../../../actions";
const WorldMap = React.lazy(() =>
  import("../../../components/Charts/WorldMap")
);

export default ({ graphdata = {} }:any) => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.GeographicOriginReducer
  );
  useEffect(() => {
    dispatch(requestGeographicOriginData());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Card>
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
            <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
            <WorldMap data={data} />
            </React.Suspense>
            )}
        </Card.Body>
      </Card>
    </>
  );
};
