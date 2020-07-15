import React from "react";
import { Card } from "react-bootstrap";
import { IWidgetHeaderProps } from "../../interfaces";

const WidgetHeader = ({
  title,
  activeToggle = "graph",
  showToggle = true,
}: IWidgetHeaderProps) => {
  return (
    <>
      <Card.Header className='d-flex align-items-center justify-content-between'>
        <Card.Title>{title}</Card.Title>
        {showToggle ? (
          <div className='action-wrap'>
            <div
              className={`action-btn ${
                activeToggle === "grid" ? "active" : ""
              }`}>
              <span className='icon-grid'></span>
            </div>
            <div
              className={`action-btn ${
                activeToggle === "graph" ? "active" : ""
              }`}>
              <span className='icon-pie-chart'></span>
            </div>
          </div>
        ) : null}
      </Card.Header>
    </>
  );
};

export default WidgetHeader;
