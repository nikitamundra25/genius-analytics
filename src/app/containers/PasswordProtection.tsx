import React, { useState } from "react";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

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
        <div className='login-container'>
          <div className='login-box'>
            <br />
            <h3 className='text-center'>
              Enter Passcode to access the website
            </h3>
            <br />
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
