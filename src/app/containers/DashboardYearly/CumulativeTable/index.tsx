import React from "react";
import { Card } from "react-bootstrap";
import TableData from "./Table.json";
import Loader from "../../../components/Loader/Loader";
import { PivotViewComponent } from "@syncfusion/ej2-react-pivotview";
import './index.scss';
// let data = localData.data;
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);

let graphdata =[
  {
    name: "Q1",
    OCC: 50,
    ADR: 64
  },
  {
    name: "Q2",
    OCC: 88,
    ADR: 80
  },
  {
    name: "Q3",
    OCC: 74,
    ADR: 76
  },
  {
    name: "Q4",
    OCC: 74,
    ADR: 76
  }
]

const Charts1 = [
  {
    dataSource: graphdata,
    xName: "name",
    yName: "OCC",
    type: "Column",
    fill: "#3a71b4",
    name: "OCC %",
    width: 1,
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: {
          fontWeight: "600",
          color: "#ffffff",
        },
      },
    },
  },
  {
    dataSource: graphdata,
    xName: "name",
    yName: "ADR",
    type: "Line",
    fill: "#bb423d",
    name: "ADR",
    width: 2,
    marker: {
      visible: true,
      width: 8,
      height: 8,
      fill: "#bb423d",
      border: { width: 0, color: "#bb423d" },
      dataLabel: {
        visible: false,
        position: "Top",
        font: {
          fontWeight: "600",
          color: "#000000",
        },
      },
    },
  },
];


