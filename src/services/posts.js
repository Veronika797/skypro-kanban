import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/kanban";

axios.defaults.headers.post["Content-Type"] = "";

export async function getTasks() {
  const { data } = await axios(API_URL);
  return data;
}

export async function addTasks(body) {
  try {
    const { data } = await axios.post(API_URL, body);
    return data.tasks;
  } catch (error) {
    console.error(
      "Ошибка при добавлении задачи:",
      error.response?.data || error.message,
    );
    throw error;
  }
}

export async function updateTask(id, body) {
  try {
    const { data } = await axios.put(`${API_URL}/${id}`, body, {
      headers: {
        "Content-Type": "",
      },
    });
    return data.tasks;
  } catch (error) {
    console.error(
      "Ошибка при редактировании задачи:",
      error.response?.data || error.message,
    );
    throw error;
  }
}

export async function deleteTask(id) {
  try {
    const { data } = await axios.delete(`${API_URL}/${id}`);
    return data.tasks;
  } catch (error) {
    console.error(
      "Ошибка при удалении задачи:",
      error.response?.data || error.message,
    );
    throw error;
  }
}

export async function getTask(id) {
  const { data } = await axios(`${API_URL}/${id}`);
  return data;
}

export function setAuthHeader(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}
