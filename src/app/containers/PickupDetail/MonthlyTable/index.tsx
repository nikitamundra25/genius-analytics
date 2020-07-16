import React from "react";
import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as localData from './pivotdata.json';


// let data = localData.data;
// let dataSourceSettings = {
//     expandAll: true,
//     enableSorting: true,
//     drilledMembers: [{ name: 'Year', items: ['FY 2015', 'FY 2017', 'FY 2018'] }],
//     formatSettings: [{ name: 'ProCost', format: 'C0' }, { name: 'PowUnits', format: 'N0' }],
//     rows: [
//         { name: 'Year', caption: 'Production Year' },
//         { name: 'HalfYear', caption: 'Half Year' }
//     ],
//     columns: [
//         { name: 'EnerType', caption: 'Energy Type' },
//         { name: 'EneSource', caption: 'Energy Source' }
//     ],
//     values: [
//         { name: 'ProCost', caption: 'Revenue Growth' }
//     ],
//     filters: []
// };

const MonthlyTable = (props:any) => {
//   const{index} = props;
//   const pivotObj = props;
//   // const onhandleChange = (e: any) => {
//   //   setState({
//   //     ...state,
//   //     activeYear: e.value,
//   //   });
//   // };
//   const cellTemplate = (props:any) => {
//     return (<span className="tempwrap e-pivot-trend-neutral pv-icons"></span>);
//   };
// /* jshint ignore:start */
// const trend = (props:any) => {
//     let cTable = [].slice.call(document.getElementsByClassName("e-table"));
//     let colLen = pivotObj.pivotValues[3].length;
//     let cLen = cTable[3].children[0].children.length;
//     let rLen = cTable[3].children[1].children.length;
//     let rowIndx;
//     for (let k = 0; k < rLen; k++) {
//         if (pivotObj.pivotValues[k] && pivotObj.pivotValues[k][0] !== undefined) {
//             rowIndx = (pivotObj.pivotValues[k][0]).rowIndex;
//             break;
//         }
//     }
//     var rowHeaders = [].slice.call(cTable[2].children[1].querySelectorAll('td'));
//     var rows = pivotObj.dataSourceSettings.rows;
//     if (rowHeaders.length > 1) {
//         for (var i = 0, Cnt = rows; i < Cnt.length; i++) {
//             var fields = {};
//             var fieldHeaders = [];
//             for (var j = 0, Lnt = rowHeaders; j < Lnt.length; j++) {
//                 var header = rowHeaders[j];
//                 if (header.className.indexOf('e-gtot') === -1 && header.className.indexOf('e-rowsheader') > -1 && header.getAttribute('fieldname') === rows[i].name) {
//                     var headerName = rowHeaders[j].getAttribute('fieldname') + '_' + rowHeaders[j].textContent;
//                     fields[rowHeaders[j].textContent] = j;
//                     fieldHeaders.push(rowHeaders[j].textContent);
//                 }
//             }
//             if (i === 0) {
//                 for (let rnt = 0, Lnt = fieldHeaders; rnt < Lnt.length; rnt++) {
//                     if (rnt !== 0) {
//                         let row = fields[fieldHeaders[rnt]];
//                         let prevRow = fields[fieldHeaders[rnt - 1]];
//                         for (var j = 0, ci = 1; j < cLen && ci < colLen; j++, ci++) {
//                             if (!cTable[3].children[1].children[row]) {
//                                 break;
//                             }
//                             let node = cTable[3].children[1].children[row].childNodes[j];
//                             let prevNode = cTable[3].children[1].children[prevRow].childNodes[j];
//                             let ri = undefined;
//                             let prevRi = undefined;
//                             if (node) {
//                                 ri = node.getAttribute("index");
//                             }
//                             if (prevNode) {
//                                 prevRi = prevNode.getAttribute("index");
//                             }
//                             if (ri && ri < [].slice.call(pivotObj.pivotValues).length) {
//                                 if ((pivotObj.pivotValues[prevRi][ci]).value > (pivotObj.pivotValues[ri][ci]).value && node.querySelector('.tempwrap')) {
//                                     let trendElement = node.querySelector('.tempwrap');
//                                     trendElement.className = trendElement.className.replace('e-pivot-trend-neutral', 'e-pivot-trend-loss');
//                                 }
//                                 else if ((pivotObj.pivotValues[prevRi][ci]).value < (pivotObj.pivotValues[ri][ci]).value && node.querySelector('.tempwrap')) {
//                                     let trendElement = node.querySelector('.tempwrap');
//                                     trendElement.className = trendElement.className.replace('e-pivot-trend-neutral', 'e-pivot-trend-profit');
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//             else {
//                 for (let rnt = 0, Lnt = fieldHeaders; rnt < Lnt.length; rnt++) {
//                     var row = fields[fieldHeaders[rnt]];
//                     for (let j = 0, ci = 1; j < cLen && ci < colLen; j++, ci++) {
//                         if (!cTable[3].children[1].children[row]) {
//                             break;
//                         }
//                         let node = cTable[3].children[1].children[row].childNodes[j];
//                         let prevNode = cTable[3].children[1].children[row - 1].childNodes[j];
//                         let ri = undefined;
//                         let prevRi = undefined;
//                         if (node) {
//                             ri = node.getAttribute("index");
//                         }
//                         if (prevNode) {
//                             prevRi = prevNode.getAttribute("index");
//                         }
//                         if (ri < [].slice.call(pivotObj.pivotValues).length) {
//                             let cRowFieldName = cTable[2].children[1].children[row].childNodes[0].getAttribute('fieldname');
//                             let prevRowFieldName = cTable[2].children[1].children[row - 1].childNodes[0].getAttribute('fieldname');
//                             if ((pivotObj.pivotValues[prevRi][ci]).value > (pivotObj.pivotValues[ri][ci]).value && node.querySelector('.tempwrap') &&
//                                 cRowFieldName === prevRowFieldName) {
//                                 let trendElement = node.querySelector('.tempwrap');
//                                 trendElement.className = trendElement.className.replace('e-pivot-trend-neutral', 'e-pivot-trend-loss');
//                             }
//                             else if ((pivotObj.pivotValues[prevRi][ci]).value < (pivotObj.pivotValues[ri][ci]).value && node.querySelector('.tempwrap') &&
//                                 cRowFieldName === prevRowFieldName) {
//                                 let trendElement = node.querySelector('.tempwrap');
//                                 trendElement.className = trendElement.className.replace('e-pivot-trend-neutral', 'e-pivot-trend-profit');
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// };
// /* jshint ignore:end */
// const onLoad = (props:any) => {
//     if (data[0].Year === undefined) {
//         let date;
//         for (let ln = 0, lt = data.length; ln < lt; ln++) {
//             date = new Date(data[ln].Date.toString());
//             let dtYr = date.getFullYear();
//             let dtMn = date.getMonth();
//             let dtdv = (dtMn + 1) / 3;
//             data[ln].Year = 'FY ' + dtYr;
//             data[ln].Quarter = dtdv <= 1 ? 'Q1 ' + ('FY ' + dtYr) : dtdv <= 2 ? 'Q2 ' + ('FY ' + dtYr) :
//                 dtdv <= 3 ? 'Q3 ' + ('FY ' + dtYr) : 'Q4 ' + ('FY ' + dtYr);
//             data[ln].HalfYear = (dtMn + 1) / 6 <= 1 ? 'H1 ' + ('FY ' + dtYr) : 'H2 ' + ('FY ' + dtYr);
//             delete (data[ln].Date);
//         }
//     }
//     pivotObj.dataSourceSettings.dataSource = data;
// };
  return (
    <>
      <div className='control-pane'>
                <div className='control-section' style={{ overflow: 'auto' }}>
                    {/* <PivotViewComponent 
                    id={`PivotView-${index}`}
                    // id='PivotView' 
                    dataSourceSettings={dataSourceSettings} 
                    width={'100%'} 
                    height={'300'}
                    gridSettings={{ columnWidth: 140 }} 
                    // load={this.onLoad} 
                    // dataBound={this.trend} 
                    // ref={(pivotview) => { pivotObj = pivotview; }} 
                    // cellTemplate={this.cellTemplate.bind(this)}
                    >
                    </PivotViewComponent> */}
                </div>
            </div>
        
    </>
  );
};

export default MonthlyTable;
