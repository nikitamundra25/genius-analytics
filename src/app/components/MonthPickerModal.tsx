import React from "react";
import { Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MonthPickerModal = (props: any) => {

  const {show,startDate,handleClose,handleChange} = props;

  return (
    <>
      <Modal show={show} onHide={handleClose} size="sm" centered>
        <Modal.Body>
        
        <DatePicker
            selected={startDate}
            onChange={(date:any) => handleChange(date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            inline
            className="custom-datepicker"
          />
        </Modal.Body>
        
      </Modal>
    </>
  );
};

export default MonthPickerModal;
