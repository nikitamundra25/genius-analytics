import React ,{useEffect, FunctionComponent} from "react";
import { Card } from "react-bootstrap";
// import data from "./datasource.json";
import WidgetHeader from "../../../components/WidgetHeader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { ErrorComponent } from "../../../components/Error";
import { requestGeographicOriginData } from "../../../../actions";
const WorldMap = React.lazy(() =>
  import("../../../components/Charts/WorldMap")
);


const GeoBusiness : FunctionComponent =  ({ graphdata = {} }:any) => {
  const dispatch = useDispatch();
 // const [setHeight, setsetHeight] = React.useState<any>(270);
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.GeographicOriginReducer
  );
  useEffect(() => {
    dispatch(requestGeographicOriginData());
    // eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   const modalbtn: HTMLElement | null = document.getElementById(`map-card`);
  //   if (modalbtn) {
  //     setTimeout(() => {
  //       const check = modalbtn.getBoundingClientRect();
  //       const getHeight =check.height;
  //       const setgraphHeight = getHeight - 75 ;
  //       //console.log("hello chart height on resize",check, getHeight, setgraphHeight);
  //       setsetHeight(`${setgraphHeight}px`)
  //     }, 100);
  //   }
  //   // eslint-disable-next-line
  // }, [data]);

  // useEffect(() => {
  //   const resizeListener = async() => {
  //     // // change width from the state object
  //     const modalbtn: HTMLElement | null = document.getElementById(
  //       `map-card`
  //     );
  //     if (modalbtn) {
  //       setTimeout(() => {
  //         const check = modalbtn.getBoundingClientRect();
  //         const getHeight =check.height;
  //         const setgraphHeight = getHeight - 75 ;
  //         if(setgraphHeight >= 0){
  //           console.log("hello chart height on resize", setgraphHeight);
  //           //  setsetHeight(25)
  //           //  setsetHeight(setgraphHeight)
  //         }
  //       }, 100);
  //     }
  //   };
  //   // set resize listener
  //   window.addEventListener("resize", resizeListener);

    // clean up function
//     return () => {
//       // remove resize listener
//       window.removeEventListener("resize", resizeListener);
//     };
//     // eslint-disable-next-line
//   }, []);
 
// console.log("setHeightsetHeight",setHeight);

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
