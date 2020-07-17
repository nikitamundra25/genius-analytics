import React from "react";
import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import MonthlyPivotData  from './pivot.json';


// let data = localData.data;

let dataSourceSettings = {
  enableSorting: false,
  columns: [{ name: 'Title' }],
  valueSortSettings: { headerDelimiter: ' - ' },
  values: [ { name: 'Amount', caption: 'Sold Amount' }],
  dataSource: MonthlyPivotData.pivotData,
  rows: [{ name: 'Month' }],
  formatSettings: [{ name: 'Amount', format: '' }],
  expandAll: false,
  filters: []
};


const MonthlyTable = (props:{index:number}) => {
const {index} = props;
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
     
                <style>{SAMPLE_CSS}</style>
                    <PivotViewComponent 
                    id={`PivotView-${index}`}
                    dataSourceSettings={dataSourceSettings}
                    width={'100%'} 
                    height={'300'}
                    gridSettings={{ columnWidth: 120 , allowResizing: true }} 
                    >
                    </PivotViewComponent>
              
        
    </>
  );
};

export default MonthlyTable;
