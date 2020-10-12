import React, { useEffect } from "react";
// import data from "./datasource.json";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";

import { ErrorComponent } from "../../../components/Error";
import {
  requestGeographicOriginData,
  requestGeographicOriginFutureData,
  requestGeographicOriginPastData,
} from "../../../../actions";
import moment from "moment";
import { checkDateFormat } from "../../../../config";
const NestedDoughnutComponent = React.lazy(
  () => import("../../../components/Charts/NestedDoughnutChart")
);
const NestedDoughnutComponent2 = React.lazy(
  () => import("../../../components/Charts/NestedDoughnutChart2")
);

const BookingDoughnut = ({ date }: Date | any) => {
  const [setHeight, setsetHeight] = React.useState<string>("190px");
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.BookingChannelMonthlyReducer
  );

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

  useEffect(() => {
    // const nchartid: any = document.getElementsByClassName(
    //   `netsedcard`
    // )[0].height;
    const nchartid: any = document.getElementsByClassName("netsedcard")[0];
    console.log("nchartidnchartid", nchartid.offsetHeight);

    if (nchartid) {
      setTimeout(() => {
        const check = nchartid.offsetHeight;
        const getHeight = check;
        const setgraphHeight = getHeight - 105;
        console.log(
          "hello chart height on load",
          check,
          getHeight,
          setgraphHeight
        );
        if (setgraphHeight >= 0) {
          setsetHeight(`${setgraphHeight}px`);
        }
      }, 100);
    }
  }, [data]);

  useEffect(() => {
    const resizeListener = () => {
      // const modalbtn: HTMLElement | any = document.getElementsByClassName(
      //   `netsedcard`
      // );
      const modalbtn: any = document.getElementsByClassName("netsedcard")[0];
      // const modalbtn:any = document.getElementsByClassName("netsedcard")[0]

      console.log("modalbtn", modalbtn);

      if (modalbtn) {
        setTimeout(() => {
          const check = modalbtn.offsetHeight;
          const getHeight = check.height;
          const setgraphHeight = getHeight - 105;
          console.log(
            "hello chart height on resize",
            check,
            getHeight,
            setgraphHeight
          );
          if (setgraphHeight >= 0) {
            setsetHeight(`${setgraphHeight}px`);
          }
        }, 100);
      }
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
    // eslint-disable-next-line
  }, [data]);

  return (
    <>
      {isLoading ? (
        <WidgetLoader />
      ) : isError ? (
        <ErrorComponent message={"An error occured while fetching details "} />
      ) : (
        <div
          className="d-flex h-100 netsedcard"
          //id="nested-chart"
          style={{ paddingBottom: "25px" }}
        >
          <Row className="row-inner h-100 w-100">
            <Col
              xs={12}
              md={6}
              className="h-100"
              style={{ paddingTop: "20px" }}
            >
              <div
                //className="e-panel-header"
                style={{
                  position: "absolute",
                  left: "0px",
                  top: "-6px",
                  width: "100%",
                  color:"#007db9",
                  textAlign: "center",
                }}
              >
                <div className="panel-title" style={{
                  fontSize: "16px",
                  color:"#007db9",
                  textAlign: "center",
                }}>Room Nights</div>
              </div>

              <React.Suspense
                fallback={
                  <div className="card-loader">
                    <WidgetLoader />
                  </div>
                }
              >
                <NestedDoughnutComponent setHeight={setHeight} />
              </React.Suspense>
            </Col>

            <Col
              xs={12}
              md={6}
              className="h-100"
              style={{ paddingTop: "20px" }}
            >
              <div
                //className="e-panel-header"
                style={{
                  position: "absolute",
                  left: "0px",
                  top: "-6px",
                  width: "100%",
                  color:"#007db9",
                  textAlign: "center",
                }}
              >
                <div className="panel-title"  style={{
                  fontSize: "16px",
                  color:"#007db9",
                  textAlign: "center",
                }}>ADR</div>
              </div>

              <React.Suspense
                fallback={
                  <div className="card-loader">
                    <WidgetLoader />
                  </div>
                }
              >
                <NestedDoughnutComponent2 setHeight={setHeight} />
              </React.Suspense>
            </Col>
          </Row>
          <div
            style={{
              position: "absolute",
              left: "0px",
              bottom: "8px",
              width: "100%",
              display: "flex",
            }}
            className="custom-legend"
          >
            <div className="legend-label">
              <span className="square-box color1"></span>
              <span>Direct</span>
            </div>
            <div className="legend-label">
              <span className="square-box color2"></span>
              <span>GDS</span>
            </div>
            <div className="legend-label">
              <span className="square-box color3"></span>
              <span>OTA's</span>
            </div>
            <div className="legend-label">
              <span className="square-box color4"></span>
              <span>Brand.com</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default BookingDoughnut;
