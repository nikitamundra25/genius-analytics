import React from "react";
import { PivotViewComponent, Inject, FieldList, CalculatedField, Toolbar, PDFExport, ExcelExport, ConditionalFormatting, NumberFormatting } from '@syncfusion/ej2-react-pivotview';

export const PivotTableComponent = ({
  id,
  dataSourceSettings,
  width = "100%",
  height,
  TableSettings
}: any) => {
  return (
    <>
      <PivotViewComponent 
      id={`PivotView-${id}`}
      dataSourceSettings={dataSourceSettings}
      width={width}
      height={height}
      {...TableSettings.TableComponent}
      //gridSettings={{ columnWidth: 120 , allowResizing: true }} 
      >
          <Inject services={[FieldList, CalculatedField, Toolbar, PDFExport, ExcelExport, ConditionalFormatting, NumberFormatting]}/>
      </PivotViewComponent>
    </>
  );
};

export default PivotTableComponent;