let dataSourceSettings = {
  enableSorting: false,
  columns: [{ name: "Month" }, { name: "col-subtitle" }],
  valueSortSettings: { headerDelimiter: " - " },
  values: [{ name: "Amount", caption: "Amount" }],
  dataSource: TableData.pivotData,
  rows: [{ name: "Title" }],
  formatSettings: [{ name: "Amount", format: "" }],
  expandAll: true,
  showGrandTotals: false,
  filters: [],
};
// let toolbarOptions = ['New', 'Save', 'SaveAs', 'Rename', 'Remove', 'Load',
//             'Grid', 'Chart', 'Export', 'SubTotal', 'GrandTotal', 'ConditionalFormatting', 'NumberFormatting', 'FieldList'];
const CumulativeTable = (props: any) => {
  let pivotObj: any;
  const cellTemplate = (props: any) => {
    console.log("hello chart",props);
    return (
      <div>
      <div className="header-addon-text">
        <span className="header-text">BUD </span>
        <span className="header-text"> LY  </span>
      </div>
      <div className="arrow-div">
        <span className="tempwrap e-pivot-trend-profit pv-icons"> {trend()} </span>
        <span className="tempwrap e-pivot-trend-profit pv-icons"> {trend()} </span>
      </div>
      <div>
      <span className=""> {pivotChart()} </span>
      </div>
    </div>
  );
  };



  const SAMPLE_CSS = `
.e-pivotview{
  font-size:12px !important;
}
    .e-pivotview .e-summary:not(.e-gtot) {
         background-color: pink !important;
         
    }

    .e-pivotview .e-headercell {
      background-color: #0074a7 !important;
    }
    .e-pivotview  .e-headertext,  .e-pivotview .e-rowsheader .e-cellvalue, .e-pivotview .e-stackedheadercelldiv {
      color:#fff !important;
      font-size:12px !important;
      font-weight: 500;
    }
     .e-grid .e-headercelldiv {
      text-align: center;
  }
    
    .e-pivotview .e-grid .e-rowsheader {
      background-color: #0074a7 !important;
      text-align: left;
  }
  

     .e-pivotview .e-gtot  {
    background-color: #16365d !important;
    font-size:12px !important;
    color: #fff !important;
  }

  .e-pivotview .e-gtot .e-cellvalue, .e-pivotview .e-rowcell .e-gtot .e-cellvalue {
    color:#fff !important;
      font-size:12px !important;
      font-weight: 500;
  }
  `;


  const pivotChart = () =>{
    if(pivotObj !== null){
      if(pivotObj && pivotObj.pivotValues &&  pivotObj.pivotValues.length ){
        console.log("pivotObj.pivotValues",pivotObj.pivotValues);
     if(pivotObj.pivotValues[12].length){
       for (let index = 0; index < pivotObj.pivotValues[12].length; index++) {
         const element = pivotObj.pivotValues[12][index];
         console.log("element.rowHeaders",element);
         if(element.rowHeaders === "Business Mix"  && element.rowIndex === 12 ){
            pivotObj.pivotValues[12][index].formattedText = `<dl>
            <dt>
              Browser market share June 2015
            </dt>
            <dd class="percentage percentage-11"><span class="text">IE 11: 11.33%</span></dd>
            <dd class="percentage percentage-49"><span class="text">Chrome: 49.77%</span></dd>
            <dd class="percentage percentage-16"><span class="text">Firefox: 16.09%</span></dd>
            <dd class="percentage percentage-5"><span class="text">Safari: 5.41%</span></dd>
            <dd class="percentage percentage-2"><span class="text">Opera: 1.62%</span></dd>
            <dd class="percentage percentage-2"><span class="text">Android 4.4: 2%</span></dd>
          </dl>`
         }else{
            pivotObj.pivotValues[12][index].value = ""
         }
       }
     }else{
     }
      }
    }
  }



  const trend = () => {
    if(pivotObj !== null){
      if(pivotObj && pivotObj.pivotValues &&  pivotObj.pivotValues.length ){
    let cTable: any = [].slice.call(document.getElementsByClassName("e-table"));

    

    let colLen = pivotObj.pivotValues[3].length;
    let cLen = cTable[3].children[0].children.length;
    let rLen = cTable[3].children[1].children.length;
    // eslint-disable-next-line
    let rowIndx;
    
    for (let k = 0; k < rLen; k++) {
      if (pivotObj.pivotValues[k] && pivotObj.pivotValues[k][0] !== undefined) {
        rowIndx = pivotObj.pivotValues[k][0].rowIndex;
        break;
      }
    }
    let rowHeaders: any = [].slice.call(
      cTable[2].children[1].querySelectorAll("td")
    );
    let rows = pivotObj.dataSourceSettings.rows;
    
    if (rowHeaders.length > 1) {
      for (let i = 0, Cnt = rows; i < Cnt.length; i++) {
        let fields: any = {};
        let fieldHeaders: any = [];
        for (let j = 0, Lnt = rowHeaders; j < Lnt.length; j++) {
          let header: any = rowHeaders[j];
          if (
            header.className.indexOf("e-gtot") === -1 &&
            header.className.indexOf("e-rowsheader") > -1 &&
            header.getAttribute("fieldname") === rows[i].name
          ) {
            // let headerName =
            //   rowHeaders[j].getAttribute("fieldname") +
            //   "_" +
            //   rowHeaders[j].textContent;
            fields[rowHeaders[j].textContent] = j;
            fieldHeaders.push(rowHeaders[j].textContent);
          }
        }
        
        if (i === 0) {
          for (let rnt = 0, Lnt = fieldHeaders; rnt < Lnt.length; rnt++) {
            if (rnt !== 0) {
              let row = fields[fieldHeaders[rnt]];
              let prevRow = fields[fieldHeaders[rnt - 1]];
              for (let j = 0, ci = 1; j < cLen && ci < colLen; j++, ci++) {
                if (!cTable[3].children[1].children[row]) {
                  break;
                }
                let node = cTable[3].children[1].children[row].childNodes[j];
                let prevNode =
                  cTable[3].children[1].children[prevRow].childNodes[j];
                let ri = undefined;
                let prevRi = undefined;
                if (node) {
                  ri = node.getAttribute("index");
                }
                if (prevNode) {
                  prevRi = prevNode.getAttribute("index");
                }
                if (ri && ri < [].slice.call(pivotObj.pivotValues).length) {
                  if (
                    pivotObj.pivotValues[prevRi][ci].value >
                      pivotObj.pivotValues[ri][ci].value &&
                    node.querySelector(".tempwrap")
                  ) {
                    let trendElement = node.querySelector(".tempwrap");
                    trendElement.className = trendElement.className.replace(
                      "e-pivot-trend-profit",
                      "e-pivot-trend-loss"
                    );
                  } else if (
                    pivotObj.pivotValues[prevRi][ci].value <
                      pivotObj.pivotValues[ri][ci].value &&
                    node.querySelector(".tempwrap")
                  ) {

                    let trendElement = node.querySelector(".tempwrap");
                    trendElement.className = trendElement.className.replace(
                      "e-pivot-trend-profit",
                      "e-pivot-trend-profit"
                    );
                  }
                }
              }
            }
          }
        } else {
          for (let rnt = 0, Lnt = fieldHeaders; rnt < Lnt.length; rnt++) {
            let row = fields[fieldHeaders[rnt]];
            for (let j = 0, ci = 1; j < cLen && ci < colLen; j++, ci++) {
              if (!cTable[3].children[1].children[row]) {
                break;
              }
              let node = cTable[3].children[1].children[row].childNodes[j];
              let prevNode =
                cTable[3].children[1].children[row - 1].childNodes[j];
              let ri = undefined;
              let prevRi = undefined;
              if (node) {
                ri = node.getAttribute("index");
              }
              if (prevNode) {
                prevRi = prevNode.getAttribute("index");
              }
              if (ri < [].slice.call(pivotObj.pivotValues).length) {
                let cRowFieldName = cTable[2].children[1].children[
                  row
                ].childNodes[0].getAttribute("fieldname");
                let prevRowFieldName = cTable[2].children[1].children[
                  row - 1
                ].childNodes[0].getAttribute("fieldname");
                if (
                  pivotObj.pivotValues[prevRi][ci].value >
                    pivotObj.pivotValues[ri][ci].value &&
                  node.querySelector(".tempwrap") &&
                  cRowFieldName === prevRowFieldName
                ) {
                  let trendElement = node.querySelector(".tempwrap");
                  trendElement.className = trendElement.className.replace(
                    "e-pivot-trend-profit",
                    "e-pivot-trend-loss"
                  );
                } else if (
                  pivotObj.pivotValues[prevRi][ci].value <
                    pivotObj.pivotValues[ri][ci].value &&
                  node.querySelector(".tempwrap") &&
                  cRowFieldName === prevRowFieldName
                ) {
                  let trendElement = node.querySelector(".tempwrap");
                  trendElement.className = trendElement.className.replace(
                    "e-pivot-trend-profit",
                    "e-pivot-trend-profit"
                  );
                }
              }
            }
          }
        }
      }
    }

}
}
  };

  return (
    <>
      <Card>
        <Card.Body>
          <React.Suspense
            fallback={
              <div className="card-loader">
                <Loader />
              </div>
            }
          >
            <style>{SAMPLE_CSS}</style> 
            <div className="control-pane">
        <div className="control-section" style={{ overflow: "auto" }}>
            <PivotViewComponent
              id="PivotView"
              dataSourceSettings={dataSourceSettings}
              width={"100%"}
              height={"350"}
              gridSettings={{ columnWidth: 130, allowResizing: true }}
              cellTemplate={cellTemplate}
              dataBound={trend}
              ref={(pivotview: any) => {
                pivotObj = pivotview;
              }}
            ></PivotViewComponent>
            </div>
            </div>
            {/* <PivotTableComponent
          id={`BOB`}
          dataSourceSettings={dataSourceSettings}
          width={'100%'} 
          height={'350'}
          TableSettings={{
              TableComponent: {
                gridSettings: {columnWidth: 130 , allowResizing: true },
              },
          }}
          
          /> */}
          </React.Suspense>
        </Card.Body>
      </Card>
    </>
  );
};

export default CumulativeTable;