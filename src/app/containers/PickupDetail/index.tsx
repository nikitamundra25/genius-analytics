import React from "react";
import graphStats from "./GraphStats.json";
import DashboardWidget from "./Widget";
import TopBar from "./TopBar";
import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import "./index.scss";

const PickupSummary = () => {
  const { graphCard } = graphStats;
  const cellSpacing = [5,10];
  return (
    <>
      <TopBar />
      <div className='animated fadeIn'>
      <DashboardLayoutComponent id='defaultLayout' cellSpacing={cellSpacing} allowResizing={false} columns={6} >
        {graphCard && graphCard.length ? (
          <DashboardWidget graphList={graphCard} />
        ) : null}
        </DashboardLayoutComponent>
      </div>
    </>
  );
};

export default PickupSummary;
