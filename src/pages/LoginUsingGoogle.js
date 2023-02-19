import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const LoginUsingGoogle = () => {
  return (
    <div>
      <h1>Login Using Google</h1>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          alert(JSON.stringify(credentialResponse));
        }}
        onError={(err) => {
          alert(JSON.stringify(err));
        }}
      />
    </div>
  );
};

export default LoginUsingGoogle;
