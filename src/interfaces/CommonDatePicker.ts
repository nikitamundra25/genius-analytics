export interface IMonthPickerProps  {
    show: boolean;
    startDate: Date | undefined
    handleClose : () => void;
    handleChange:(date:any) => void;
}