import React, { forwardRef, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { useHistory, useLocation } from "react-router";
import "react-datepicker/dist/react-datepicker.css";
import { AppRoutes } from "../../../config";

const TopBar = (props: any) => {
  const ref = React.createRef();
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

  const CustomInput = forwardRef(({ onClick, value }: any, ref) => (
    <span className="custom-datepicker  cursor-pointer" onClick={onClick}>
      {value}
    </span>
  ));

  // let todayDate:Date = new Date()
  // let isPrevdateSelection: Boolean = false;
  // let selectedDate:Date|any = moment(startDate).format(checkDateFormat);
  // let currentDate:Date|any = moment(new Date()).format(checkDateFormat);
  // if (selectedDate <= currentDate) {
  //   isPrevdateSelection = false;
  // } else {
  //   isPrevdateSelection = true;
  // }
 
  useEffect(() => {
    window.addEventListener('scroll', scrollFunction);
   // eslint-disable-next-line
 }, []);

 

  const scrollFunction = () => {
    const scrollbutton: HTMLElement | null = document.getElementById('toTop');
    if (scrollbutton) {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        scrollbutton.style.display = 'flex';
      } else {
        scrollbutton.style.display = 'none';
      }
    }
  };

  const scrollToTop = () => {
  // detect support for the behavior property in ScrollOptions
  const supportsNativeSmoothScroll: boolean =
    "scrollBehavior" in document.documentElement.style;
  if (supportsNativeSmoothScroll) {
      window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    window.scrollTo(0, 0);
  }
  };
  let dateCond :Date | any = moment().format("dddd") ===  "Monday"  ? moment(new Date()).subtract(3, "days") : moment(new Date()).subtract(1, "days") 
  return (
    <>
      <div
        className={`main-navbar ${
          location.pathname === AppRoutes.PICKUPBOB  ? "justify-content-end" : ""
        }`}
      >
        {location.pathname === AppRoutes.PICKUPBOB  ? (
          ""
        ) : (
          <div className="main-title">
            Pick-up since {moment(dateCond ).format("Do")} of{" "}
            {moment(dateCond ).format("MMMM")}
          </div>
        )}

        <div className="navbar-list">
          { location.pathname === AppRoutes.PICKUPBOB ? 
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
                // minDate={new Date(todayDate.getFullYear(),0,1 )}
                customInput={<CustomInput ref={ref} />}
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
          : null
          }

          <div
            className={`navbar-nav-item cursor-pointer`}
            onClick={() => history.push(AppRoutes.PICKUPSUMMARY)}
          >
            <div
              className={`nav-btn ${
                location.pathname === AppRoutes.PICKUPSUMMARY ? "active" : ""
              }`}
            >
              By Month
            </div>
          </div>
          <div
            className={`navbar-nav-item cursor-pointer`}
            onClick={() => history.push(AppRoutes.PICKUPDETAIL)}
          >
            <div
              className={`nav-btn ${
                location.pathname === AppRoutes.PICKUPDETAIL ? "active" : ""
              }`}
            >
              Detail View
            </div>
          </div>
          <div
            className={`navbar-nav-item cursor-pointer `}
            onClick={() => history.push(AppRoutes.PICKUPBOB)}
          >
            <div
              className={`nav-btn ${
                location.pathname === AppRoutes.PICKUPBOB ? "active" : ""
              }`}
            >
              BOB
            </div>
          </div>
        </div>
      </div>
      <span
          className='back-top cursor-pointer'
          onClick={scrollToTop}
          //onClick={() => setCount(count + 1)}
          id='toTop'
        >
          <i className='fa fa-angle-up' />
        </span>
    </>
  );
};

export default TopBar;
