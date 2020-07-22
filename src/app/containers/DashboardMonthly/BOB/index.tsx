import React from "react";
import { Card } from "react-bootstrap";
import MonthlyBOBData  from './MonthlyBOBData.json';
import Loader from "../../../components/Loader/Loader";
const PivotTableComponent = React.lazy(() =>
  import("../../../components/Tables/PivotTable")
);

// let data = localData.data;

let dataSourceSettings = {
  enableSorting: false,
  columns: [{ name: 'Month' }],
  valueSortSettings: { headerDelimiter: ' - ' },
  values: [ { name: 'Amount', caption: 'Amount' }],
  dataSource: MonthlyBOBData.pivotData,
  rows: [{ name: 'Title' }, { name: 'SubTitle' }],
  formatSettings: [{ name: 'Amount', format: '' }],
  expandAll: true,
  showRowGrandTotals : false,
  showSubTotals: false ,
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

// let toolbarOptions = ['New', 'Save', 'SaveAs', 'Rename', 'Remove', 'Load',
//             'Grid', 'Chart', 'Export', 'SubTotal', 'GrandTotal', 'ConditionalFormatting', 'NumberFormatting', 'FieldList'];
const MonthlyBOB = (props:any) => {
const SAMPLE_CSS = `
.e-pivotview{
  font-size:12px !important;
}
    .e-pivotview .e-summary:not(.e-gtot) {
         background-color: pink !important;
         
    }

    .e-pivotview .e-headercell {
      background-color: #007aab !important;
    }
    .e-pivotview  .e-headertext,  .e-pivotview .e-rowsheader .e-cellvalue {
      color:#fff !important;
      font-size:12px !important;
      font-weight: 500;
    }
    .e-pivotview .e-grid .e-rowcell , .e-grid .e-headercelldiv {
      text-align: center;
  }
    
    .e-pivotview .e-grid .e-rowsheader {
      background-color: #6ea0b7 !important;
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
  return (
    <>
    <Card>
      <Card.Body>
        <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
        <style>{SAMPLE_CSS}</style>
          <PivotTableComponent
          id={`BOB`}
          dataSourceSettings={dataSourceSettings}
          width={'100%'} 
          height={'300'}
          TableSettings={{
              TableComponent: {
                gridSettings: {columnWidth: 90 , allowResizing: true },
                
                // showFieldList: true,
                // allowExcelExport: true ,
                allowConditionalFormatting: true ,
                //allowNumberFormatting:true,
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

export default MonthlyBOB;


