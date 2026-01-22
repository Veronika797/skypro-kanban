import { getTasks } from "../services/posts";
import { useEffect, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { MOCK_CATEGORIES, MOCK_COLUMNS } from "../mock/Mock";

export const MOCK_DICTIONARY = {
  categories: MOCK_CATEGORIES,
  columnsData: MOCK_COLUMNS,
};

export const TaskProvider = ({ children }) => {
  const [allCards, setAllCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getTasks();
        setAllCards(data.tasks);
      } catch (error) {
        console.error("Ошибка загрузки задач:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const refreshTasks = async () => {
    try {
      const data = await getTasks();
      setAllCards(data.tasks);
    } catch (error) {
      console.error("Ошибка обновления задач:", error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        allCards,
        setAllCards,
        loading,
        setLoading,
        dictionary: MOCK_DICTIONARY,
        refreshTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
