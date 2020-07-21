import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { useHistory } from "react-router";
import "react-datepicker/dist/react-datepicker.css";
import { AppRoutes } from "../../../config";

const TopBar = () => {
  const [startDate, setStartDate] = useState(new Date());
  let history = useHistory();
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

    setStartDate(setNewDate);
  };

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
              onChange={(date: any) => setStartDate(date)}
              showYearPicker
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
        <div className="navbar-nav-item cursor-pointer"
         onClick={() => history.push(AppRoutes.PICKUPSUMMARY)}
        >
          <div className="nav-btn">By Month</div>
        </div>
        <div
          className="navbar-nav-item cursor-pointer"
          onClick={() => history.push(AppRoutes.PICKUPDETAIL)}
        >
          <div className="nav-btn">Detail View</div>
        </div>
        <div className="navbar-nav-item cursor-pointer"
         onClick={() => history.push(AppRoutes.PICKUPBOB)}
        >
          <div className="nav-btn">BOB</div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
