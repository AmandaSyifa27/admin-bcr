import Cookies from "js-cookie";

const Auth = {
  isAuthorization: () => {
    const token = Cookies.get("token");
    if (token) return true;
    return null;
  },
  getAccesToken: () => Cookies.get("token"),
  logOut: () => {
    Cookies.remove("token");
  },
  storeUserInfoToCookies: (token) => {
    if (token) Cookies.set("token", token);
    return null;
  },
};

export default Auth;
