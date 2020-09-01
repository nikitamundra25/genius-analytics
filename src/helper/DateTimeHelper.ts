import moment from "moment";
import { monthYearFormat } from "../config";
export const getMonths = () => {
  return moment.months();
};




export const getMonthsData = (date: any, name:string) => {
  let daysInMonth = [];
  let newDay :any
  let monthDate = moment(date).startOf("month");
  let daysCount: number = monthDate.daysInMonth()
  if(moment(date).format(monthYearFormat) === moment().subtract(1, "days").format(monthYearFormat) &&  name === "pickupData" ){
    monthDate = moment(date);
    let endDate = moment().endOf("month");
    daysCount =  endDate.diff(monthDate, 'days');
  }
  
  for (let i = 0; i < daysCount; i++) {
       newDay = monthDate.clone().add(i, "days");
      daysInMonth.push(newDay);
  }
  return daysInMonth;
};

// Find array of months from current year upto 17 months
export const generateArrayOfMonths = (date:any, monthToAdd:any) => {
  const months: any = [];
  const dateStart =  date ? moment(date) : moment() ;
  const dateEnd = moment(dateStart).add(monthToAdd, "months");
  while (dateEnd.diff(dateStart, "months") >= 0) {  
    months.push({
      name: dateStart.format("MMMM YYYY"),
      id: dateStart.format("M"),
      date: dateStart.format("YYYY-MM-DD")
    });
    dateStart.add(1, "month");
  }
  return months;
};

// Find array of 12 months 
export const generateArrayofBOBData = (date:Date) => {
  const months: any = [];
  let m = moment(date);  
  
  for (var i = 0; i < 12; i++)             // Loop from 0 to 12 (exclusive)
  months.push({
    name: m.months(i).format("MMMM YYYY"),
    id: m.months(i).format("M"),
    date: m.months(i).format("YYYY-MM-DD")
  });              
           // Return the array of month
  return months;
};