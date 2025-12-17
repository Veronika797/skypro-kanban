import axios from "axios";

export async function reg(body) {
  const { data } = await axios.post(
    "https://wedev-api.sky.pro/api/user",
    body,
    {
      headers: {
        "Content-Type": "",
      },
    }
  );
  return data;
}

export async function login(body) {
  const { data } = await axios.post(
    "https://wedev-api.sky.pro/api/user/login",
    body,
    {
      headers: {
        "Content-Type": "",
      },
    }
  );
  return data;
}
