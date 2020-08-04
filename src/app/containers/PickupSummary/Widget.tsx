import React, { useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { IDashboardWidgetProps, IRootState } from "../../../interfaces";
import PickupSegment from "./PickupSegment";
import PickupDOWOCCSegment from "./DOWOCC";
import PickupBusinessMix from "./BusinessMix";
import TableForm from "./MonthlyTable";

import { useDispatch, useSelector } from "react-redux";
import {
  requestPickupSummarySegmentData,
  requestPickupSummaryOCCDataData,
  requestPickupSummaryDowDataData,
} from "../../../actions";
import { ErrorComponent } from "../../components/Error";
import { WidgetLoader } from "../../components/Loader/WidgetLoader";

const DashboardWidget = ({ graphList }: IDashboardWidgetProps) => {
  const dispatch = useDispatch();

  const { isLoading, data: segmentData, isError: segmentError } = useSelector(
    (state: IRootState) => state.pickupSummarySegmentReducer
  );
  const {
    isLoading: OCCLoading,
    data: OCCData,
    isError: OCCError,
  } = useSelector((state: IRootState) => state.pickupSummaryOCCReducer);
  const {
    isLoading: DowDataLoading,
    data: DowData,
    isError: DowDataError,
  } = useSelector((state: IRootState) => state.pickupSummaryDowDataReducer);

  useEffect(() => {
    dispatch(requestPickupSummarySegmentData());
    dispatch(requestPickupSummaryOCCDataData());
    dispatch(requestPickupSummaryDowDataData());

    // eslint-disable-next-line
  }, []);

  const [setHeight, setsetHeight] = React.useState<string>("250px");

 useEffect(() => {
    const modalbtn: HTMLElement | null = document.getElementById(`summary-card0`);
    if (modalbtn) {
      setTimeout(() => {
        const check = modalbtn.getBoundingClientRect();
        const getHeight =check.height;
        const setgraphHeight = getHeight - 225 ;
        console.log("hello chart height on resize",check, getHeight, setgraphHeight);
        setsetHeight(`${setgraphHeight}px`)
      }, 100);
      
    }
    // eslint-disable-next-line
  }, [DowData]);

  useEffect(() => {

    const resizeListener = () => {

      // // change width from the state object
      const modalbtn: HTMLElement | null = document.getElementById(
        `summary-card0`
      );
     // console.log("modalbtn", modalbtn);

      if (modalbtn) {
        setTimeout(() => {
          const check = modalbtn.getBoundingClientRect();
          const getHeight =check.height;
          const setgraphHeight = getHeight - 225 ;
          console.log("hello chart height on resize",check, getHeight, setgraphHeight);
          setsetHeight(`${setgraphHeight}px`)
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
  }, []);

 

  const getChart = (chartType: any, index: number) => {
    // switch (chartType.name) {
    //   case "Month":
    const rowId = index;
    return (
      <div
        id={chartType.idNum}
        className="e-panel "
        data-row={rowId}
        data-col="0"
        data-sizex="1"
        data-sizey="0"
      >
        <span id="close" className="e-template-icon e-clear-icon" />
        <div className="e-panel-container">
          {/* <Col xs={12} md={12}> */}
          <Card id={`summary-card${index}`}>
            <Card.Body>
              <Row className="row-inner">
                <Col xs={12} md={5}>
                  <div className="sub-title text-left">{chartType.name}</div>
                </Col>
                <Col xs={12} md={7}>
                  <TableForm index={index} tabledata={chartType.tabledata} />
                </Col>
                <Col xs={12} md={4}>
                  {isLoading ? (
                    <WidgetLoader />
                  ) : segmentError ? (
                    <ErrorComponent
                      message={"An error occured while fetching details "}
                    />
                  ) : (
                    <PickupSegment index={index} data={segmentData} setHeight={setHeight}/>
                  )}
                </Col>
                <Col xs={12} md={4}>
                  {OCCLoading ? (
                    <WidgetLoader />
                  ) : OCCError ? (
                    <ErrorComponent
                      message={"An error occured while fetching details "}
                    />
                  ) : (
                    <PickupDOWOCCSegment index={index} OccData={OCCData} setHeight={setHeight}/>
                  )}
                </Col>
                <Col xs={12} md={4}>
                  {DowDataLoading ? (
                    <WidgetLoader />
                  ) : DowDataError ? (
                    <ErrorComponent
                      message={"An error occured while fetching details "}
                    />
                  ) : (
                    <PickupBusinessMix index={index} DowData={DowData} setHeight={setHeight}/>
                  )}
                </Col>
              </Row>
            </Card.Body>
          </Card>
          {/* </Col> */}
        </div>
      </div>
    );
    // default:
    //   return null;
    // }
  };

  return (
    <>
      {graphList.map((chartConfig: any, index: number) => {
        return (
          <React.Fragment key={index}>
            {getChart(chartConfig, index)}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default DashboardWidget;
