import { Route, Routes } from "react-router-dom";
import Page404 from "./pages/Page404/Page404";
import PageReg from "./pages/PageReg/PageReg";
import PageLogin from "./pages/PageLogin/PageLogin";
import PageAddNewTask from "./pages/PageAddNewTask/PageAddNewTask";
import PageEditCard from "./pages/PageEditCard/PageEditCard";
import MainPage from "./components/MainPage";
import PageLogout from "./pages/PageLogout/PageLogout";
import PrivateRoute from "./PrivateRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<MainPage />}>
          <Route path="/add-task" element={<PageAddNewTask />} />
          <Route path="/card/:id" element={<PageEditCard />} />
          <Route path="/exit" element={<PageLogout />} />
        </Route>
      </Route>
      <Route path="/login" element={<PageLogin />} />
      <Route path="/register" element={<PageReg />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default AppRoutes;
