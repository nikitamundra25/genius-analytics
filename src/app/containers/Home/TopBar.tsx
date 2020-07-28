import React, { useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import moment from "moment";
import { useHistory,useLocation } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AppRoutes } from "../../../config";

const TopBar = (props: any) => {
  const currentYear = moment().get("year");
  let history = useHistory();
  let { pathname } = useLocation();
  const [state, setState] = React.useState<any>({
    yearOptions: [],
    activeYear: currentYear,
    activeMonth: moment().month(),
    startDate: new Date(),
  });
  const [selectedNav, setselectedNav] = React.useState<string>("Dashboard");
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

  useEffect(() => {
    let str = "Dashboard"
    if(pathname === "/dashboard/yearly"){
      str = "Dashboard Yearly"
    }else if(pathname === "/dashboard/monthly"){
      str = "Dashboard Monthly"
    }
    setselectedNav(str)
  }, [ pathname]);

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
    props.handleReset();
    setState({
      ...state,
      activeMonth: month,
      activeYear: year,
      startDate: setNewDate,
    });
  };

  // To change Date
  const ondateChange = (date: Date, str: string) => {
    const { startDate } = state;
    let year: number;
    let month: number;
    let setNewDate: any;
    if (str === "month") {
      year = date.getFullYear();
      month = date.getMonth();
      setNewDate = date;
    } else {
      year = date.getFullYear();
      month = startDate.getMonth();
      setNewDate = new Date(year, month, 1);
    }
    setState({
      activeYear: year,
      activeMonth: month,
      startDate: setNewDate,
    });
    props.handleReset();
  };
  const CustomInput = ({ value, onClick }:any) => (
    <span className="example-custom-input cursor-pointer" onClick={onClick}>
      {value}
    </span>
  );
  const { startDate } = state;

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
              selected={startDate}
              onChange={(date: any) => ondateChange(date, "month")}
              showMonthYearPicker
              dateFormat="MMMM"
              className="custom-datepicker cursor-pointer"
              customInput={<CustomInput />}
              // minDate={new Date("2010/01/01")}
              // maxDate={new Date()}
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
            selected={startDate}
            onChange={(date: any) => ondateChange(date, "year")}
            showYearPicker
            dateFormat="yyyy"
            className="custom-datepicker cursor-pointer"
            customInput={<CustomInput />}
            // minDate={new Date("2010/01/01")}
            // maxDate={new Date()}
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
              {selectedNav}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                eventKey="Dashboard"
                active={selectedNav === "Dashboard" ? true : false}
                onClick = {()=> history.push(AppRoutes.HOME)}
                // onSelect={handleSelect}
              >
                Dashboard
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="Dashboard Monthly"
                active={selectedNav === "Dashboard Monthly" ? true : false}
                onClick = {()=> history.push(AppRoutes.DASHBOARDMONTHLY)}
                // onSelect={handleSelect}
              >
                Dashboard Monthly
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="Dashboard Yearly"
                active={selectedNav === "Dashboard Yearly" ? true : false}
                onClick = {()=> history.push(AppRoutes.DASHBOARDYEARLY)}
                // onSelect={handleSelect}
              >
                Dashboard Yearly
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default TopBar;
