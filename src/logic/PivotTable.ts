import { createLogic, Logic } from "redux-logic";
import {
  PivotTableActionTypes,
  PivotTableDataFailed,
  PivotTableDataSuccess,
  togglePivotTableLoader,
  requestPivotTableData
} from "../actions";
import { ApiHelper } from "../helper";

const getpivotTableLogic = createLogic({
  type: PivotTableActionTypes.REQUETS_PIVOT_TABLE_DATA,
  process: async ({ action,getState }: any, dispatch: any, done) => {
    dispatch(
      togglePivotTableLoader({
        isLoading: true,
      })
    );
   
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "PivotTable",
      `/${action.payload}`,
      "GET"
    );
    if (isError) {
      dispatch(PivotTableDataFailed());
      done();
      return;
    }
    let prevData:any = getState().pivotTableReducer.data;
    let newData: any = prevData.concat(data.pivotData)
    let totalRecords:number = newData.length
    dispatch(
      PivotTableDataSuccess({
        data: newData,
        totalRecords
      })
      )
      if(totalRecords !== 82887 ){
        if(action.payload === "pivotTable.json" ){
          dispatch(requestPivotTableData("pivotData2.json"))
        }else if(action.payload === "pivotData2.json"){
          dispatch(requestPivotTableData("pivotData3.json"))
        }else if(action.payload === "pivotData3.json"){
          dispatch(requestPivotTableData("pivotData4.json"))
        }
      }
    done();
  },
});




export const PivotTableLogics: Logic[] = [
  getpivotTableLogic as Logic
];
