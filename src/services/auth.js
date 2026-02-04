import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api";

export function setAuthToken(token) {
  if (token) {
    localStorage.setItem("token", token);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
  }
}

export function getAuthToken() {
  return localStorage.getItem("token");
}

export function clearAuthToken() {
  localStorage.removeItem("token");
  delete axios.defaults.headers.common["Authorization"];
}

export async function reg(body) {
  const { data } = await axios.post(`${API_URL}/user`, body, {
    headers: {
      "Content-Type": "",
    },
  });
  return data;
}

export async function login(body) {
  const { data } = await axios.post(`${API_URL}/user/login`, body, {
    headers: {
      "Content-Type": "",
    },
  });
  return data;
}
