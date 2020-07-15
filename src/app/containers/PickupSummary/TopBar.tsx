import React from "react";


const TopBar = () => {
  return (
    <>
      <div className='main-navbar'>
        <div className='navbar-nav-item'>
          <div className='year-nav'>
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
          <div className="nav-btn">By Month</div>
        </div>
        <div className='navbar-nav-item'>
        <div className="nav-btn">Detail View</div>
        </div>
        <div className='navbar-nav-item'>
        <div className="nav-btn">BOB</div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
