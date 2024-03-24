import axios from "axios";

export const getToken = () => localStorage.getItem("token");

export const setToken = (token) => {
  localStorage.setItem("token", token);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const removeToken = () => {
  localStorage.removeItem("token");
  delete axios.defaults.headers.common["Authorization"];
};
