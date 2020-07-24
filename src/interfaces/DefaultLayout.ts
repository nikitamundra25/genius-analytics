import { RouteComponentProps } from 'react-router';

export interface IredirectPath {
  path: string;
}

export interface IDefaultLayoutProps extends RouteComponentProps {
  redirectTo: (data: IredirectPath) => void;
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
  onLogout: () => void;
}

export interface IDefaultHeaderState {}
