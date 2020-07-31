import React from "react";
import { Card, Form } from "react-bootstrap";
import { IWidgetHeaderProps } from "../../interfaces";

const WidgetHeader = ({
  title,
  activeToggle = "graph",
  showToggle = true,
  showdropdowndaily = false,
  showdropdownlead = false,
  onToggle 
}: IWidgetHeaderProps | any) => {

const onhanldeToggle = (str:any)=>{
  onToggle(str)
}

  return (
    <>
      <Card.Header className="d-flex align-items-center justify-content-between">
        <Card.Title>{title}</Card.Title>
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
                className="mb-2"
              >
                <Form.Control as="select">
                  <option>Bar</option>
                  <option>2</option>
                  <option>3</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </div>
        ) : null}
        {showdropdowndaily ? (
          <div className="action-wrap">
            <Form>
              <Form.Group
                controlId="exampleForm.ControlSelect2"
                className="mb-2"
              >
                <Form.Control as="select">
                  <option>OCC</option>
                  <option>2</option>
                  <option>3</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </div>
        ) : null}
      </Card.Header>
    </>
  );
};

export default WidgetHeader;
