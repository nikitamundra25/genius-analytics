import { RouteComponentProps } from "react-router";

export interface IredirectPath {
  path: string;
}

export interface IDefaultLayoutProps extends RouteComponentProps {
  redirectTo: (data: IredirectPath) => void;
  cookies: any;

}

export interface IDefaultLayoutState {
  isLoading: boolean;
  isAuthenticated: boolean;
  userDetails: {};
}

export interface IDefaultHeaderProps extends RouteComponentProps {
  profileInfoReducer?: {
    isLoading: boolean;
    profileInfo: any;
  };
  onLogoutFun: () => void;
}

export interface IDefaultHeaderState {}
