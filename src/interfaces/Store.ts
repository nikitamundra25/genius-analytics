import { ILoginModal } from './Login';
import { IChangePasswordModal, IProfileModal } from './Profile';
import { IUserModel } from './User';
import { ITemplateModal } from './EmailTemplate';
import { IFaqModel } from './FAQ';
import { IDashboardMainModel } from './Dashboard';
import { IPickupModel } from './Pickup';

export interface ImainState {
  showLoader: boolean;
}

export interface IRootState {
  loginReducer: ILoginModal;
  profileInfoReducer: IProfileModal;
  mainReducer: ImainState;
  changePasswordReducer: IChangePasswordModal;
  userReducer: IUserModel;
  TemplateReducer:ITemplateModal;
  ProxyLoginReducer:ILoginModal;
  homePageReducer:ILoginModal;
  faqReducer:IFaqModel;
  DashboardReducer: IDashboardMainModel;
  PickupReducer: IPickupModel;
}
