import React from "react";
import { Form, FormGroup,  Button } from "react-bootstrap";
import logo from "../../assets/img/logo150.png";
import video1 from "../../assets/img/video-login.mp4";
import { useAuth0 } from "@auth0/auth0-react";
const PasswordProtection = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <div className="app-body overflow-hidden">
        {/* <video autoPlay playsInline muted src={video} /> */}

        <div className="login-container">
          <video autoPlay muted loop className="login-video">
            <source src={video1} type="video/mp4" />
          </video>
          <div className="login-box">
            <div className="login-logo">
              <img src={logo} alt="" />
            </div>

            <h3 className="text-center login-title">
              Click on Login to access the website
            </h3>

            <Form>
              <FormGroup>
                <Button
                  className="btn btn-primary btn-block"
                  onClick={() => loginWithRedirect()}
                >
                  Log In
                </Button>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordProtection;
