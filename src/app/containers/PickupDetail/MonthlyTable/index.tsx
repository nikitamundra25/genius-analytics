import React from "react";
import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import MonthlyPivotData  from './MonthlyPivotData.json';


// let data = localData.data;

let dataSourceSettings = {
  enableSorting: true,
  columns: [{ name: 'Year' }, { name: 'Quarter' }],
  valueSortSettings: { headerDelimiter: ' - ' },
  values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
  dataSource: MonthlyPivotData.pivotData,
  rows: [{ name: 'Country' }, { name: 'Products' }],
  formatSettings: [{ name: 'Amount', format: 'C0' }],
  expandAll: false,
  filters: []
};


const MonthlyTable = (props:{index:number}) => {
const {index} = props;
  return (
    <>
      <div className='control-pane'>
                <div className='control-section' style={{ overflow: 'auto' }}>
                    <PivotViewComponent 
                    id={`PivotView-${index}`}
                    dataSourceSettings={dataSourceSettings}
                    width={'100%'} 
                    height={'300'}
                    gridSettings={{ columnWidth: 140 }} 
                    >
                    </PivotViewComponent>
                </div>
            </div>
        
    </>
  );
};

export default MonthlyTable;
