import React from "react";
import Loader from "../../../components/Loader/Loader";
const PivotTableComponent = React.lazy(() =>
  import("../../../components/Tables/PivotTable")
);

// let data = localData.data;


// let toolbarOptions = ['New', 'Save', 'SaveAs', 'Rename', 'Remove', 'Load',
//             'Grid', 'Chart', 'Export', 'SubTotal', 'GrandTotal', 'ConditionalFormatting', 'NumberFormatting', 'FieldList'];
const MonthlyTable = (props:any) => {
  const {index, tabledata} = props;
  
  let dataSourceSettings = {
    enableSorting: false,
    columns: [{ name: 'Title' }],
    valueSortSettings: { headerDelimiter: ' - ' },
    values: [ { name: 'Amount', caption: 'Amount' }],
    dataSource: tabledata,
    rows: [{ name: 'Month' }],
    formatSettings: [{ name: 'Amount', format: '' }],
    expandAll: false,
    showGrandTotals: false,
    filters: []
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
    
        <React.Suspense fallback={<Loader />}>
        <style>{SAMPLE_CSS}</style>
          <PivotTableComponent
          id={`PivotView-${index}`}
          dataSourceSettings={dataSourceSettings}
          width={'100%'} 
          height={'200'}
          TableSettings={{
              TableComponent: {
                gridSettings: {columnWidth: 85 , allowResizing: true },
                
                // showFieldList: true,
                // allowExcelExport: true ,
                // allowConditionalFormatting: true ,
                // allowNumberFormatting:true,
                // allowPdfExport:true ,
                // showToolbar:true,
                // allowCalculatedField:true ,
                // displayOption:{ view: 'Both' } ,
                // toolbar:toolbarOptions ,
              },
          }}
          
          />
        </React.Suspense>
      
    </>
  );
};

export default MonthlyTable;


