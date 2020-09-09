import React from "react";
import { AppSidebarToggler } from "@coreui/react";
import {
  IDefaultHeaderProps,
  // IDefaultHeaderState,
} from "../../../interfaces";
import { Nav, Dropdown } from "react-bootstrap";
import { useCookies } from "react-cookie";
import logosmall from "./../../../assets/img/logosmall.png";


// class DefaultHeader extends Component<
//   IDefaultHeaderProps|any,
//   IDefaultHeaderState
// > {
  const DefaultHeader = (props:IDefaultHeaderProps|any)=> {
  const [ cookies,setCookie] = useCookies(["token"]);

 const onLogout = () => {
    setCookie("token", cookies.AWSELB, {
      path: "/",
      expires: new Date(new Date().getTime() )
    });
    window.location.reload();
  }



  // render() {
    return (
      <React.Fragment>
        <AppSidebarToggler className='d-lg-none' display='md' mobile />
        <AppSidebarToggler className='d-md-down-none' display='lg' />
          <div className='center-logo'>
              <img
                src={logosmall}
                alt=''
              />
          </div>
        <Nav className='ml-auto navbar-nav' navbar-nav={""}>
          <Dropdown className='user-dropdown'>
            <Dropdown.Toggle variant='success' id='dropdown-basic1'>
              <div className='user-info'>
                <span className='user-icon'>
                  <i className='fa fa-user' />
                </span>
                <span className='user-name'>John Doe</span>
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => onLogout()}>
                <i className='fa fa-lock' /> Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* <AppHeaderDropdown direction='down'>
            <Dropdown className="header-menu-dropdown">
              <Dropdown.Toggle id='dropdown-basic'>
                <img
                  src={UserIcon}
                  className='img-avatar menu'
                  alt='superadmin@hogwork.com'
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href='#/action-1'>
                  <strong>
                    {profileInfo && Object.entries(profileInfo).length
                      ? [profileInfo.firstName, profileInfo.lastName].join(' ')
                      : ''}
                  </strong>
                  <br />
                  <strong>{profileInfo ? profileInfo.email : ''}</strong>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to={AppRoutes.MY_PROFILE}>
                    <i className='fa fa-user' /> Profile
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => this.props.onLogout()}>
                  <i className='fa fa-lock' /> Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </AppHeaderDropdown> */}
        </Nav>
      </React.Fragment>
    );
  // }
}


export default DefaultHeader;
