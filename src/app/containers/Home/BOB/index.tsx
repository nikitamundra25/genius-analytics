import React from "react";
import { Card } from "react-bootstrap";
import BOBData  from './BOB.json';
import Loader from "../../../components/Loader/Loader";
import WidgetHeader from "../../../components/WidgetHeader";
const PivotTableComponent = React.lazy(() =>
  import("../../../components/Tables/PivotTable")
);

// let data = localData.data;

let dataSourceSettings = {
  enableSorting: false,
  columns: [{ name: 'Title' }],
  valueSortSettings: { headerDelimiter: ' - ' },
  values: [ { name: 'Amount', caption: 'Amount' }],
  dataSource: BOBData.pivotData,
  rows: [{ name: 'Month' }],
  formatSettings: [{ name: 'Amount', format: '' }],
  expandAll: false,
  showGrandTotals: false,
  filters: []
};

// let toolbarOptions = ['New', 'Save', 'SaveAs', 'Rename', 'Remove', 'Load',
//             'Grid', 'Chart', 'Export', 'SubTotal', 'GrandTotal', 'ConditionalFormatting', 'NumberFormatting', 'FieldList'];
const BOB = (props:any) => {
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
    <Card>
      <WidgetHeader title={"Business on the Books"} activeToggle={"grid"} />
      <Card.Body>
        <React.Suspense fallback={<Loader />}>
        <style>{SAMPLE_CSS}</style>
          <PivotTableComponent
          id={`BOB`}
          dataSourceSettings={dataSourceSettings}
          width={'100%'} 
          height={'300'}
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
      </Card.Body>
    </Card>
     
      
      
    </>
  );
};

export default BOB;

