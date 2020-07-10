import React from "react";
import graphStats from "./GraphStats.json";
import DashboardMonthlyWidget from "./Widget";
import TopBar from "../Home/TopBar";
import "../Home/index.scss";

const HomeComponent = () => {
  const { graphCard } = graphStats;
  return (
    <>
      <TopBar />
      <div className='animated fadeIn'>
        {graphCard && graphCard.length ? (
          <DashboardMonthlyWidget graphList={graphCard} />
        ) : null}
      </div>
    </>
  );
};

export default HomeComponent;
