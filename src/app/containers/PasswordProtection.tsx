import React, { useState } from "react";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import logo from "../../assets/img/logo150.png";
import video1 from "../../assets/img/video-login.mp4";

const PasswordProtection = () => {
  const [passcode, setPasscode] = useState("");
  const [cookies, setCookie] = useCookies(["token"]);
  const submit = (e: any) => {
    e.preventDefault();
    if (passcode ===  process.env.REACT_APP_APPLICATION_PASSCODE) {
      setCookie("token", cookies.AWSELB, {
        path: "/",
        expires: new Date(new Date().getTime() + 3600),
        maxAge: 3600,
      });
      window.location.reload();
    } else {
      toast.error("Invalid passcode.");
    }
  };
  return (
    <>
      <div className='app-body overflow-hidden'>
      {/* <video autoPlay playsInline muted src={video} /> */}
     
        <div className='login-container'>
          <video autoPlay muted loop className="login-video">
            <source src={video1} type="video/mp4" />
          </video>
          <div className='login-box'>
            <div className='login-logo'>
                <img
                  src={logo}
                  alt=''
                />
            </div>

            <h3 className='text-center login-title'>
              Enter Passcode to access the website
            </h3>
            
            <Form onSubmit={submit}>
              <FormGroup>
                <FormControl
                  type='password'
                  autoComplete='off'
                  placeholder='Enter passcode'
                  value={passcode}
                  onChange={(e: any) => setPasscode(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Button type='submit' block>
                  Confirm Passcode
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
