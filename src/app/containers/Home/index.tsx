import React ,{FunctionComponent,useEffect}  from "react";
import DashboardWidget from "./Widget";
import TopBar from "./TopBar";
import {useSelector, useDispatch} from 'react-redux'
import {DashboardMainRequest} from '../../../actions';
import { DashboardLayoutComponent } from "@syncfusion/ej2-react-layouts";
import "./index.scss";
import { IRootState } from "../../../interfaces";

const HomeComponent : FunctionComponent = () => {
  // const { graphCard } = graphStats;
  const cellSpacing = [5, 10];
  const dispatch = useDispatch()
  const DashboardReducer = useSelector((state:IRootState) => state.DashboardReducer)
  
  useEffect(() => {
    dispatch(DashboardMainRequest())
    // eslint-disable-next-line
  }, [])

  // To reset drag & drop when select date
 const handleReset = () => {
  // dispatch(DashboardMainRequest())
  }
  
  const {dashboardMainList}= DashboardReducer
  
  return (
    <>
      <TopBar  handleReset={handleReset} />
      <div className="animated fadeIn">
        {dashboardMainList && dashboardMainList.length ? (
        <DashboardLayoutComponent
          id="defaultLayout"
          cellSpacing={cellSpacing}
          allowResizing={false}
          columns={4}
          cellAspectRatio={120 / 140}
          enablePersistence={false}
        >
            <DashboardWidget graphList={dashboardMainList} />
        </DashboardLayoutComponent>
          ) : null}
      </div>
    </>
  );
};

export default HomeComponent;
