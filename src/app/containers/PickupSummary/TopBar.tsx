import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { useHistory, useLocation } from 'react-router';
import "react-datepicker/dist/react-datepicker.css";
import { AppRoutes } from "../../../config";

const TopBar = (props: any) => {
  const [startDate, setStartDate] = useState(new Date());
  let history = useHistory();
  let location = useLocation();

  const handleMonthNav = (str: string) => {
    let activeYear: number = startDate.getFullYear();
    let activeMonth: number = startDate.getMonth();
    let year: number = str === "previous" ? activeYear - 1 : activeYear + 1;

    let setMonthForDays: any = new Date(
      year,
      parseInt(moment().month(activeMonth).format("M"))
    );

    let setNewDate: any = new Date(
      setMonthForDays.getFullYear(),
      setMonthForDays.getMonth() - 1,
      1
    );
    props.handleDate(setNewDate);
    setStartDate(setNewDate);
  };

  const CustomInput = ({ value, onClick }:any) => (
    <span className="custom-datepicker  cursor-pointer" onClick={onClick}>
      {value}
    </span>
  );
   

  return (
    <>
      <div className="main-navbar">
        <div className="navbar-nav-item">
          <div className="year-nav">
            <span
              className="cursor-pointer mr-2"
              onClick={() => handleMonthNav("previous")}
            >
              <i className="icon-arrow-left "></i>
            </span>
            <DatePicker
              selected={startDate}
              onChange={(date: any) => {
                props.handleDate(date);
                setStartDate(date);
              }}
              showYearPicker
              customInput={<CustomInput />}
              dateFormat="yyyy"
              className="custom-datepicker cursor-pointer"
            />
            <span
              className="cursor-pointer ml-2"
              onClick={() => handleMonthNav("next")}
            >
              <i className="icon-arrow-right "></i>
            </span>
          </div>
        </div>
        <div
          className={`navbar-nav-item cursor-pointer`}
          onClick={() => history.push(AppRoutes.PICKUPSUMMARY)}
        >
          <div className={`nav-btn ${
            location.pathname === AppRoutes.PICKUPSUMMARY ? 'active' : ''
          }`} >By Month</div>
        </div>
        <div
        className={`navbar-nav-item cursor-pointer`}
          onClick={() => history.push(AppRoutes.PICKUPDETAIL)}
        >
          <div className={`nav-btn ${
            location.pathname === AppRoutes.PICKUPDETAIL ? 'active' : ''
          }`}>Detail View</div>
        </div>
        <div
          className={`navbar-nav-item cursor-pointer `}
          onClick={() => history.push(AppRoutes.PICKUPBOB)}
        >
          <div  className={`nav-btn ${
            location.pathname === AppRoutes.PICKUPBOB ? 'active' : ''
          }`}>BOB</div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
