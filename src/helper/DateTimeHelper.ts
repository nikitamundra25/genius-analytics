import moment from "moment";
export const getMonths = () => {
  return moment.months();
};

 export const getMonthsData = (date:any) =>{
  let daysInMonth = [];
  let monthDate = moment(date).startOf('month'); 
  for(let i=0;i<monthDate.daysInMonth();i++){
     let newDay=monthDate.clone().add(i,'days');
     daysInMonth.push(newDay); 
 }
     return daysInMonth

}
