import React from "react";
import graphStats from "./GraphStats.json";
import DashboardMonthlyWidget from "./Widget";
import TopBar from "../Home/TopBar";
import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import "../Home/index.scss";

const DashboardYearly = () => {
  const { graphCard } = graphStats;
  const cellSpacing = [5,10];
  return (
    <>
      <div className='animated fadeIn'>
        <TopBar />
        <DashboardLayoutComponent id='defaultLayout' cellSpacing={cellSpacing} allowResizing={false} columns={6} cellAspectRatio ={50/80} >
        {graphCard && graphCard.length ? (
          <DashboardMonthlyWidget graphList={graphCard} />
        ) : null}
         </DashboardLayoutComponent>
      </div>
    </>
  );
};

export default DashboardYearly;
