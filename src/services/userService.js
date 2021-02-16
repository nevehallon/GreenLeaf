import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { apiUrl } from "../config.json";
import httpService from "../services/httpService";

let tokenKey = "localData";

export const getJwt = () => {
  let hasLocalData = localStorage.getItem(tokenKey);
  const localData = hasLocalData && JSON.parse(localStorage.getItem(tokenKey));
  return hasLocalData && localData.token;
};

export function getCurrentUser() {
  try {
    const localData = JSON.parse(localStorage.getItem(tokenKey));
    return { ...jwtDecode(localData.token), name: localData.name };
  } catch (error) {
    return null;
  }
}

export async function login({ email, password }) {
  const { data } = await httpService.post(`${apiUrl}/auth`, { email, password });
  if (!data.isBiz) {
    toast.success(`Logging in...`, {
      position: "top-center",
      autoClose: 2000,
    });
  }

  localStorage.setItem(tokenKey, JSON.stringify(data));
}

export async function logout() {
  localStorage.removeItem(tokenKey);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
  logout,
  getCurrentUser,
  getJwt,
};
