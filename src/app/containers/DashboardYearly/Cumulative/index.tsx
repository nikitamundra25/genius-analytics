import React, { useEffect } from "react";
import moment from "moment";
import {
  Table,
  OverlayTrigger,
  Tooltip,
  ProgressBar,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestCumulativeTableData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { getMonths } from "../../../../helper";
import caretup from "../../../../assets/img/caret-up.svg";
import caretdown from "../../../../assets/img/caret-down.svg";

import pickup from "../../../../assets/img/pickup.svg";
import mix from "../../../../assets/img/mix.svg";

import roomnights from "../../../../assets/img/roomnights.svg";
import occ from "../../../../assets/img/occ.svg";
import adr from "../../../../assets/img/adr.svg";
import revenue from "../../../../assets/img/revenue.svg";
import revpar from "../../../../assets/img/revpar.svg";

const months = getMonths();
months.push("Total");

const CumulativeTable = ({ selectedDate }: any) => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.CumulativeTableReducer
  );
  useEffect(() => {
    dispatch(requestCumulativeTableData());
    // eslint-disable-next-line
  }, []);

  return (
    <>
    
          {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
            <>
              <div className="dashboard-yearly-table ">
                <Table className="yearly-table mb-0" responsive striped>
                  <thead>
                    <tr className="business-top-row">
                      <th className="empty-head"></th>

                      {months.map((month: string, index: number) => (
                        <th key={month} className="head-col ">
                          {month}
                        </th>
                      ))}
                    </tr>

                    <tr className="business-top-row">
                      <th className="empty-head"></th>

                      {months.map((month: string, index: number) => (
                        <th key={month} className="head-col bg-1">
                          {month === "Total"
                            ? moment(selectedDate).format("YYYY")
                            : moment(selectedDate).format("YYYY") >
                              moment().format("YYYY")
                            ? "BOB"
                            : moment(selectedDate).format("YYYY") <
                              moment().format("YYYY")
                            ? "Actual"
                            : moment().format("MMMM") === month
                            ? "BOB/Actual"
                            : index + 1 > parseInt(moment().format("M"))
                            ? "BOB"
                            : "Actual"}
                        </th>
                      ))}
                    </tr>

                    <tr className="business-top-row">
                      <th className="empty-head"></th>

                      {months.map((month: string, index: number) => (
                        <th key={month} className="head-col bg-2 ">
                          <div className="header-sub-title">
                            <span>BUD</span>
                            <span>LY</span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data && data.pickupTableData.length
                      ? data.pickupTableData.map((list: any, index: number) => {
                          // let newArr:any = []
                          // for (let index = 0; index < list.subData.length; index++) {
                          //   const element: any = list.subData[index].value;
                          //   newArr.push(element)
                          // }
                          // let maxArr = newArr.reduce(function(final:any, current:any) {
                          //   for (let i = 0; i < final.length; ++i) {
                          //     if (current[i] > final[i]) {
                          //       final[i] = current[i];
                          //     }
                          //   }
                          //   return final;
                          // });
                          return list.subData.map(
                            (subdata: any, ind: number) => {
                              return (
                                <>
                                  <tr key={ind}>
                                    {ind === 0 ? (
                                      <td
                                        colSpan={14}
                                        className=" sperator-white-section"
                                      ></td>
                                    ) : null}
                                  </tr>
                                  <tr key={ind}>
                                    {ind === 0 ? (
                                      <td
                                        colSpan={14}
                                        className="sperator-gray-section "
                                      ></td>
                                    ) : null}
                                  </tr>

                                  {list.type === "arrowData" ? (
                                    <tr>
                                      <td className="row-title">
                                        <OverlayTrigger
                                          key={"top2"}
                                          placement={"top"}
                                          overlay={
                                            <Tooltip id={`tooltiparrow-${ind}`}>
                                              {subdata.name}
                                            </Tooltip>
                                          }
                                        >
                                          <div className="d-flex align-items-center subtitle-section">
                                            {subdata.name === "Room Nights" ? (
                                              <img
                                                src={roomnights}
                                                width="20px"
                                                alt={subdata.name}
                                              />
                                            ) : subdata.name === "OCC %" ? (
                                              <img
                                                src={occ}
                                                width="20px"
                                                alt={subdata.name}
                                              />
                                            ) : subdata.name === "ADR" ? (
                                              <img
                                                src={adr}
                                                width="20px"
                                                alt={subdata.name}
                                              />
                                            ) : subdata.name === "Revenue" ? (
                                              <img
                                                src={revenue}
                                                width="20px"
                                                alt={subdata.name}
                                              />
                                            ) : subdata.name === "RevPAR" ? (
                                              <img
                                                src={revpar}
                                                width="20px"
                                                alt={subdata.name}
                                              />
                                            ) : null}

                                            <span>{subdata.name}</span>
                                          </div>
                                        </OverlayTrigger>
                                      </td>
                                      {months.map(
                                        (month: any, index: number) => (
                                          <td
                                            key={`month-${index}`}
                                            className={`content-col`}
                                          >
                                            <div className="d-flex align-items-center flex-wrap">
                                              <div className="text-col">
                                                {" "}
                                                {subdata.value &&
                                                subdata.value.length
                                                  ? subdata.type === "occ" ||
                                                    subdata.type === "room-dev"
                                                    ? subdata.value[index]
                                                    :  parseFloat(
                                                          subdata.value[index]
                                                        ).toLocaleString()
                                                  : 0}
                                              </div>
                                              <OverlayTrigger
                                                key={"top1"}
                                                placement={"top"}
                                                overlay={
                                                  <Tooltip
                                                    id={`tooltip-increase`}
                                                    className="custom-tooltip"
                                                  >
                                                    <div className="custom-inner-tooltip">
                                                      <div className="label-text">BUD</div>
                                                      <div className="label-div">
                                                        <span className="label-img">
                                                          <img
                                                            src={
                                                              parseInt(
                                                                subdata.vsBud[index]
                                                              ) < 0
                                                                ? caretdown
                                                                : caretup
                                                            }
                                                            alt="increase"
                                                            width="12"
                                                          />
                                                        </span>
                                                        <span className="label-value">
                                                        {subdata.vsBud &&
                                                        subdata.vsBud.length
                                                          ? subdata.type ===
                                                              "occ" ||
                                                            subdata.type ===
                                                              "room-dev"
                                                            ? subdata.vsBud[index]
                                                            : parseInt(
                                                                subdata.vsBud[index]
                                                              ).toLocaleString()
                                                          : 0}
                                                        </span>
                                                      </div>
                                                    
                                                      </div>
                                                  </Tooltip>
                                                 
                                                }
                                              >
                                                <div className="icon-col">
                                                  <img
                                                    src={
                                                      parseInt(
                                                        subdata.vsBud[index]
                                                      ) < 0
                                                        ? caretdown
                                                        : caretup
                                                    }
                                                    alt="increase"
                                                    width="12"
                                                  />
                                                </div>
                                              </OverlayTrigger>
                                              <OverlayTrigger
                                                key={"top2"}
                                                placement={"top"}
                                                overlay={
                                                  <Tooltip
                                                    id={`tooltip-decrease`}
                                                    className="custom-tooltip"
                                                  >
                                                     <div className="custom-inner-tooltip">
                                                      <div className="label-text">LY</div>
                                                      <div className="label-div">
                                                        <span className="label-img">
                                                          <img
                                                            src={
                                                              parseInt(
                                                                subdata.vsLy[index]
                                                              ) < 0
                                                                ? caretdown
                                                                : caretup
                                                            }
                                                            alt="decrease"
                                                            width="12"
                                                          />
                                                        </span>
                                                        <span className="label-value">
                                                        {subdata.vsLy &&
                                                          subdata.vsLy.length
                                                            ? subdata.type ===
                                                                "occ" ||
                                                              subdata.type ===
                                                                "room-dev"
                                                              ? subdata.vsLy[index]
                                                              : parseInt(
                                                                  subdata.vsLy[index]
                                                                ).toLocaleString()
                                                            : 0}
                                                        </span>
                                                      </div>
                                                    
                                                      </div>
                                                    
                                                  </Tooltip>
                                                }
                                              >
                                                <div className="icon-col">
                                                  <img
                                                    src={
                                                      parseInt(
                                                        subdata.vsLy[index]
                                                      ) < 0
                                                        ? caretdown
                                                        : caretup
                                                    }
                                                    alt="decrease"
                                                    width="12"
                                                  />
                                                </div>
                                              </OverlayTrigger>
                                            </div>
                                          </td>
                                        )
                                      )}
                                    </tr>
                                  ) : (
                                    <>
                                      <tr>
                                        <td className="row-title ">
                                          <OverlayTrigger
                                            key={"top2"}
                                            placement={"top"}
                                            overlay={
                                              <Tooltip id={`tooltip-${ind}`}>
                                                {list.title}
                                              </Tooltip>
                                            }
                                          >
                                            <div className="d-flex align-items-center subtitle-section">
                                              {list.title === "Pick-up" ? (
                                                <img
                                                  src={pickup}
                                                  width="20px"
                                                  alt={list.title}
                                                />
                                              ) : list.title ===
                                                "Business Mix" ? (
                                                <img
                                                  src={mix}
                                                  width="20px"
                                                  alt={list.title}
                                                />
                                              ) : null}

                                              <span>{subdata.name}</span>
                                            </div>
                                          </OverlayTrigger>
                                        </td>
                                        {months.map((value: any, i: number) =>
                                          list.type === "label" ? (
                                            <td
                                              key={`${i}`}
                                              className={`content-col ${parseInt(subdata.value[i]) < 0 ? "text-danger" : "" } `}
                                            >
                                              {subdata.value[i]
                                                ?  parseFloat(subdata.value[i]).toLocaleString()
                                                : null}
                                            </td>
                                          ) : (
                                            <td
                                              key={`${i}`}
                                              className={`content-col`}
                                            >
                                              <ProgressBar
                                                now={subdata.value[i]}
                                                className="custom-bar"
                                                //label={`${value}%`}
                                                max={80}
                                              />
                                              <span className="progressbar-value">
                                                {subdata.value[i]}%
                                              </span>
                                            </td>
                                          )
                                        )}
                                      </tr>
                                    </>
                                  )}
                                </>
                              );
                            }
                          );
                        })
                      : null}
                  </tbody>
                </Table>
              </div>
            </>
          )}
     
    </>
  );
};

export default CumulativeTable;
