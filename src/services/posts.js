import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api";

axios.defaults.headers.post["Content-Type"] = "";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

export async function getTasks() {
  const { data } = await axios(`${API_URL}/kanban`);
  return data;
}

export async function addTasks(body) {
  try {
    const { data } = await axios.post(`${API_URL}/kanban`, body);
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
    const { data } = await axios.put(`${API_URL}/kanban/${id}`, body, {
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
    const { data } = await axios.delete(`${API_URL}/kanban/${id}`);
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
  const { data } = await axios(`${API_URL}/kanban/${id}`);
  return data;
}
