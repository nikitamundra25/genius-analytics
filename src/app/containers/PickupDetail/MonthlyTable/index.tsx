import React from "react";
import Loader from "../../../components/Loader/Loader";
const PivotTableComponent = React.lazy(() =>
  import("../../../components/Tables/PivotTable")
);


const MonthlyTable = (props:any) => {
const {index,graphdata} = props;

let dataSourceSettings = {
  enableSorting: false,
  columns: [{ name: 'Title' }],
  valueSortSettings: { headerDelimiter: ' - ' },
  values: [ { name: 'Amount', caption: 'Amount' }],
  dataSource: graphdata,
  rows: [{ name: 'Month' }],
  formatSettings: [{ name: 'Amount', format: '' }],
  expandAll: false,
  filters: [],
  conditionalFormatSettings: [
    {
        measure: 'Amount',
        value1: 0,
        conditions: 'LessThan',
        style: {
            color: 'red',
            
        }
    },
  ]
};


const SAMPLE_CSS = `
.e-pivotview{
  font-size:12px !important;
}
    .e-pivotview .e-summary:not(.e-gtot) {
         background-color: pink !important;
         
    }

    .e-pivotview .e-headercell {
      background-color: #538dd6 !important;
    }
    .e-pivotview  .e-headertext {
      color:#fff !important;
      font-size:12px !important;
      font-weight: 500;
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
  return (
    <>
     
      <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
          <style>{SAMPLE_CSS}</style>
          <PivotTableComponent
          id={`PivotView-${index}`}
          dataSourceSettings={dataSourceSettings}
          width={'100%'} 
          height={'300'}
          TableSettings={{
              TableComponent: {
                gridSettings: {columnWidth: 120 , allowResizing: true },
                allowConditionalFormatting: true ,
               
              },
          }}
          
          />
      </React.Suspense>
      
    </>
  );
};

export default MonthlyTable;
