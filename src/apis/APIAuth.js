import axiosInstance from "../configs/axiosInstance";
import Auth from "../utils/Auth";

const APIAuth = {
  login: async ({ email, password }) => {
    try {
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
      Auth.storeUserInfoToCookies(response.data.acces_token);
      // Auth.getAccesToken(response.headers);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default APIAuth;
