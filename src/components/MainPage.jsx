import { Outlet } from "react-router";
import Header from "./header/Header";
import Main from "./main/Main";

function MainPage({ loading }) {
  return (
    <div>
      <Header />
      <Main loading={loading} />
      <Outlet />
    </div>
  );
}

export default MainPage;
