export type ToggleType = "graph" | "grid" ;
export interface IGraphListsModel {
  name: string;
  id: string | number;
  date?: Date
}
export interface IDashboardWidgetProps {
  graphList: IGraphListsModel[];
  date?: Date|any
}
export interface IWidgetHeaderProps {
  title: string;
  activeToggle?: ToggleType;
  showToggle?: boolean;
  showdropdowndaily?: boolean;
  showdropdownlead?: boolean;
  // onToggle?: (activeToggle?: any) => void  | any
  handleChange?: (data:any)=> void;
  selectedMonthlyData?:string 
}
