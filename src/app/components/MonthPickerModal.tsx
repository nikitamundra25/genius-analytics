import React ,{useState,useEffect} from "react";
import { Modal, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IMonthPickerProps } from "../../interfaces";

const MonthPickerModal = (props: IMonthPickerProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { show,startDate, handleClose, handleChange ,isYearSelection} = props;

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
      <Modal show={show} onHide={handleClose} size="sm" centered>
        {/* <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header> */}

        <Modal.Body>
          <DatePicker
            selected={selectedDate}
            onChange={(date: any) => ondateChange(date)}
            dateFormat= {isYearSelection ? "yyyy"  : "MM/yyyy" }
            showMonthYearPicker = {!isYearSelection ? true : false}
            showYearPicker = {isYearSelection ? true : false}
            inline
            className="custom-datepicker"
          />
          <div className="d-flex justify-content-end mt-2">
            <Button variant="secondary" className="mr-2" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={()=> handleChange(selectedDate)}  >Confirm</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MonthPickerModal;
