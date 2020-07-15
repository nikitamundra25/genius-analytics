import React from "react";
import graphStats from "./GraphStats.json";
import DashboardMonthlyWidget from "./Widget";
import TopBar from "../Home/TopBar";
import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import "../Home/index.scss";

const DashboardMonthly = () => {
  const { graphCard } = graphStats;
  const cellSpacing = [5,10];
  return (
    <>
      <TopBar />
      <div className='animated fadeIn'>
      <DashboardLayoutComponent id='defaultLayout' cellSpacing={cellSpacing} allowResizing={true} columns={4} >
        {graphCard && graphCard.length ? (
          <DashboardMonthlyWidget graphList={graphCard} />
        ) : null}
        </DashboardLayoutComponent>
      </div>
    </>
  );
};

export default DashboardMonthly;
