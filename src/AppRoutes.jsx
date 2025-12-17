import { Route, Routes } from "react-router";
import Page404 from "./pages/Page404/Page404";
import PageReg from "./pages/PageReg/PageReg";
import PageLogin from "./pages/PageLogin/PageLogin";
import PageAddNewTask from "./pages/PageAddNewTask/PageAddNewTask";
import PageEditCard from "./pages/PageEditCard/PageEditCard";
import MainPage from "./components/MainPage";
import PageLogout from "./pages/PageLogout/PageLogout";
import { useEffect, useState } from "react";
import PrivateRoute from "./PrivateRoute";

function AppRoutes() {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(() => {
    const storageAuth = localStorage.getItem("token");
    return storageAuth ? true : false;
  });

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    fetchData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage loading={loading} />}>
          <Route path="/add-task" element={<PageAddNewTask />} />
          <Route path="/card/:id" element={<PageEditCard />} />
          <Route path="/exit" element={<PageLogout setIsAuth={setIsAuth} />} />
        </Route>
      </Route>
      <Route path="/login" element={<PageLogin setIsAuth={setIsAuth} />} />
      <Route path="/register" element={<PageReg setIsAuth={setIsAuth} />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default AppRoutes;
