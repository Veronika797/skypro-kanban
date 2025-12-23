import { getTasks } from "../services/posts";
import { useEffect, useState } from "react";
import { TaskContext } from "../context/TaskContext";

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
      value={{ allCards, setAllCards, loading, setLoading }}
    >
      {children}
    </TaskContext.Provider>
  );
};
