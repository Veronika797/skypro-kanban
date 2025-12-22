import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

export async function getTasks() {
  const { data } = await axios("https://wedev-api.sky.pro/api/kanban");
  return data;
}

export async function addTasks(body) {
  try {
    const { data } = await axios.post(
      "https://wedev-api.sky.pro/api/kanban",
      body
    );
    return data.tasks;
  } catch (error) {
    console.error(
      "Ошибка при добавлении задачи:",
      error.response?.data || error.message
    );
    throw error;
  }
}

export async function updateTask(id, body) {
  try {
    const { data } = await axios.put(
      "https://wedev-api.sky.pro/api/kanban/" + id,
      body,
      {
        headers: {
          "Content-Type": "",
        },
      }
    );
    return data.tasks;
  } catch (error) {
    console.error(
      "Ошибка при редактировании задачи:",
      error.response?.data || error.message
    );
    throw error;
  }
}

export async function deleteTask(id) {
  try {
    const { data } = await axios.delete(
      "https://wedev-api.sky.pro/api/kanban/" + id
    );
    return data.tasks;
  } catch (error) {
    console.error(
      "Ошибка при удалении задачи:",
      error.response?.data || error.message
    );
    throw error;
  }
}

export async function getTask(id) {
  const { data } = await axios("https://wedev-api.sky.pro/api/kanban/" + id);
  return data;
}
