export type ToggleType = "graph" | "grid";
export interface IGraphListsModel {
  name: string;
  id: string | number;
}
export interface IDashboardWidgetProps {
  graphList: IGraphListsModel[];
}
export interface IWidgetHeaderProps {
  title: string;
  activeToggle?: ToggleType;
  showToggle?: boolean;
  showdropdowndaily?: boolean;
  showdropdownlead?: boolean;
  
  onToggle?: (activeToggle?: ToggleType) => void;
}
