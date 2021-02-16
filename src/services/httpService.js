import axios from "axios";
import { toast } from "react-toastify";
import { getJwt } from "./userService";

axios.defaults.headers.common["x-auth-token"] = getJwt && getJwt();

axios.interceptors.response.use(null, (error) => {
  if (error.response && error.response.status >= 403) {
    let errorMessage = "We are sorry, but unexpected error occurred :(";
    toast.error(errorMessage, {
      position: "top-center",
      autoClose: 3000,
    });
  }
  return Promise.reject(error);
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};
