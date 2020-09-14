import React, {useEffect} from "react";
import { WidgetLoader } from "../../components/Loader/WidgetLoader";
import {
  PivotViewComponent,
  PivotFieldListComponent,
  Inject,
  CalculatedField,
  PivotFieldList,
  IDataSet,
} from "@syncfusion/ej2-react-pivotview";
import { useDispatch, useSelector } from "react-redux";
import { Browser, setStyleAttribute } from "@syncfusion/ej2-base";
// import dataSource from "./pivotDummyData.json";
import { Card } from "react-bootstrap";
import { ErrorComponent } from "../../components/Error";
import { IRootState } from "../../../interfaces";
import { requestPivotTableData } from "../../../actions";

const SAMPLE_CSS = `
.e-pivotview {
    width: 58%;
    height: 100%;
    float: left;
}
.e-pivotfieldlist {
    width: 42%;
    height: 100%;
    float: right;
}
.e-pivotfieldlist .e-static {
    width: 100% !important;
}`;

const PivotTableComponent = () => {
  let fieldlistObj: PivotFieldListComponent;
  let pivotObj: PivotViewComponent;
  // eslint-disable-next-line
  let renderMode: any;
  // eslint-disable-next-line
  let target: any;


  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.pivotTableReducer
  );

  useEffect(() => {
    dispatch(requestPivotTableData());
    // eslint-disable-next-line
  }, []);

  /* tslint:disable */
  let Pivot_Data: IDataSet[] = (data as any);
  let dataSourceSettings: any = {
    dataSource: Pivot_Data,
    expandAll: false,
    allowLabelFilter: true,
    allowValueFilter: true,
    columns: [{ name: "Month" }],
    rows: [{ name: "RT" }],
    values: [{ name: "Price", caption: "Price" }],
    formatSettings: [{ name: "Amount", format: "" }],
    enableSorting: true,
  };

  const afterPopulate = () => {
    if (fieldlistObj && pivotObj) {
      fieldlistObj.updateView(pivotObj);
    }
  };
  const afterPivotPopulate = () => {
    if (!Browser.isDevice && fieldlistObj && pivotObj) {
      fieldlistObj.update(pivotObj);
    }
  };
  // const rendereComplete = () => {
  //   fieldlistObj.updateView(pivotObj);
  //   fieldlistObj.update(pivotObj);
  // };
  const ondataBound = () => {
    pivotObj.tooltip.destroy();
    if (Browser.isDevice) {
      pivotObj.element.style.width = "100%";
      pivotObj.allowCalculatedField = true;
      pivotObj.showFieldList = true;
    }
    pivotObj.refresh();
  };
  const onLoad = () => {
    if (Browser.isDevice) {
      renderMode = "Popup";
      target = ".control-section";
      setStyleAttribute(document.getElementById("PivotFieldList") as any, {
        width: 0,
        height: 0,
        float: "left",
        display: "none",
      });
    }
  };

  return (
    <>
      <Card className="bg-white h-auto mt-3 ">
        <Card.Body>
          <div className="sub-title text-left  mb-3 ">Pivot Table</div>
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
            <div className="control-pane">
              <style>{SAMPLE_CSS}</style>
              <div className="control-section" style={{ overflow: "auto" }}>
                <PivotViewComponent
                  id="PivotView"
                  ref={(d: any) => (pivotObj = d)}
                  enginePopulated={afterPivotPopulate}
                  width={"99%"}
                  height={"580"}
                  gridSettings={{ columnWidth: 140 }}
                >
                  <Inject services={[CalculatedField, PivotFieldList]} />
                </PivotViewComponent>
                <PivotFieldListComponent
                  id="PivotFieldList"
                  ref={(d: any) => (fieldlistObj = d)}
                  enginePopulated={afterPopulate}
                  dataSourceSettings={dataSourceSettings}
                  renderMode={"Fixed"}
                  allowCalculatedField={true}
                  load={onLoad}
                  dataBound={ondataBound}
                >
                  <Inject services={[CalculatedField]} />
                </PivotFieldListComponent>
              </div>
            </div>
          </React.Suspense>
     
       )} 
     </Card.Body>
      </Card>
    </>
  );
};
export default PivotTableComponent;
