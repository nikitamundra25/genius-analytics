import React from "react";
import { Card } from "react-bootstrap";
import TableData  from './Table.json';
import Loader from "../../../components/Loader/Loader";
import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';

// let data = localData.data;

let dataSourceSettings = {
  enableSorting: false,
  columns: [{ name: 'Month' }, { name: 'col-subtitle' }],
  valueSortSettings: { headerDelimiter: ' - ' },
  values: [ { name: 'Amount', caption: 'Amount' }],
  dataSource: TableData.pivotData,
  rows: [{ name: 'Title' }],
  formatSettings: [{ name: 'Amount', format: '' }],
  expandAll: true,
  showRowGrandTotals : false,
  showColumnSubTotals : false,
  filters: []
  
};




// let toolbarOptions = ['New', 'Save', 'SaveAs', 'Rename', 'Remove', 'Load',
//             'Grid', 'Chart', 'Export', 'SubTotal', 'GrandTotal', 'ConditionalFormatting', 'NumberFormatting', 'FieldList'];
const CumulativeTable = (props:any) => {
  // const cellTemplate = (props:any) => {
  //   // console.log("hello chart");
  //   return (<span className="tempwrap e-pivot-trend-neutral pv-icons"></span>);
  // }
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
    .e-pivotview .e-grid .e-rowcell , .e-grid .e-headercelldiv {
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
  return (
    <>

    <Card>
      <Card.Body>
        <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
        <style>{SAMPLE_CSS}</style>
        <PivotViewComponent 
          id='PivotViewTable' 
          dataSourceSettings={dataSourceSettings} 
          width={'100%'} 
          height={'300'} 
          gridSettings={{ columnWidth: 80,  allowResizing: true }}
          // cellTemplate={cellTemplate}
             
                        
                        >
        </PivotViewComponent>
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


