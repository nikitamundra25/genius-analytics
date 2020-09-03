import React ,{useEffect} from "react";
import MixedCharts from "../../../components/Charts/MixedCharts";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import { ErrorComponent } from "../../../components/Error";
import { requestRGIYOYVarianceData, requestRGIYOYVariancePastData, requestRGIYOYVarianceFutureData } from "../../../../actions";
import { checkDateFormat } from "../../../../config";

import moment from "moment";

const RGIVariance =  ({date }:any) => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.RGIYOYVarianceReducer
  );
 
  // useEffect(() => {
  //   dispatch(requestRGIYOYVarianceData());
  //   // eslint-disable-next-line
  // }, []);

  useEffect(() => {

    let selectedDate = moment(date).format(checkDateFormat);
    // const selectedDate: any = new Date(date);
    let currentDate = moment(new Date()).format(checkDateFormat);
    if (selectedDate > currentDate) {
      dispatch(requestRGIYOYVarianceFutureData());
    } else if (selectedDate < currentDate) {
      dispatch(requestRGIYOYVariancePastData());
    } else if (selectedDate === currentDate) {
      dispatch(requestRGIYOYVarianceData());
    }

    // eslint-disable-next-line
  }, [date]);


  const Charts = [
    {
      dataSource: data,
      xName: "x",
      yName: "y1",
      type: "Bar",
     // fill: "#3467a6",
      fill: "url(#hotel-chart)",
      name: "HOTEL",
      width: 1,
      cornerRadius:{ bottomLeft: 0, bottomRight: 4, topLeft: 0, topRight: 4 },
      marker: {
        dataLabel: {
          visible: true,
          rx: 10,
          ry: 10,
          font: {
            fontWeight: "600",
            color: "#000",
          },
        },
      },
    },
    {
      dataSource: data,
      xName: "x",
      yName: "y2",
      type: "Bar",
      //fill: "#819bc6",
      fill: "url(#market-chart)",
      name: "MARKET",
      width: 1,
      cornerRadius:{ bottomLeft: 0, bottomRight: 4, topLeft: 0, topRight: 4 },
      marker: {
        dataLabel: {
          visible: true,
          rx: 10,
          ry: 10,
          font: {
            fontWeight: "600",
            color: "#000",
          },
        },
      },
    },
  ];

  const SAMPLE_CSS = `
      #hotel-chart stop {
      stop-color: #3467a6;
    }
    #hotel-chart stop[offset="0"] {
      stop-opacity: 1;
    }
    #hotel-chart stop[offset="1"] {
      stop-opacity: 1;
    }

    #market-chart stop {
      stop-color: #819bc6;
    }
    #market-chart stop[offset="0"] {
      stop-opacity: 1;
    }
    #market-chart stop[offset="1"] {
      stop-opacity: 1;
    }

    `;

  return (
    <>
    <style>
          {SAMPLE_CSS}
      </style>
    {/* <Card id="rgi-card">
      <WidgetHeader title={"RGI YoY Variance"} activeToggle={"graph"} showToggle={false} />
      <Card.Body> */}
      {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
            <React.Suspense fallback={<div className="card-loader"><WidgetLoader /></div>}>
        <MixedCharts
          id='adfdsf'
          charts={Charts}
          // legend = {false}
          chartSettings={{
            primaryXAxis: {
              valueType: "Category",
              interval: 1,
              majorGridLines: { width: 0 },
            },
            primaryYAxis: {
              labelFormat: "{value}%",
              edgeLabelPlacement: "Shift",
              majorGridLines: { width: 0 },
              majorTickLines: { width: 0 },
              lineStyle: { width: 0 },
              labelStyle: {
                color: "transparent",
              },
            },
            tooltip: { enable: true }, 
            // height: setHeight,
          }}
        />
          </React.Suspense>
        )}
      {/* </Card.Body>
    </Card> */}

    <svg style={{ height: '0' }}>
        <defs>
            <linearGradient id="hotel-chart" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" />
                <stop offset="1" />
            </linearGradient>
        </defs>
    </svg>

    <svg style={{ height: '0' }}>
        <defs>
            <linearGradient id="market-chart" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" />
                <stop offset="1" />
            </linearGradient>
        </defs>
    </svg>

    </>
  );
};

export default RGIVariance