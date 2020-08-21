import moment from "moment";
export const getMonths = () => {
  return moment.months();
};


export const getMonthsData = (date: any) => {
  let daysInMonth = [];
  let monthDate = moment(date).startOf("month");
  for (let i = 0; i < monthDate.daysInMonth(); i++) {
    let newDay = monthDate.clone().add(i, "days");
    daysInMonth.push(newDay);
  }
  return daysInMonth;
};

export const generateArrayOfMonths = (date:Date) => {
  const months: any = [];
  const dateStart =  date ? moment(date) : moment() ;
  const dateEnd = moment(dateStart).add(17, "months");
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
