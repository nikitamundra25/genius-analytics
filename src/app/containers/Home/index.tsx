import React from "react";
import graphStats from "./GraphStats.json";
import DashboardWidget from "./Widget";
import TopBar from "./TopBar";
import "./index.scss";

const HomeComponent = () => {
  const { graphCard } = graphStats;
  return (
    <>
      <TopBar />
      <div className='animated fadeIn'>
        {graphCard && graphCard.length ? (
          <DashboardWidget graphList={graphCard} />
        ) : null}
      </div>
    </>
  );
};

export default HomeComponent;
