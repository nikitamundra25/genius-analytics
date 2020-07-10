import React, { useEffect } from "react";
import { Dropdown } from "react-bootstrap";

import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import moment from "moment";

const TopBar = () => {
  const currentYear = moment().get("year");
  const [state, setState] = React.useState<any>({
    yearOptions: [],
    activeYear: currentYear,
  });

  useEffect(() => {
    const yearOptions = [];
    for (let i = 0; i < 10; i++) {
      yearOptions.push(currentYear - i);
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
  return (
    <>
      <div className='main-navbar'>
        <div className="navbar-nav-item">
            <div className="year-nav">
              <span className="cursor-pointer"><i className="icon-arrow-left "></i></span>
              <span className="mx-3">November</span>
              <span className="cursor-pointer"><i className="icon-arrow-right "></i></span>
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
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Dashboard Monthly</Dropdown.Item>
              <Dropdown.Item>Dashboard Yearly</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default TopBar;
