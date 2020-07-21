import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import moment from "moment";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../config";
import MonthPickerModal from "../../components/MonthPickerModal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const TopBar = (props: any) => {
  const currentYear = moment().get("year");
  const [state, setState] = React.useState<any>({
    yearOptions: [],
    activeYear: currentYear,
    activeMonth: moment().month(),
    startDate: new Date(),
  });

  const [show, setShow] = useState(false);
  const [isYearSelection, setIsYearSelection] = useState(false);

  useEffect(() => {
    const yearOptions = [];
    for (let i = currentYear; i >= 2010; i--) {
      yearOptions.push(i);
    }
    setState({
      ...state,
      yearOptions,
    });
    // eslint-disable-next-line
  }, []);

  const handleMonthNav = (str: string) => {
    const { activeMonth, activeYear } = state;
    let month: number = str === "previous" ? activeMonth - 1 : activeMonth + 1;
    let year: number = parseInt(activeYear);
    if (str === "previous") {
      // To check if active month is january than set month to december & year to previous year
      if (activeMonth === 0) {
        month = 11;
        year = activeYear - 1;
      }
    } else {
      if (activeMonth === 11) {
        month = 0;
        year = activeYear + 1;
      }
    }
    let setMonthForDays: any = new Date(
      year,
      parseInt(moment().month(month).format("M"))
    );

    let setNewDate: any = new Date(
      setMonthForDays.getFullYear(),
      setMonthForDays.getMonth() - 1,
      1
    );

    setState({
      ...state,
      activeMonth: month,
      activeYear: year,
      startDate: setNewDate,
    });
  };

  const handleDatePicker = (date: Date | any) => {
    let year: number = date.getFullYear();
    let month: number = date.getMonth();
    setState({ startDate: date, activeYear: year, activeMonth: month });
    setShow(false);
  };

  const handleShow = (str:string) => {
    setShow(true)
    if(str === "year"){
      setIsYearSelection(true)
    }else{
      setIsYearSelection(false)
    }
  };
  const { startDate } = state;

  const [selectedDate, setSelectedDate] = useState(new Date());
  // Set date when modal open
  useEffect(() => {
    setSelectedDate(startDate)
    // eslint-disable-next-line
  }, [show]);

// To change Date
  const ondateChange = (date: Date) => {
    setSelectedDate(date)
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
            {/* <span className="mx-3" onClick={()=>handleShow("") }>
              {moment(startDate).format("MMMM")}{" "}
            </span> */}
            <DatePicker
              selected={selectedDate}
              onChange={(date: any) => ondateChange(date)}
              showMonthYearPicker
              dateFormat="MMMM"
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
        <div className="navbar-nav-item">
          {/* <span className="cursor-pointer" onClick={()=>handleShow("year")}>
            {moment(startDate).format("YYYY")}{" "}
          </span> */}
          <DatePicker
            selected={selectedDate}
            onChange={(date: any) => ondateChange(date)}
            showYearPicker
            dateFormat="yyyy"
            className="custom-datepicker cursor-pointer"
          />
          
          {/* <DropDownListComponent
            id="year"
            dataSource={options}
            change={onhandleChange}
            placeholder="Select a year"
            value={activeYear}
            popupHeight="220px"
          /> */}
          
        </div>
        <div className="navbar-nav-item">
          <Dropdown className="dashboard-dropdown common-dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-dasboard">
              Dashboard
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to={AppRoutes.HOME}>Dashboard</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={AppRoutes.DASHBOARDMONTHLY}>Dashboard Monthly</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={AppRoutes.DASHBOARDYEARLY}>Dashboard Yearly</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <MonthPickerModal
        show={show}
        startDate={startDate}
        handleClose={() => setShow(false)}
        handleChange={(date: any) => handleDatePicker(date)}
        isYearSelection={isYearSelection}
      />
    </>
  );
};

export default TopBar;
