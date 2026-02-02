import { getTasks } from "../services/posts";
import { useEffect, useState } from "react";
import { TaskContext } from "../context/TaskContext";

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

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      getTasks()
        .then((data) => {
          setAllCards(data.tasks);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    };

    fetchData();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        allCards,
        setAllCards,
        loading,
        setLoading,
        dictionary: {
          categories: MOCK_CATEGORIES,
          columnsData: MOCK_COLUMNS
        }
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
