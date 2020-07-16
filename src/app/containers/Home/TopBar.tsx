import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import moment from "moment";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../config";
import MonthPickerModal from "../../components/MonthPickerModal";

const TopBar = (props: any) => {
  const currentYear = moment().get("year");
  const [state, setState] = React.useState<any>({
    yearOptions: [],
    activeYear: currentYear,
    activeMonth: moment().month(),
    startDate: new Date(),
  });

  const [show, setShow] = useState(false);

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

  const onhandleChange = (e: any) => {
    setState({
      ...state,
      activeYear: e.value,
    });
  };

 const handleDatePicker = (date: Date | any) => {
    let year: number = date.getFullYear();
    let month: number = date.getMonth();
    setState({ startDate: date, activeYear: year, activeMonth: month });
    setShow(false)
  };
  
  const handleShow = () => setShow(true);
  
  const { yearOptions: options, activeYear,startDate } = state;

  return (
    <>
      <div className="main-navbar">
        <div className="navbar-nav-item">
          <div className="year-nav" >
            <span
              className="cursor-pointer"
              onClick={() => handleMonthNav("previous")}
            >
              <i className="icon-arrow-left "></i>
            </span>
            <span className="mx-3" onClick={handleShow}>{moment(startDate).format("MMMM")} </span>
            <span
              className="cursor-pointer"
              onClick={() => handleMonthNav("next")}
            >
              <i className="icon-arrow-right "></i>
            </span>
          </div>
        </div>
        <div className="navbar-nav-item">
          <DropDownListComponent
            id="year"
            dataSource={options}
            change={onhandleChange}
            placeholder="Select a year"
            value={activeYear}
            popupHeight="220px"
          />
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
        handleChange={(date: any) => 
          handleDatePicker(date)
         }
      />
    </>
  );
};

export default TopBar;
