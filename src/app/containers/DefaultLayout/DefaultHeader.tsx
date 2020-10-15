import React from "react";
import { AppSidebarToggler } from "@coreui/react";
import {
  IDefaultHeaderProps,
} from "../../../interfaces";
import { Nav, Dropdown } from "react-bootstrap";
import logosmall from "./../../../assets/img/logosmall.png";
import { useAuth0 } from "@auth0/auth0-react";

const DefaultHeader = (props: IDefaultHeaderProps | any) => {

  const { logout, user } = useAuth0();

  return (
    <React.Fragment>
      <AppSidebarToggler className="d-lg-none" display="md" mobile />
      <AppSidebarToggler className="d-md-down-none" display="lg" />
      <div className="center-logo">
        <img src={logosmall} alt="" />
      </div>
      <Nav className="ml-auto navbar-nav" navbar-nav={""}>
        <Dropdown className="user-dropdown">
          <Dropdown.Toggle variant="success" id="dropdown-basic1">
            <div className="user-info">
              <span className="user-icon">
                {user && user.picture ? (
                  <img
                    src={user.picture}
                    width="40px"
                    height="40px"
                    className="rounded-circle"
                    alt=""
                  />
                ) : (
                  <i className="fa fa-user" />
                )}
              </span>
              <span className="user-name text-capitalize">
                {user && user.nickname ? user.nickname : "John Doe"}{" "}
              </span>
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() =>
                logout({
                  returnTo: window.location.origin,
                })
              }
            >
              <i className="fa fa-lock" /> Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </React.Fragment>
  );
};

export default DefaultHeader;
