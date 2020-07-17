import React, { useState } from "react";
import MonthPickerModal from "../../components/MonthPickerModal";


const TopBar = () => {
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
            <span className='mx-3'>2018</span>
            <span className='cursor-pointer'>
              <i className='icon-arrow-right '></i>
            </span>
          </div>
        </div>
        <div className='navbar-nav-item'>
          <div className="nav-btn">By Month</div>
        </div>
        <div className='navbar-nav-item' >
        <div className="nav-btn">Detail View</div>
        </div>
        <div className='navbar-nav-item'>
        <div className="nav-btn">BOB</div>
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
