import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loader.scss";

export const WidgetLoader = (): JSX.Element => (
  <div className='widget-loader'>
    <Spinner animation='border' variant='primary' />
  </div>
);
