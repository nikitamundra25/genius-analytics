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
  });

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
  
  const onhandleChange = (e: any) => {
    setState({
      ...state,
      activeYear: e.value,
    });
  };
  const { yearOptions: options, activeYear } = state;

  const [startDate, setStartDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='main-navbar'>
        <div className='navbar-nav-item'>
          <div className='year-nav' onClick={handleShow}>
            <span className='cursor-pointer'>
              <i className='icon-arrow-left '></i>
            </span>
            <span className='mx-3'>November</span>
            <span className='cursor-pointer'>
              <i className='icon-arrow-right '></i>
            </span>
          </div>
        </div>
        <div className='navbar-nav-item'>
          <DropDownListComponent
            id='year'
            dataSource={options}
            change={onhandleChange}
            placeholder='Select a year'
            value={activeYear}
            popupHeight='220px'
          />
        </div>
        <div className='navbar-nav-item'>
          <Dropdown className='dashboard-dropdown common-dropdown'>
            <Dropdown.Toggle variant='success' id='dropdown-dasboard'>
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
     handleChange={(date:any) => setStartDate(date)}
     />
    </>
  );
};

export default TopBar;
