import React, { Component } from 'react';
import { AppSidebarToggler } from '@coreui/react';
import {
  IDefaultHeaderProps,
  IDefaultHeaderState,
  IRootState,
} from '../../../interfaces';
import { Nav, Dropdown } from 'react-bootstrap';
import { AppRoutes } from '../../../config';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from './../../../assets/img/logo150.png';
import { LogOutRequest } from '../../../actions';
import { Dispatch } from 'redux';

class DefaultHeader extends Component<
  IDefaultHeaderProps,
  IDefaultHeaderState
> {
  render() {
    // let profileInfo: IProfileInfo = {
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    // };
    // if (this.props.profileInfoReducer) {
    //   profileInfo = this.props.profileInfoReducer.profileInfo;
    // }
    return (
      <React.Fragment>
        <AppSidebarToggler className='d-lg-none' display='md' mobile />
        <div className='brand-logo'>
          <img src={logo} width={120} alt='' />
        </div>
        <AppSidebarToggler className='d-md-down-none' display='lg' />
        <Nav className='ml-auto navbar-nav' navbar-nav>
          
          {/* <Nav.Link href="#link"><span className="icon"><i className="icon-magnifier"/></span></Nav.Link>
          <Nav.Link href="#home">
            <span className="icon"><i className="icon-bell"/></span>
            <span className="count">2</span>
          </Nav.Link> */}
          <Dropdown className="user-dropdown">
          <Dropdown.Toggle variant="success" id="dropdown-basic1">
            <div className="user-info">
              <span className="user-icon"><i className="fa fa-user"/></span>
              <span className="user-name">John Doe</span>
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu>
              <Dropdown.Item>
                  <Link to={AppRoutes.HOME}>
                    <i className='fa fa-user' /> Profile
                  </Link>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => this.props.onLogout()}>
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
  }
}

const mapStateToProps: any = (state: IRootState) => ({
  profileInfoReducer: state.profileInfoReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onLogout: () => {
      dispatch(LogOutRequest());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DefaultHeader);
