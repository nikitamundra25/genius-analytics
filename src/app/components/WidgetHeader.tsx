import React from "react";
import {  Form } from "react-bootstrap";
import { IWidgetHeaderProps } from "../../interfaces";

const WidgetHeader = ({
  title,
  activeToggle = "graph",
  showToggle = true,
  showdropdowndaily = false,
  showdropdownlead = false,
  onToggle ,
  selectedMonthlyData,
  handleChange
}: IWidgetHeaderProps | any) => {

const onhanldeToggle = (str:any)=>{
  onToggle(str)
}

  return (
    <>
      <div className="d-flex align-items-center justify-content-between custom-panel-header">
        <div className="panel-title" >{title}</div>
        {showToggle ? (
          <div className="action-wrap">
            <div
              className={`action-btn ${
                activeToggle === "grid" ? "active" : ""
              }`}
              onClick={()=>onhanldeToggle("grid")}
            >
              <span className="icon-grid"></span>
            </div>
            <div
              className={`action-btn ${
                activeToggle === "graph" ? "active" : ""
              }`}
              onClick={()=>onhanldeToggle("graph")}
            >
              <span className="icon-pie-chart"></span>
            </div>
          </div>
        ) : null}
        {showdropdownlead ? (
          <div className="action-wrap">
            <Form>
              <Form.Group
                controlId="exampleForm.ControlSelect2"
                className="mb-2 cursor_pointer"
              >
                <Form.Control as="select" value={selectedMonthlyData} onChange={handleChange}>
                  <option value="bar">Bar</option>
                  <option value="dis">DIS</option>
                  <option value="corDis">COR DIS</option>
                  <option value="mtg">MTG</option>
                  <option value="cor">COR</option>
                  <option value="corGrp">COR GRP</option>
                  <option value="lesGrp">LES GRP</option>
                  <option value="fit">FIT</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </div>
        ) : null}
        {showdropdowndaily ? (
          <div className="action-wrap cursor_pointer">
            <Form>
              <Form.Group
                controlId="exampleForm.ControlSelect2"
                className="mb-2"
              >
                <Form.Control as="select" value={selectedMonthlyData} onChange={handleChange} >
                  <option value="OCC">OCC</option>
                  <option value="ADR">ADR</option>
                  <option value="RevPAR">RevPAR</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default WidgetHeader;
