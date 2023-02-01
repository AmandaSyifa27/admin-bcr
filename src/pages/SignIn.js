import SigninImage from "../assets/SigninImg.png";
import React, { useState } from "react";
import "../styles/SigninStyle.css";
import { useLocation, useNavigate } from "react-router-dom";
import APIAuth from "../apis/APIAuth";
import { Alert } from "react-bootstrap";

const SignIn = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const [alert, setAlert] = useState(false);
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
      setAlert(true);
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
    <div className="signin">
      {/* <div className='signin-img'>
            <img src={SigninImage} alt='SigninImg' />
        </div> */}
      <div className="signin-form">
        <svg width="100" height="34" viewBox="0 0 100 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="34" fill="#CFD4ED" />
        </svg>
        <h2>Welcome, Admin BCR</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" name="email" placeholder="Contoh: johndee@gmail.com" />
          <label>Password</label>
          <input type="password" name="password" placeholder="6+ karakter" />
          <button type="submit">Sign In</button>
          <Alert
            style={{ width: "500px", float: "right" }}
            show={alertFail}
            variant="danger"
            onClose={() => setAlertFail(false)}
            dismissible
          >
            <small>Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital.</small>
          </Alert>
          <Alert
            style={{ width: "500px", float: "right" }}
            show={alert}
            variant="success"
            onClose={() => setAlert(false)}
            dismissible
          >
            <small>Successfully logged in</small>
          </Alert>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
