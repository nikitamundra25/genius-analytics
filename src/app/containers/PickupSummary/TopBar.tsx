import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TopBar = () => {
  const [startDate, setStartDate] = useState(new Date());
  
  
  return (
    <>
      <div className='main-navbar'>
        <div className='navbar-nav-item'>
          <div className='year-nav' >
            <span className='cursor-pointer mr-2'>
              <i className='icon-arrow-left '></i>
            </span>
              <DatePicker
              selected={startDate}
              onChange={(date: any) => setStartDate(date)}
              showYearPicker
              dateFormat="yyyy"
              className="custom-datepicker cursor-pointer"
            />
            <span className='cursor-pointer ml-2'>
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
        <div className="nav-btn" 
          
                >BOB</div>
        </div>
      </div>
     
    </>
  );
};

export default TopBar;
