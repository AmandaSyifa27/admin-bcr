import SigninImage from "../assets/SigninImg.png";
import React, { useState } from "react";
import "../styles/SigninStyle.css";
import { useLocation, useNavigate } from "react-router-dom";
import APIAuth from "../apis/APIAuth";
import { Alert } from "react-bootstrap";
import Logo from "../assets/Logo.png";
import SigninImg from "../assets/SigninImg.png";

const SignIn = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  // const [alert, setAlert] = useState(false);
  const [alertFail, setAlertFail] = useState(false);

  // if (alert) {
  //   return (
  //     <Alert
  //       style={{ width: "500px", float: "right" }}
  //       show={alert}
  //       variant="success"
  //       onClose={() => setAlert(false)}
  //       dismissible
  //     >
  //       <p>Successfully logged in</p>
  //     </Alert>
  //   );
  // }
  // if (alertFail) {
  //   return (
  //     <Alert
  //       style={{ width: "500px", float: "right" }}
  //       show={alertFail}
  //       variant="danger"
  //       onClose={() => setAlertFail(false)}
  //       dismissible
  //     >
  //       <small>Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital.</small>
  //     </Alert>
  //   );
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      await APIAuth.login(Object.fromEntries(formData));
      // setAlert(true);
      let returnTo = "/";
      const params = new URLSearchParams(search);
      const redirectTo = params.get("return_To");
      if (redirectTo) returnTo += `${redirectTo}`;
      setTimeout(() => {
        navigate(returnTo);
      }, 3000);
      // navigate(returnTo);
    } catch (error) {
      setAlertFail(true);
      return null;
    }
  };

  return (
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
                <input className="inpt" type="password" name="password" placeholder="6+ karakter" />
              </div>
              <button className="sign-in" type="submit">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
