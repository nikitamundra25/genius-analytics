import React, { useEffect } from "react";
import { WidgetLoader } from "../../components/Loader/WidgetLoader";
import {
  PivotViewComponent,
  IDataOptions,
  Inject,
  FieldList,
  CalculatedField,
  Toolbar,
  PDFExport,
  ExcelExport,
  ConditionalFormatting,
  // SaveReportArgs,
  // FetchReportArgs,
  // LoadReportArgs,
  // RemoveReportArgs,
  // RenameReportArgs,
  NumberFormatting,
  ToolbarItems,
  IDataSet,
} from "@syncfusion/ej2-react-pivotview";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import { ErrorComponent } from "../../components/Error";
import { IRootState } from "../../../interfaces";
import { requestPivotTableData } from "../../../actions";



const PivotTableComponent = () => {
  // eslint-disable-next-line
  let pivotObj: PivotViewComponent;

  let toolbarOptions: ToolbarItems[] | undefined = [
    // "New",
    // "Save",
    // "SaveAs",
    // "Rename",
    // "Remove",
    // "Load",
    "Grid",
    "Chart",
    "Export",
    "SubTotal",
    "GrandTotal",
    "Formatting",
    "FieldList",
  ];

  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.pivotTableReducer
  );

  useEffect(() => {
    dispatch(requestPivotTableData("pivotTable.json"));
    // eslint-disable-next-line
  }, []);


  /* tslint:disable */
  let Pivot_Data: IDataSet[] = data as any;
  let dataSourceSettings: IDataOptions = {
    dataSource: Pivot_Data,
    expandAll: false,  
    allowLabelFilter: true,
    allowValueFilter: true,
    columns: [{ name: "Month" }],
    rows: [{ name: "RT" }],
    values: [{ name: "Price", caption: "Price" }],
    formatSettings: [{ name: "Price", format: "" }],
    enableSorting: true,
  };

  // const saveReport = (args: any) => {
  //   let reports: SaveReportArgs[] = [];
  //   let isSaved: boolean = false;
  //   if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
  //     reports = JSON.parse(localStorage.pivotviewReports);
  //   }


  //   if (args.report && args.reportName && args.reportName !== "") {
  //     reports.map((item: any) => {
  //       if (args.reportName === item.reportName) {
  //         item.report = args.report;
  //            isSaved = true;
  //       }
  //       return isSaved;
  //     });
  //     if (!isSaved) {
  //       reports.push(args);
  //     }
  //     localStorage.pivotviewReports = JSON.stringify(reports);
  //   }
  // };
  // const fetchReport = (args: FetchReportArgs | any) => {
  //   let reportCollection: string[] = [];
  //   let reeportList: string[] = [];
  //   if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
  //     reportCollection = JSON.parse(localStorage.pivotviewReports);
  //   }
  //   reportCollection.map( (item: any) => {
  //    return reeportList.push(item.reportName);
  //   });
  //   args.reportName = reeportList;
  // };
  // const loadReport = (args: LoadReportArgs | any) => {
  //   let reportCollection: string[] = [];
  //   if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
  //     reportCollection = JSON.parse(localStorage.pivotviewReports);
  //   }
  //   reportCollection.map( (item: any) => {
  //     if (args.reportName === item.reportName) {
  //        args.report = item.report;
  //     }
  //     return args.report
  //   });
  //   if (args.report) {
  //     pivotObj.dataSourceSettings = JSON.parse(args.report).dataSourceSettings;
  //   }
  // };
  // const removeReport = (args: RemoveReportArgs | any) => {
  //   let reportCollection: any[] = [];
  //   if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
  //     reportCollection = JSON.parse(localStorage.pivotviewReports);
  //   }
  //   for (let i = 0; i < reportCollection.length; i++) {
  //     if (reportCollection[i].reportName === args.reportName) {
  //       reportCollection.splice(i, 1);
  //     }
  //   }
  //   if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
  //     localStorage.pivotviewReports = JSON.stringify(reportCollection);
  //   }
  // };
  // const renameReport = (args: RenameReportArgs | any) => {
  //   let reportsCollection: any[] = [];
  //   if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
  //     reportsCollection = JSON.parse(localStorage.pivotviewReports);
  //   }
  //   if (args.isReportExists) {
  //     for (let i = 0; i < reportsCollection.length; i++) {
  //       if (reportsCollection[i].reportName === args.rename) {
  //         reportsCollection.splice(i, 1);
  //       }
  //     }
  //   }
  //   reportsCollection.map( (item: any) => {
  //     if (args.reportName === item.reportName) {
  //       item.reportName = args.rename;
  //     }
  //     return item.reportName
  //   });
  //   if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
  //     localStorage.pivotviewReports = JSON.stringify(reportsCollection);
  //   }
  // };
  // const newReport = () => {
  //   pivotObj.setProperties(
  //     {
  //       dataSourceSettings: { columns: [], rows: [], values: [], filters: [] },
  //     },
  //     false
  //   );
  // };
  const beforeToolbarRender = (args: any): void => {
    args.customToolbar.splice(3, 0, {
      type: "Separator",
    });
    args.customToolbar.splice(3, 0, {
      type: "Separator",
    });
  };
  const chartOnLoad = (args: any) => {
   let selectedTheme: string =  "Material";
    args.chart.theme =
      selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
  };

  return (
    <>
      <Card className="bg-white h-auto mt-3 ">
        <Card.Body>
          <div className="sub-title text-left  mb-3 ">Pivot Table</div>
          {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
            <React.Suspense
              fallback={
                <div className="card-loader">
                  <WidgetLoader />
                </div>
              }
            >
              <div className="control-pane">
               
                <div
                  className="control-section"
                  id="pivot-table-section"
                  style={{ overflow: "initial" }}
                >
                  <PivotViewComponent
                    id="PivotView"
                    ref={(scope: any) => {
                      pivotObj = scope;
                    }}
                    dataSourceSettings={dataSourceSettings}
                    width={"100%"}
                    height={"450"}
                    showFieldList={true}
                    gridSettings={{ columnWidth: 140 }}
                    allowExcelExport={true}
                    allowNumberFormatting={true}
                    allowConditionalFormatting={true}
                    allowPdfExport={true}
                    showToolbar={true}
                    allowCalculatedField={true}
                    displayOption={{ view: "Both" }}
                    toolbar={toolbarOptions}
                    // newReport={newReport}
                    // renameReport={renameReport}
                    // removeReport={removeReport}
                    // loadReport={loadReport}
                    // fetchReport={fetchReport}
                    // saveReport={saveReport}
                    toolbarRender={beforeToolbarRender}
                    chartSettings={{
                      title: "Data Analysis",
                      load: chartOnLoad,
                    }}
                  >
                    <Inject
                      services={[
                        FieldList,
                        CalculatedField,
                        Toolbar,
                        PDFExport,
                        ExcelExport,
                        ConditionalFormatting,
                        NumberFormatting,
                      ]}
                    />
                  </PivotViewComponent>
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
