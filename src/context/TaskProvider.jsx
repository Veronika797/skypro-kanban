import {
  getTasks,
  addTasks,
  updateTask,
  deleteTask,
  getTask,
  setAuthHeader,
} from "../services/posts";
import { useEffect, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { getAuthToken } from "../services/auth";

const MOCK_CATEGORIES = [
  { id: 1, name: "Учеба", className: "orange" },
  { id: 2, name: "Здоровье", className: "green" },
  { id: 3, name: "Отдых", className: "purple" },
  { id: 4, name: "Спорт", className: "blue" },
  { id: 5, name: "Проект", className: "pink" },
  { id: 6, name: "Путешествия", className: "yellow" },
];

const MOCK_COLUMNS = [
  { title: "Без статуса", status: "no-status", className: "yellow" },
  { title: "Нужно сделать", status: "to-do", className: "purple" },
  { title: "В работе", status: "in-progress", className: "blue" },
  { title: "Тестирование", status: "testing", className: "orange" },
  { title: "Готово", status: "done", className: "green" },
];

export const TaskProvider = ({ children }) => {
  const [allCards, setAllCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const token = getAuthToken();
      if (token) {
        setAuthHeader(token);
      }
      const data = await getTasks();
      setAllCards(data.tasks);
    } catch (error) {
      console.error("Ошибка при загрузке задач:", error);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (taskData) => {
    try {
      const updatedTasks = await addTasks(taskData);
      setAllCards(updatedTasks);
      return updatedTasks;
    } catch (error) {
      console.error("Ошибка при добавлении задачи:", error);
      throw error;
    }
  };

  const updateTaskById = async (id, taskData) => {
    try {
      const updatedTasks = await updateTask(id, taskData);
      setAllCards(updatedTasks);
      return updatedTasks;
    } catch (error) {
      console.error("Ошибка при обновлении задачи:", error);
      throw error;
    }
  };

  const deleteTaskById = async (id) => {
    try {
      const updatedTasks = await deleteTask(id);
      setAllCards(updatedTasks);
      return updatedTasks;
    } catch (error) {
      console.error("Ошибка при удалении задачи:", error);
      throw error;
    }
  };

  const fetchTaskById = async (id) => {
    try {
      const task = await getTask(id);
      return task;
    } catch (error) {
      console.error("Ошибка при получении задачи:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        allCards,
        setAllCards,
        loading,
        setLoading,
        fetchTasks,
        addTask,
        updateTaskById,
        deleteTaskById,
        fetchTaskById,
        dictionary: {
          categories: MOCK_CATEGORIES,
          columnsData: MOCK_COLUMNS,
        },
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
