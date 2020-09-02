import React, { useEffect } from "react";
import { Table, Row, Col,  OverlayTrigger,
  Tooltip } from "react-bootstrap";
import { generateArrayOfMonths, ApiHelper } from "../../../../helper";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import caretup from "../../../../assets/img/caret-up.svg";
import caretdown from "../../../../assets/img/caret-down.svg";
import moment from "moment";
import { IPickupSummaryModel } from "../../../../interfaces";
import { ErrorComponent } from "../../../components/Error";

const SummaryTable = (props: any) => {
  const months = generateArrayOfMonths(props.date, 17);

  const [state, setState] = React.useState<IPickupSummaryModel>({
    isLoading: true,
    isError: true,
    TableOnestate: [],
    TableSecondstate: [],
  });
  const getData = async () => {
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Pickup",
      "/pickupMainSummary.json",
      "GET"
    );
    if (isError) {
      setState({
        isLoading: false,
        TableOnestate: [],
        TableSecondstate: [],
        isError: true,
      });
      return;
    }

    let temp: any = [];
    if (data && data.length) {
      data.map((key: any, index: number) => {
        return temp.push({
          ...key,
          date: months[index] && months[index].date ? months[index].date : "",
        });
      });
    }

    let tableone = temp.splice(0, 9);

    setState({
      isLoading: false,
      TableOnestate: tableone,
      TableSecondstate: temp,
      isError: false,
    });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
  const { isLoading, TableOnestate, TableSecondstate, isError } = state;

  return (
    <>
      {isLoading ? (
        <WidgetLoader />
      ) : isError ? (
        <ErrorComponent message={"An error occured while fetching details "} />
      ) : (
        <React.Suspense
          fallback={
            <div className="card-loader">
              <WidgetLoader />
            </div>
          }
        >
          <Row className="">
            <Col xs={12} md={6}>
              <Table responsive striped className="summary-table mb-0 ml-auto">
                <thead>
                  <tr>
                    <th className="empty-col"></th>
                    <th className="head-col">Rooms</th>
                    <th className="head-col">ADR</th>
                    <th className="head-col">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {TableOnestate && TableOnestate.length
                    ? TableOnestate.map((list: any, i: number) => {
                        return (
                          <tr key={i}>
                            <td className="row-title">
                              {" "}
                              {list.date
                                ? moment(list.date).format("MMMM YYYY")
                                : ""}{" "}
                            </td>
                            <td className="content-col">
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="text-col">{list.rooms} </div>
                                <div className="icon-col">
                                  <OverlayTrigger
                                    key={"top2"}
                                    placement={"top"}
                                    overlay={
                                      <Tooltip
                                        id={`Rooms-${i}`}
                                        className="custom-tooltip"
                                      >
                                          <div className="custom-inner-tooltip">
                                          <div className="label-text">Rooms</div>
                                          <div className="label-div">
                                            <span className="label-img">
                                            <img
                                              src={
                                                parseInt(list.rooms) < 0
                                                  ? caretdown
                                                  : caretup
                                              }
                                              alt="increase"
                                              width="12"
                                            />
                                            </span>
                                            <span className="label-value">
                                            {list.rooms}
                                            </span>
                                          </div>
                                          </div>
                                      </Tooltip>
                                    }
                                  >
                                  <img
                                    src={
                                      parseInt(list.rooms) < 0
                                        ? caretdown
                                        : caretup
                                    }
                                    alt="increase"
                                    width="12"
                                  />
                                  </OverlayTrigger>
                                </div>
                              </div>
                            </td>
                            <td className="content-col">
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="text-col">{list.adr}</div>
                                <div className="icon-col">
                                <OverlayTrigger
                                    key={"top2"}
                                    placement={"top"}
                                    overlay={
                                      <Tooltip
                                        id={`ADR-${i}`}
                                        className="custom-tooltip"
                                      >
                                          <div className="custom-inner-tooltip">
                                          <div className="label-text">ADR</div>
                                          <div className="label-div">
                                            <span className="label-img">
                                            <img
                                              src={
                                                parseInt(list.adr) < 0
                                                  ? caretdown
                                                  : caretup
                                              }
                                              alt="increase"
                                              width="12"
                                            />
                                            </span>
                                            <span className="label-value">
                                            {list.adr}
                                            </span>
                                          </div>
                                          </div>
                                      </Tooltip>
                                    }
                                  >
                                  <img
                                    src={
                                      parseInt(list.adr) < 0
                                        ? caretdown
                                        : caretup
                                    }
                                    alt="increase"
                                    width="12"
                                  />
                                  </OverlayTrigger>
                                </div>
                              </div>
                            </td>
                            <td className="content-col">
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="text-col">
                                  {parseFloat(list.revenue).toLocaleString()}
                                </div>
                                <div className="icon-col">
                                <OverlayTrigger
                                    key={"top2"}
                                    placement={"top"}
                                    overlay={
                                      <Tooltip
                                        id={`Revenue-${i}`}
                                        className="custom-tooltip"
                                      >
                                          <div className="custom-inner-tooltip">
                                          <div className="label-text">Revenue</div>
                                          <div className="label-div">
                                            <span className="label-img">
                                            <img
                                              src={
                                                parseInt(list.revenue) < 0
                                                  ? caretdown
                                                  : caretup
                                              }
                                              alt="increase"
                                              width="12"
                                            />
                                            </span>
                                            <span className="label-value">
                                            {parseFloat(list.revenue).toLocaleString()}
                                            </span>
                                          </div>
                                          </div>
                                      </Tooltip>
                                    }
                                  >
                                  <img
                                    src={
                                      parseInt(list.revenue) < 0
                                        ? caretdown
                                        : caretup
                                    }
                                    alt="increase"
                                    width="12"
                                  />
                                  </OverlayTrigger>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </Table>
            </Col>
            <Col xs={12} md={6}>
              <Table responsive striped className="summary-table mb-0">
                <thead>
                  <tr>
                    <th className="empty-col"></th>
                    <th className="head-col">Rooms</th>
                    <th className="head-col">ADR</th>
                    <th className="head-col">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {TableSecondstate && TableSecondstate.length
                    ? TableSecondstate.map((list: any, i: number) => {
                        return (
                          <tr key={i}>
                            <td className="row-title">
                              {" "}
                              {list.date
                                ? moment(list.date).format("MMMM YYYY")
                                : ""}{" "}
                            </td>
                            <td className="content-col">
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="text-col">{list.rooms} </div>
                                <div className="icon-col">
                                <OverlayTrigger
                                    key={"top2"}
                                    placement={"top"}
                                    overlay={
                                      <Tooltip
                                        id={`Rooms1-${i}`}
                                        className="custom-tooltip"
                                      >
                                          <div className="custom-inner-tooltip">
                                          <div className="label-text">Rooms</div>
                                          <div className="label-div">
                                            <span className="label-img">
                                            <img
                                              src={
                                                parseInt(list.rooms) < 0
                                                  ? caretdown
                                                  : caretup
                                              }
                                              alt="increase"
                                              width="12"
                                            />
                                            </span>
                                            <span className="label-value">
                                            {list.rooms}
                                            </span>
                                          </div>
                                          </div>
                                      </Tooltip>
                                    }
                                  >
                                  <img
                                    src={
                                      parseInt(list.rooms) < 0
                                        ? caretdown
                                        : caretup
                                    }
                                    alt="increase"
                                    width="12"
                                  />
                                  </OverlayTrigger>
                                </div>
                              </div>
                            </td>
                            <td className="content-col">
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="text-col">{list.adr}</div>
                                <div className="icon-col">
                                <OverlayTrigger
                                    key={"top2"}
                                    placement={"top"}
                                    overlay={
                                      <Tooltip
                                        id={`ADR1-${i}`}
                                        className="custom-tooltip"
                                      >
                                          <div className="custom-inner-tooltip">
                                          <div className="label-text">ADR</div>
                                          <div className="label-div">
                                            <span className="label-img">
                                            <img
                                              src={
                                                parseInt(list.adr) < 0
                                                  ? caretdown
                                                  : caretup
                                              }
                                              alt="increase"
                                              width="12"
                                            />
                                            </span>
                                            <span className="label-value">
                                            {list.adr}
                                            </span>
                                          </div>
                                          </div>
                                      </Tooltip>
                                    }
                                  >
                                  <img
                                    src={
                                      parseInt(list.adr) < 0
                                        ? caretdown
                                        : caretup
                                    }
                                    alt="increase"
                                    width="12"
                                  />
                                  </OverlayTrigger>
                                </div>
                              </div>
                            </td>
                            <td className="content-col">
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="text-col">
                                  {parseFloat(list.revenue).toLocaleString()}
                                </div>
                                <div className="icon-col">
                                <OverlayTrigger
                                    key={"top2"}
                                    placement={"top"}
                                    overlay={
                                      <Tooltip
                                        id={`Revenue1-${i}`}
                                        className="custom-tooltip"
                                      >
                                          <div className="custom-inner-tooltip">
                                          <div className="label-text">Revenue</div>
                                          <div className="label-div">
                                            <span className="label-img">
                                            <img
                                              src={
                                                parseInt(list.revenue) < 0
                                                  ? caretdown
                                                  : caretup
                                              }
                                              alt="increase"
                                              width="12"
                                            />
                                            </span>
                                            <span className="label-value">
                                            {parseFloat(list.revenue).toLocaleString()}
                                            </span>
                                          </div>
                                          </div>
                                      </Tooltip>
                                    }
                                  >
                                  <img
                                    src={
                                      parseInt(list.revenue) < 0
                                        ? caretdown
                                        : caretup
                                    }
                                    alt="increase"
                                    width="12"
                                  />
                                  </OverlayTrigger>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </Table>
            </Col>
          </Row>
        </React.Suspense>
      )}
    </>
  );
};

export default SummaryTable;
