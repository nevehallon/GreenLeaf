import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { apiUrl } from "../config.json";
import httpService from "../services/httpService";

export function getCurrentUser() {
  try {
    const localData = JSON.parse(localStorage.getItem("localData"));
    return { ...jwtDecode(localData.token), name: localData.name };
  } catch (error) {
    return null;
  }
}

export async function login({ email, password }) {
  console.log(email, password);
  const { data } = await httpService.post(`${apiUrl}/auth`, { email, password });
  console.log(data);
  toast.success(`Logging in...`, {
    position: "top-center",
    autoClose: 2000,
  });

  localStorage.setItem("localData", JSON.stringify(data));
}

export async function logout() {
  localStorage.removeItem("localData");
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
  logout,
  getCurrentUser,
};
