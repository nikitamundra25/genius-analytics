export interface IMonthPickerProps  {
    show: boolean;
    startDate: Date 
    handleClose : () => void;
    handleChange:(date:any) => void;
}