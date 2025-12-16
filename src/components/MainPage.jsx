import { Outlet } from "react-router";
import Header from "./Header/Header";
import Main from "./Main/Main";

function MainPage({ loading }) {
  return (
    <div>
      <Header loading={loading} />
      <Main loading={loading} />
      <Outlet />
    </div>
  );
}

export default MainPage;
