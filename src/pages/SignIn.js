import React, { useState } from "react";
import "../styles/SigninStyle.css";
import { useLocation, useNavigate } from "react-router-dom";
import APIAuth from "../apis/APIAuth";
import { Alert } from "react-bootstrap";
import Logo from "../assets/Logo.png";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { message } from "antd";

const SignIn = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const [alertFail, setAlertFail] = useState(false);
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      await APIAuth.login(Object.fromEntries(formData));
      let returnTo = "/";
      const params = new URLSearchParams(search);
      const redirectTo = params.get("return_To");
      if (redirectTo) returnTo += `${redirectTo}`;
      message.success("Logged in");
      navigate(returnTo);
    } catch (error) {
      setAlertFail(true);
      return null;
    }
  };

  return (
    <>
      {contextHolder}
      <div className="container-signin" data-testid="signin-test">
        <div className="div-form"></div>
        <div className="div-text">
          <div className="signBox">
            <div className="logo">
              <img src={Logo} alt="" className="rectangle" />
            </div>
            <div className="header">
              <h1>Welcome, Admin BCR</h1>
            </div>
            <Alert
              style={{ width: "auto", float: "right" }}
              show={alertFail}
              variant="danger"
              onClose={() => setAlertFail(false)}
              dismissible
            >
              <small>Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital.</small>
            </Alert>
            <div className="login">
              <form onSubmit={handleSubmit}>
                <div className=" input login-email">
                  <label>Email</label>
                  <input className="inpt" type="email" name="email" placeholder="Contoh: johndee@gmail.com" />
                </div>
                <div className=" input login-pass">
                  <label>Password</label>
                  {/* <Input.Password
                    className="inpt"
                    type="password"
                    name="password"
                    placeholder="6+ karakter"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  /> */}
                  <Input.Password
                    className="text-lg rounded-xl border mt-2 p-2 focus:bg-indigo-50"
                    type="password"
                    name="password"
                    placeholder="6+ Karakter"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    style={{ borderRadius: "5px" }}
                  />
                </div>
                <button className="sign-in" type="submit">
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
