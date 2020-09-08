import React from "react";
import { WidgetLoader } from "../../components/Loader/WidgetLoader";
import { PivotViewComponent } from "@syncfusion/ej2-react-pivotview";
import dataSource from "./pivotDummyData.json";
import { Card } from "react-bootstrap";

const PivotTableComponent = () => {
  let dataSourceSettings: any = {
    enableSorting: true,
    columns: [{ name: "Year" }, { name: "Quarter" }],
    valueSortSettings: { headerDelimiter: " - " },
    values: [
      { name: "Sold", caption: "Units Sold" },
      { name: "Amount", caption: "Sold Amount" },
    ],
    dataSource: dataSource.pivotData,
    rows: [{ name: "Country" }, { name: "Products" }],
    formatSettings: [{ name: "Amount", format: "C0" }],
    expandAll: false,
    filters: [],
  };
  return (
    <>
      <Card className="bg-white h-auto mt-3 ">
        <Card.Body>
          <div className="sub-title text-left  mb-3 ">Pivot Table</div>

          <React.Suspense
            fallback={
              <div className="card-loader">
                <WidgetLoader />
              </div>
            }
          >
            <div className="">
              <PivotViewComponent
                id="PivotView"
                dataSourceSettings={dataSourceSettings}
                width={"100%"}
                height={"290"}
                gridSettings={{ columnWidth: 140 }}
              ></PivotViewComponent>
            </div>
          </React.Suspense>
        </Card.Body>
      </Card>
    </>
  );
};
export default PivotTableComponent;
