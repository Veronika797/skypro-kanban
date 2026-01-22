import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api";

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

export async function getUser() {
  const token = localStorage.getItem("token");
  const { data } = await axios.get(`${API_URL}/user`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data.user;
}
